import { widgetHtmlService, QrCodeModal, localStorageService } from '@/services';
import './styles.css';
import {
  clawImg,
  chainImg,
  buttonImg,
  ClawLineImg,
  clawRelease,
  clawPick,
  GiftOne,
  GiftTwo,
  ClawLineBackground,
  GifTwo,
  clawClosed,
  GiftOpened,
  ClawClose,
  ClawButton,
  ButtonBackground,
} from './constants';

class ClawMachineWidget {
  constructor() {
    this.preloadImages().then(() => {
      this.startClawMachine();
    });
  }

  async preloadImages() {
    const imageUrls = [
      clawImg,
      chainImg,
      buttonImg,
      ClawLineImg,
      clawRelease,
      clawPick,
      GiftOne,
      GiftTwo,
      ClawLineBackground,
      GifTwo,
      clawClosed,
      GiftOpened,
      ClawClose,
      ClawButton,
      ButtonBackground,
    ];

    const imagePromises = imageUrls.map((imageUrl) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    try {
      await Promise.all(imagePromises);
      console.log('All images preloaded successfully.');
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  }

  startClawMachine() {
    this.isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

    this.config = localStorageService.getDefaultConfig();
    this.createContainer();
    this.clawDiv = document.querySelector('.claw-div');
    this.chainDiv = document.querySelector('.chain-div');
    this.clawDivPosition = { top: 0, left: 0 };
    this.animationInProgress = false; // Use a separate flag for animation
    this.clawPresentDiv = null;
    // Store an array of grabbable present divs
    this.clawPresentDivs = document.querySelectorAll('.claw-present-div');
    this.shakeTimer = true;
    // Initialize flags for each present div
    this.isHoldingclawPresentDivs = Array(this.clawPresentDivs.length).fill(false);
    this.shouldContinueAutomaticClawMovement = true;
    this.startAutomaticClawMovement();
    this.direction = -1;
    this.clawPosition = 0;
    this.setupControlButtonBackground();
    this.setupControlButton();
    this.setupClawLine();
    this.setupPole();
  }

  setupControlButtonBackground() {
    // Create a button element
    const controlButton = document.createElement('button');
    controlButton.classList.add('boomio-control-button-background');

    controlButton.style.backgroundImage = `url(${ButtonBackground})`; // Use the imported clawImg as the background image
    controlButton.style.backgroundSize = 'cover';
    // Adjust as needed
    controlButton.style.width = this.isMobile ? '123px' : '143px';
    controlButton.style.height = this.isMobile ? '123px' : '143px';
    controlButton.style.marginTop = '30px';
    controlButton.style.marginLeft = this.isMobile ? '-16px' : '-23px';
    controlButton.style.backgroundColor = 'transparent';
    controlButton.style.border = 'none';
    controlButton.setAttribute('id', 'boomio-control-button-background');
    // Append the button to the document body
    controlButton.style.cursor = 'pointer';

    controlButton.addEventListener('mouseenter', () => {
      controlButton.style.transform = 'scale(1.05)';
      controlButton.style.transition = 'transform 0.2s ease';
    });

    controlButton.addEventListener('mouseleave', () => {
      controlButton.style.transform = 'scale(1)';
      controlButton.style.transition = 'transform 0.2s ease';
    });

    controlButton.addEventListener('click', () => {
      clearInterval(this.pulseTimer);
      controlButton.style.transform = 'scale(1)';
      controlButton.style.transition = 'transform 0.2s ease';

      this.activateGrabbing();
      setTimeout(() => {}, 2600);
    });

    this.chainDiv.appendChild(controlButton);
  }

  setupClawLine() {
    this.clawLine = document.createElement('div');
    this.clawLine.classList.add('boomio-claw-line');
    this.clawLine.style.zIndex = 2;

    this.clawLine.style.backgroundImage = `url(${ClawLineImg})`; // Use the imported clawImg as the background image
    this.clawLine.style.backgroundSize = 'contain'; // Adjust as needed
    this.clawLine.style.width = '323px';
    this.clawLine.style.height = '138px';
    this.clawLine.style.marginTop = '-185px';
    this.clawLine.style.marginLeft = this.isMobile ? '-303px' : '-300px';
    this.clawLine.style.backgroundColor = 'transparent';
    this.clawLine.style.border = 'none';
    this.clawLine.setAttribute('id', 'boomio-claw-line');

    // Append the button to the document body
    this.chainDiv.appendChild(this.clawLine);
  }

  setupPole() {
    this.clawPole = document.createElement('div');
    this.clawPole.classList.add('boomio-claw-pole');
    this.clawPole.style.zIndex = 2;
    this.clawPole.style.background = `linear-gradient(180deg, #E89D9B 2.68%, #F17879 35.09%, #D85E99 63.96%, #C54AB5 99.91%)`; // Use the imported clawImg as the background image
    this.clawPole.style.backgroundSize = 'contain'; // Adjust as needed
    this.clawPole.style.width = this.isMobile ? '24px' : '28px';
    this.clawPole.style.height = this.isMobile ? '65px' : '65px';
    const isFirefox = typeof InstallTrigger !== 'undefined';

    this.clawPole.style.marginTop = this.isMobile ? (isFirefox ? '18px' : '20px') : '14px';
    this.clawPole.style.marginLeft = '28px';
    this.clawPole.style.backgroundColor = 'transparent';
    this.clawPole.style.border = 'none';
    this.clawPole.setAttribute('id', 'boomio-claw-pole');
    this.chainDiv.appendChild(this.clawPole);
  }

  setupControlButton() {
    // Create a button element
    const background = document.getElementById('boomio-control-button-background');

    const controlButton = document.createElement('button');
    controlButton.classList.add('boomio-control-button');
    controlButton.style.background = `url(${ClawButton})`;
    controlButton.style.width = this.isMobile ? '48px' : '48px';
    controlButton.style.height = this.isMobile ? '48px' : '48px';
    controlButton.style.transform = this.isMobile && 'scale(0.90)';
    controlButton.style.cursor = 'pointer';

    controlButton.style.position = 'absolute';
    const isFirefox = typeof InstallTrigger !== 'undefined';
    controlButton.style.marginTop = this.isMobile ? (isFirefox ? '-30px' : '-30px') : '-30px';
    controlButton.style.marginLeft = this.isMobile ? (isFirefox ? '-25px' : '-25px') : '-25px';
    controlButton.style.backgroundColor = 'transparent';
    controlButton.style.zIndex = 999999;
    controlButton.style.border = 'none';

    controlButton.setAttribute('id', 'boomio-control-button');

    controlButton.addEventListener('click', () => {
      this.activateGrabbing();
      setTimeout(() => {
        controlButton.style.backgroundColor =
          'linear-gradient(180deg, #E89D9B 2.68%, #F17879 35.09%, #D85E99 63.96%, #C54AB5 99.91%)';
      }, 2600);
    });

    const applyPulseEffect = () => {
      controlButton.style.transform = 'scale(1.05)';
      controlButton.style.transition = 'transform 0.2s ease';
      // Reset the scale after a short delay
      setTimeout(() => {
        controlButton.style.transform = 'scale(1)';
        controlButton.style.transition = 'transform 0.2s ease';
        // Pulse the button a second time after a short delay
        setTimeout(() => {
          controlButton.style.transform = 'scale(1.05)';
          controlButton.style.transition = 'transform 0.2s ease';
          setTimeout(() => {
            controlButton.style.transform = 'scale(1)';
          }, 200); // Adjust the delay as needed for the second pulse
        }, 200); // Adjust the delay as needed for the second pulse
      }, 200); // Adjust the delay as needed for the first pulse
    };

    // Set up a timer to trigger the pulse effect periodically
    this.pulseTimer = setInterval(applyPulseEffect, 3000); // Adjust the interval (in milliseconds) as needed

    // Add a click event listener to stop the pulse effect when the button is clicked
    controlButton.addEventListener('click', () => {
      clearInterval(this.pulseTimer); // Stop the pulse effect
    });

    // Append the button to the document body
    background.appendChild(controlButton);
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
    const isFirefox = typeof InstallTrigger !== 'undefined';

    this.clawDiv.style.top = `calc(100vh - ${this.isMobile ? '204px' : '290px'})`;
    this.clawPole.style.transition = 'height 1s, transform 1s';
    this.clawPole.style.height = `calc(100vh - ${
      this.isMobile ? (isFirefox ? '312px' : '315px') : '405px'
    })`;
    setTimeout(() => {
      function restartGif(animationElement) {
        const release = `url(${clawPick})`;

        setTimeout(() => {
          animationElement.style.backgroundImage = release;
          setTimeout(() => {
            const gifUrl = `url(${clawClosed})`;
            animationElement.style.backgroundImage = gifUrl;
          }, 500);
        }, 10);
      }
      restartGif(this.clawDiv);
    }, 400);

    setTimeout(() => {
      this.clawPresentDivs.forEach((clawPresentDiv, index) => {
        const clawDivRect = this.clawDiv.getBoundingClientRect();
        const clawPresentDivRect = clawPresentDiv.getBoundingClientRect();
        if (
          clawDivRect.left + (this.isMobile ? 70 : 105) < clawPresentDivRect.right &&
          clawDivRect.right - (this.isMobile ? 70 : 105) > clawPresentDivRect.left &&
          clawDivRect.top < clawPresentDivRect.bottom
        ) {
          if (!this.isHoldingclawPresentDivs[index]) {
            this.isHoldingclawPresentDivs[index] = true;

            clawPresentDiv.style.top = '60px';
            clawPresentDiv.style.left = `${clawDivRect.width / 2 - clawPresentDivRect.width / 2}px`;

            this.clawPresentDiv = clawPresentDiv;
            this.clawDiv.appendChild(clawPresentDiv);
            const presentType = this.clawPresentDiv.style.backgroundImage;
            if (clawPresentDiv.style.backgroundImage.includes('GiftOne')) {
              clearTimeout(this.shakeTimer);
              this.shakeTimer = null;
            }
            this.gameTimer = setTimeout(() => {
              setTimeout(() => {
                if (presentType.includes('GiftTwo')) {
                  function restartGif(animationElement) {
                    const Opened = `url(${GifTwo})`;
                    setTimeout(() => {
                      animationElement.style.backgroundImage = Opened;
                      setTimeout(() => {
                        const gifUrl = `url(${GiftOpened})`;
                        animationElement.style.backgroundImage = gifUrl;
                      }, 500);
                    }, 10);
                  }
                  restartGif(clawPresentDiv);
                  setTimeout(() => {
                    clawPresentDiv.style.opacity = 1;
                    setTimeout(() => {
                      animateFalling(clawPresentDiv);
                    }, 10);
                    const animateFalling = (element) => {
                      element.style.transition = 'top 2s ,opacity 1s';
                      element.style.top = '1500px';
                      element.style.opacity = 0;
                    };
                    setTimeout(() => {
                      this.clawDiv.removeChild(clawPresentDiv);
                      this.isHoldingclawPresentDivs[index] = false;
                    }, 500);
                  }, 500);
                }
              }, 100);

              this.endGame();
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
        }, 500);

        setTimeout(() => {
          if (this.clawPresentDiv) {
            const presentType = this.clawPresentDiv.style.backgroundImage;
            if (
              this.isHoldingclawPresentDivs.some((item) => item === true) &&
              presentType.includes('GiftTwo')
            ) {
              function restartGif(animationElement) {
                const randomQueryParam = `?a=${Math.random()}`;
                const release = `url(${clawRelease})`;

                setTimeout(() => {
                  animationElement.style.backgroundImage = release;
                  setTimeout(() => {
                    const gifUrl = `url(${clawImg})`;
                    animationElement.style.backgroundImage = gifUrl;
                    animationElement.classList.add('claw-div-transition');
                  }, 400);
                }, 10);
              }
              restartGif(this.clawDiv);
            }
          }
        }, 600);

        setTimeout(() => {
          this.clawDiv.style.transition = 'top 1s';
          this.clawDiv.style.top = this.isMobile ? '175px' : '182px';

          this.clawPole.style.transition = 'height 1s, transform 1s';
          this.clawPole.style.height = this.isMobile ? '64px' : '65px';

          setTimeout(() => {
            if (!this.isHoldingclawPresentDivs.some((item) => item === true)) {
              this.clawDiv.style.backgroundImage = `url(${clawImg})`;
            }
            if (this.clawPresentDiv) {
              const presentType = this.clawPresentDiv.style.backgroundImage;

              if (!presentType.includes('GiftOne')) {
                this.animationInProgress = false;
                this.shouldContinueAutomaticClawMovement = true;
                this.startAutomaticClawMovement();
              }
            } else {
              this.animationInProgress = false;
              this.shouldContinueAutomaticClawMovement = true;
              this.startAutomaticClawMovement();
            }
          }, 400);
        }, 400);
      }, 200);
    }, 1500);
  }
  startAutomaticClawMovement() {
    const clawSpeed = this.isMobile ? 1 : 2; // Adjust the speed as needed
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
      const chainDivLeft = this.clawPosition + this.clawDiv.clientWidth / 2 - 40;
      this.chainDiv.style.left = `${chainDivLeft}px`;

      // Schedule the next movement
      requestAnimationFrame(moveClaw, 50); // Adjust the delay as needed for the desired speed
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

    const clawClose = document.createElement('div');
    clawClose.classList.add('boomio-claw-close');
    clawClose.style.zIndex = 2;
    clawClose.style.backgroundSize = 'contain'; // Adjust as needed
    clawClose.style.width = '52px';
    clawClose.style.height = '50px';
    clawClose.style.backgroundImage = `url(${ClawClose})`; // Use the imported clawImg as the background image
    clawClose.style.top = '0px';
    clawClose.style.right = '5%';
    clawClose.style.cursor = 'pointer';
    clawClose.style.position = 'fixed';
    clawClose.style.border = 'none';

    clawClose.style.zIndex = '9999999'; // Set a higher z-index value
    clawClose.addEventListener('click', () => {
      this.closeGame();
    });

    clawClose.setAttribute('id', 'boomio-claw-close');
    clawMachineContainer.appendChild(clawClose);

    const clawLineDiv = document.createElement('div');
    clawLineDiv.classList.add('claw-line-div');

    // Set the width of the line div
    clawLineDiv.style.width = '100%'; // Set it to 100% to cover the entire container
    clawLineDiv.style.backgroundImage = `url(${ClawLineBackground})`; // Use the imported clawImg as the background image

    // Initially, position the line div 100px above the top of the viewport using transform
    clawLineDiv.style.transform = 'translateY(200px)';
    clawLineDiv.style.transition = 'transform 1s ease-in-out'; // Add a smooth transition effect for transform
    clawLineDiv.style.backgroundRepeat = 'no-repeat'; // Add a smooth transition effect for transform

    // Append the line div to the container
    clawMachineContainer.appendChild(clawLineDiv);

    // Calculate the width of the line div
    let presentSpacing; // Adjust as needed
    let numberOfPresents;

    let containerWidth = 0;
    let leftPosition = 0;
    let minHeight = 0;
    let maxHeight = 0;

    if (this.isMobile) {
      presentSpacing = 20;
      minHeight = 77;
      maxHeight = 130;
      leftPosition = 20;
      containerWidth = window.innerWidth - 15;
    } else {
      presentSpacing = 30;
      minHeight = 139;
      maxHeight = 241;
      leftPosition = 100;
      containerWidth = window.innerWidth - 80;
    }

    const totalPresents = this.isMobile ? 6 : 10;

    const presents = [];
    for (let i = 0; i < totalPresents; i++) {
      presents.push(i < (this.isMobile ? 2 : 4) ? GiftTwo : GiftOne);
    }
    shuffleArray(presents);
    // Create and display the presents
    for (let i = 0; i < totalPresents; i++) {
      const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
      const aspectRatio = presents[i] === GiftOne ? 504 / 688 : 504 / 704; // Aspect ratio of the original size (width / height)
      const randomWidth = Math.floor(randomHeight * aspectRatio);

      if (leftPosition + randomWidth < containerWidth) {
        const newClawPresentDiv = document.createElement('div');

        newClawPresentDiv.classList.add('claw-present-div');
        newClawPresentDiv.style.width = `${randomWidth}px`;
        newClawPresentDiv.style.height = `${randomHeight}px`;
        newClawPresentDiv.style.left = `${leftPosition}px`;
        newClawPresentDiv.style.bottom = `2000px`;
        newClawPresentDiv.style.opacity = 0.5;
        const styleBottom = `${
          Math.random() * (this.isMobile ? 5 : 15) + (this.isMobile ? 20 : 35)
        }px`;

        const applyShakeEffect = (element, shakeCount) => {
          element.style.transition = 'transform 0.2s ease';
          let remainingShakes = shakeCount;

          const shake = () => {
            const shakeAmountX = (Math.random() - 0.5) * 5; // Adjust the shake intensity as needed
            const shakeAmountY = (Math.random() - 0.5) * 1; // Adjust the shake intensity as needed

            element.style.transform = `translate(${shakeAmountX}px, ${shakeAmountY}px)`;

            remainingShakes--;

            if (remainingShakes > 0) {
              // Continue shaking
              setTimeout(shake, 200);
            } else {
              // Reset the transformation after all shakes
              setTimeout(() => {
                element.style.transform = 'translate(0, 0)';
              }, 200);
            }
          };

          // Start shaking
          shake();
        };

        const startRandomShake = (element) => {
          const randomInterval = Math.random() * 4000 + 2000; // Random interval between 3 and 6 seconds
          const shakeCount = Math.floor(Math.random() * 5) + 4; // Random number of shakes between 2 and 4

          // Apply the shake effect immediately
          applyShakeEffect(element, shakeCount);

          // Schedule the next shake after a random interval
          setTimeout(() => {
            if (this.shakeTimer) startRandomShake(element);
          }, randomInterval);
        };

        setTimeout(() => {
          if (presents[i] === GiftOne) {
            startRandomShake(newClawPresentDiv);
          }
        }, Math.random() * 3000 + 2000);

        newClawPresentDiv.style.backgroundImage = `url(${presents[i]})`;
        newClawPresentDiv.style.backgroundSize = 'cover';
        if (this.isMobile) {
          if (newClawPresentDiv) {
            newClawPresentDiv.style.zIndex = '9999'; // Set a higher z-index value
            newClawPresentDiv.style.cursor = 'pointer';
            newClawPresentDiv.addEventListener('click', () => {
              this.activateGrabbing();
            });
          } else {
            console.log('newClawPresentDiv not found in the DOM'); // Check if this is logged
          }
        }
        clawLineDiv.appendChild(newClawPresentDiv);
        const randomTimeout = Math.random() * 500;

        setTimeout(() => {
          animateFalling(newClawPresentDiv, styleBottom);
        }, randomTimeout);
        leftPosition += randomWidth + presentSpacing;
      }
      function animateFalling(element, bottom) {
        element.style.transition = 'bottom 1.5s, opacity 1s';
        element.style.opacity = 1; // Ensure the final position is exactly 10px
        element.style.bottom = bottom; // Ensure the final position is exactly 10px
      }
    }

    // Function to shuffle an array using the Fisher-Yates algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Create the existing Claw div
    const clawDiv = document.createElement('div');
    clawDiv.classList.add('claw-div');
    clawDiv.style.backgroundImage = `url(${clawImg})`; // Use the imported clawImg as the background image
    clawDiv.style.backgroundSize = 'cover'; // Adjust as needed

    clawDiv.style.transform = 'translateY(-100px)';
    clawDiv.style.transition = 'transform 1s ease-in-out'; // Add a smooth transition effect for transform

    clawMachineContainer.appendChild(clawDiv);

    const chainDiv = document.createElement('div');
    chainDiv.classList.add('chain-div');
    chainDiv.style.backgroundImage = `url(${chainImg})`; // Use the imported clawImg as the background image
    chainDiv.style.backgroundSize = 'cover'; // Adjust as needed

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

  closeGame = () => {
    const element = document.getElementById('clawMachine-container');
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };

  endGame = () => {
    const presentType = this.clawPresentDiv.style.backgroundImage;

    if (!presentType.includes('GiftTwo')) {
      setTimeout(() => {
        const element = document.getElementById('clawMachine-container');
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
          new QrCodeModal();
        }
      }, 1000);
    }
  };
}

export default () => {
  new ClawMachineWidget();
};
