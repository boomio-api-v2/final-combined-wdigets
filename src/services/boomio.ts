import { localStorageService, widgetHtmlService, UserService } from '@/services';
import {
  startImageWidget,
  startPuzzleWidget,
  startStartWidget,
  startWheelWidget,
  startStoneWidget,
  iceWidget,
  startPenguinWidget,
} from '@/widgets';

import type { ILocalStorageConfig } from '@/types';

interface IExtraData {
  go_hunt: string;
  ev_type?: string;
  signal_code?: string;
}
declare let newLinkBoomio: string;

class BoomioService extends UserService {
  private current_page_url: string = window.location.href;
  constructor() {
    super();
    this.setInitialConfiguration();
  }

  loadWidget = (widget_type = 'puzzle') => {
    const createWidgetMap: { [key: string]: () => void } = {
      puzzle: startPuzzleWidget,
      wheel: startWheelWidget,
      start_widget: startStartWidget,
      image: startImageWidget,
      stone: startStoneWidget,
      ice: iceWidget,
      penguin: startPenguinWidget,
    };
    createWidgetMap[widget_type]();
  };

  setInitialConfiguration() {
    try {
      window.onload = async () => {
        widgetHtmlService.createWidgetContainer();
        const content: Partial<ILocalStorageConfig> = await this.send({ go_hunt: 'true' });
        localStorageService.setConfigFromApi(content);
        if (content?.widget_type && content.instruction !== 'stop') {
          this.loadWidget(content.widget_type);
        }
      };
    } catch (err) {
      console.log(err);
    }
  }

  checkIsRequestDenied() {
    const { boomioStopTill } = localStorageService.config;
    if (!boomioStopTill) return false;
    const isTimeout = new Date(boomioStopTill).getTime() > new Date().getTime();
    if (!isTimeout) {
      localStorageService.removeByKey('boomioStopTill');
    }
    return isTimeout;
  }

  send(extra_data: IExtraData) {
    const isDenied = this.checkIsRequestDenied();
    if (isDenied) return { success: false };
    const { user_session, current_page_url } = this;
    const request_data = {
      user_session,
      current_page_url,
      extra_data,
    };

    return new Promise(async (resolve) => {
      const rawResponse = await fetch(newLinkBoomio as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request_data),
      });
      resolve(rawResponse.json());
    });
  }

  signal(signal_code: string) {
    this.send({
      go_hunt: 'true',
      ev_type: 'signal',
      signal_code,
    });
  }
}

export default new BoomioService();
