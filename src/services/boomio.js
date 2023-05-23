import {
  startImageWidget,
  startPuzzleWidget,
  startStartWidget,
  startWheelWidget,
  startStoneWidget,
  iceWidget,
  startPenguinWidget,
  startTestingWidget,
  startMazeWidget,
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
      penguin: startPenguinWidget,
      testing: startTestingWidget,
      maze: startMazeWidget
    };
    createWidgetMap[widget_type]();
  };

  setInitialConfiguration() {
    try {
      window.onload = async () => {
      widgetHtmlService.createWidgetContainer();
      const content = await this.send({ go_hunt: 'true' });
      localStorageService.setConfigFromApi(content);
      if (content?.widget_type && content.instruction !== 'stop') {
        this.loadWidget(content.widget_type);
      }  else if(localStorage.getItem('testing_Widgets')) {
        this.loadWidget('testing');
      }
    }
  } catch (err) {
    console.log(err);
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

  signal(signal_code) {
    this.send({
      go_hunt: 'true',
      ev_type: 'signal',
      signal_code,
    });
  }
}

export default new BoomioService();
