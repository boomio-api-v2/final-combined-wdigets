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
    startWidgetContainer.style.right = position.right;
    startWidgetContainer.style.bottom = position.bottom;
    const { secondary_text, top_text, hint_static_text, button_text, under_picture_text } =
      localStorageService.config;

    startWidgetContainer.innerHTML = `
      <div class='position-relative product-design-bg-2 Preview-select' style='display:none;max-height: 167px;width: 485px; padding: 20px 22px;position:relative;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); fill: linear-gradient(180deg, #598BF3 0%, #8559F3 49.48%, #C52866 100%);' id='start_widget'>
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
    }

    document.getElementById('close_div_img').onclick = closeModalDiscount;
    localStorage.setItem('closing_button', 'start_widget');
    localStorage.setItem('start_widget', true);
  };
}

export default () => {
  new StartWidget();
};
