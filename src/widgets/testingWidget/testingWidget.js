import { widgetHtmlService, boomioService, DragElement } from '@/services';
import { closeIcon } from '@/сonstants/icons';
import './styles.css';

class TestingWidget {
  constructor() {
    this.startAnimation();
  }
  startAnimation = () => {
    localStorage.setItem('testing_Widgets', true);
    const width = 280;
    const height = 372;

    const { clientWidth, clientHeight } = document.documentElement;

    const posx = ((clientWidth - width) / 2).toFixed();
    const posy = ((clientHeight - height) / 2).toFixed();

    const animationEl = document.createElement('div');
    animationEl.style.position = 'absolute';
    animationEl.style.top = `${posy}px`;
    animationEl.style.left = `30px`;
    animationEl.style.width = `${width}px`;
    animationEl.style.height = `${height}px`;

    document.body.appendChild(animationEl);

    new DragElement(animationEl);

    function closeModalDiscount() {
      removeWidgets();
      localStorage.removeItem('testing_Widgets');
      animationEl.remove();
    }

    function removeWidgets() {
      const element = document.getElementById('boomio-widget-screen-wrapper-content');
      if (element) {
        element.remove();
      }
      widgetHtmlService.createWidgetContainer();
    }

    const widgetsList = [
      { spawn: 'puzzle', despawn: 'puzzle-widget', name: 'Puzzle' },
      { spawn: 'wheel', despawn: 'wheelOfFortune', name: 'Wheel Of Fortune' },
      { spawn: 'stone', despawn: 'stone-container', name: 'Stone' },
      { spawn: 'ice', despawn: 'ice-widget', name: 'Ice' },
      { spawn: 'penguin', despawn: 'penguin-widget', name: 'Penguin' },
      { spawn: 'snake', despawn: 'snake', name: 'Snake' },
      { spawn: 'cats', despawn: 'cats', name: 'Cats Widget' },
      { spawn: 'hedgehog', despawn: 'hedgehog', name: 'Hedgehog Widget' },
      { spawn: 'guess', despawn: 'guess', name: 'Guess image Widget' },
    ];

    let buttonsHtml = '';
    widgetsList.forEach((widget) => {
      const spawnBtnId = `SpawnBtn_${widget.spawn}`;

      buttonsHtml += `<div style='width:100%;margin-bottom:10px'>
      ${
        widget.spawn === 'snake'
          ? `<p style='margin-top:20px;margin-bottom:30px;'>Coming soon</p>`
          : ''
      }
          <button class='go_button' style='width:180px !important' data-widget-spawn='${
            widget.spawn
          }' id='${spawnBtnId}'>${widget.name}</button>
        </div>`;
    });

    animationEl.innerHTML = `
      <div  class='position-relative product-design-bg-2 Preview-select' style='z-index:10000000000000; min-width: 260px;min-height: 320px; padding: 20px 0px;position:relative;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); border: 1px solid #ddd' id='widget_test'>
        <div class='close_button align-right'>
          <img src='${closeIcon}' width='30' height='30' alt='' id="close_div_img">
        </div>
        <div class='coupon__preview__body coupon_discount_modal'>
            <h2>Widgets Preview</h2>
            <div class='coupon__preview__card__header_buttons text-center d-block'>

            ${buttonsHtml}          
          </div>
          <div class='coupon__preview__card__header text-center d-block'>
          <div style='width:100%;margin-bottom:16px;margin-left:-17px'>
          <button class='go_button' id='remove_div_btn' style='margin-top:10px'>Remove All</button>
        </div>        
        </div>
        </div>
      </div>
    `;

    const couponPreviewContainer = animationEl.querySelector(
      '.coupon__preview__card__header_buttons',
    );

    couponPreviewContainer.addEventListener('touchstart', (event) => {
      event.stopPropagation();
    });

    couponPreviewContainer.addEventListener('touchmove', (event) => {
      event.stopPropagation();
    });
    document.getElementById('close_div_img').onclick = closeModalDiscount;
    document.getElementById('remove_div_btn').onclick = removeWidgets;

    let prevWidget = '';

    widgetsList.forEach((widget) => {
      const spawnBtnId = `SpawnBtn_${widget.spawn}`;

      document.getElementById(spawnBtnId).onclick = () => {
        const widgetName = document.getElementById(spawnBtnId).getAttribute('data-widget-spawn');
        if (prevWidget) {
          // const element = document.getElementById(prevWidget.despawn); //might need to change so it only removes prev
          // if (element) {
          //   element.remove();
          // }

          removeWidgets();
        }
        boomioService.testing(widgetName);
        prevWidget = widget;
      };
    });
  };
}

let testingWidget = null;

export default () => {
  if (!testingWidget) {
    testingWidget = new TestingWidget();
  }
};
