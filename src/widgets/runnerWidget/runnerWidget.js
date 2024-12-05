import './runnerStyles.css';
import PxLoader from './scripts/PxLoader.js';
import howlercore from './scripts/howler.core.js';
import PxLoaderImage from './scripts/PxLoaderImage.js';
import yandexScripts from './scripts/yandexScripts.js';
import { localStorageService, widgetHtmlService } from '@/services';
import {
  intro,
  tapImageBarbora,
  stopwatch,
  star,
  newRecord,
  newRecordEE,
  newRecordLV,
  close,
  BarboraIntro,
  IkeaIntro,
  UnisendIntroLV,
  UnisendIntroEE,
  newRecordIkea,
  runnerbackground,
  home,
  redo,
  up,
  down,
  left,
  right,
  coin,
  add,
  prize,
  achieves,
  cart,
  play,
  boost,
  shield,
  pause,
} from './constants';
import { InputRegisterContainer } from '../helpers/InputRegisterContainer';
import { InputContainer } from '../helpers/InputContainer';
import { CompetitionScoreTableContainer } from '../helpers/CompetitionScoreTableContainer';

class runnerWidget {
  static ctx;

  constructor() {
    this.config = localStorageService.getDefaultConfig();
    this.customer = this.config.business_name ? this.config.business_name : 'Barbora';
    this.showCompetitiveRegistration =
      this?.config?.game_type !== '' ? this.config.game_type : 'points';
    this.language = this.config.language ? this.config.language : '';

    this.scoreTable = {};
    this.scoreTableContainerInstance;

    this.createContainer();
    document.querySelector('.game-container').style.backgroundColor =
      window.innerWidth <= 768 ? 'black' : 'none';
  }

  createContainer = () => {
    const newHighscoreStarsImage = new Image();
    newHighscoreStarsImage.src = 'https://i.ibb.co/P43Lwwz/New-demo-best-score.gif';
    const newHighscoreImage = new Image();
    newHighscoreImage.src = 'https://i.ibb.co/fdFppDg/New-best-score.png';

    const myCanvas = document.createElement('div');
    myCanvas.setAttribute('id', 'boomio-drive-container');
    myCanvas.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );

    myCanvas.innerHTML = `
    <div class="game-container" id="game-container">


    <img class="new_highscore_stars" src=${
      newHighscoreStarsImage.src
    } alt="Image Description" style="overflow: hidden;z-index:4;margin-top:-300px;display:none; height: 95px;position:absolute;pointer-events:none;" >
    </img>
    <div class="new_highscore"><img src=${
      this.customer === 'Ikea'
        ? newRecordIkea
        : this.language === 'EE'
        ? newRecordEE
        : this.language === 'LV'
        ? newRecordLV
        : newRecord
    }  alt="Image Description" style="width: 100%; height: 100%;">
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
    ${`<div style="gap:20px;display:flex;color: #FFF;text-shadow: 4px 4px 14px rgba(255, 255, 255, 0.41);font-family:${
      this.customer === 'Ikea' ? 'Noto Sans' : 'Georama'
    };font-size: 26px;font-weight: 900;line-height: 130%; /* 33.8px */ letter-spacing: -0.16px;text-transform: ${
      this.customer === 'Ikea' ? 'none' : 'uppercase'
    };">
        <div>${
          this.language === 'LV' ? 'kustēties' : this.language === 'EE' ? 'LIIGU' : 'Brūkšt'
        }</div>
        <div>${
          this.language === 'LV' ? 'kustēties' : this.language === 'EE' ? 'LIIGU' : 'Brūkšt'
        }</div>
      </div><img src=${tapImageBarbora} alt="Image Description" style="width: 93px; height: 89px;">`}
      </div>
    <div class="boomio-score-input-container" style="box-sizing:border-box;display:none;width:160px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:45px;padding:7px;background:${
      this.customer === 'Barbora'
        ? '#CC0001'
        : this.customer === 'Ikea'
        ? '#0058A3'
        : this.customer === 'Unisend'
        ? '#376728'
        : '#FFE92D'
    };border-radius:35px">
    <div style="width: 148px;top:-15px;left:10px; height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
    <img src=${star} alt="Image Description" style="width: 20px; height: 20px;margin-top:20px"></img>

  <div style="text-align: center; color: white; font-size: 20px; font-family:${
    this.customer === 'Ikea' ? 'Noto Sans' : 'Georama'
  }; font-weight: 900; word-wrap: break-word;position:absolute;left:70px;top:17px;z-index:3;line-height:30px;" id="currentScore"></div>
</div>
</div>



<div class="boomio-time-input-container" style="box-sizing:border-box;display:none;width:160px;box-shadow:0px 3px 6px 0px rgba(30, 30, 30, 0.30);height:45px;padding:7px;background:${
      this.customer === 'Barbora'
        ? '#CC0001'
        : this.customer === 'Ikea'
        ? '#0058A3'
        : this.customer === 'Unisend'
        ? '#376728'
        : '#FFE92D'
    };border-radius:35px">
<div style="width: 148px;top:-15px;left:10px; height: 100%; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex;">
<img src=${stopwatch} alt="Image Description" style="width: 20px; height: 20px;margin-top:20px"></img>

<div style="text-align: center; color: white; font-size: 20px; font-family:${
      this.customer === 'Ikea' ? 'Noto Sans' : 'Georama'
    } ;font-weight: 900; word-wrap: break-word;position:absolute;left:70px;top:17px;z-index:3;line-height:30px;" id="currentTime"></div>
</div>
</div>



    
    ${
      this.showCompetitiveRegistration
        ? new InputRegisterContainer(this.customer).createInputRegisterContainer().outerHTML
        : ''
    }

    
    ${new InputContainer(this.customer, 'drive').createInputContainerDiv().outerHTML}


 
<div class="boomio-runner-body" oncontextmenu="return false;">
  <div id="turnLandscape">
    rotate your device
    <img style='margin-top: 30px' id='rotateIcon' src="assets/gui/orientation.png" alt="">
  </div>
  <div class="boomio-runner-main">

    <div class="boomio-runner-wrapper boomio-screenRatio">
      <div class="boomio-runner-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="boomio-runner-controlBlock boomio-hide">
        Controls
        <img class='boomio-runner-controlButton' src="${up}" alt="">
        <div><img class='boomio-runner-controlButton' src="${left}" alt="">
          <img class='boomio-runner-controlButton' src="${right}" alt="">
          <img class='boomio-runner-controlButton' src="${down}" alt="">
        </div>
      </div>
     <canvas id="boomio-runner-canvas" class="boomio-runner-canvas" style="${
       document.body.offsetWidth < 418 ? document.body.offsetWidth + 'px' : '418px'
     }">
      </canvas>

      <img class="boomio-runner-pauseButton boomio-runner-button boomio-hide" src="${pause}" alt="">
      <div class="boomio-runner-score boomio-hide"></div>
      <div class="boomio-runner-coins boomio-hide">
        <div class="coinsText"></div>
        <img src="${coin}" alt="">
      </div>

      <div class="boomio-runner-leftButtonsBlock boomio-hide">
        <img id="mobileLeftButton" ontouchstart="leftPressed = true; this.style.opacity = '0.5'"
          ontouchend="leftPressed = false;  this.style.opacity = '1'" class="boomio-runner-mobileControlButt"
          src="assets/gui/left.png" alt="">
        <img id="mobileRightButton" ontouchstart="rightPressed = true; this.style.opacity = '0.5'"
          ontouchend="rightPressed = false; this.style.opacity = '1'" class="boomio-runner-mobileControlButt"
          src="assets/gui/right.png" alt="">
      </div>

      <div class="boomio-runner-rightButtonsBlock boomio-hide">
        <img id="mobileUpButton" ontouchstart="jumpBegin(); this.style.opacity = '0.5'"
          ontouchend="this.style.opacity = '1'" class="boomio-runner-mobileControlButt" src="assets/gui/up.png" alt="">
        <img id="mobileDownButton" ontouchstart="slideBegin(); this.style.opacity = '0.5'"
          ontouchend="slideEnd(); this.style.opacity = '1'" class="boomio-runner-mobileControlButt" src="assets/gui/down.png" alt="">
      </div>



    </div>
    <div class="boomio-runner-pause boomio-insideScreenRatio boomio-hide">
      PAUSED
      <div class="boomio-buttonHolder ">
        <img class='boomio-runner-replayButton1 boomio-runner-button' src="assets/gui/Redo.png" alt="" ">
        <img class="playOnPauseButton boomio-runner-button" src="assets/gui/Play.png" alt=""
          onclick="PauseToggle(); ">
        <img class='boomio-runner-homeButton boomio-runner-button' src="${home}" alt=""  ">
      </div>
    </div>
    <div class="boomio-runner-gameOver boomio-insideScreenRatio boomio-hide">
      <div class='boomio-runner-HIandRecord'></div>
      <div class="boomio-runner-score boomio-runner-gameOverScore"></div>      
      <div class="boomio-runner-gameOverCoinsHolder">
        <div class="gameOverCoins"></div>
        <img class='boomio-runner-payForLifeImg'src="${coin}" alt="">
     </div>
      <div class="boomio-runner-saveMeHolder">
        save me!
        <div class="boomio-runner-saveMeButtonsHolder">
          <div class="boomio-runner-payForLife boomio-runner-smallBtn boomio-runner-saveBtn" onclick="boomio-runner-payForLife()">
            100
            <img class='boomio-runner-payForLifeImg'src="${coin}" alt="">
         </div>
           <img class='boomio-runner-smallBtn boomio-runner-saveBtn' src="${add}" alt=""
             onclick="showRevawardVideo(saveMe); "><br>
        </div>
        
        
      </div>
      
      <div class="boomio-buttonHolder">
        <img class='boomio-runner-homeButton1 boomio-runner-button' src="${home}" alt="">
        <img class='boomio-runner-replayButton boomio-runner-button' src="${redo}" alt="">
      </div>
    </div>
    <div class="boomio-runner-mainMenu boomio-runner-mainBg boomio-hide boomio-screenRatio">
      <div class="boomio-runner-mainMenuSide">
        <ul class="boomio-circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class='boomio-runner-mainTitle'>
          runner test
        </div>

        <div class="boomio-runner-mainMenuButtons">

          <div class='storeButton  boomio-runner-menuButton' >
            <img src="${cart}" alt="">
            store
          </div>
          <div class='boomio-runner-playButton  boomio-runner-menuButton' ">
            <img src="${play}" alt="">
            play
          </div>
          <div class='achivesButton  boomio-runner-menuButton' ">
            <img src="${achieves}" alt="">
            achives
          </div>
        </div>
        <div class="boomio-runner-mainLeftInfo">
          <div class="mainLeftWrapper">
            <img id='boomio-runner-prizeImg' src="${prize}">
            <div class='HighScoreBlock boomio-runner-mainStatText'></div>
          </div>
          <div class="mainLeftWrapper">
            <img id='boomio-runner-coinImg' src="${coin}">
            <div class='mainCoinsText boomio-runner-mainStatText'></div>
          </div>
        </div>

      </div>
    </div>
    <div class="tutorial  boomio-hide"></div>
    <div class="boomio-runner-achives boomio-runner-mainBg boomio-screenRatio boomio-hide">
      <div class="boomio-statsHolder">
        <div class="boomio-runner-stat" id="numberOfDeathsBlock"></div>
        <div class='boomio-runner-stat ' id="numberOfJumpsBlock"></div>
        <div class='boomio-runner-stat' id="numberOfSlidesBlock"></div>
      </div>
      <div class="boomio-runner-achivesHolder">
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/pioneer.png" alt="">
          <div class='boomio-achiveText'>
            <p>Pioneer</p>
            Score 100 points
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/bomb.png" alt="">
          <div class='boomio-achiveText'>
            <p>Extreme</p>
            Score 300 points
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/motorbike.png" alt="">
          <div class='boomio-achiveText'>
            <p>Racer</p>
            Score 500 points
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/trees.png" alt="">
          <div class='boomio-achiveText'>
            <p>Run forest, run</p>
            Score 750 points
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/gigachad.png" alt="">
          <div class='boomio-achiveText'>
            <p>Gigachad</p>
            Score 1000 points
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/dead cat.png" alt="">
          <div class='boomio-achiveText'>
            <p>Puss in boots</p>
            Die 8 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/guitar.png" alt="">
          <div class='boomio-achiveText'>
            <p>Smells like Nirvana</p>
            Die 27 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/earth.png" alt="">
          <div class='boomio-achiveText'>
            <p>Main question</p>
            Die 42 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/skull.png" alt="">
          <div class='boomio-achiveText'>
            <p>Memento mori</p>
            Die 100 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/bouncer.png" alt="">
          <div class='boomio-achiveText'>
            <p>Bouncer</p>
            Jump 500 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/slide.png" alt="">
          <div class='boomio-achiveText'>
            <p>On the ground</p>
            Slide under barriers 300 times
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="${shield}" alt="">
          <div class='boomio-achiveText'>
            <p>S.H.I.E.L.D.</p>
            Upgrade shield to max
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="${boost}" alt="">
          <div class='boomio-achiveText'>
            <p>Flash</p>
            Upgrade booster to max
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="${coin}" alt="">
          <div class='boomio-achiveText'>
            <p>Uncle Pennybags</p>
            Earn 1000 coins
          </div>
        </div>
        <div class="boomio-runner-achiveBlock boomio-lock"><img class='boomio-achiveImg' src="assets/gui/success.png" alt="">
          <div class='boomio-achiveText'>
            <p>All for one</p>
            Unlock all achives
          </div>
        </div>
      </div>
      <div class="boomio-runner-return-btn-holder">
        <button class='boomio-btn boomio-runner-return-btn'>
          Return
        </button>
      </div>
    </div>
    <div class="store boomio-runner-mainBg boomio-screenRatio boomio-hide">
      <div class="boomio-runner-storeHolder">
        <div class="boomio-runner-storeBack"></div>
        <div class="boomio-runner-storeCoins">
          <div class="storeCoinsText"></div>
          <img src="${coin}" alt="">
        </div>
          <img class='boomio-runner-addBtn' src="${add}" alt=""
            onclick="showRevawardVideo(addCoins); "><br>
        <div class="boomio-runner-upgradesWrapper">
          <div class="upgrade">
            <div class="boomio-runner-shieldUpgradeHolder">
              Shield
              <div class="boomio-runner-upgradeHolder">
                <img src="${shield}" alt="">
                <div class="boomio-runner-upgradeProgress">
                  <div class="boomio-runner-upgradeLevel shieldLevel"></div>
                  <div class="boomio-runner-upgradeLevel shieldLevel"></div>
                  <div class="boomio-runner-upgradeLevel shieldLevel"></div>
                  <div class="boomio-runner-upgradeLevel shieldLevel"></div>
                </div>
              </div>
            </div>
            <div class="boomio-runner-upgradeBtn boomio-runner-smallBtn" onclick="Upgrade('shield')">
              <div class="upgradeBtnContent">
                <div class="shieldCost"></div>
                <img src="${coin}" class="upgradeCoinImg" alt="">
              </div>
            </div>
          </div>
          <div class="upgrade">
            <div class="boomio-runner-boosterUpgradeHolder">
              Booster
              <div class="boomio-runner-upgradeHolder">
                <img src="${boost}" alt="">
                <div class="boomio-runner-upgradeProgress">
                  <div class="boomio-runner-upgradeLevel boosterLevel"></div>
                  <div class="boomio-runner-upgradeLevel boosterLevel"></div>
                  <div class="boomio-runner-upgradeLevel boosterLevel"></div>
                  <div class="boomio-runner-upgradeLevel boosterLevel"></div>
                </div>
              </div>
            </div>
            <div class="boomio-runner-upgradeBtn boomio-runner-smallBtn" onclick="Upgrade('booster')">
              <div class="upgradeBtnContent">
                <div class="boosterCost"></div>
                <img src="${coin}" class="upgradeCoinImg" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
      <button class='boomio-btn boomio-runner-return-btn boomio-runner-store-return-btn'">
        Return
      </button>

  </div>

</div>

    </div>
    `;
    widgetHtmlService.container.appendChild(myCanvas);

    if (this.showCompetitiveRegistration === 'competition') {
      const gameContainer = document.querySelector('.game-container');

      this.scoreTableContainerInstance = new CompetitionScoreTableContainer(
        this.customer,
        this.scoreTable,
      );
      gameContainer.appendChild(this.scoreTableContainerInstance.containerDiv);
    }

    this.startGame(this.scoreTableContainerInstance);
  };

  startGame = () => {
    const canvas = document.getElementById('boomio-runner-canvas');
    const loader = new PxLoader();

    var ctx = canvas?.getContext('2d');
    var wrapperBlock = document.getElementsByClassName('boomio-runner-wrapper')[0];

    var creditsBlock = document.getElementsByClassName('boomio-runner-credits')[0];
    var storeBlock = document.getElementsByClassName('store')[0];
    var storeCoinsText = document.getElementsByClassName('storeCoinsText')[0];
    var achivesBlock = document.getElementsByClassName('boomio-runner-achives')[0];
    var achivesBlocks = document.getElementsByClassName('boomio-runner-achiveBlock');

    var pauseBlock = document.getElementsByClassName('boomio-runner-pause')[0];
    var pauseButton = document.getElementsByClassName('boomio-runner-pauseButton')[0];
    var gameOverBlock = document.getElementsByClassName('boomio-runner-gameOver')[0];
    var mainMenuBlock = document.getElementsByClassName('boomio-runner-mainMenu')[0];
    var controlBlock = document.getElementsByClassName('boomio-runner-controlBlock')[0];

    var scoreBlock = document.getElementsByClassName('boomio-runner-score')[0];
    var highScoreBlock = document.getElementsByClassName('HighScoreBlock')[0];

    var coinsBlock = document.getElementsByClassName('boomio-runner-coins')[0];
    var mainCoinBlock = document.getElementsByClassName('mainCoinsText')[0];
    var coinsText = document.getElementsByClassName('coinsText')[0];
    var gameOverCoinsBlock = document.getElementsByClassName('gameOverCoins')[0];

    var GameOverScoreBlock = document.getElementsByClassName('boomio-runner-score')[1];
    var HIandRecord = document.getElementsByClassName('boomio-runner-HIandRecord')[0];
    var soundBtn = document.getElementsByClassName('boomio-runner-soundBtn')[0];
    var rightButtonsBlock = document.getElementsByClassName('boomio-runner-rightButtonsBlock')[0];
    var leftButtonsBlock = document.getElementsByClassName('boomio-runner-leftButtonsBlock')[0];
    var loaderBlock = document.getElementsByClassName('boomio-runner-loader')[0];
    var mainBgBlocks = document.getElementsByClassName('boomio-runner-mainBg');
    var smallBtnBlocks = document.getElementsByClassName('boomio-runner-smallBtn');

    var boosterLevels = document.getElementsByClassName('boosterLevel');
    var shieldLevels = document.getElementsByClassName('shieldLevel');

    var boosterCost = document.getElementsByClassName('boosterCost')[0];
    var shieldCost = document.getElementsByClassName('shieldCost')[0];

    var saveMeBlock = document.getElementsByClassName('boomio-runner-saveMeHolder')[0];

    var normalSpeed;
    var speed;
    var bgRatio;
    var leftPressed = false;
    var rightPressed = false;
    var upPressed = false;
    var downPressed = false;
    var slideing = 0;
    var jumping = false;
    var jumpCount = 0;
    var jumpLength = 50;
    var jumpHeight = 0;
    var overIndex = 1;
    var fpsInterval, startTime, now, then, elapsed;
    var frameCount = 0;
    var frameNumber = 1;
    var stopGame = false;
    var score = 0;
    var pause = false;
    var gameOver = false;
    var coins = 0;
    var player;
    var activeTime;
    const toggleHide = (block) => block.classList.toggle('boomio-hide');
    let highScore = localStorage.getItem('HI') > 0 ? localStorage.getItem('HI') : 0;
    let myCoins = localStorage.getItem('myCoins') > 0 ? localStorage.getItem('myCoins') : 0;
    let numberOfJumps = localStorage.getItem('jumps') > 0 ? localStorage.getItem('jumps') : 0;
    let numberOfDeaths = localStorage.getItem('deaths') > 0 ? localStorage.getItem('deaths') : 0;
    let numberOfSlides = localStorage.getItem('slides') > 0 ? localStorage.getItem('slides') : 0;
    const shieldLevel =
      localStorage.getItem('shieldLevel') > 1 ? localStorage.getItem('shieldLevel') : 1;
    const boosterLevel =
      localStorage.getItem('boosterLevel') > 1 ? localStorage.getItem('boosterLevel') : 1;

    // Load sprites
    const runSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/run',
      8,
    );
    const slideSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/slide',
      6,
    );
    const jumpSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/jump',
      6,
    );
    const deathSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/death',
      4,
    );
    const barriersSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/barriers',
      7,
    );
    const bgSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/bg',
      8,
    );
    const fgSprites = loadSprites(
      loader,
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/fg',
      2,
    );

    const CollectSprites = [
      loader.addImage(
        'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/collect/shield.png',
      ),
      loader.addImage(
        'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/collect/shieldIcon.png',
      ),
      loader.addImage(
        'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/collect/boosterIcon.png',
      ),
      loader.addImage(
        'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/refs/heads/feature/new-testing/images/runningWidget/assets/sprites/collect/coin.png',
      ),
    ];

    class GameObject {
      constructor(image, x, y, isPlayer) {
        this.x = x;
        this.y = y;
        this.slideing = false;
        this.dead = false;
        this.isPlayer = isPlayer;
        this.image = image;
        this.speed = speed;

        this.isShield = false;
        this.isBooster = false;
        this.randDist = RandomInteger(-speed * 2, speed * 2);
        this.shieldTimer = 0;
        this.shield = false;
        this.boost = false;
        this.boostTimer = 0;

        this.topBarrier = false;
        this.levitateCount = 0;
        this.sizeCoef = 1;
        this.levitateHeight = 0;
        this.isLevitate = false;
      }
      Update() {
        var barrierWidth = (canvas.height / 5) * (this.image.width / this.image.height);

        if (!this.isPlayer) {
          if (this.isLevitate) {
            this.levitateCount += 0.025;
            this.levitateHeight = (canvas.height / 50) * Math.sin(Math.PI * this.levitateCount);
            this.y += this.levitateHeight;
          }

          if (
            (((!this.topBarrier && this.x < -1.5 * barrierWidth) ||
              (this.topBarrier && this.x < -5 * barrierWidth) ||
              this.y < -500) &&
              !this.kicked) ||
            (this.kicked && this.x <= -5 * canvas.width) ||
            (this.kicked && this.y <= -5 * canvas.height)
          ) {
            this.dead = true;
          }
          if (this.kicked) {
            this.x -= this.randDist;
            this.y -= speed * 2;
          } else {
            this.x -= speed;
          }
        }
      }
      Collide(object) {
        var playerWidth =
          (canvas.height / 5) * (player.image.naturalWidth / player.image.naturalHeight);
        var playerHeight =
          (canvas.height / 5) * (player.image.naturalWidth / player.image.naturalHeight);
        var barrierWidth = canvas.height / 3.5;
        var barrierHight =
          canvas.height / 3.5 / (object.image.naturalWidth / object.image.naturalHeight);
        var hit = false;

        if (object.topBarrier) {
          if (
            this.x + playerWidth / 2.5 > object.x &&
            this.x < object.x + (barrierWidth * object.sizeCoef) / 1.2
          ) {
            if (this.y - jumpHeight + playerHeight / 1.2 > object.y) {
              var actualPlayerHigh = this.slideing ? this.y + playerHeight / 2.2 : this.y;
              if (actualPlayerHigh * 1.1 - jumpHeight < object.y + barrierHight * object.sizeCoef) {
                if (player.shield) {
                  object.kicked = true;
                } else {
                  hit = true;
                }
              }
            }
          }
        } else {
          if (this.x + playerWidth / 1.5 > object.x && this.x < object.x + barrierWidth / 1.5) {
            if (
              this.y - jumpHeight + playerHeight > object.y * 1.1 &&
              this.y - jumpHeight < object.y + barrierHight * object.sizeCoef
            ) {
              if (player.shield) {
                if (object.isCoin) {
                  if (!object.kicked) {
                    coins += 1;
                  }
                  object.kicked = true;
                } else {
                  object.kicked = true;
                }
              } else {
                if (object.isShield) {
                  player.shield = true;
                  activeTime = shieldLevel * 82;

                  object.image = new Image();
                }
                if (object.isBooster) {
                  player.boost = true;
                  activeTime = boosterLevel * 82;
                  object.image = new Image();
                }
                if (object.isCoin) {
                  if (!object.kicked) {
                    coins += 1;
                  }
                  object.kicked = true;
                  console.log(coins);
                }
                if (!object.isBooster && !object.isShield && !object.isCoin) hit = true;
              }
            }
          }
        }
        return hit;
      }
    }

    var player = new GameObject(
      runSprites[0],
      0.2 * canvas.width,
      canvas.height - wrapperBlock.offsetHeight / 2.5,
      true,
    );

    window.addEventListener('resize', Resize);
    Resize();
    updateAchives();

    function initializeGameLoader() {
      let pageMuted;
      if (
        typeof localStorage.getItem('pageMuted') === 'undefined' ||
        localStorage.getItem('pageMuted') === null
      ) {
        localStorage.setItem('pageMuted', '');
        pageMuted = false;
      } else {
        pageMuted = Boolean(localStorage.getItem('pageMuted'));
      }

      loader.start();

      if ('mediaSession' in navigator) {
        // Media session logic can be added here
      }

      let ysdk;

      // function showFullAdd() { need to check
      //   ysdk.adv.showFullscreenAdv({
      //     callbacks: {
      //       onClose: function (wasShown) {
      //         // some action after close
      //       },
      //       onError: function (error) {
      //         // some action on error
      //       },
      //     },
      //   });
      // }

      function showRevawardVideo(getReward) {
        ysdk.adv.showRewardedVideo({
          callbacks: {
            onOpen: () => {},
            onRewarded: () => {},
            onClose: () => {
              getReward();
            },
            onError: (e) => {
              console.log('Error while open video ad:', e);
            },
          },
        });
      }

      const addCoins = () => {
        myCoins = Number(myCoins) + 100;
        localStorage.setItem('myCoins', myCoins);
        storeCoinsText.innerText = Number(myCoins);
        mainCoinBlock.innerText = Number(myCoins);

        coinSound.play();
      };

      const saveMe = () => {
        player.rise = true;
        gameOver = false;
        stopGame = false;
        player.dead = false;
        toggleHide(gameOverBlock);
        toggleHide(pauseButton);
        toggleHide(scoreBlock);
        toggleHide(coinsBlock);
        player.shield = true;
        activeTime = 1;
        Start();
        canvas.focus();
      };

      function gameInit() {
        // YaGames.init()
        //   .then((_sdk) => {
        //     ysdk = _sdk;
        //     ysdk.features.LoadingAPI?.ready(); // Показываем SDK, что игра загрузилась и можно начинать играть
        //   })
        //   .catch(console.error);
      }

      loader.addCompletionListener(() => {
        const initGame = () => {
          if (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
          ) {
            rightButtonsBlock.classList.remove('boomio-hide');
            leftButtonsBlock.classList.remove('boomio-hide');
          }

          for (let i = 0; i < mainBgBlocks.length; i += 1) {
            mainBgBlocks[i].style.backgroundImage = `url(${runnerbackground})`; // Ensure url syntax
          }

          // for (let i = 0; i < smallBtnBlocks.length; i += 1) {
          //   smallBtnBlocks[i].style.backgroundImage = `url(${runnerbackground})`; // Ensure url syntax
          // }

          toggleHide(mainMenuBlock);
          toggleHide(loaderBlock);
          toggleHide(controlBlock);
          bgRatio = bgSprites[0].naturalWidth / bgSprites[0].naturalHeight;
          gameInit();
        };

        // Use DOMContentLoaded event
        if (document.readyState === 'loading') {
          // Document is still loading
          document.addEventListener('DOMContentLoaded', initGame);
        } else {
          // Document has already loaded
          initGame();
        }
      });
    }

    const keyRightHandler = (e) => {
      if (e.keyCode == 39 || e.keyCode == 68) {
        //right
        rightPressed = true;
      }
      if (e.keyCode == 37 || e.keyCode == 65) {
        //left
        leftPressed = true;
      }
      if (e.keyCode == 87 || e.keyCode == 38) {
        //jump
        jumpBegin();
      }
      if (e.keyCode == 83 || e.keyCode == 40) {
        //slide
        slideBegin();
      }

      if (e.keyCode == 27 && !gameOver) {
        //pause
        PauseToggle();
      }
    };

    const keyLeftHandler = (e) => {
      if (e.keyCode == 39 || e.keyCode == 68) {
        rightPressed = false;
      }
      if (e.keyCode == 37 || e.keyCode == 65) {
        leftPressed = false;
      }
      if (e.keyCode == 83 || e.keyCode == 40) {
        slideEnd();
      }
      if (e.keyCode == 32 && gameOver == true) {
        Replay();
      }
    };

    const ResetGlobalVariables = () => {
      objects = [];
      coins = 0;
      player.x = 0.2 * canvas.width;
      gameOver = false;
      pause = false;
      player.rise = false;
      player.shield = false;
      player.boostTimer = 0;
      player.boost = false;
      player.dead = false;
      speed = canvas.clientWidth / 115;
      player.y = canvas.height - wrapperBlock.offsetHeight / 2.5;
      score = 0;
      leftPressed = false;
      rightPressed = false;
      document.removeEventListener('keydown', keyRightHandler, false);
      document.removeEventListener('keyup', keyLeftHandler, false);
    };
    const PauseToggle = () => {
      const toggleHide = (block) => block.classList.toggle('boomio-hide');

      stopGame ? Start() : Stop();
      pause = pauseBlock.classList.contains('boomio-hide') ? true : false;
      toggleHide(pauseBlock);
      toggleHide(scoreBlock);
      toggleHide(coinsBlock);
      toggleHide(pauseButton);
    };

    const PlayButtonActivate = () => {
      const toggleHide = (block) => block.classList.toggle('boomio-hide');

      ResetGlobalVariables();
      document.addEventListener('keydown', keyRightHandler, false);
      document.addEventListener('keyup', keyLeftHandler, false);
      toggleHide(mainMenuBlock);
      toggleHide(pauseButton);
      toggleHide(scoreBlock);
      toggleHide(coinsBlock);
      saveMeBlock.classList.remove('boomio-hide');

      controlBlock.style.opacity = 1;
      setTimeout(() => (controlBlock.style.opacity = 0), 2000);
      Start();
    };
    document
      .querySelector('.boomio-runner-playButton')
      .addEventListener('click', PlayButtonActivate);
    document.querySelector('.boomio-runner-homeButton').addEventListener('click', GoToHome);
    document.querySelector('.boomio-runner-homeButton1').addEventListener('click', GoToHome);
    document.querySelector('.boomio-runner-pauseButton').addEventListener('click', PauseToggle);

    document.querySelector('.boomio-runner-replayButton').addEventListener('click', Replay);
    document.querySelector('.boomio-runner-replayButton1').addEventListener('click', Replay);

    document.querySelector('.boomio-runner-store-return-btn').addEventListener('click', () => {
      toggleHide(storeBlock);
    });
    document.querySelector('.boomio-runner-return-btn').addEventListener('click', () => {
      toggleHide(achivesBlock);
    });
    document.querySelector('.achivesButton').addEventListener('click', () => {
      toggleHide(achivesBlock);
    });
    document.querySelector('.storeButton').addEventListener('click', () => {
      toggleHide(storeBlock);
      storeCoinsText.innerText = Number(mainCoinBlock.innerText);
    });

    function loadSprites(loader, basePath, count) {
      const sprites = [];
      for (let i = 1; i <= count; i += 1) {
        // Construct the full URL for each sprite image
        const spriteUrl = `${basePath}/${i}.png`;
        // Add the image to the loader
        sprites.push(loader.addImage(spriteUrl));
      }
      return sprites;
    }

    // Call the function to initialize the loader
    initializeGameLoader();

    updateUpgrades();

    function Resize() {
      canvas.width = wrapperBlock.offsetWidth;
      canvas.height = wrapperBlock.offsetHeight;
    }

    highScoreBlock.innerText = highScore;
    mainCoinBlock.innerText = myCoins;

    class Bg {
      constructor(image, x, layer) {
        this.x = x;
        this.y = 0;
        this.layer = layer;
        this.image = image;
        var obj = this;
        this.image.addEventListener('load', function () {
          obj.loaded = true;
        });
      }
      Update(bg) {
        this.x -= speed * this.layer;
        if (this.x < 0) {
          bg.x = this.x + canvas.height * bgRatio - speed;
        }
      }
    }

    var objects = [];
    function animate(object, spritesArr) {
      frameNumber += 1;
      if (frameNumber > spritesArr.length - 1) {
        frameNumber = 1;
      }
      object.image = spritesArr[frameNumber];
    }

    var playerAnimate = setInterval(() => {
      animate(player, runSprites);
    }, 75);

    function Move() {
      if (rightPressed && player.x + canvas.width / 10 < canvas.width) {
        //вправо
        player.x += speed;
      } else if (leftPressed && player.x > 0) {
        //влево
        player.x -= speed;
      }
      if (jumping) {
        //прыжок
        jumpCount += speed / (canvas.height / 75);
        jumpHeight =
          (canvas.height / 125) * jumpLength * Math.sin((Math.PI * jumpCount) / jumpLength);
      }
      if (jumpCount > jumpLength) {
        //приземление после прыжка
        jumpCount = 0;
        jumping = false;
        jumpHeight = 0;
        numberOfJumps = Number(numberOfJumps) + 1;
        localStorage.setItem('jumps', numberOfJumps);
        clearInterval(playerAnimate);
        playerAnimate = setInterval(() => {
          animate(player, runSprites);
        }, 75);
      }
    }

    const fg = [
      new Bg(fgSprites[0], 0, 0.3),
      new Bg(fgSprites[0], canvas.height * bgRatio, 0.3),
      new Bg(fgSprites[1], 0, 1),
      new Bg(fgSprites[1], canvas.height * bgRatio, 1),
    ];

    const CollectObjects = [new GameObject(CollectSprites[0], 0, 0, false)];

    function jumpBegin() {
      if (!player.slideing) {
        clearInterval(playerAnimate);
        playerAnimate = setInterval(() => {
          animate(player, jumpSprites);
        }, 100 + score / 10);
        jumping = true;
      }
    }
    function slideBegin() {
      if (!jumping) {
        player.slideing = true;
        slideing += 1;
        if (slideing == 1) {
          clearInterval(playerAnimate);
          player.image = slideSprites[0];
          setTimeout(() => {
            player.image = slideSprites[1];
          }, 20);
          playerAnimate = setInterval(() => {
            player.image = slideSprites[2];
            animate(player, slideSprites.slice(3, 6));
          }, 100);
        }
      }
    }

    function slideEnd() {
      if (!jumping) {
        player.slideing = false;
        clearInterval(playerAnimate);
        slideing = 0;
        player.image = slideSprites[1];
        setTimeout(() => {
          player.image = slideSprites[0];
        }, 20);
        playerAnimate = setInterval(() => {
          animate(player, runSprites);
        }, 75);
        numberOfSlides = Number(numberOfSlides) + 1;
        localStorage.setItem('slides', numberOfSlides);
      }
    }

    function updateAchives() {
      const achives = {
        0: highScore >= 100,
        1: highScore >= 300,
        2: highScore >= 500,
        3: highScore >= 700,
        4: highScore >= 1000,
        5: numberOfDeaths >= 8,
        6: numberOfDeaths >= 27,
        7: numberOfDeaths >= 42,
        8: numberOfDeaths >= 100,
        9: numberOfJumps >= 500,
        10: numberOfSlides >= 300,
        11: shieldLevel >= 4,
        12: boosterLevel >= 4,
        13: myCoins >= 1000,
      };
      var unlockCount = 0;
      for (var i = 0; i < achivesBlocks.length - 1; i += 1) {
        if (achives[i]) {
          achivesBlocks[i].classList.remove('boomio-lock');
          unlockCount += 1;
        }
      }
      if (unlockCount == achivesBlocks.length - 1) {
        achivesBlocks[achivesBlocks.length - 1].classList.remove('boomio-lock');
      }
      document.getElementById('numberOfJumpsBlock').innerHTML = 'Jumps: ' + numberOfJumps;
      document.getElementById('numberOfDeathsBlock').innerHTML = 'Deaths: ' + numberOfDeaths;
      document.getElementById('numberOfSlidesBlock').innerHTML = 'Slides: ' + numberOfSlides;
    }

    function updateUpgrades() {
      for (let i = 0; i < shieldLevel; i += 1) {
        shieldLevels[i].classList.add('boomio-runner-activeLevel');
      }
      for (let i = 0; i < boosterLevel; i += 1) {
        boosterLevels[i].classList.add('boomio-runner-activeLevel');
      }
      if (shieldLevel < 4) {
        shieldCost.innerHTML = shieldLevel * 150;
      } else {
        shieldCost.innerHTML = 'MAX';
        document.getElementsByClassName('upgradeCoinImg')[0].classList.add('boomio-hide');
      }
      if (boosterLevel < 4) {
        boosterCost.innerHTML = boosterLevel * 150;
      } else {
        boosterCost.innerHTML = 'MAX';
        document.getElementsByClassName('upgradeCoinImg')[1].classList.add('boomio-hide');
      }
    }
    //localStorage.clear()
    //localStorage.setItem('myCoins', 10000);
    function payForLife() {
      if (+myCoins >= 100) {
        myCoins = +myCoins - 100;
        localStorage.setItem('myCoins', myCoins);
        coinSound.play();
        saveMe();
      } else {
        notEnough.play();
      }
    }
    function Upgrade(boost) {
      if (boost == 'shield') {
        if (+shieldCost.innerText <= +myCoins && +shieldLevel < 4) {
          myCoins = +myCoins - +shieldCost.innerText;
          shieldLevel = +shieldLevel + 1;
          localStorage.setItem('shieldLevel', shieldLevel);
          localStorage.setItem('myCoins', myCoins);
          storeCoinsText.innerText = +myCoins;
          mainCoinBlock.innerText = localStorage.getItem('myCoins');
          coinSound.play();
          updateUpgrades();
        } else {
          notEnough.play();
        }
      } else {
        if (+boosterCost.innerText <= +myCoins && +boosterLevel < 4) {
          myCoins = +myCoins - +boosterCost.innerText;
          boosterLevel = +boosterLevel + 1;
          localStorage.setItem('boosterLevel', boosterLevel);
          localStorage.setItem('myCoins', myCoins);
          storeCoinsText.innerText = +myCoins;
          mainCoinBlock.innerText = localStorage.getItem('myCoins');
          coinSound.play();
          updateUpgrades();
        } else {
          notEnough.play();
        }
      }
    }

    function GameOver() {
      player.shieldTimer = 0;
      player.boostTimer = 0;
      Stop();
      setTimeout(() => {
        player.image = deathSprites[0];
        Draw();
        setTimeout(() => {
          player.image = deathSprites[1];
          Draw();
          setTimeout(() => {
            player.image = deathSprites[2];
            Draw();
            setTimeout(() => {
              player.image = deathSprites[3];
              Draw();
              setTimeout(() => {
                GameOverScoreBlock.innerText = 'Score: ' + score.toFixed(0);
                toggleHide(scoreBlock);
                toggleHide(coinsBlock);
                toggleHide(pauseButton);
                toggleHide(gameOverBlock);
                gameOverCoinsBlock.innerText =
                  Number(localStorage.getItem('myCoins')) + Number(coins);
                player.dead = false;
                // showFullAdd(); need to check
                if (score > highScore) {
                  HIandRecord.innerHTML = 'new record!';
                  highScore = Number(score.toFixed(0));
                  localStorage.setItem('HI', score.toFixed(0));
                } else {
                  HIandRecord.innerText = 'HighScore: ' + highScore;
                }
                if (player.rise) {
                  saveMeBlock.classList.add('boomio-hide');
                }
                updateAchives();
              }, 80);
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    }

    function Replay() {
      console.log('replay');
      if (gameOver) {
        localStorage.setItem('myCoins', Number(localStorage.getItem('myCoins')) + Number(coins));
        mainCoinBlock.innerText = localStorage.getItem('myCoins');
        toggleHide(gameOverBlock);
        toggleHide(pauseButton);
        toggleHide(scoreBlock);
        toggleHide(coinsBlock);
        saveMeBlock.classList.remove('boomio-hide');
      }
      if (pause) {
        toggleHide(pauseBlock);
        toggleHide(pauseButton);
        toggleHide(scoreBlock);
        toggleHide(coinsBlock);
      }
      ResetGlobalVariables();
      document.addEventListener('keydown', keyRightHandler, false);
      document.addEventListener('keyup', keyLeftHandler, false);
      Start();
    }

    function GoToHome() {
      if (pause) {
        toggleHide(pauseBlock);
      }
      if (gameOver) {
        localStorage.setItem('myCoins', Number(localStorage.getItem('myCoins')) + Number(coins));
        mainCoinBlock.innerText = localStorage.getItem('myCoins');
        toggleHide(gameOverBlock);
      }

      highScoreBlock.innerText = highScore;
      ResetGlobalVariables();
      updateAchives();
      updateUpgrades();
      toggleHide(mainMenuBlock);
    }
    function UpdateBg(index, arr = bg) {
      arr[index].Update(arr[index + 1]);
      arr[index + 1].Update(arr[index]);
    }

    function showScoreAndCoins() {
      score += 0.12;
      scoreBlock.innerText =
        '0'.repeat(4 - String(score.toFixed(0).length)) + String(score.toFixed(0));
      coinsText.innerText = '0'.repeat(3 - String(coins).length) + coins;
    }

    function Start() {
      stopGame = false;
      fpsInterval = 1000 / 60;
      then = Date.now();
      startTime = then;
      Update();
    }

    function Stop() {
      stopGame = true;
    }
    function pushRandomCoin(pos, newCoin = true) {
      let x;
      let y;
      if (RandomInteger(1, 4) >= 2) {
        if (RandomInteger(0, 1) == 1) {
          x = (4 * canvas.width) / 3;
          y =
            pos == 'top'
              ? canvas.height - wrapperBlock.offsetHeight / 1.4
              : canvas.height - wrapperBlock.offsetHeight / 3.1;
        } else {
          x = (4 * canvas.width) / 2;
          y = canvas.height - wrapperBlock.offsetHeight / 3.1;
        }
        if (newCoin) {
          objects.push(new GameObject(barriersSprites[0], x, y, false));
        }
        objects.at(-1).image = CollectSprites[3];
        objects.at(-1).isCoin = true;
        objects.at(-1).sizeCoef = 0.3;
      }
    }
    function Update() {
      if (stopGame) {
        return;
      }
      requestAnimationFrame(Update);

      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        for (let i = 0; i < bg.length - 1; i += 2) {
          UpdateBg(i);
        }

        if (RandomInteger(0, speed * 1.1) > speed) {
          if (objects.length == 0 || objects.at(-1).x < canvas.width - 100) {
            objects.push(
              new GameObject(
                barriersSprites[0],
                (4 * canvas.width) / 3.1,
                canvas.height - wrapperBlock.offsetHeight / 2.7,
                false,
              ),
            );
            var randomBarrier = RandomInteger(1, 8);
            switch (randomBarrier) {
              case 1:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                pushRandomCoin('top');
                break;
              case 2:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                pushRandomCoin('top');
                break;
              case 3:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                pushRandomCoin('top');
                break;
              case 4:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                objects.at(-1).y = canvas.height - wrapperBlock.offsetHeight / 2.35;
                pushRandomCoin('top');
                break;
              case 5:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                objects.at(-1).topBarrier = true;
                objects.at(-1).y =
                  canvas.height -
                  canvas.height /
                    2.58 /
                    (objects.at(-1).image.naturalWidth / objects.at(-1).image.naturalHeight);
                pushRandomCoin('bottom');
                break;
              case 6:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                pushRandomCoin('top');
                break;
              case 7:
                objects.at(-1).image = barriersSprites[randomBarrier - 1];
                objects.at(-1).isLevitate = true;
                objects.at(-1).topBarrier = true;
                objects.at(-1).sizeCoef = 1.7;
                objects.at(-1).y = canvas.height - wrapperBlock.offsetHeight / 1.11;
                pushRandomCoin('bottom');
                break;
              case 8:
                if (
                  !objects.at(-1).isBooster &&
                  !player.boost &&
                  !objects.at(-1).isShield &&
                  !player.shield
                ) {
                  if (RandomInteger(0, 100) > 70) {
                    objects.at(-1).image = CollectSprites[1];
                    objects.at(-1).isShield = true;
                    objects.at(-1).sizeCoef = 0.5;
                    objects.at(-1).y =
                      RandomInteger(0, 1) == 1
                        ? canvas.height - wrapperBlock.offsetHeight / 2.5
                        : canvas.height - wrapperBlock.offsetHeight / 1.3;
                  }
                  if (RandomInteger(0, 100) > 70) {
                    objects.at(-1).image = CollectSprites[2];
                    objects.at(-1).isBooster = true;
                    objects.at(-1).sizeCoef = 0.5;
                    objects.at(-1).y =
                      RandomInteger(0, 1) == 1
                        ? canvas.height - wrapperBlock.offsetHeight / 2.5
                        : canvas.height - wrapperBlock.offsetHeight / 1.3;
                  }
                  break;
                }
            }
          }
        }

        for (let i = 0; i < fg.length - 1; i += 2) {
          UpdateBg(i, fg);
        }

        var isDead = false;

        for (var i = 0; i < objects.length; i++) {
          objects[i].Update(i);

          if (objects[i].dead) {
            isDead = true;
          }
        }

        if (isDead) {
          objects.shift();
        }

        var hit = false;

        for (var i = 0; i < objects.length; i++) {
          hit = player.Collide(objects[i]);

          if (hit) {
            player.dead = true;
          }
        }

        player.Update();

        if (player.dead) {
          numberOfDeaths = Number(numberOfDeaths) + 1;
          localStorage.setItem('deaths', numberOfDeaths);
          gameOver = true;
          GameOver();
        }

        speed += 0.001;

        Draw();
        Move();
        showScoreAndCoins();
      }
    }

    const bg = [
      new Bg(bgSprites[0], 0, 0.1),
      new Bg(bgSprites[0], canvas.height * bgRatio, 0.1),

      new Bg(bgSprites[1], 0, 0.15),
      new Bg(bgSprites[1], canvas.height * bgRatio, 0.15),

      new Bg(bgSprites[2], 0, 0.25),
      new Bg(bgSprites[2], canvas.height * bgRatio, 0.25),

      new Bg(bgSprites[3], 0, 0.3),
      new Bg(bgSprites[3], canvas.height * bgRatio, 0.3),

      new Bg(bgSprites[7], 0, 0.4),
      new Bg(bgSprites[7], canvas.height * bgRatio, 0.4),

      new Bg(bgSprites[4], 0, 0.6),
      new Bg(bgSprites[4], canvas.height * bgRatio, 0.6),

      new Bg(bgSprites[5], 0, 1),
      new Bg(bgSprites[5], canvas.height * bgRatio, 1),

      new Bg(bgSprites[6], 0, 1.2),
      new Bg(bgSprites[6], canvas.height * bgRatio, 1.2),
    ];

    function Draw() {
      ctx.imageSmoothingQuality = 'high';
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < bg.length; i += 1) {
        bg[i].image.addEventListener(
          'load',
          ctx.drawImage(
            bg[i].image,
            0,
            0,
            bg[i].image.naturalWidth,
            bg[i].image.naturalHeight,
            bg[i].x,
            bg[i].y,
            canvas.height * bgRatio,
            canvas.height,
          ),
        );
      }

      for (var i = 0; i < objects.length; i++) {
        DrawObject(objects[i]);
      }
      ctx.imageSmoothingEnabled = false;
      DrawObject(player);
      if (player.boost) {
        if (player.boostTimer == 0) {
          clearInterval(playerAnimate);
          playerAnimate = setInterval(() => {
            animate(player, runSprites);
          }, 30);
          player.boostTimer += 1;
          player.shield = true;
          normalSpeed = speed;
          speed = speed * 5;
        }
      }
      for (var i = 0; i < (player.boost ? fg.length : fg.length - 2); i += 1) {
        fg[i].image.addEventListener(
          'load',
          ctx.drawImage(
            fg[i].image,
            0,
            0,
            fg[i].image.naturalWidth,
            fg[i].image.naturalHeight,
            fg[i].x,
            fg[i].y,
            canvas.height * bgRatio,
            canvas.height,
          ),
        );
      }

      if (player.shield) {
        CollectObjects[0].x = player.x;
        CollectObjects[0].y = player.y - jumpHeight;
        player.shieldTimer += 1;
        if (player.boost) {
          score += 0.12;
        }
        if (player.shieldTimer == activeTime) {
          setTimeout(() => {
            CollectObjects[0].image = new Image();
            DrawObject(CollectObjects[0]);
            if (player.boost) {
              clearInterval(playerAnimate);
              playerAnimate = setInterval(() => {
                animate(player, runSprites);
              }, 75);
              player.boost = false;
              speed = normalSpeed;
              player.boostTimer = 0;
            }
            setTimeout(() => {
              CollectObjects[0].image = CollectSprites[0];
              DrawObject(CollectObjects[0]);
              setTimeout(() => {
                CollectObjects[0].image = new Image();
                DrawObject(CollectObjects[0]);
                setTimeout(() => {
                  CollectObjects[0].image = CollectSprites[0];
                  DrawObject(CollectObjects[0]);
                  setTimeout(() => {
                    CollectObjects[0].image = new Image();
                    DrawObject(CollectObjects[0]);
                    setTimeout(() => {
                      CollectObjects[0].image = CollectSprites[0];
                      DrawObject(CollectObjects[0]);
                      setTimeout(() => {
                        CollectObjects[0].image = new Image();
                        DrawObject(CollectObjects[0]);
                        setTimeout(() => {
                          CollectObjects[0].image = CollectSprites[0];
                          DrawObject(CollectObjects[0]);
                          setTimeout(() => {
                            CollectObjects[0].image = new Image();
                            DrawObject(CollectObjects[0]);
                            setTimeout(() => {
                              CollectObjects[0].image = CollectSprites[0];
                              DrawObject(CollectObjects[0]);
                              setTimeout(() => {
                                CollectObjects[0].image = new Image();
                                DrawObject(CollectObjects[0]);
                                setTimeout(() => {
                                  CollectObjects[0].image = CollectSprites[0];
                                  DrawObject(CollectObjects[0]);
                                  player.shield = false;
                                  player.shieldTimer = 0;
                                  setTimeout(() => {
                                    CollectObjects[0].image = new Image();
                                    DrawObject(CollectObjects[0]);
                                    setTimeout(() => {
                                      CollectObjects[0].image = CollectSprites[0];
                                      DrawObject(CollectObjects[0]);
                                      setTimeout(() => {
                                        CollectObjects[0].image = new Image();
                                        DrawObject(CollectObjects[0]);
                                        setTimeout(() => {
                                          CollectObjects[0].image = CollectSprites[0];
                                          DrawObject(CollectObjects[0]);
                                          setTimeout(() => {
                                            CollectObjects[0].image = new Image();
                                            DrawObject(CollectObjects[0]);
                                            setTimeout(() => {
                                              CollectObjects[0].image = CollectSprites[0];
                                              DrawObject(CollectObjects[0]);
                                              setTimeout(() => {
                                                CollectObjects[0].image = new Image();
                                                DrawObject(CollectObjects[0]);
                                                setTimeout(() => {
                                                  CollectObjects[0].image = CollectSprites[0];
                                                  DrawObject(CollectObjects[0]);
                                                  setTimeout(() => {
                                                    CollectObjects[0].image = new Image();
                                                    DrawObject(CollectObjects[0]);
                                                    setTimeout(() => {
                                                      CollectObjects[0].image = CollectSprites[0];
                                                      DrawObject(CollectObjects[0]);
                                                      setTimeout(() => {
                                                        CollectObjects[0].image = new Image();
                                                        DrawObject(CollectObjects[0]);
                                                        setTimeout(() => {
                                                          CollectObjects[0].image =
                                                            CollectSprites[0];
                                                          DrawObject(CollectObjects[0]);
                                                          setTimeout(() => {
                                                            CollectObjects[0].image = new Image();
                                                            DrawObject(CollectObjects[0]);
                                                            setTimeout(() => {
                                                              CollectObjects[0].image =
                                                                CollectSprites[0];
                                                              DrawObject(CollectObjects[0]);
                                                              setTimeout(() => {
                                                                CollectObjects[0].image =
                                                                  new Image();
                                                                DrawObject(CollectObjects[0]);
                                                                setTimeout(() => {
                                                                  CollectObjects[0].image =
                                                                    CollectSprites[0];
                                                                  DrawObject(CollectObjects[0]);
                                                                  setTimeout(() => {
                                                                    CollectObjects[0].image =
                                                                      new Image();
                                                                    DrawObject(CollectObjects[0]);
                                                                    setTimeout(() => {
                                                                      CollectObjects[0].image =
                                                                        CollectSprites[0];
                                                                      DrawObject(CollectObjects[0]);
                                                                      setTimeout(() => {
                                                                        CollectObjects[0].image =
                                                                          new Image();
                                                                        DrawObject(
                                                                          CollectObjects[0],
                                                                        );
                                                                        setTimeout(() => {
                                                                          CollectObjects[0].image =
                                                                            CollectSprites[0];
                                                                          DrawObject(
                                                                            CollectObjects[0],
                                                                          );
                                                                          setTimeout(() => {
                                                                            CollectObjects[0].image =
                                                                              new Image();
                                                                            DrawObject(
                                                                              CollectObjects[0],
                                                                            );
                                                                            setTimeout(() => {
                                                                              CollectObjects[0].image =
                                                                                CollectSprites[0];
                                                                              DrawObject(
                                                                                CollectObjects[0],
                                                                              );
                                                                              setTimeout(() => {
                                                                                CollectObjects[0].image =
                                                                                  new Image();
                                                                                DrawObject(
                                                                                  CollectObjects[0],
                                                                                );
                                                                                setTimeout(() => {
                                                                                  CollectObjects[0].image =
                                                                                    CollectSprites[0];
                                                                                  DrawObject(
                                                                                    CollectObjects[0],
                                                                                  );
                                                                                  setTimeout(() => {
                                                                                    CollectObjects[0].image =
                                                                                      new Image();
                                                                                    DrawObject(
                                                                                      CollectObjects[0],
                                                                                    );
                                                                                    setTimeout(
                                                                                      () => {
                                                                                        CollectObjects[0].image =
                                                                                          CollectSprites[0];
                                                                                        DrawObject(
                                                                                          CollectObjects[0],
                                                                                        );
                                                                                        setTimeout(
                                                                                          () => {
                                                                                            CollectObjects[0].image =
                                                                                              new Image();
                                                                                            DrawObject(
                                                                                              CollectObjects[0],
                                                                                            );
                                                                                            setTimeout(
                                                                                              () => {
                                                                                                CollectObjects[0].image =
                                                                                                  CollectSprites[0];
                                                                                                DrawObject(
                                                                                                  CollectObjects[0],
                                                                                                );
                                                                                                player.shield = false;
                                                                                                player.shieldTimer = 0;
                                                                                              },
                                                                                              50,
                                                                                            );
                                                                                          },
                                                                                          50,
                                                                                        );
                                                                                      },
                                                                                      50,
                                                                                    );
                                                                                  }, 50);
                                                                                }, 50);
                                                                              }, 50);
                                                                            }, 50);
                                                                          }, 50);
                                                                        }, 50);
                                                                      }, 50);
                                                                    }, 50);
                                                                  }, 50);
                                                                }, 50);
                                                              }, 50);
                                                            }, 50);
                                                          }, 50);
                                                        }, 50);
                                                      }, 50);
                                                    }, 50);
                                                  }, 50);
                                                }, 50);
                                              }, 50);
                                            }, 50);
                                          }, 50);
                                        }, 50);
                                      }, 50);
                                    }, 50);
                                  }, 50);
                                }, 50);
                              }, 50);
                            }, 50);
                          }, 50);
                        }, 50);
                      }, 50);
                    }, 50);
                  }, 50);
                }, 50);
              }, 50);
            }, 50);
          }, 50);
        } else {
          DrawObject(CollectObjects[0]);
        }
      }
    }
    function DrawObject(object) {
      console.log(object.image);
      var playerWidth =
        (canvas.height / 5) * (player.image.naturalWidth / player.image.naturalHeight);
      var playerHeight =
        (canvas.height / 5) * (player.image.naturalWidth / player.image.naturalHeight);
      var barrierWidth = canvas.height / 3.5;
      var barrierHight =
        canvas.height / 3.5 / (object.image.naturalWidth / object.image.naturalHeight);
      object.image.addEventListener(
        'load',
        ctx.drawImage(
          object.image,
          object.x,
          object.isPlayer ? object.y - jumpHeight : object.y,
          object.isPlayer ? playerWidth : barrierWidth * object.sizeCoef,
          object.isPlayer ? playerHeight : barrierHight * object.sizeCoef,
        ),
      );
    }

    function RandomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  };
}

export default () => {
  new runnerWidget();
};
