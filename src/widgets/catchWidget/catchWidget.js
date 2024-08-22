import {
  close,
  catch1,
  catch2,
  catch3,
  catch4,
  catch5,
  player,
  background,
  newRecord,
  intro,
  tapImageBarbora,
  star,
  life,
  checkIcon,
  uncheckIcon,
} from './constants';
import './styles.css';
import { InputRegisterContainer } from '../helpers/InputRegisterContainer';
import { InputContainer } from '../helpers/InputContainer';
import { CompetitionScoreTableContainer } from '../helpers/CompetitionScoreTableContainer';
import { PointScoreTableContainer } from '../helpers/PointScoreTableContainer';
import { DownloadScoreTableContainer } from '../helpers/DownloadScoreTableContainer';
import { IkeaScoreTableContainer } from '../helpers/IkeaScoreTableContainer';
import { widgetHtmlService, localStorageService, boomioService } from '@/services';
class CatchGame {
  constructor() {
    this.config = localStorageService.getDefaultConfig();
    this.customer = this.config.business_name ? this.config.business_name : 'Eurovaistine';
    this.showCompetitiveRegistration =
      this?.config?.game_type !== '' ? this.config.game_type : 'competition';
    this.language = this.config.language ? this.config.language : '';
    this.gameCount = 0;
    this.checkboxChange = false;
    this.gameStarted = false;
    this.currentScore = 0;

    this.scoreTable = {};
    this.scoreTableContainerInstance;
    this.createContainer();
    document.querySelector('.game-container').style.backgroundColor =
      window.innerWidth <= 768 ? 'black' : 'none';

    this.canvas = document.getElementById('boomio-catch-canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.style.background = `url(${background}) center`;

    this.catchSounds = Array.from({ length: 5 }, () => new Audio('Audio/bleep.wav'));
    this.music = new Audio('Audio/MarimbaBoy.wav');
    this.music.loop = true;
    this.smashSounds = Array.from({ length: 5 }, () => new Audio('Audio/smash.mp3'));

    this.timer = null;
    this.hiscore = 0;
    this.fruits = [];
    this.numberOfFruits = 15;
    this.smashCounter = 0;
    this.catchSoundCounter = 0;
    this.animationFrame = null;

    this.startCatch();
  }

  startCatch = () => {
    const new_highscore = document.querySelector('.new_highscore');
    const new_highscore_stars = document.querySelector('.new_highscore_stars');
    const numbers = document.querySelector('.numbers');

    numbers.style.transition = 'opacity 0.5s ease';
    numbers.style.opacity = 0;
    new_highscore.style.transition = 'opacity 0.5s ease';
    new_highscore.style.opacity = 0;
    new_highscore_stars.style.transition = 'opacity 0.5s ease';
    new_highscore_stars.style.opacity = 0;

    setTimeout(() => {
      new_highscore.style.display = 'none';
      new_highscore_stars.style.display = 'none';
      numbers.style.display = 'none';
    }, 500);

    setTimeout(() => {
      document.getElementById('boomio-catch-canvas').style.transition = 'opacity 1s ease';
      document.getElementById('boomio-catch-canvas').style.opacity = 1;

      if (this.gameCount === 0) {
        if (
          this.showCompetitiveRegistration === 'competition' ||
          this.showCompetitiveRegistration === 'points' ||
          this.showCompetitiveRegistration === 'collectable'
        ) {
          const checkboxImg = document.querySelector('.boomio-privacyCheckbox');
          checkboxImg.addEventListener('click', () => {
            this.checkboxChange = !this.checkboxChange;
            const checkboxImgChange = document.getElementById('privacyCheckboxImg');
            checkboxImgChange.src = this.checkboxChange ? checkIcon : uncheckIcon;
          });
          setTimeout(() => {
            const canvas = document.getElementById('boomio-catch-canvas');
            document.getElementById('background_blur').style.opacity = 0.37;
            canvas.style.transition = 'filter 0.6s ease';
            canvas.style.filter = 'blur(2px)';

            const inpuRegisterContainer = document.querySelector('.input-register-container');
            inpuRegisterContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
            inpuRegisterContainer.style.display = 'block';
            setTimeout(() => {
              inpuRegisterContainer.style.height = '528px';
              inpuRegisterContainer.style.top = 'calc(50% + 74px)';
              inpuRegisterContainer.style.opacity = 1;
            }, 100);
          }, 300);
        } else {
          setTimeout(() => {
            const canvas = document.getElementById('boomio-catch-canvas');
            document.getElementById('background_blur').style.opacity = 0.37;
            canvas.style.transition = 'filter 0.6s ease';
            canvas.style.filter = 'blur(2px)';
            const inputContainer = document.querySelector('.input-container');
            document.getElementById('control-button').style.transition = 'opacity 2s ease';
            document.getElementById('control-button').style.opacity = 1;
            document.getElementById('control-button').style.display = 'flex';

            inputContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
            inputContainer.style.display = 'block';
            setTimeout(() => {
              inputContainer.style.height = '332px';
              inputContainer.style.top = 'calc(50% + 170px)';
              inputContainer.style.opacity = 1;
            }, 100);
          }, 300);
        }
      }

      document.getElementById('background_intro').style.transition = 'opacity 1s ease';
      document.getElementById('background_intro').style.opacity = 0;
      if (this.gameCount === 0) {
        document.getElementById('background_blur').style.display = 'block';
        document.getElementById('background_blur').style.transition = 'opacity 0.8s ease';
      }
      if (this.gameCount === 0) {
        setTimeout(() => {
          const canvas = document.getElementById('boomio-catch-canvas');

          document.getElementById('background_blur').style.opacity = 0.37;

          canvas.style.transition = 'filter 0.6s ease';
          canvas.style.filter = 'blur(2px)';
        }, 1000);
      }
      setTimeout(() => {
        const background = document.getElementById('background_intro');

        if (background) {
          background.style.display = 'none';
        }
      }, 2000);
    }, 3000);
    //gifas
  };

  createContainer() {
    const blurImage = new Image();
    blurImage.src = 'https://i.ibb.co/wrHgcn1/Blur-game-rules.png';
    const newHighscoreStarsImage = new Image();
    newHighscoreStarsImage.src = 'https://i.ibb.co/P43Lwwz/New-demo-best-score.gif';
    const newHighscoreImage = new Image();
    newHighscoreImage.src = 'https://i.ibb.co/fdFppDg/New-best-score.png';
    // Create and configure the game container
    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('id', 'boomio-catch-container');
    gameContainer.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );
    gameContainer.innerHTML = `
      <div class="game-container game-container-catch">
          <img class="new_highscore_stars" src=${
            newHighscoreStarsImage.src
          } alt="Image Description" style="overflow: hidden;z-index:4;margin-top:-300px;display:none; height: 95px;position:absolute;pointer-events:none;" >
    </img>
    <div class="new_highscore"><img src=${newRecord}  alt="Image Description" style="width: 100%; height: 100%;">
    </div>
    <div class="numbers" style="z-index:10">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--1" data-fake="8642519073" id="bestScore1"></span>
    </span>
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--2" data-fake="5207186394" id="bestScore2"></span>
    </span>
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--3" data-fake="8395216407" id="bestScore3"></span>
    </span>
    <span class="numbers__window">
    <span class="numbers__window__digit numbers__window__digit--4" data-fake="8395216407" id="bestScore4"></span>
  </span>
  <span class="numbers__window">
  <span class="numbers__window__digit numbers__window__digit--5" data-fake="8395216407" id="bestScore5"></span>
  </span>
  </div>


    <div style="position: absolute;z-index:999;pointer-events:none" class="tutorial">
    ${`<div style="gap:20px;display:flex;color: #FFF;text-shadow: 4px 4px 14px rgba(255, 255, 255, 0.41);font-family:${'Georama'};font-size: 26px;font-weight: 900;line-height: 130%; /* 33.8px */ letter-spacing: -0.16px;text-transform: ${'uppercase'};">
        <div>${'kustēties'}</div>
        <div>${'kustēties'}</div>
      </div><img src=${tapImageBarbora} alt="Image Description" style="width: 93px; height: 89px;">`}
      </div>
    <div class="boomio-score-input-container" style="box-sizing:border-box;display:none;width:160px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:45px;padding:7px;background:${'#18904A'};border-radius:35px">
    <div style="width: 148px;top:-15px;left:10px; height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
    <img src=${star} alt="Image Description" style="width: 20px; height: 20px;margin-top:20px"></img>

  <div style="text-align: center; color: white; font-size: 20px; font-family:${'Georama'}; font-weight: 900; word-wrap: break-word;position:absolute;left:70px;top:17px;z-index:3;line-height:30px;" id="currentScore"></div>
</div>
</div>



<div class="boomio-life-input-container" style="box-sizing:border-box;display:none;width:120px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:45px;padding:7px;background:${'#18904A'};border-radius:35px">
<div style="width: 148px;top:-15px;height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
<img src=${life} alt="Image Description" style="margin-left:-10px;width: 50px; height: 50px;margin-top:15px"></img>

<div style="text-align: center; color: white; font-size: 16px; font-family:${'Georama'} ;font-weight: 900; word-wrap: break-word;position:absolute;left:35px;top:17px;z-index:3;line-height:30px;" id="currentLife"></div>
</div>
</div>



    <img src=${intro} alt="Image Description" style="z-index:4;width:${
      document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
    }; height: 674px;position:absolute;pointer-events: none; display:block;" id="background_intro">
    <img src=${blurImage.src} alt="Image Description" style="z-index:3;width: ${
      document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
    }; height: 668px;position:absolute;opacity:0.37;pointer-events: none; display:block;" id="background_blur">

    ${
      this.showCompetitiveRegistration
        ? new InputRegisterContainer(this.customer).createInputRegisterContainer().outerHTML
        : ''
    }

    <div class="close-game-container" id="close-game-container" style="top:calc(50% - 280px);display:block;width:32px;height:32px;">
<img src=${close} alt="Image Description" style="width: 100%; height: 100%;"></img>
</div>
    ${new InputContainer(this.customer, 'drive').createInputContainerDiv().outerHTML}

        <canvas id="boomio-catch-canvas" width="418px" height="668px"></canvas>
      </div>
    `;
    widgetHtmlService.container.appendChild(gameContainer);
    if (this.showCompetitiveRegistration === 'competition') {
      const gameContainer = document.querySelector('.game-container');

      this.scoreTableContainerInstance = new CompetitionScoreTableContainer(
        this.customer,
        this.scoreTable,
      );
      gameContainer.appendChild(this.scoreTableContainerInstance.containerDiv);
    }
    if (this.showCompetitiveRegistration === 'points') {
      if (this.customer === 'Ikea') {
        const gameContainer = document.querySelector('.game-container');

        this.scoreTableContainerInstance = new IkeaScoreTableContainer(
          this.customer,
          this.scoreTable,
          this.currentScore,
        );
        gameContainer.appendChild(this.scoreTableContainerInstance.containerDiv);
      } else {
        const gameContainer = document.querySelector('.game-container');

        this.scoreTableContainerInstance = new PointScoreTableContainer(
          this.customer,
          this.scoreTable,
          this.currentScore,
        );
        gameContainer.appendChild(this.scoreTableContainerInstance.containerDiv);
      }
    }

    if (this.showCompetitiveRegistration === 'collectable') {
      const gameContainer = document.querySelector('.game-container');

      this.scoreTableContainerInstance = new DownloadScoreTableContainer(
        this.customer,
        this.scoreTable,
        this.currentScore,
      );
      gameContainer.appendChild(this.scoreTableContainerInstance.containerDiv);
    }

    if (
      this.showCompetitiveRegistration === 'competition' ||
      this.showCompetitiveRegistration === 'points' ||
      this.showCompetitiveRegistration === 'collectable'
    ) {
      const clickEventHandlerShowRules = () => {
        if (this.gameCount === 0) {
          setTimeout(() => {
            const emailInput = document.querySelector('.boomio-competition-email-input-field');
            const playerNameInput = document.querySelector('.boomio-competition-name-input-field');
            const checkboxChange = this.customer === 'Fantazijos' ? true : this.checkboxChange;

            if (
              (this.showCompetitiveRegistration === 'competition' ||
                this.showCompetitiveRegistration === 'points' ||
                this.showCompetitiveRegistration === 'collectable') &&
              checkboxChange
            ) {
              boomioService
                .signal('', 'user_info', {
                  emails_consent: this.checkboxChange,
                  user_email: emailInput?.value,
                  user_name: playerNameInput?.value,
                  game_code: this.game_code,
                })
                .then((response) => {
                  if (response.success === false) {
                    if (response.res_code === 'EMAIL_EXIST') {
                      document.getElementById('competition-email-error').innerText =
                        this.customer === 'Fpro'
                          ? 'This email address already exists. Please use another one.'
                          : this.language === 'LV'
                          ? 'Šī e-pasta adrese jau eksistē. Izmantojiet citu.'
                          : this.language === 'RU'
                          ? 'Этот е-мейл адрес уже существует. Используйте другой.'
                          : this.language === 'EE'
                          ? 'See e-posti aadress on juba olemas. Kasutage teist.'
                          : 'Šis el. pašto adresas jau egzistuoja. Naudokite kitą.';
                      document.getElementById('competition-email-error').style.backgroundColor =
                        '#FFBABA';
                      document.getElementById('competition-email-error').style.border =
                        '1px solid red';

                      document.getElementById('competition-name-error').innerText = '';

                      document.getElementById('competition-name-error').style.backgroundColor =
                        'transparent';
                      document.getElementById('competition-name-error').style.border = 'none';
                    } else if (response.res_code === 'NICKNAME_EXIST') {
                      document.getElementById('competition-name-error').innerText =
                        this.customer === 'Fpro'
                          ? 'This nickname already exists. Please use another one.'
                          : this.language === 'LV'
                          ? 'Šis segvārds jau pastāv. Izmantojiet citu.'
                          : this.language === 'RU'
                          ? 'Этот псевдоним уже существует. Используйте другой.'
                          : this.language === 'EE'
                          ? 'See hüüdnimi on juba olemas. Kasutage teist.'
                          : 'Šis slapyvardis jau egzistuoja. Naudokite kitą.';
                      document.getElementById('competition-name-error').style.backgroundColor =
                        '#FFBABA';
                      document.getElementById('competition-name-error').style.border =
                        '1px solid red';

                      document.getElementById('competition-email-error').innerText = '';
                      document.getElementById('competition-email-error').style.backgroundColor =
                        'transparent';
                      document.getElementById('competition-email-error').style.border = 'none';
                    }
                  } else {
                    this.bestScore = response.user_best_score;
                    const inpuRegisterContainer = document.querySelector(
                      '.input-register-container',
                    );
                    inpuRegisterContainer.style.transition =
                      'height 1s ease, top 1s ease, opacity 1s ease';
                    setTimeout(() => {
                      inpuRegisterContainer.style.height = '10px';
                      inpuRegisterContainer.style.top = 'calc(50% + 330px)';
                      inpuRegisterContainer.style.opacity = 0;
                    }, 100);
                    setTimeout(() => {
                      inpuRegisterContainer.style.display = 'none';
                    }, 1000);
                    setTimeout(() => {
                      const canvas = document.getElementById('boomio-catch-canvas');
                      document.getElementById('background_blur').style.opacity = 0.37;
                      canvas.style.transition = 'filter 0.6s ease';
                      canvas.style.filter = 'blur(2px)';
                      const inputContainer = document.querySelector('.input-container');
                      document.getElementById('control-button').style.transition =
                        'opacity 2s ease';
                      document.getElementById('control-button').style.opacity = 1;
                      document.getElementById('control-button').style.display = 'flex';
                      inputContainer.style.transition =
                        'height 1s ease, top 1s ease, opacity 1s ease';
                      inputContainer.style.display = 'block';
                      setTimeout(() => {
                        inputContainer.style.height = '332px';
                        inputContainer.style.top = 'calc(50% + 170px)';
                        inputContainer.style.opacity = 1;
                      }, 100);
                    }, 300);
                  }
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }
          }, 300);
        }
      };

      const clickEventHandlerResetGame = () => {
        console.log('reseted');
        this.resetGame();
        this.menuShown = false;
        const competitionRestart = document.getElementById('boomio-game-play-again');
        competitionRestart.removeEventListener('click', clickEventHandlerResetGame);

        setTimeout(() => {
          competitionRestart.addEventListener('click', clickEventHandlerResetGame);
        }, 2000);

        this.index = 0;
        this.currentScore = 0;

        const competitionTableContainer = document.querySelector('.competition-table-container');

        competitionTableContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
        setTimeout(() => {
          competitionTableContainer.style.height = '10px';
          competitionTableContainer.style.top = 'calc(50% + 330px)';
          competitionTableContainer.style.opacity = 0;
        }, 100);
        setTimeout(() => {
          competitionTableContainer.style.display = 'none';
        }, 1000);
        setTimeout(() => {
          if (
            this.showCompetitiveRegistration === 'competition' ||
            this.showCompetitiveRegistration === 'points' ||
            this.showCompetitiveRegistration === 'collectable'
          ) {
            boomioService
              .signal('ROUND_STARTED', 'signal')
              .then((response) => {
                document.getElementById('background_blur').style.display = 'none';
                const canvas = document.getElementById('boomio-catch-canvas');
                canvas.style.transition = 'filter 1s ease';
                canvas.style.filter = 'none';
                this.gamePlaying = true;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }
        }, 400);
      };

      document.getElementById('startButtonClick').addEventListener('click', () => {
        if (!this.gameStarted) {
          let canvas = document.getElementById('boomio-catch-canvas');

          const inputContainer = document.querySelector('.input-container');
          const controlButton = document.querySelector('.control-button');

          inputContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
          controlButton.style.transition = 'opacity 0.6s ease';
          setTimeout(() => {
            inputContainer.style.height = '10px';
            inputContainer.style.top = 'calc(50% + 330px)';
            inputContainer.style.opacity = 0;
            if (this.gameCount === 0) {
              const tutorial = document.querySelector('.tutorial');
              tutorial.style.display = 'block';
            }
          }, 100);
          setTimeout(() => {
            inputContainer.style.display = 'none';
          }, 1000);

          if (this.gameCount === 0) {
            const controlButton = document.querySelector('.control-button');
            controlButton.style.display = 'none';
            this.index = 0;

            this.clickEventHandler = () => {
              const tutorial = document.querySelector('.tutorial');

              tutorial.style.display = 'none';
              const numbers = document.querySelector('.numbers');
              const new_highscore = document.querySelector('.new_highscore');

              new_highscore.style.display = 'none';

              const new_highscore_stars = document.querySelector('.new_highscore_stars');

              new_highscore_stars.style.display = 'none';

              numbers.style.display = 'none';

              if (this.gameStarted === false) {
                if (
                  this.showCompetitiveRegistration === 'competition' ||
                  this.showCompetitiveRegistration === 'points' ||
                  this.showCompetitiveRegistration === 'collectable'
                ) {
                  boomioService
                    .signal('ROUND_STARTED', 'signal')
                    .then((response) => {
                      this.gameStarted = true;
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                    });
                }
              }
              if (this.gameCount === 0) {
                this.init();

                this.gameCount++;
                this.gamePlaying = true;
                document.getElementById('background_blur').style.display = 'none';
                const canvas = document.getElementById('boomio-catch-canvas');
                canvas.style.transition = 'filter 1s ease';
                canvas.style.filter = 'none';

                controlButton.style.opacity = 0;
              }
            };
            canvas.addEventListener('click', this.clickEventHandler);
          }

          this.clickEventHandlerButton = () => {
            const inputContainer = document.querySelector('.input-container1');
            this.index = 0;
            this.currentScore = 0;
            inputContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
            setTimeout(() => {
              inputContainer.style.height = '10px';
              inputContainer.style.top = 'calc(50% + 330px)';
              inputContainer.style.opacity = 0;
              if (this.gameCount === 0) {
                const tutorial = document.querySelector('.tutorial');
                tutorial.style.display = 'block';
              }
            }, 100);
            setTimeout(() => {
              inputContainer.style.display = 'none';
            }, 1000);

            setTimeout(() => {
              document.getElementById('background_blur').style.display = 'none';
              const canvas = document.getElementById('boomio-catch-canvas');
              canvas.style.transition = 'filter 1s ease';
              canvas.style.filter = 'none';
              this.gamePlaying = true;
            }, 400);
            controlButton.style.display = 'none';
            controlButton.style.opacity = 0;
            setTimeout(() => {
              canvas.onclick = () => {
                this.gameStarted = true;
              };
            }, 50);
          };
        }
      });

      const competitionConfirmField = document.getElementById('boomio-competition-confirm-field');
      competitionConfirmField.addEventListener('click', clickEventHandlerShowRules);

      const competitionRestart = document.getElementById('boomio-game-play-again');
      competitionRestart.addEventListener('click', clickEventHandlerResetGame);
    }

    const closeGame = () => {
      const element = document.getElementById('boomio-widget-content');
      if (element && element.parentNode) {
        this.gameClosed = true;
        element.parentNode.removeChild(element);
      }
    };

    document.getElementById('close-game-container').addEventListener('click', () => {
      closeGame();
    });
  }

  init() {
    console.log('init');
    this.setLife();
    this.createPlayer();
    this.createFruits();
    this.addEventListeners();
    this.startGame();
  }

  setLife() {
    const currectScoreDiv = document.getElementsByClassName('boomio-life-input-container')[0];
    currectScoreDiv.style.transition = 'opacity 0.8s ease';
    currectScoreDiv.style.display = 'block';
    document.getElementById('currentLife').innerHTML = `3/3`;
    currectScoreDiv.style.opacity = 1;
  }

  createPlayer() {
    this.player = new Player(this.canvas, this.context);
  }

  createFruits() {
    this.fruits = [];
    for (let i = 0; i < this.numberOfFruits; i++) {
      const fruit = new Fruit(this.canvas, this.context, this.player, this);
      fruit.chooseFruit();
      this.fruits.push(fruit);
    }
  }

  addEventListeners() {
    // Remove the old event listener if it exists
    window.removeEventListener('keydown', this.handleKeyDown);
    // Add the new event listener
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (!this.player.gameOver) {
      e.preventDefault();
      if (e.keyCode === 37) {
        this.player.moveLeft();
      } else if (e.keyCode === 39) {
        this.player.moveRight();
      }
    }
  };

  startGame() {
    this.updateGame();

    window.requestAnimationFrame(() => this.drawGame());
  }

  updateGame() {
    if (this.player.fruitsMissed >= 3) {
      this.player.gameOver = true;
    }

    this.fruits.forEach((fruit) => fruit.fall());

    // Store the timeout so that it can be cleared
    this.timer = window.setTimeout(() => this.updateGame(), 30);
  }

  drawGame() {
    // Clear the canvas before each frame
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (!this.player.gameOver) {
      // Game is running
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.render();
      this.fruits.forEach((fruit) => fruit.render());

      // Continue the game loop
      this.animationFrame = window.requestAnimationFrame(() => this.drawGame());
    } else {
      console.log('overrr');

      // Trigger the menu UI (only once)
      if (!this.menuShown) {
        this.fruits.length = 0;
        this.menuShown = true; // Set a flag to ensure the menu is only shown once

        setTimeout(
          () => {
            if (
              this.showCompetitiveRegistration === 'competition' ||
              this.showCompetitiveRegistration === 'points' ||
              this.showCompetitiveRegistration === 'collectable'
            ) {
              this.hideScore();
              boomioService
                .signal('ROUND_FINISHED', 'signal', {
                  score: this.currentScore,
                })
                .then((response) => {
                  this.hideScore();
                  this.userBestPlace = response.user_best_place;
                  if (this.showCompetitiveRegistration === 'points') {
                    this.scoreTable = response;
                    this.scoreTableContainerInstance.updateProps(
                      this.customer,
                      this.scoreTable,
                      this.currentScore,
                    );
                  }
                  if (this.showCompetitiveRegistration === 'competition') {
                    this.scoreTable = response;
                    this.scoreTableContainerInstance.updateProps(this.customer, this.scoreTable);
                  }
                  if (this.showCompetitiveRegistration === 'collectable') {
                    this.collection = response?.collection ? response?.collection : this.collection;
                    this.just_won = response?.just_won ? response?.just_won : this.just_won;
                    this.scoreTableContainerInstance.updateProps(
                      this.customer,
                      this.collectables,
                      this.collection,
                      this.just_won,
                    );
                  }
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }

            // Displaying the competition table container
            const canvas = document.getElementById('boomio-catch-canvas');
            const competitionTableContainer = document.querySelector(
              '.competition-table-container',
            );
            canvas.style.transition = 'filter 0.6s ease';
            canvas.style.filter = 'blur(2px)';
            document.getElementById('background_blur').style.display = 'block';
            competitionTableContainer.style.transition =
              'height 1s ease, top 1s ease, opacity 1s ease';
            competitionTableContainer.style.display = 'block';

            setTimeout(() => {
              competitionTableContainer.style.height = '680px';
              competitionTableContainer.style.top = 'calc(50%)';
              competitionTableContainer.style.opacity = 1;
            }, 100);

            const currectScoreDiv = document.getElementsByClassName(
              'boomio-score-input-container',
            )[0];
            const currectTimeDiv = document.getElementsByClassName(
              'boomio-life-input-container',
            )[0];
            currectTimeDiv.style.opacity = 0;

            currectScoreDiv.style.opacity = 0;
            setTimeout(() => {
              currectTimeDiv.style.display = 'none';

              currectScoreDiv.style.display = 'none';
            }, 300);
          },
          this.newHighScoreReached ? 2500 : 100,
        );
      }
    }
  }

  resetGame() {
    const currectScoreDiv = document.getElementsByClassName('boomio-score-input-container')[0];
    this.hideScore();
    currectScoreDiv.style.opacity = 0;
    setTimeout(() => {
      currectScoreDiv.style.display = 'none';
    }, 300);

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }

    // Reset player and game state
    this.player.gameOver = false;
    this.currentScore = 0;
    this.player.fruitsCollected = 0;
    this.player.fruitsMissed = 0;
    this.fruits = [];
    this.gameCount++;

    // Reinitialize the game
    this.init();
  }

  hideScore() {
    const new_highscore = document.querySelector('.new_highscore');
    const new_highscore_stars = document.querySelector('.new_highscore_stars');
    const numbers = document.querySelector('.numbers');

    numbers.style.transition = 'opacity 0.5s ease';
    numbers.style.opacity = 0;
    new_highscore.style.transition = 'opacity 0.5s ease';
    new_highscore.style.opacity = 0;
    new_highscore_stars.style.transition = 'opacity 0.5s ease';
    new_highscore_stars.style.opacity = 0;

    setTimeout(() => {
      new_highscore.style.display = 'none';
      new_highscore_stars.style.display = 'none';
      numbers.style.display = 'none';
    }, 500);
  }
}

class Player {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.gameOver = false;
    this.score = 0;
    this.fruitsCollected = 0;
    this.fruitsMissed = 0;
    this.playerWidth = 150;
    this.playerHeight = 90;
    this.playerSpeed = 10;
    this.x = this.canvas.width / 2 - this.playerWidth / 2;
    this.y = this.canvas.height - this.playerHeight - 18;
    this.playerImage = new Image();
    this.playerImage.src = player;
  }

  render() {
    if (!this.gameOver) {
      this.context.drawImage(this.playerImage, this.x, this.y, this.playerWidth, this.playerHeight);
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.playerSpeed;
    }
  }

  moveRight() {
    if (this.x < this.canvas.width - this.playerWidth) {
      this.x += this.playerSpeed;
    }
  }
}

class Fruit {
  constructor(canvas, context, player, game) {
    this.canvas = canvas;
    this.context = context;
    this.player = player;
    this.game = game;
    this.fruitNumber = Math.floor(Math.random() * 5);
    this.fruitType = '';
    this.fruitScore = 0;
    this.fruitWidth = 50;
    this.fruitHeight = 50;
    this.fruitImage = new Image();
    this.fruitSpeed = Math.floor(Math.random() * 3 + 1);
    this.x = Math.random() * (this.canvas.width - this.fruitWidth);
    this.y = Math.random() * -this.canvas.height - this.fruitHeight;

    // Fruit images
    this.images = [catch1, catch2, catch3, catch4, catch5];
  }

  chooseFruit() {
    this.fruitType = ['catch1', 'catch2', 'catch3', 'catch4', 'catch5'][this.fruitNumber];
    this.fruitScore = [5, 10, 15, 20, 25][this.fruitNumber] * this.fruitSpeed;
    this.fruitImage.src = this.images[this.fruitNumber];
  }

  fall() {
    if (this.y < this.canvas.height - this.fruitHeight) {
      this.y += this.fruitSpeed;
    } else {
      // Handle fruit miss
      this.player.fruitsMissed++;
      document.getElementById('currentLife').innerHTML = `${Math.max(
        0,
        3 - this.player.fruitsMissed,
      )}/3`;

      this.changeState();
    }

    this.checkIfCaught();
  }

  checkIfCaught() {
    if (this.y >= this.player.y) {
      if (
        (this.x > this.player.x && this.x < this.player.x + this.player.playerWidth) ||
        (this.x + this.fruitWidth > this.player.x &&
          this.x + this.fruitWidth < this.player.x + this.player.playerWidth)
      ) {
        this.player.fruitsCollected++;

        this.updateScore();
        this.changeState();
      }
    }
  }

  updateScore() {
    this.game.currentScore += this.fruitScore;
    document.getElementById('currentScore').innerHTML = `${this.game.currentScore}`;

    if (this.game.currentScore > 1) {
      const currectScoreDiv = document.getElementsByClassName('boomio-score-input-container')[0];
      currectScoreDiv.style.transition = 'opacity 0.8s ease';
      currectScoreDiv.style.display = 'block';
      currectScoreDiv.style.opacity = 1;
    }

    if (this.game.bestScore < this.game.currentScore) {
      this.game.newHighScoreReached = true;
    }

    // check if it's the best score
    this.game.bestScore = Math.max(this.game.bestScore, this.game.currentScore);
  }

  changeState() {
    this.fruitNumber = Math.floor(Math.random() * 5);
    this.fruitSpeed = Math.floor(Math.random() * 3 + 1);
    this.x = Math.random() * (this.canvas.width - this.fruitWidth);
    this.y = Math.random() * -this.canvas.height - this.fruitHeight;
    this.chooseFruit();
  }

  render() {
    this.context.drawImage(this.fruitImage, this.x, this.y, this.fruitWidth, this.fruitHeight);
  }
}

export default () => {
  new CatchGame();
};
