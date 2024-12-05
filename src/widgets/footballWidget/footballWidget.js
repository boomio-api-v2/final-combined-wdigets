import { widgetHtmlService } from '@/services';
import CMain from './js/CMain.js';
// import './js/jquery-3.2.1.min.js';
// import './js/easeljs-NEXT.min.js';
// import './js/tweenjs.js';
// import './js/screenfull.js';
// import './js/howler.min.js';
// import './js/platform.js';
// import './js/ios_fullscreen.js';
// import './js/ctl_utils.js';
// import './js/sprite_lib.js';
// import './js/settings.js';
// import './js/CLang.min.js';
// import './js/CPreloader.js';
// import './js/CTextButton.js';
// import './js/CToggle.js';
// import './js/CGfxButton.js';
// import './js/CMenu.js';
// import './js/CGame.js';
// import './js/CInterface.js';
// import './js/cannon.js';
// import './js/cannon.demo.js';
// import './js/CBall.js';
// import './js/CScenario.js';
// import './js/Three.js';
// import './js/Detector.js';
// import './js/smoothie.js';
// import './js/Stats.js';
// import './js/TrackballControls.js';
// import './js/dat.gui.js';
// import './js/CWinPanel.js';
// import './js/CAreYouSurePanel.js';
// import './js/CCreditsPanel.js';
// import './js/CPause.js';
// import './js/CGoalKeeper.js';
// import './js/CStartBall.js';
// import './js/CVector2.js';
// import './js/CPlayer.js';
// import './js/CScoreBoard.js';
// import './js/CRollingScore.js';
// import './js/CLaunchBoard.js';
// import './js/CHandSwipeAnim.js';
// import './js/CHelpText.js';
// import './js/CGoal.js';
// import './js/CCTLText.js';

class FootballWidget {
  static ctx;

  constructor() {
    this.createContainer();
  }

  createContainer = () => {
    const myCanvas = document.createElement('div');
    myCanvas.setAttribute('id', 'boomio-NewGame-container');
    myCanvas.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );

    myCanvas.innerHTML = `

    <div id="parent" style="width:100%;height:100%;position:fixed;top:0px;left:0px;">
      <div id="canvas-wrapper">  <canvas id="canvas" class='ani_hack' width="1360" height="640"></canvas></div>
    </div>

    `;
    widgetHtmlService.container.appendChild(myCanvas);
    this.initFootballGame();
  };

  initFootballGame() {
    const oMain = new CMain({
      area_goal: [
        { id: 0, probability: 100 },
        { id: 1, probability: 80 },
        { id: 2, probability: 60 },
        { id: 3, probability: 80 },
        { id: 4, probability: 100 },
        { id: 5, probability: 75 },
        { id: 6, probability: 60 },
        { id: 7, probability: 50 },
        { id: 8, probability: 60 },
        { id: 9, probability: 75 },
        { id: 10, probability: 80 },
        { id: 11, probability: 65 },
        { id: 12, probability: 70 },
        { id: 13, probability: 65 },
        { id: 14, probability: 80 },
      ],
      num_of_penalty: 15,
      multiplier_step: 0.1,
      audio_enable_on_startup: false,
      fullscreen: true,
      check_orientation: true,
      num_levels_for_ads: 2,
    });
    $(oMain).on('start_session', function (evt) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeStartSession();
      }
    });

    $(oMain).on('end_session', function (evt) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeEndSession();
      }
    });

    $(oMain).on('start_level', function (evt, iLevel) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeStartLevel({ level: iLevel });
      }
    });

    $(oMain).on('restart_level', function (evt, iLevel) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeRestartLevel({ level: iLevel });
      }
    });

    $(oMain).on('end_level', function (evt, iLevel) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeEndLevel({ level: iLevel });
      }
    });

    $(oMain).on('save_score', function (evt, iScore, szMode) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeSaveScore({ score: iScore, mode: szMode });
      }
    });

    $(oMain).on('show_interlevel_ad', function (evt) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeShowInterlevelAD();
      }
    });

    $(oMain).on('share_event', function (evt, iScore) {
      if (getParamValue('ctl-arcade') === 'true') {
        parent.__ctlArcadeShareEvent({
          img: TEXT_SHARE_IMAGE,
          title: TEXT_SHARE_TITLE,
          msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
          msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1,
        });
      }
    });

    if (isIOS()) {
      setTimeout(function () {
        sizeHandler();
      }, 200);
    } else {
      sizeHandler();
    }
  }
}

export default () => {
  new FootballWidget();
};
