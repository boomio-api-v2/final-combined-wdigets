import { widgetHtmlService, DragElement } from '@/services';
import { closeIcon } from '@/сonstants/icons';
import './styles.css';

class MazeWidget {
  constructor() {
    this.startAnimation();
  }

  startAnimation = () => {
    localStorage.setItem('maze', true);
    const width = 600;
    const height = 372;
    const { clientWidth, clientHeight } = document.documentElement;
    const posx = ((clientWidth - width) / 2).toFixed();
    const posy = ((clientHeight - height) / 2).toFixed();
    const animationEl = document.createElement('div');
    animationEl.style.position = 'absolute';
    animationEl.style.top = `${posy}px`;
    animationEl.style.left = `${posx}px`;
    animationEl.style.width = `${width}px`;
    animationEl.style.height = `${height}px`;
    document.body.appendChild(animationEl);
    new DragElement(animationEl);

    function closeModalDiscount() {
      removeWidgets();
      localStorage.removeItem('maze');
      animationEl.remove();
    }


    function removeWidgets() {
      const element = document.getElementById('boomio-widget-screen-wrapper-content');
      if (element) {
        element.remove();
      }
      widgetHtmlService.createWidgetContainer();
    }


    animationEl.innerHTML = `
      <div  class='position-relative product-design-bg-2 Preview-select' style='z-index:10000000000000; min-width: 260px;min-height: 320px; padding: 20px 0px;position:relative;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); border: 1px solid #ddd' id='widget_test'>
        <div class='close_button align-right'>
          <img src='${closeIcon}' width='30' height='30' alt='' id="close_div_img">
        </div>
        <h2>Čia bus naujas widgetas</h2>
      </div>
    `;


    document.getElementById('close_div_img').onclick = closeModalDiscount;

    document.getElementById('remove_div_btn').onclick = removeWidgets;

  };
}

let mazeWidget = null;

export default () => {
  if (!mazeWidget) {
    mazeWidget = new MazeWidget();
  }
};
