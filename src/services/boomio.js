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
} from '@/widgets';

import { localStorageService, widgetHtmlService, UserService } from '@/services';

class BoomioService extends UserService {
  constructor() {
    super();
    this.current_page_url = window.location.href;
    this.setInitialConfiguration();
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
            this.loadWidget('start_widget');
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
    if (isDenied) return { success: false };
    const { user_session, current_page_url } = this;
    const request_data = {
      user_session,
      current_page_url,
      extra_data,
    };

    return new Promise(async (resolve) => {
      const rawResponse = await fetch(newLinkBoomio, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request_data),
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
