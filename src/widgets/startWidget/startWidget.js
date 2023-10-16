import { widgetHtmlService, localStorageService, boomioService } from '@/services';
import { closeIcon } from '@/сonstants/icons';
import './styles.css';

class StartWidget {
  constructor() {
    this.startAnimation();
  }

  startAnimation = () => {
    const position = JSON.parse(localStorage.getItem('boomio_hint_widget'));
    const startWidgetContainer = document.createElement('div');
    startWidgetContainer.setAttribute('id', 'startWidget-container');
    startWidgetContainer.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );
    var newRightValue = window.innerWidth * (parseFloat(position.right) / 100) - 280;
    startWidgetContainer.style.right = newRightValue + 'px';

    startWidgetContainer.style.bottom = '45px';
    const { secondary_text, top_text, hint_static_text, button_text, under_picture_text } =
      localStorageService.config;
    console.log('test');
    startWidgetContainer.innerHTML = `
      <div style='display:none;max-height: 167px;width: 240px; padding: 20px 22px;position:relative;' id='start_widget'>
        <div class='close_button align-right'>
          <img src='${closeIcon}' width='30' height='30' alt='' id="close_div_img">
        </div>
        <div class='coupon__preview__body coupon_discount_modal'>
          <div class='coupon__preview__card__header text-center d-block'>
            <h3>${top_text}</h3>
            <h4>${under_picture_text}</h4>
            <h3 class='color_text_bold_h3'>${secondary_text}</h3>
            <h4 class='color_text_bold_h4'>${hint_static_text}</h4>
          </div>
        </div>
      </div>
    `;

    widgetHtmlService.container.appendChild(startWidgetContainer);
    function closeModalDiscount() {
      const element = document.getElementById('start_widget');
      element.style.display = 'none';
      localStorage.setItem('closing_button', 'start_widget');
      localStorage.setItem('start_signal', true);
      if (localStorage.getItem('start_signal')) {
        boomioService.signal('START_OK');
      }
      const bubblElement = document.getElementById('boomio-widget-screen-wrapper-content');
      if (bubblElement) {
        bubblElement.remove();
      }
    }

    document.getElementById('close_div_img').onclick = closeModalDiscount;
    localStorage.setItem('closing_button', 'start_widget');
    localStorage.setItem('start_widget', true);
  };
}

export default () => {
  new StartWidget();
};
