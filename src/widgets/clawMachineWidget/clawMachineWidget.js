import { widgetHtmlService, QrCodeModal, localStorageService } from '@/services';
import './styles.css';

class ClawMachineWidget {
  constructor() {
    this.startClawMachine();
  }

  startClawMachine() {
    this.config = localStorageService.getDefaultConfig();
    this.createContainer();
    this.clawDiv = document.querySelector('.claw-div');
    this.chainDiv = document.querySelector('.chain-div');
    this.clawDivPosition = { top: 0, left: 0 };
    this.setupClickHandler();
    this.animationInProgress = false; // Use a separate flag for animation

    // Store an array of grabbable present divs
    this.clawPresentDivs = document.querySelectorAll('.claw-present-div');

    // Initialize flags for each present div
    this.isHoldingclawPresentDivs = Array(this.clawPresentDivs.length).fill(false);
    this.shouldContinueAutomaticClawMovement = true;
    this.startAutomaticClawMovement();
    this.direction = -1;
    this.clawPosition = 0;
    this.setupControlButton();
  }

  setupControlButton() {
    // Create a button element
    const controlButton = document.createElement('button');
    controlButton.innerText = 'Get a prize';
    controlButton.classList.add('boomio-control-button');

    // Apply CSS for the button's appearance
    controlButton.style.position = 'fixed';
    controlButton.style.zIndex = 9999999999999999999;
    controlButton.style.bottom = '50%';
    controlButton.style.left = '50%';
    controlButton.style.transform = 'translate(-50%, -50%)';
    controlButton.style.width = '100px';
    controlButton.style.height = '100px';
    controlButton.style.borderRadius = '50%';
    controlButton.style.backgroundColor = 'red';
    controlButton.style.color = 'white';
    controlButton.style.fontSize = '16px';
    controlButton.style.cursor = 'pointer';
    controlButton.setAttribute('id', 'boomio-control-button');

    // Add a click event listener to trigger the claw's grabbing action
    controlButton.addEventListener('click', () => {
      this.activateGrabbing();
    });

    // Append the button to the document body
    document.body.appendChild(controlButton);
  }

  activateGrabbing() {
    if (this.animationInProgress || this.isHoldingclawPresentDivs.some((held) => held)) {
      return;
    }
    const buttonElement = document.querySelector('.boomio-control-button');

    buttonElement.style.pointerEvents = 'none';

    this.animationInProgress = true;
    this.shouldContinueAutomaticClawMovement = false;
    // Add your logic to move the claw down here
    this.clawDiv.style.transition = 'top 1s';

    const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

    this.clawDiv.style.top = `calc(100vh - ${isMobile ? '110px' : '110px'})`;
    this.chainDiv.style.transition = 'height 1s, transform 1s';
    this.chainDiv.style.height = `calc(100vh - ${isMobile ? '110px' : '110px'})`;

    setTimeout(() => {
      this.clawPresentDivs.forEach((clawPresentDiv, index) => {
        const clawDivRect = this.clawDiv.getBoundingClientRect();
        const clawPresentDivRect = clawPresentDiv.getBoundingClientRect();

        if (
          clawDivRect.left < clawPresentDivRect.right &&
          clawDivRect.right > clawPresentDivRect.left &&
          clawDivRect.top < clawPresentDivRect.bottom
        ) {
          if (!this.isHoldingclawPresentDivs[index]) {
            if (this.clawDiv.contains(clawPresentDiv)) {
              this.clawDiv.removeChild(clawPresentDiv);
            }
            this.isHoldingclawPresentDivs[index] = true;

            clawPresentDiv.style.transition = 'top 0s';
            clawPresentDiv.style.top = '10px';
            clawPresentDiv.style.left = '10px';
            this.clawDiv.appendChild(clawPresentDiv);
            this.gameTimer = setTimeout(() => {
              setTimeout(() => {
                this.clawDiv.removeChild(clawPresentDiv);
                this.isHoldingclawPresentDivs[index] = false;
              }, 1000);

              this.endGame(index);
            }, 1000);
          }
        }
      });

      setTimeout(() => {
        setTimeout(() => {
          const buttonElement = document.querySelector('.boomio-control-button');
          if (buttonElement) {
            buttonElement.style.pointerEvents = 'auto';
          }
        }, 600);
        this.clawDiv.style.transition = 'top 1s';
        this.clawDiv.style.top = '50px';

        this.chainDiv.style.transition = 'height 1s, transform 1s';
        this.chainDiv.style.height = '50px';
        this.chainDiv.style.transform = 'translateY(0)';
        setTimeout(() => {
          this.animationInProgress = false;
          this.shouldContinueAutomaticClawMovement = true;
          this.startAutomaticClawMovement();
        }, 1000);
      }, 600);
    }, 1000);
  }
  startAutomaticClawMovement() {
    const clawSpeed = 8; // Adjust the speed as needed
    const maxX = window.innerWidth - this.clawDiv.clientWidth;

    const moveClaw = () => {
      // Check if automatic movement should continue
      if (!this.shouldContinueAutomaticClawMovement) {
        return;
      }

      this.clawPosition += this.direction * clawSpeed; // Update the stored claw position

      // Ensure the claw stays within the screen boundaries
      if (this.clawPosition >= maxX) {
        this.clawPosition = maxX;
        this.direction = -1; // Reverse direction when reaching the right edge
      } else if (this.clawPosition <= 0) {
        this.clawPosition = 0;
        this.direction = 1; // Reverse direction when reaching the left edge
      }

      // Update the claw's position
      this.clawDiv.style.left = `${this.clawPosition}px`;

      // Update the chain's position to move together with the claw
      const chainDivLeft = this.clawPosition + this.clawDiv.clientWidth / 2;
      this.chainDiv.style.left = `${chainDivLeft}px`;

      // Schedule the next movement
      setTimeout(moveClaw, 50); // Adjust the delay as needed for the desired speed
    };

    // Start the automatic movement
    moveClaw();
  }
  createContainer = () => {
    const clawMachineContainer = document.createElement('div');
    clawMachineContainer.setAttribute('id', 'clawMachine-container');
    clawMachineContainer.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );

    const clawLineDiv = document.createElement('div');
    clawLineDiv.classList.add('claw-line-div');

    // Set the width of the line div
    clawLineDiv.style.width = '100%'; // Set it to 100% to cover the entire container

    // Initially, position the line div 100px above the top of the viewport using transform
    clawLineDiv.style.transform = 'translateY(100px)';
    clawLineDiv.style.transition = 'transform 1s ease-in-out'; // Add a smooth transition effect for transform

    // Append the line div to the container
    clawMachineContainer.appendChild(clawLineDiv);

    // Calculate the width of the line div
    const lineWidth = window.innerWidth;
    const presentSpacing = 20; // Adjust as needed
    const presentWidth = 50; // Adjust as needed
    function isMobile() {
      const mobileThreshold = 768; // You can adjust this threshold as needed

      return window.innerWidth <= mobileThreshold;
    }

    let numberOfPresents;
    let presentColors;

    if (isMobile()) {
      numberOfPresents = 7;
    } else {
      numberOfPresents = 2;
    }

    // Array to store present positions
    const presentPositions = [];
    for (let i = 0; i < numberOfPresents; i++) {
      const clawPresentDiv = document.createElement('div');
      clawPresentDiv.classList.add('claw-present-div');

      let leftPosition;
      let attempts = 0;
      const maxAttempts = 100; // Maximum number of attempts to find a non-colliding position
      let collision;
      // Position the present randomly, avoiding collisions
      do {
        leftPosition = Math.random() * (lineWidth - presentWidth - 25);
        // Check for collisions with existing presents
        collision = presentPositions.some(
          (pos) => Math.abs(leftPosition - pos) < presentWidth + presentSpacing,
        );

        attempts++;

        // If too many attempts are made, skip this present
        if (attempts > maxAttempts) {
          console.warn(`Skipped present ${i} after ${attempts} attempts.`);
          break;
        }
      } while (collision);

      // If a valid position was found, add the present
      if (attempts <= maxAttempts) {
        presentPositions.push(leftPosition);

        clawPresentDiv.style.left = `${leftPosition}px`;
        clawPresentDiv.style.bottom = `${Math.random() * 15 + 25}px`;
        clawPresentDiv.style.backgroundColor = 'orange';

        clawLineDiv.appendChild(clawPresentDiv);
      }
    }

    // Create the existing Claw div
    const clawDiv = document.createElement('div');
    clawDiv.classList.add('claw-div');

    clawDiv.style.transform = 'translateY(-100px)';
    clawDiv.style.transition = 'transform 1s ease-in-out'; // Add a smooth transition effect for transform

    clawMachineContainer.appendChild(clawDiv);

    const chainDiv = document.createElement('div');
    chainDiv.classList.add('chain-div');

    // Set initial position of the chain div
    chainDiv.style.transform = 'translateY(-100px)'; // Adjust the initial position as needed
    chainDiv.style.transition = 'transform 1s ease-in-out'; // Add a smooth transition effect for transform

    clawMachineContainer.appendChild(chainDiv);

    setTimeout(() => {
      clawDiv.style.transform = 'translateY(0)';
      clawLineDiv.style.transform = 'translateY(0)';
      chainDiv.style.transform = 'translateY(0)';
    }, 100);

    widgetHtmlService.container.appendChild(clawMachineContainer);
  };

  setupClickHandler() {}

  endGame = () => {
    const buttonElement = document.querySelector('.boomio-control-button');
    if (buttonElement && buttonElement.parentNode) {
      buttonElement.parentNode.removeChild(buttonElement);
    }

    setTimeout(() => {
      const element = document.getElementById('clawMachine-container');
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        new QrCodeModal();
      }
    }, 700);
  };
}

export default () => {
  new ClawMachineWidget();
};
