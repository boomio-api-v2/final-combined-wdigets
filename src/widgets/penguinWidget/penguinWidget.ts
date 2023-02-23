import { isMobileDevice } from '@/config';
import { AnimationService, DragElement, QrCodeModal } from '@/services';
import { assignStyleOnElement } from '@/utlis';
import { iceHammerImage } from '@/сonstants';

import { iceBackgroundImage, penguinParams, iceBlocksParams, iceExplosionImage } from './constants';

import type { IPenguinWidgetBlockParams } from './types';
import type { IDraggeble } from '@/types';

import './styles.css';

class PenguinWidget {
  private crushedIce = 0;
  private iceBackground: HTMLElement;
  private hammer: HTMLElement;
  private widget: HTMLElement;
  private draggeble: IDraggeble;
  constructor() {
    this.start();
  }

  start() {
    const widget = document.createElement('div');
    widget.setAttribute('id', 'penguin-widget');

    const iceBackground = document.createElement('div');
    iceBackground.classList.add('ice-background');
    iceBackground.style.backgroundImage = `url(${iceBackgroundImage})`;

    widget.appendChild(iceBackground);

    const animation = new AnimationService({
      elem: widget,
    });
    const { posx, posy } = animation;

    this.draggeble = new DragElement(widget, { x_position: posx, y_position: posy });
    this.iceBackground = iceBackground;
    this.widget = widget;
    this.addHammerToCursor();
    this.renderBlocksFromArray(penguinParams, 'penguin');
    this.renderBlocksFromArray(iceBlocksParams, 'ice-block', this.onIceBlockClick);
    // widget.onclick = this.onIceBlockClick;
  }

  onIceBlockClick = (idx: number) => (e: Event) => {
    this.showHammerAnimation();
    this.crushedIce++;

    const elem = e.target as HTMLImageElement;
    if (!elem.classList.contains('ice-block')) return;
    elem.src = iceExplosionImage;
    const { fruitImg, moveX, moveY } = iceBlocksParams[idx];

    const moveFruitToPenguin = () => {
      const size = isMobileDevice ? '25px' : '40px';
      assignStyleOnElement(elem.style, {
        width: size,
        height: size,
      });

      setTimeout(() => {
        assignStyleOnElement(elem.style, {
          left: `${moveX}px`,
          top: `${moveY}px`,
        });
      });
    };

    elem.addEventListener('load', () => {
      setTimeout(() => {
        elem.src = fruitImg;
        elem.addEventListener('load', moveFruitToPenguin);
      }, 100);
    });

    if (this.crushedIce === 4) {
      setTimeout(() => {
        new QrCodeModal();
        this.widget.remove();
      }, 1500);
    }
  };

  showHammerAnimation = () => {
    this.hammer.style.transform = 'rotate(-100deg)';
    setTimeout(() => {
      this.hammer.style.transform = 'rotate(40deg)';
    }, 400);
  };

  addHammerToCursor = () => {
    const hammer = document.createElement('img');
    hammer.setAttribute('id', 'hammer');
    hammer.setAttribute('src', iceHammerImage);
    this.widget.appendChild(hammer);
    this.widget.onmousemove = ({ clientX, clientY }) => {
      const { x_position, y_position } = this.draggeble;
      assignStyleOnElement(hammer.style, {
        left: `${clientX - x_position + (isMobileDevice ? 15 : 20)}px`,
        top: `${clientY - y_position - (isMobileDevice ? 40 : 60)}px`,
      });
    };
    this.hammer = hammer;
  };

  renderBlocksFromArray = (
    array: IPenguinWidgetBlockParams[],
    className: string,
    onClick?: (idx: number) => (e: Event) => void,
  ) => {
    array.forEach(({ img, size, x, y }, idx: number) => {
      const block = document.createElement('img');
      block.classList.add(className);
      block.src = img;
      if (onClick) {
        block.onclick = onClick(idx);
      }
      assignStyleOnElement(block.style, {
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        position: 'absolute',
      });
      this.iceBackground.appendChild(block);
    });
  };
}

export default () => {
  new PenguinWidget();
};
