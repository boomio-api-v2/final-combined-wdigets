import { widgetHtmlService, QrCodeModal, localStorageService } from '@/services';
import './styles.css';
import { WhackHammer, WhackMole00, WhackMole01Reversed, WhackMoleHit } from '@/сonstants';
import { createCloseMoveButtons } from '@/utlis';
import boomio from '@/services/boomio';

class WhackWidget {
  constructor() {
    this.swch = 1;
    this.score = 0;
    this.currentMoleId = null;
    this.whackedMoles = {};
    this.preloadImages()
      .then(() => {
        this.startWhack();
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }

  async preloadImages() {
    const imageUrlsToPreload = [WhackHammer, WhackMole01Reversed, WhackMoleHit];
    for (let i = 0; i <= 7; i++) {
      window[`WhackMole0${i}`] = `${WhackMole00}?x=${i}`;
      imageUrlsToPreload.push(window[`WhackMole0${i}`]);
    }

    const loadImageBeforeUsing = (images) => {
      const promises = images.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = img;
        });
      });
      return Promise.all(promises);
    };

    return await loadImageBeforeUsing(imageUrlsToPreload);
  }

  startWhack() {
    this.config = localStorageService.getDefaultConfig();
    this.createContainer();
    this.whack = document.getElementById('boomio-whack-container');
    this.addCardEventListeners();
  }

  createContainer() {
    const myCanvas = document.createElement('div');
    const moleId = `mole-${Date.now()}`;
    myCanvas.setAttribute('id', 'boomio-whack-container');
    myCanvas.classList.add('boomio--animation__wrapper', 'boomio--animation__wrapper--initial');

    myCanvas.innerHTML = `
      <div class="game-container-whack">
        <div class="boomio-mole" id="${moleId}">
          <img class="boomio-mole-image boomio-mole-image1" src="${WhackMole01}" alt="Mole">
          <img class="boomio-mole-image boomio-mole-image2" src="${WhackMole01Reversed}" alt="Mole" style="display: none;">
          <img class="boomio-mole-image boomio-mole-image3" src="${WhackMoleHit}" alt="Mole" style="display: none;">
          <div class="boomio-score"><span id="boomio-score-value"></span></div>
        </div>
        <div class="boomio-score"><span id="boomio-score-value"></span></div>
      </div>
    `;
    widgetHtmlService.container.appendChild(myCanvas);

    const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed

    createCloseMoveButtons(
      myCanvas.querySelector('.boomio-mole'),
      document.getElementById('boomio-whack-container'),
      isMobile ? [-130, -330] : [-150, -450],
      false,
    );
  }

  addCardEventListeners() {
    const gameContainer = document.querySelector('.game-container-whack');
    const moles = gameContainer.querySelectorAll('.boomio-mole');
    const moleCount = moles.length;

    const randomPosition = (mole) => {
      const gameContainer = mole.parentElement;
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight - 140;
      const moleWidth = window.matchMedia('(max-width: 600px)').matches ? 200 : 300;
      const moleHeight = window.matchMedia('(max-width: 600px)').matches ? 133 : 200;
      const maxY = containerHeight - moleHeight;
      let randomX;
      if (Math.random() < 0.5) {
        randomX = Math.floor(Math.random() * (containerWidth / 4 - moleWidth)) + 100;
      } else {
        randomX =
          Math.floor(
            Math.random() * (containerWidth / 4 - moleWidth) +
              containerWidth / 2 +
              containerWidth / 4,
          ) - 100;
      }

      const randomY = Math.floor(Math.random() * maxY);
      gameContainer.style.left = randomX + 'px';
      gameContainer.style.top = randomY + 'px';
    };

    const resetGIF = (imageElement) => {
      const mole = document.querySelector('.boomio-mole');
      mole?.classList.remove('boomio-mole-hit-once');
      mole?.classList.add('boomio-whack-appear');
      let src = '';
      imageElement?.classList.add('hide');
      src = window['WhackMole0' + this.swch];
      this.swch === 7 ? (this.swch = 1) : this.swch++;
      imageElement.src = src;
      // To ensure smooth transition, we use setTimeout to toggle classes after a small delay
      setTimeout(() => {
        imageElement?.classList.remove('hide');
        imageElement?.classList.add('show');
      }, 50);

      setTimeout(() => {
        mole?.classList.remove('boomio-whack-appear');
      }, 600); //1300
      createHammer();
    };

    const reverseGIF = (imageElement, whacked) => {
      const mole = document.querySelector('.boomio-mole');
      if (!mole.classList.contains('boomio-mole-hit-once')) {
        mole.classList.add('boomio-whack-disappear');

        const src = WhackMole01Reversed;
        if (whacked) {
          mole.classList.add('boomio-mole-hit-once');
        }
        imageElement.classList.add('hide');

        // Hide the element until the new source is fully set
        imageElement.style.visibility = 'hidden';

        // Clear the src attribute to prevent the previous GIF from briefly restarting

        // Set the new GIF source after a short delay
        setTimeout(() => {
          console.log(imageElement.src);
          imageElement.src = src;
          // To ensure smooth transition, we use setTimeout to toggle classes after a small delay
          setTimeout(() => {
            imageElement.classList.remove('hide');
            imageElement.classList.add('show');
            imageElement.style.visibility = 'visible'; // Show the element after setting the new source
          }, 50);
        }, 10); // You can adjust the delay time if necessary

        setTimeout(() => {
          mole.classList.remove('boomio-whack-disappear');
          if (whacked) {
            mole.style.display = 'none';
          }
        }, 1300); //1300
      }
    };

    const startMoleAnimation = (mole) => {
      if (!this.score || this.score < 4) {
        const moleImage = mole.querySelector('.boomio-mole-image');

        function hideMole() {
          resetGIF(moleImage);
          showNextMole();
        }

        const showNextMole = () => {
          const nextMoleIndex = Math.floor(Math.random() * moleCount);
          const nextMole = moles[nextMoleIndex];
          randomPosition(nextMole);
          nextMole.style.display = 'block';
          const moleId = `mole-${Date.now()}-${Math.random()}`;
          nextMole.setAttribute('id', moleId);
          this.currentMoleId = moleId;

          setTimeout(() => {
            const mole = document.querySelector('.boomio-mole');
            if (mole) {
              const moleImage = mole.querySelector('.boomio-mole-image');
              if (!mole.classList.contains('boomio-mole-hit')) {
                reverseGIF(moleImage);
              }

              setTimeout(() => {
                mole.style.display = 'none';
                setTimeout(() => {
                  mole.classList.remove('boomio-whack-disappear');
                }, 200);
                setTimeout(() => {
                  startMoleAnimation(nextMole);
                }, 700); //1300
              }, 700); //1300
            }
          }, 3000); // 5000
        };
        hideMole();
      }
    };

    const createHammer = () => {
      const mole = document.querySelector('.boomio-mole');
      const existingHammer = mole?.querySelector('.boomio-hammer');

      if (!existingHammer) {
        const hammer = document.createElement('img');
        hammer?.classList.add('boomio-hammer');
        hammer.src = WhackHammer;
        mole?.appendChild(hammer);
        hammer?.classList.remove('boomio-whack-disappear');
        hammer?.classList.remove('boomio-whack-appear');
        hammer.style.opacity = '0';

        // Add event listeners for mouseover and mouseout events
        mole?.addEventListener('mouseover', () => {
          if (!window.matchMedia('(max-width: 600px)').matches) {
            hammer.style.opacity = '1';
          }
        });

        let hideHammerTimeout; // Timeout variable to store the reference

        mole?.addEventListener('mouseout', () => {
          if (!window.matchMedia('(max-width: 600px)').matches) {
            hammer.style.opacity = '1';
            hideHammerTimeout = setTimeout(() => {
              hammer.style.opacity = '0';
              // Adjust the transition duration to match the CSS transition duration
            }, 400);
          }
        });

        // Cancel the hide timeout when mouseover occurs again
        if (!window.matchMedia('(max-width: 600px)').matches) {
          mole?.addEventListener('mouseover', () => {
            clearTimeout(hideHammerTimeout);
          });
        }
      }
    };

    const whackMole = (event) => {
      function moleHit(imageElement) {
        boomio.signal('hammer_click', 'signal', {
          widget_type: 'whack',
        });
        const mole = document.querySelector('.boomio-mole');
        mole.classList.add('boomio-mole-hit');
        const src = WhackMoleHit;
        imageElement.classList.add('hide');
        imageElement.src = src;
        setTimeout(() => {
          imageElement.classList.remove('hide');
          imageElement.classList.add('show');
        }, 50);
        setTimeout(() => {
          mole.classList.remove('boomio-mole-hit');
          reverseGIF(imageElement, true); // Apply the reverseGIF animation to hide the mole
        }, 1000);
      }
      const mole = document.querySelector('.boomio-mole');
      if (
        // the following condition requires hitting the mole twice in order to whack
        // event.target.classList.contains('mole-image') &&
        !mole.classList.contains('boomio-mole-hit') &&
        !mole.classList.contains('boomio-whack-disappear') &&
        !mole.classList.contains('boomio-whack-appear') &&
        this.currentMoleId === mole.id
        // && !this.whackedMoles[mole.id]
      ) {
        this.score++;
        document.getElementById('boomio-score-value').textContent = `${this.score}/4`; // Update the score element
        document.getElementById('boomio-score-value').style.display = 'block';
        const moleImage = mole.querySelector('.boomio-mole-image');
        moleHit(moleImage);

        setTimeout(function () {
          setTimeout(function () {
            const scoreStyle = document.getElementById('boomio-score-value');
            if (scoreStyle) {
              scoreStyle.style.display = 'none';
            }
          }, 800);
        }, 1000);

        if (this.score === 4) {
          endGame();
        }
        this.whackedMoles[mole.id] = true; // Mark the mole as whacked
      }
    };

    moles.forEach(function (mole) {
      randomPosition(mole);
      startMoleAnimation(mole);
    });

    const endGame = () => {
      setTimeout(() => {
        const element = document.getElementById('boomio-whack-container');
        if (element) {
          element.remove();
          new QrCodeModal();
        }
      }, 1000);
    };

    document.addEventListener('click', (event) => {
      const mole = event.target.closest('.boomio-mole');
      if (
        mole &&
        mole.classList.contains('boomio-mole') &&
        !mole.classList.contains('boomio-whack-appear') &&
        !mole.classList.contains('boomio-whack-disappear') &&
        this.currentMoleId === mole.id &&
        !this.whackedMoles[mole.id]
      ) {
        const hammer = mole.querySelector('.boomio-hammer');
        hammer.style.display = 'none';
        setTimeout(() => {
          const newMole = event.target.closest('.boomio-mole');
          if (this.whackedMoles[newMole.id]) {
            hammer.style.display = 'block';
          }
        }, 700);

        whackMole(event);
      }
    });
  }
}

export default () => {
  new WhackWidget();
};
