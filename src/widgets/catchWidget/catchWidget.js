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
  backgroundMobile,
  controllLeft,
  controllRight,
  Controlls,
  introGamtosAteitis,
  backgroundGamtosAteitis,
  playerGamtosAteitis,
  introGamtosAteitisPaper,
  backgroundGamtosAteitisPaper,
  playerGamtosAteitisPaper,
  introGamtosAteitisGlass,
  backgroundGamtosAteitisGlass,
  playerGamtosAteitisGlass,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item1Paper,
  item2Paper,
  item3Paper,
  item4Paper,
  item5Paper,
  item6Paper,
  item7Paper,
  item8Paper,
  item9Paper,
  item10Paper,
  item11Paper,
  item12Paper,
  item13Paper,
  item14Paper,
  item15Paper,
  item16Paper,
  item17Paper,
  item18Paper,
  item19Paper,
  item20Paper,
  item21Paper,
  item22Paper,
  item23Paper,
  item1Glass,
  item2Glass,
  item3Glass,
  item4Glass,
  item5Glass,
  item6Glass,
  item7Glass,
  item8Glass,
  item9Glass,
  item10Glass,
  item11Glass,
  item12Glass,
  item13Glass,
  item14Glass,
  item15Glass,
  item16Glass,
  item17Glass,
  item18Glass,
  item19Glass,
  item20Glass,
  item21Glass,
  item22Glass,
  item23Glass,
  introPienoZvaigzdes,
  backgroundPienoZvaigzdes,
  playerPienoZvaigzdes,
  item1PienoZvaigzdes,
  item2PienoZvaigzdes,
  item3PienoZvaigzdes,
  item4PienoZvaigzdes,
  item5PienoZvaigzdes,
  item6PienoZvaigzdes,
  item7PienoZvaigzdes,
  item8PienoZvaigzdes,
  item9PienoZvaigzdes,
  item10PienoZvaigzdes,
  item11PienoZvaigzdes,
  item12PienoZvaigzdes,
  item13PienoZvaigzdes,
  item14PienoZvaigzdes,
  introPegasas,
  backgroundPegasas,
  playerPegasas,
  item1Pegasas,
  item2Pegasas,
  item3Pegasas,
  item4Pegasas,
  item5Pegasas,
  item6Pegasas,
  item7Pegasas,
  item8Pegasas,
  item9Pegasas,
  item10Pegasas,
} from './constants';
import './styles.css';
import { InputRegisterContainer } from '../helpers/InputRegisterContainer';
import { InputContainer } from '../helpers/InputContainer';
import { CompetitionScoreTableContainer } from '../helpers/CompetitionScoreTableContainer';
import { CompetitionCodeScoreTableContainer } from '../helpers/CompetitionCodeScoreTableContainer';

import { PointScoreTableContainer } from '../helpers/PointScoreTableContainer';
import { DownloadScoreTableContainer } from '../helpers/DownloadScoreTableContainer';
import { IkeaScoreTableContainer } from '../helpers/IkeaScoreTableContainer';
import { widgetHtmlService, localStorageService, boomioService } from '@/services';
import { DidYouKnowContainer } from '../helpers/DidYouKnowContainer';

class CatchGame {
  constructor() {
    this.config = localStorageService.getDefaultConfig();
    this.customer = this.config.business_name ? this.config.business_name : 'Pegasas';
    this.showCompetitiveRegistration =
      this?.config?.game_type !== '' ? this.config.game_type : 'competition';
    this.language = this.config.language ? this.config.language : '';
    this.gameCount = 0;
    this.didYouKnow = true;
    this.checkboxChange = false;
    this.checkboxChange2 = false;
    this.gameStarted = false;
    this.currentScore = 0;
    this.movement = { left: false, right: false }; // To track current movement state
    this.touchMoveActive = false; // To track touch hold state for mobile
    this.scoreTable = {};
    this.scoreTableContainerInstance;
    this.createContainer();
    document.querySelector('.game-container').style.backgroundColor =
      window.innerWidth <= 768 ? 'black' : 'none';
    this.loading = false;
    this.canvas = document.getElementById('boomio-catch-canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.style.background = `url(${
      this.customer.includes('Paper')
        ? backgroundGamtosAteitisPaper
        : this.customer.includes('Plastic')
        ? backgroundGamtosAteitis
        : this.customer.includes('Glass')
        ? backgroundGamtosAteitisGlass
        : this.customer === 'Pieno Žvaigždės'
        ? backgroundPienoZvaigzdes
        : this.customer === 'Pegasas'
        ? backgroundPegasas
        : background
    }) center`;

    this.timer = null;
    this.highscore = 0;
    this.fruits = [];
    this.numberOfFruits = 8;
    this.smashCounter = 0;
    this.catchSoundCounter = 0;
    this.animationFrame = null;
    this.defaultscore = this.customer === 'Eurovaistine' || this.customer === 'Pegasas' ? 3 : 5;
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
          const checkboxImg2 = document.querySelector('.boomio-privacyCheckbox2');
          checkboxImg2.addEventListener('click', () => {
            this.checkboxChange2 = !this.checkboxChange2;
            const checkboxImgChange2 = document.getElementById('privacyCheckboxImg2');
            checkboxImgChange2.src = this.checkboxChange2 ? checkIcon : uncheckIcon;
          });
          const phoneInputField = document.getElementById('boomio-competition-phone-input-field');

          if (phoneInputField) {
            phoneInputField.addEventListener('input', (event) => {
              event.target.value = event.target.value.replace(/(?!^\+)[^0-9]/g, '');
            });
          } else {
            console.error('');
          }

          setTimeout(() => {
            const canvas = document.getElementById('boomio-catch-canvas');
            document.getElementById('background_blur').style.opacity =
              this.customer === 'Pegasas' ? 0.8 : 0.37;
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
            document.getElementById('background_blur').style.opacity =
              this.customer === 'Pegasas' ? 0.8 : 0.37;
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

          document.getElementById('background_blur').style.opacity =
            this.customer === 'Pegasas' ? 0.8 : 0.37;

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
    }, 4000);
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
        <div>${this.language == 'LT' ? 'BRŪKŠT' : 'KLIK'}</div>
        <div>${this.language == 'LT' ? 'BRŪKŠT' : 'KLIK'}</div>
      </div><img src=${Controlls} alt="Image Description" style="display:inline;width: 110px; height: 50px;">`}
      </div>
       ${
         window.innerWidth <= 768
           ? `
      <img src=${controllLeft} alt="Image Description" style="width: 40px; height: 40px;top:calc(50% + 200px);position:absolute;left:calc(50% - 150px);" id="controllLeft">
      <img src=${controllRight} alt="Image Description" style="width: 40px; height: 40px;top:calc(50% + 200px);position:absolute;left:calc(50% + 120px);" id="controllRight">`
           : ''
       }
    <div class="boomio-score-input-container" style="box-sizing:border-box;display:none;width:130px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:40px;padding:7px;background:${
      this.customer.includes('Gamtos Ateitis')
        ? this.customer.includes('Glass')
          ? '#18904A'
          : this.customer.includes('Plastic')
          ? '#FBCA00'
          : this.customer.includes('Paper')
          ? '#488DB0'
          : '#18904A'
        : this.customer === 'Pieno Žvaigždės'
        ? '#ED1846'
        : this.customer === 'Pegasas'
        ? '#A40033'
        : '#18904A'
    };border-radius:35px">
    <div style="width: 148px;top:-15px;left:10px; height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
    <img src=${star} alt="Image Description" style="width: 20px; height: 20px;margin-top:18px"></img>

  <div style="text-align: center; color: white; font-size: 20px; font-family:${'Georama'}; font-weight: 900; word-wrap: break-word;position:absolute;left:35px;top:15px;z-index:3;line-height:30px;" id="currentScore"></div>
</div>
</div>



<div class="boomio-life-input-container" style="box-sizing:border-box;display:none;width:120px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:40px;padding:7px;background:${
      this.customer.includes('Gamtos Ateitis')
        ? this.customer.includes('Glass')
          ? '#18904A'
          : this.customer.includes('Plastic')
          ? '#FBCA00'
          : this.customer.includes('Paper')
          ? '#488DB0'
          : '#18904A'
        : this.customer === 'Pieno Žvaigždės'
        ? '#ED1846'
        : this.customer === 'Pegasas'
        ? '#A40033'
        : '#18904A'
    };border-radius:35px">
<div style="width: 148px;top:-15px;height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
<img src=${life} alt="Image Description" style="margin-left:-10px;width: 50px; height: 50px;margin-top:15px"></img>

<div style="text-align: center; color: white; font-size: 16px; font-family:${'Georama'} ;font-weight: 900; word-wrap: break-word;position:absolute;left:35px;top:17px;z-index:3;line-height:30px;" id="currentLife"></div>
</div>
</div>



    <img src=${
      this.customer.includes('Paper')
        ? introGamtosAteitisPaper
        : this.customer.includes('Plastic')
        ? introGamtosAteitis
        : this.customer.includes('Glass')
        ? introGamtosAteitisGlass
        : this.customer === 'Pieno Žvaigždės'
        ? introPienoZvaigzdes
        : this.customer === 'Pegasas'
        ? introPegasas
        : intro
    } alt="Image Description" style="z-index:4;width:${
      document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
    }; height: 674px;position:absolute;pointer-events: none; display:block;" id="background_intro">


    ${
      this.customer === 'Pegasas'
        ? `<div alt="Image Description" style="z-index:1;width: ${
            document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
          }; height: 668px;position:absolute;opacity:0;pointer-events: none; display:none;background-color:#8E1735" id="background_blur"></div>`
        : `    <img src=${blurImage.src} alt="Image Description" style="z-index:3;width: ${
            document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
          }; height: 668px;position:absolute;opacity:${
            this.customer === 'Pegasas' ? 0.8 : 0.37
          };pointer-events: none; display:block;" id="background_blur">`
    }

    ${
      this.showCompetitiveRegistration
        ? new InputRegisterContainer(this.customer).createInputRegisterContainer().outerHTML
        : ''
    }

    <div class="close-game-container" id="close-game-container" style="top:calc(50% - 290px);display:block;width:25px;height:25px;">
<img src=${close} alt="Image Description" style="width: 100%; height: 100%;"></img>
</div>
    ${new InputContainer(this.customer, 'drive').createInputContainerDiv().outerHTML}

        <canvas id="boomio-catch-canvas" width=${
          document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
        }; height="668px"></canvas>
      </div>
    `;
    widgetHtmlService.container.appendChild(gameContainer);
    if (this.showCompetitiveRegistration === 'competition') {
      const gameContainer = document.querySelector('.game-container');

      if (this.customer === 'Pegasas') {
        this.scoreTableContainerInstance = new CompetitionCodeScoreTableContainer(
          this.customer,
          this.scoreTable,
        );
      } else {
        this.scoreTableContainerInstance = new CompetitionScoreTableContainer(
          this.customer,
          this.scoreTable,
        );
      }

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
      this.customer.includes('Gamtos Ateitis') ||
      this.customer === 'Pieno Žvaigždės' ||
      this.customer === 'Pegasas'
    ) {
      const gameContainer = document.querySelector('.game-container');

      const didYouKnowContainer = new DidYouKnowContainer(this.customer);
      gameContainer.appendChild(didYouKnowContainer.containerDiv);
    }

    if (
      this.showCompetitiveRegistration === 'competition' ||
      this.showCompetitiveRegistration === 'points' ||
      this.showCompetitiveRegistration === 'collectable'
    ) {
      const clickEventHandlerShowRules = () => {
        const competitionConfirmFieldBody = document.getElementById(
          'boomio-competition-confirm-field',
        );
        if (this.gameCount === 0) {
          setTimeout(() => {
            const emailInput = document.querySelector('.boomio-competition-email-input-field');
            const playerNameInput = document.querySelector('.boomio-competition-name-input-field');
            const phone = document.querySelector('.boomio-competition-phone-input-field');

            const checkboxChange = this.checkboxChange;
            const checkboxChange2 = this.checkboxChange2;

            if (!checkboxChange) {
              document.getElementById('competition-checkbox-error').innerText =
                this.language === 'LV'
                  ? 'Spēlētājam ir jāpiekrīt datu apstrādei, lai turpinātu.'
                  : 'Norint tęsti, privaloma sutikti su privatumo politika.';
              document.getElementById('competition-checkbox-error').style.backgroundColor =
                '#FFBABA';
              document.getElementById('competition-checkbox-error').style.display = 'block';
              document.getElementById('competition-checkbox-error').style.height = '14px';

              document.getElementById('competition-name-error').innerText = '';

              document.getElementById('competition-name-error').style.backgroundColor =
                'transparent';

              document.getElementById('competition-email-error').innerText = '';
              document.getElementById('competition-email-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error2').innerText = '';
              document.getElementById('competition-checkbox-error2').style.backgroundColor =
                'transparent';
            }
            if (!checkboxChange2 && this.customer === 'Pegasas') {
              document.getElementById('competition-checkbox-error2').innerText =
                'Norint tęsti, privaloma sutikti gauti naujienlaiškius.';
              document.getElementById('competition-checkbox-error2').style.backgroundColor =
                '#FFBABA';
              document.getElementById('competition-checkbox-error2').style.display = 'block';
              document.getElementById('competition-checkbox-error2').style.height = '14px';

              document.getElementById('competition-name-error').innerText = '';

              document.getElementById('competition-name-error').style.backgroundColor =
                'transparent';

              document.getElementById('competition-email-error').innerText = '';
              document.getElementById('competition-email-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error').innerText = '';
              document.getElementById('competition-checkbox-error').style.backgroundColor =
                'transparent';
            }
            if (emailInput?.value === '' || emailInput?.value === null) {
              document.getElementById('competition-email-error').innerText =
                this.language === 'LV'
                  ? 'Obligāti aizpildāmie lauki.'
                  : 'Norint tęsti privaloma užpildyti.';
              document.getElementById('competition-email-error').style.backgroundColor = '#FFBABA';
              document.getElementById('competition-name-error').innerText = '';

              document.getElementById('competition-name-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error').innerText = '';
              document.getElementById('competition-checkbox-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error2').innerText = '';
              document.getElementById('competition-checkbox-error2').style.backgroundColor =
                'transparent';
            }
            if (playerNameInput?.value === '' || playerNameInput?.value === null) {
              document.getElementById('competition-name-error').innerText =
                this.language === 'LV'
                  ? 'Obligāti aizpildāmie lauki.'
                  : 'Norint tęsti privaloma užpildyti.';
              document.getElementById('competition-name-error').style.backgroundColor = '#FFBABA';

              document.getElementById('competition-email-error').innerText = '';
              document.getElementById('competition-email-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error').innerText = '';
              document.getElementById('competition-checkbox-error').style.backgroundColor =
                'transparent';
              document.getElementById('competition-checkbox-error2').innerText = '';
              document.getElementById('competition-checkbox-error2').style.backgroundColor =
                'transparent';
            }
            if (
              (playerNameInput?.value === '' || playerNameInput?.value === null) &&
              (playerNameInput?.value === '' || playerNameInput?.value === null)
            ) {
              document.getElementById('competition-name-error').innerText =
                this.language === 'LV'
                  ? 'Obligāti aizpildāmie lauki.'
                  : 'Norint tęsti privaloma užpildyti.';
              document.getElementById('competition-name-error').style.backgroundColor = '#FFBABA';
              document.getElementById('competition-email-error').innerText =
                this.language === 'LV'
                  ? 'Obligāti aizpildāmie lauki.'
                  : 'Norint tęsti privaloma užpildyti.';
              document.getElementById('competition-email-error').style.backgroundColor = '#FFBABA';
            } else {
              if (
                (this.showCompetitiveRegistration === 'competition' ||
                  this.showCompetitiveRegistration === 'points' ||
                  this.showCompetitiveRegistration === 'collectable') &&
                checkboxChange &&
                this.loading === false &&
                (this.customer !== 'Pegasas' || checkboxChange2)
              ) {
                const phoneValue = phone?.value?.trim();
                this.loading = true;

                const boomioCatchSpinner = document.createElement('div');
                boomioCatchSpinner.classList.add('boomioCatchSpinner'); // Apply class

                // Apply inline styles for the button layout
                boomioCatchSpinner.style.border = '4px solid #f3f3f3';
                boomioCatchSpinner.style.borderTop = '4px solid #3D4928';
                boomioCatchSpinner.style.borderRadius = '50%';
                boomioCatchSpinner.style.width = '20px';
                boomioCatchSpinner.style.height = '20px';

                // Append the boomioCatchSpinner to the button
                competitionConfirmFieldBody.appendChild(boomioCatchSpinner);

                // Append styles if not present
                if (!document.getElementById('boomioCatchSpinner-styles')) {
                  const style = document.createElement('style');
                  style.id = 'boomioCatchSpinner-styles';
                  style.textContent = `
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    .boomioCatchSpinner {
                      animation: spin 1s linear infinite;
                    }
                  `;
                  document.head.appendChild(style);
                }
                boomioService
                  .signal('', 'user_info', {
                    emails_consent: this.checkboxChange2,
                    user_email: emailInput?.value,
                    user_name: playerNameInput?.value,
                    game_code: this.game_code,
                    ...(phoneValue ? { phone: phoneValue } : {}), // Include only if phoneValue is non-empty
                  })
                  .then((response) => {
                    boomioCatchSpinner.remove();
                    if (response.success === false) {
                      this.loading = false;

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

                        document.getElementById('competition-name-error').innerText = '';

                        document.getElementById('competition-name-error').style.backgroundColor =
                          'transparent';
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

                        document.getElementById('competition-email-error').innerText = '';
                        document.getElementById('competition-email-error').style.backgroundColor =
                          'transparent';
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
                        document.getElementById('background_blur').style.opacity =
                          this.customer === 'Pegasas' ? 0.8 : 0.37;
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
                    this.loading = false;
                    boomioCatchSpinner.remove();
                    console.error('Error:', error);
                  });
              }
            }
          }, 300);
        }
      };

      const clickEventHandlerResetGame = () => {
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
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }
        }, 400);
      };
      const clickEventHandlerDidYouKnow = () => {
        const didYouKnowTableContainer = document.querySelector('.did-you-know-container');

        didYouKnowTableContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
        setTimeout(() => {
          didYouKnowTableContainer.style.height = '10px';
          didYouKnowTableContainer.style.top = 'calc(50% + 330px)';
          didYouKnowTableContainer.style.opacity = 0;
        }, 100);
        setTimeout(() => {
          didYouKnowTableContainer.style.display = 'none';
        }, 1000);
        const competitionTableContainer = document.querySelector('.competition-table-container');
        document.getElementById('background_blur').style.display = 'block';
        competitionTableContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
        competitionTableContainer.style.display = 'block';

        setTimeout(() => {
          competitionTableContainer.style.height = '680px';
          competitionTableContainer.style.top = 'calc(50%)';
          competitionTableContainer.style.opacity = 1;
        }, 100);
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

      if (
        this.customer.includes('Gamtos Ateitis') ||
        this.customer === 'Pieno Žvaigždės' ||
        this.customer === 'Pegasas'
      ) {
        const competitionDidYouKnow = document.getElementById('boomio-close-did-you-know');
        competitionDidYouKnow.addEventListener('click', clickEventHandlerDidYouKnow);
      }
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
    document.getElementById('currentLife').innerHTML =
      this.customer === 'Eurovaistine'
        ? `${this.defaultscore}/${this.defaultscore}`
        : `${this.defaultscore}/${this.defaultscore}`;
    currectScoreDiv.style.opacity = 1;
  }

  createPlayer() {
    this.player = new Player(this.customer, this.canvas, this.context, this.defaultscore);
  }

  createFruits() {
    this.fruits = [];
    if (this.customer.includes('Gamtos Ateitis') || this.customer === 'Pieno Žvaigždės') {
      for (let i = 0; i < this.numberOfFruits - 2; i++) {
        const fruit = new Fruit(this.customer, this.canvas, this.context, this.player, this);
        fruit.chooseFruit();
        this.fruits.push(fruit);
      }
      for (let i = 0; i < 1; i++) {
        const fruit = new Fruit(this.customer, this.canvas, this.context, this.player, this, 'bad');
        fruit.chooseFruit();
        this.fruits.push(fruit);
      }
    } else {
      for (let i = 0; i < this.numberOfFruits; i++) {
        const fruit = new Fruit(this.customer, this.canvas, this.context, this.player, this);
        fruit.chooseFruit();
        this.fruits.push(fruit);
      }
    }
  }

  addEventListeners() {
    // Remove old listeners to avoid duplicates
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);

    // Add new listeners for keyboard
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);

    // Add new listeners for mobile touch
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
  }

  handleKeyDown = (e) => {
    if (!this.player.gameOver) {
      e.preventDefault();
      if (e.keyCode === 37) {
        // Left arrow key
        this.movement.left = true;
      } else if (e.keyCode === 39) {
        // Right arrow key
        this.movement.right = true;
      }
    }
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 37) {
      // Left arrow key
      this.movement.left = false;
    } else if (e.keyCode === 39) {
      // Right arrow key
      this.movement.right = false;
    }
  };

  // Handle touch start event for mobile
  handleTouchStart = (e) => {
    if (!this.player.gameOver) {
      const touchX = e.touches[0].clientX;
      const canvasMiddle = window.innerWidth / 2;

      if (touchX < canvasMiddle) {
        this.movement.left = true;
      } else {
        this.movement.right = true;
      }

      this.touchMoveActive = true; // Indicate that touch is active
    }
  };

  handleTouchEnd = () => {
    // Stop movement when the touch ends
    this.movement.left = false;
    this.movement.right = false;
    this.touchMoveActive = false; // Indicate that touch is no longer active
  };

  updatePlayerMovement() {
    if (this.movement.left) {
      this.player.moveLeft();
    }
    if (this.movement.right) {
      this.player.moveRight();
    }
  }

  startGame() {
    this.updateGame();

    window.requestAnimationFrame(() => this.drawGame());
  }
  updateGame() {
    if (!this.player.gameOver) {
      const count = this.customer.includes('Gamtos Ateitis')
        ? 5
        : this.customer === 'Pieno Žvaigždės'
        ? 5
        : 3;
      if (this.player.fruitsMissed >= count) {
        this.player.gameOver = true;
      }

      this.fruits.forEach((fruit) => fruit.fall(fruit));
      if (this.customer.includes('Gamtos Ateitis') || this.customer === 'Pieno Žvaigždės') {
        const newNumberOfFruits = 4 + Math.floor(this.currentScore / 500);
        if (this.fruits.length < newNumberOfFruits) {
          // Create additional fruits to reach the new number
          for (let i = this.fruits.length; i < newNumberOfFruits; i++) {
            const fruit = new Fruit(this.customer, this.canvas, this.context, this.player, this);
            fruit.chooseFruit();
            this.fruits.push(fruit);
          }
        }

        if (this.fruits.length < newNumberOfFruits + 2) {
          // Create additional fruits to reach the new number
          for (let i = this.fruits.length; i < newNumberOfFruits; i++) {
            const fruit = new Fruit(
              this.customer,
              this.canvas,
              this.context,
              this.player,
              this,
              'bad',
            );
            fruit.chooseFruit();
            this.fruits.push(fruit);
          }
        }
      } else {
        const newNumberOfFruits = 8 + Math.floor(this.currentScore / 500);
        if (this.fruits.length < newNumberOfFruits) {
          // Create additional fruits to reach the new number
          for (let i = this.fruits.length; i < newNumberOfFruits; i++) {
            const fruit = new Fruit(this.customer, this.canvas, this.context, this.player, this);
            fruit.chooseFruit();
            this.fruits.push(fruit);
          }
        }
      }

      this.timer = window.setTimeout(() => this.updateGame(), 30);
    }
  }

  drawGame() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (!this.player.gameOver) {
      // Game is running
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Render fruits first (so they appear behind the player)
      this.fruits.forEach((fruit) => fruit.render());

      // Render player on top of the fruits
      this.player.render();

      // Continue the game loop
      this.updatePlayerMovement(); // Continuously update player movement

      this.animationFrame = window.requestAnimationFrame(() => this.drawGame());
    } else {
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

            canvas.style.transition = 'filter 0.6s ease';
            canvas.style.filter = 'blur(2px)';
            let competitionTableContainer = '';
            if (
              this.customer.includes('Gamtos Ateitis') ||
              this.customer === 'Pieno Žvaigždės' ||
              this.customer === 'Pegasas'
            ) {
              competitionTableContainer = document.querySelector('.did-you-know-container');
            } else {
              competitionTableContainer = document.querySelector('.competition-table-container');
            }

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
  constructor(customer, canvas, context, defaultscore) {
    this.canvas = canvas;
    this.context = context;
    this.gameOver = false;
    this.score = 0;
    this.fruitsCollected = 0;
    this.fruitsMissed = 0;
    this.playerWidth = 110;
    this.playerHeight = 80;
    this.playerSpeed = 4;
    this.x = this.canvas.width / 2 - this.playerWidth / 2;
    this.y = this.canvas.height - this.playerHeight - 18;
    this.playerImage = new Image();
    this.playerImage.src = customer.includes('Paper')
      ? playerGamtosAteitisPaper
      : customer.includes('Plastic')
      ? playerGamtosAteitis
      : customer.includes('Glass')
      ? playerGamtosAteitisGlass
      : customer === 'Pieno Žvaigždės'
      ? playerPienoZvaigzdes
      : customer === 'Pegasas'
      ? playerPegasas
      : player;
    this.defaultscore = defaultscore;
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
  constructor(customer, canvas, context, player, game, type) {
    this.canvas = canvas;
    this.context = context;
    this.player = player;
    this.game = game;
    this.type = type;
    this.customer = customer;
    if (this.customer.includes('Gamtos Ateitis')) {
      if (type === 'bad') {
        this.fruitNumber = Math.floor(Math.random() * 13);
      } else {
        this.fruitNumber = Math.floor(Math.random() * 10 + 13);
      }
    } else if (this.customer === 'Pieno Žvaigždės') {
      if (type === 'bad') {
        this.fruitNumber = Math.floor(Math.random() * 6 + 8);
      } else {
        this.fruitNumber = Math.floor(Math.random() * 8);
      }
    } else {
      this.fruitNumber = Math.floor(Math.random() * 10);
    }

    this.fruitType = '';
    this.fruitScore = 0;
    this.fruitWidth =
      this.customer === 'Pegasas' ? 60 : this.customer === 'Pieno Žvaigždės' ? 50 : 40;
    this.fruitHeight =
      this.customer === 'Pegasas' ? 60 : this.customer === 'Pieno Žvaigždės' ? 50 : 40;
    this.fruitWidthArray = [40, 40, 40, 40, 30];
    this.fruitHeightArray = [40, 40, 40, 40, 30];
    this.fruitImage = new Image();
    this.fruitSpeed = Math.floor(
      Math.random() * 3 + (this.customer === 'Pieno Žvaigždės' ? 1.3 : 1),
    );
    this.x = Math.random() * (this.canvas.width - this.fruitWidth);
    this.y = Math.random() * -this.canvas.height - this.fruitHeight;

    // Fruit images
    if (this.customer && this.customer.includes('Plastic')) {
      // Handle Gamtos Ateitis images
      this.images = [
        item1,
        item4,
        item5,
        item6,
        item7,
        item8,
        item10,
        item12,
        item14,
        item16,
        item19,
        item20,
        item23,
        item2,
        item3,
        item9,
        item11,
        item13,
        item15,
        item17,
        item18,
        item21,
        item22,
      ];
    } else if (this.customer && this.customer.includes('Paper')) {
      // Handle Paper images
      this.images = [
        item1Paper,
        item4Paper,
        item5Paper,
        item6Paper,
        item7Paper,
        item8Paper,
        item10Paper,
        item12Paper,
        item14Paper,
        item16Paper,
        item19Paper,
        item20Paper,
        item23Paper,
        item2Paper,
        item3Paper,
        item9Paper,
        item11Paper,
        item13Paper,
        item15Paper,
        item17Paper,
        item18Paper,
        item21Paper,
        item22Paper,
      ];
    } else if (this.customer && this.customer.includes('Glass')) {
      // Handle Glass images
      this.images = [
        item1Glass,
        item4Glass,
        item5Glass,
        item6Glass,
        item7Glass,
        item8Glass,
        item10Glass,
        item12Glass,
        item14Glass,
        item16Glass,
        item19Glass,
        item20Glass,
        item23Glass,
        item2Glass,
        item3Glass,
        item9Glass,
        item11Glass,
        item13Glass,
        item15Glass,
        item17Glass,
        item18Glass,
        item21Glass,
        item22Glass,
      ];
    } else if (this.customer && this.customer === 'Pieno Žvaigždės') {
      // Handle Glass images
      this.images = [
        item1PienoZvaigzdes,
        item2PienoZvaigzdes,
        item3PienoZvaigzdes,
        item4PienoZvaigzdes,
        item5PienoZvaigzdes,
        item6PienoZvaigzdes,
        item7PienoZvaigzdes,
        item8PienoZvaigzdes,
        item9PienoZvaigzdes,
        item10PienoZvaigzdes,
        item11PienoZvaigzdes,
        item12PienoZvaigzdes,
        item13PienoZvaigzdes,
        item14PienoZvaigzdes,
      ];
    } else {
      // Default catch images if none of the above conditions are met
      this.images = [
        item1Pegasas,
        item2Pegasas,
        item3Pegasas,
        item4Pegasas,
        item5Pegasas,
        item6Pegasas,
        item7Pegasas,
        item8Pegasas,
        item9Pegasas,
        item10Pegasas,
      ];
    }
  }

  chooseFruit() {
    if (this.customer && this.customer.includes('Plastic')) {
      // Handle Gamtos Ateitis fruit types
      this.fruitType = [
        'item1',
        'item4',
        'item5',
        'item6',
        'item7',
        'item8',
        'item10',
        'item12',
        'item14',
        'item16',
        'item19',
        'item20',
        'item23',
        'item2',
        'item3',
        'item9',
        'item11',
        'item13',
        'item15',
        'item17',
        'item18',
        'item21',
        'item22',
      ][this.fruitNumber];
    } else if (this.customer && this.customer.includes('Paper')) {
      // Handle Paper fruit types
      this.fruitType = [
        'item1Paper',
        'item4Paper',
        'item5Paper',
        'item6Paper',
        'item7Paper',
        'item8Paper',
        'item10Paper',
        'item12Paper',
        'item14Paper',
        'item16Paper',
        'item19Paper',
        'item20Paper',
        'item23Paper',
        'item2Paper',
        'item3Paper',
        'item9Paper',
        'item11Paper',
        'item13Paper',
        'item15Paper',
        'item17Paper',
        'item18Paper',
        'item21Paper',
        'item22Paper',
      ][this.fruitNumber];
    } else if (this.customer && this.customer.includes('Glass')) {
      // Handle Glass fruit types
      this.fruitType = [
        'item1Glass',
        'item4Glass',
        'item5Glass',
        'item6Glass',
        'item7Glass',
        'item8Glass',
        'item10Glass',
        'item12Glass',
        'item14Glass',
        'item16Glass',
        'item19Glass',
        'item20Glass',
        'item23Glass',
        'item2Glass',
        'item3Glass',
        'item9Glass',
        'item11Glass',
        'item13Glass',
        'item15Glass',
        'item17Glass',
        'item18Glass',
        'item21Glass',
        'item22Glass',
      ][this.fruitNumber];
    } else if (this.customer === 'Pieno Žvaigždės') {
      // Handle Glass fruit types
      this.fruitType = [
        'item1PienoZvaigzdes',
        'item2PienoZvaigzdes',
        'item3PienoZvaigzdes',
        'item4PienoZvaigzdes',
        'item5PienoZvaigzdes',
        'item6PienoZvaigzdes',
        'item7PienoZvaigzdes',
        'item8PienoZvaigzdes',
        'item9PienoZvaigzdes',
        'item10PienoZvaigzdes',
        'item11PienoZvaigzdes',
        'item12PienoZvaigzdes',
        'item13PienoZvaigzdes',
        'item14PienoZvaigzdes',
      ][this.fruitNumber];
    } else {
      // Default catch fruit types if none of the above conditions are met
      this.fruitType = [
        'item1Pegasas',
        'item2Pegasas',
        'item3Pegasas',
        'item4Pegasas',
        'item5Pegasas',
        'item6Pegasas',
        'item7Pegasas',
        'item8Pegasas',
        'item9Pegasas',
        'item10Pegasas',
      ][this.fruitNumber];
    }

    if (this.customer.includes('Gamtos Ateitis')) {
      this.fruitScore = [
        -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
      ][this.fruitNumber];
    } else if (this.customer === 'Pieno Žvaigždės') {
      this.fruitScore = [100, 100, 100, 100, 100, 100, 100, 100, -50, -50, -50, -50, -50, -50][
        this.fruitNumber
      ];
    } else {
      this.fruitScore = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100][this.fruitNumber];
    }
    this.fruitImage.src = this.images[this.fruitNumber];
  }

  fall(fruit) {
    if (this.y < this.canvas.height - this.fruitHeight) {
      this.y += this.fruitSpeed;
    } else {
      if (this.customer.includes('Gamtos Ateitis') || this.customer === 'Pieno Žvaigždės') {
        if (fruit.fruitScore > 0 && this.game.currentScore > 0) {
          this.game.currentScore += -50;
          document.getElementById('currentScore').innerHTML = `${this.game.currentScore}`;
          this.showScoreEffect('-50');
        }
      } else {
        if (fruit.fruitScore > 0) {
          this.player.fruitsMissed++;
          document.getElementById('currentLife').innerHTML = `${Math.max(
            0,
            this.player.defaultscore - this.player.fruitsMissed,
          )}/${this.player.defaultscore}`;
          if (this.customer === 'Pegasas') {
            this.showScoreEffect('-1', true);
          }
        }
        this.changeState();
      }

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

  showScoreEffect(score, showLife) {
    const x = this.canvas.width / 2 - this.playerWidth / 2;
    const y = this.canvas.height - this.playerHeight - 200;

    const gameContainer = document.querySelector('.game-container');

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('float-score');
    scoreContainer.style.left = `${x}px`;
    scoreContainer.style.top = `${y}px`;
    scoreContainer.style.position = 'absolute';
    scoreContainer.style.display = 'flex';

    if (showLife) {
      const scoreText = document.createElement('div');
      scoreText.innerHTML = `-`;
      scoreText.style.color = '#fff';
      scoreText.style.fontSize = '24px';
      scoreText.style.fontWeight = 'bold';
      scoreText.style.marginRight = '10px';
      scoreText.style.marginTop = '25px';

      const lifeImg = document.createElement('img');
      lifeImg.src = life;
      lifeImg.alt = 'Image Description';
      lifeImg.style.width = '70px';
      lifeImg.style.height = '50px';
      lifeImg.style.marginTop = '15px';
      lifeImg.style.marginLeft = '-20px';
      scoreContainer.appendChild(scoreText);
      scoreContainer.appendChild(lifeImg);
    } else {
      const scoreText = document.createElement('div');
      scoreText.innerHTML = `${score}`;
      scoreText.style.color = '#fff';
      scoreText.style.fontSize = '24px';
      scoreText.style.fontWeight = 'bold';
      scoreText.style.marginRight = '10px'; // Add space between text and image
      scoreContainer.appendChild(scoreText);
    }
    gameContainer.appendChild(scoreContainer);

    setTimeout(() => {
      scoreContainer.remove();
    }, 1000);
  }

  updateScore() {
    if (this.fruitScore > 0) {
      this.game.currentScore += this.fruitScore;
      document.getElementById('currentScore').innerHTML = `${this.game.currentScore}`;

      const x = 200;
      const y = 300;
      this.showScoreEffect('+100');
    } else {
      this.player.fruitsMissed++;
      document.getElementById('currentLife').innerHTML = `${Math.max(
        0,
        this.player.defaultscore - this.player.fruitsMissed,
      )}/${this.player.defaultscore}`;
      this.showScoreEffect('-1', true);
    }

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
    this.fruitNumber = Math.floor(
      Math.random() *
        (this.customer.includes('Gamtos Ateitis')
          ? 23
          : this.customer === 'Pieno Žvaigždės'
          ? 14
          : 5),
    );

    this.fruitSpeed = Math.floor(
      (Math.random() * 2 + (this.customer === 'Pieno Žvaigždės' ? 1.3 : 1)) *
        (1 + Math.floor(this.game.currentScore / 500) * 0.1),
    );
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
