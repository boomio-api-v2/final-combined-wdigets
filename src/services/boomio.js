import {
  startImageWidget,
  startPuzzleWidget,
  startStartWidget,
  startWheelWidget,
  startStoneWidget,
  iceWidget,
  startGuessWidget,
  startClawMachineWidget,
  startWhackWidget,
  startPenguinWidget,
  startMazeWidget,
  startSnakeWidget,
  startCatsWidget,
  startHedgehogWidget,
  startTestingWidget,
  startPacmanWidget,
  startFlappyBird,
  startDoodleWidget,
  startDriveWidget,
  startCatchWidget,
  startRunnerWidget,
  startFootballWidget,
} from '@/widgets';

import { localStorageService, widgetHtmlService, UserService } from '@/services';

class BoomioService extends UserService {
  constructor() {
    super();
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');
    const language = urlParams.get('language');

    this.current_page_url = campaignUrl
      ? campaignUrl === 'https://kaup.ee'
        ? 'https://kaup24.ee'
        : campaignUrl
      : currentPageUrl;

    if (
      (language === 'ET' &&
        (campaignUrl === 'https://kaup.ee' || campaignUrl === 'https://kaup24.ee')) ||
      (language === 'RU' &&
        (campaignUrl === 'https://kaup.ee' || campaignUrl === 'https://kaup24.ee')) ||
      (language === 'EN' &&
        (campaignUrl === 'https://kaup.ee' || campaignUrl === 'https://kaup24.ee')) ||
      (language === 'EN' && campaignUrl === 'https://pigu.lt') ||
      (language === 'EN' && campaignUrl === 'https://hobbyhall.fi') ||
      (language === 'EN' && campaignUrl === 'https://220.lv') ||
      (language === 'LT' && campaignUrl === 'https://pigu.lt') ||
      (language === 'RU' && campaignUrl === 'https://pigu.lt') ||
      (language === 'FI' && campaignUrl === 'https://hobbyhall.fi') ||
      (language === 'LV' && campaignUrl === 'https://220.lv') ||
      (language === 'RU' && campaignUrl === 'https://220.lv') ||
      (!language && !campaignUrl)
    ) {
      this.setInitialConfiguration();
    }
  }

  loadWidget = (widget_type = 'puzzle') => {
    const createWidgetMap = {
      puzzle: startPuzzleWidget,
      wheel: startWheelWidget,
      start_widget: startStartWidget,
      image: startImageWidget,
      stone: startStoneWidget,
      ice: iceWidget,
      guess: startGuessWidget,
      claw: startClawMachineWidget,
      whack: startWhackWidget,
      penguin: startPenguinWidget,
      testing: startTestingWidget,
      maze: startMazeWidget,
      snake: startSnakeWidget,
      cats: startCatsWidget,
      hedgehog: startHedgehogWidget,
      pacman: startPacmanWidget,
      flappy: startFlappyBird,
      doodle: startDoodleWidget,
      drive: startDriveWidget,
      catch: startCatchWidget,
      runner: startRunnerWidget,
      football: startFootballWidget,
    };
    createWidgetMap[widget_type]();
  };

  setInitialConfiguration() {
    this.config = localStorageService.getDefaultConfig();
    const isTimeout = new Date(this.config.boomioStopTill).getTime() > new Date().getTime();
    if (!isTimeout) {
      localStorageService.removeByKey('boomioStopTill');
    }
    if (!isTimeout) {
      try {
        window.onload = async () => {
          const content = await this.send();
          if (content?.widget_type && content.instruction !== 'stop') {
            widgetHtmlService.createWidgetContainer(content.widget_type);
          } else {
            widgetHtmlService.createWidgetContainer();
          }
          localStorageService.setConfigFromApi(content);
          if (content?.widget_type && content.instruction !== 'stop') {
            this.loadWidget(content.widget_type);
          } else if (localStorage.getItem('testing_Widgets')) {
            this.loadWidget('testing');
          } else if (
            localStorage.getItem('closing_button') &&
            localStorage.getItem('closing_button') !== 'false' &&
            localStorage.getItem('start_widget') &&
            localStorage.getItem('start_widget') !== 'false'
          ) {
            this.loadWidget('start_widget');
          }
          this.config = localStorageService.getDefaultConfig();
          const isTimeout = new Date(this.config.boomioStopTill).getTime() > new Date().getTime();
          if (!isTimeout && !this.config.static_text) {
            this.signal('', 'static_info');
          }
        };
      } catch (err) {
        console.log(err);
      }
    }
  }

  testing(testingWidget) {
    this.loadWidget(testingWidget);
  }

  checkIsRequestDenied() {
    const { boomioStopTill } = localStorageService?.config;
    if (!boomioStopTill) return false;
    const isTimeout = new Date(boomioStopTill).getTime() > new Date().getTime();
    if (!isTimeout) {
      localStorageService.removeByKey('boomioStopTill');
    }
    return isTimeout;
  }

  send(extra_data) {
    const isDenied = this.checkIsRequestDenied();
    if (isDenied) {
      setTimeout(() => {
        this.send();
      }, 2000);
    }
    const { user_session, current_page_url } = this;

    // Prepare the raw request body
    const rawRequestBody = {
      user_session,
      current_page_url,
      extra_data,
    };

    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    // Encode the body
    const encodedBody = btoa(JSON.stringify(rawRequestBody));

    const finalRequestBody = { body: randomLetter + encodedBody };

    return new Promise(async (resolve) => {
      const rawResponse = await fetch(newLinkBoomio, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalRequestBody), // Use the transformed body
      });
      resolve(rawResponse.json());
    });
  }

  signal(signal_code, ev_type, additional_fields) {
    return new Promise((resolve, reject) => {
      const requestData = {
        ev_type: ev_type ?? 'signal',
        signal_code,
        ...additional_fields,
      };
      if (this.config?.m) {
        requestData.m = this.config?.m;
      }

      this.send(requestData)
        .then((response) => {
          localStorageService.setConfigFromApi(response, ev_type);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new BoomioService();
