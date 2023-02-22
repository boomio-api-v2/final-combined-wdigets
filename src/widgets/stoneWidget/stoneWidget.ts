import './styles.css';
import { AnimationService, DragElement, QrCodeModal } from '@/services';
import { loadImageBeforeUsing, assignStyleOnElement } from '@/utlis';
import {
  hammerImage,
  expolosionOneImage,
  expolosionTwoImage,
  expolosionThreeImage,
  closedChestImage,
  openedChestImage,
  cloudImage,
} from '@/сonstants/icons';
import { stoneBlocks } from './сonstants';

loadImageBeforeUsing([expolosionOneImage, expolosionTwoImage, expolosionThreeImage, cloudImage]);

class StoneWidget {
  private activeBlocks = 0;
  private stoneContainer: null | HTMLElement = null;

  constructor() {
    this.createContainer();
    this.createClosedChestImage();
  }

  animateBlock =
    (e) =>
    ({ img, animation, styles = {}, margin = 100, isCloud = false, time = 400 }) => {
      const { x_position, y_position } = this.draggeble;
      const image = new Image();
      const blockElement = document.createElement('img');
      const stoneContainer = this.stoneContainer;

      image.onload = function () {
        blockElement.setAttribute('src', this.src);
        blockElement.classList.add(animation);
        if (!isCloud) {
          blockElement.animate({ transform: 'scale(0)' }, { duration: time, fill: 'forwards' });
        }
        const left = e.clientX - x_position - margin;
        const top = e.clientY - y_position - margin;

        assignStyleOnElement(blockElement.style, {
          left: `${left}px`,
          top: `${top}px`,
          ...styles,
        });
        stoneContainer.appendChild(blockElement);

        setTimeout(() => {
          blockElement.remove();
        }, time);
      };
      image.src = img;
    };

  onBlockClick = (e: Event) => {
    const elem = e.target as HTMLElement;
    if (!elem.classList.contains('block')) return;
    const animationFunc = this.animateBlock(e);
    animationFunc({
      img: expolosionOneImage,
      animation: 'explosion-one',
      margin: 60,
    });
    animationFunc({
      img: expolosionTwoImage,
      animation: 'explosion-two',
      margin: 85,
    });
    animationFunc({
      img: expolosionThreeImage,
      animation: 'explosion-three',
      margin: 100,
    });
    setTimeout(() => {
      animationFunc({
        img: cloudImage,
        animation: 'cloud',
        margin: 100,
        isCloud: true,
        time: 2000,
      });
    }, 500);

    elem.remove();
    this.activeBlocks--;
  };

  createContainer() {
    const stoneContainer = document.createElement('div');
    stoneContainer.setAttribute('id', 'stone-container');

    const blocksElem = document.createElement('div');
    blocksElem.addEventListener('click', this.onBlockClick);
    stoneBlocks.forEach(({ img, ...styles }) => {
      const blockElem = document.createElement('img');
      blockElem.setAttribute('src', img);
      blockElem.classList.add('block');
      assignStyleOnElement(blockElem.style, { ...styles });
      blocksElem.appendChild(blockElem);
      this.activeBlocks++;
    });
    stoneContainer.appendChild(blocksElem);
    this.animation = new AnimationService({
      elem: stoneContainer,
    });
    const { posx, posy } = this.animation;
    this.draggeble = new DragElement(stoneContainer, { x_position: posx, y_position: posy });
    this.stoneContainer = stoneContainer;
    this.addHammerToCursor();
  }

  createClosedChestImage = () => {
    const chest = document.createElement('img');
    chest.classList.add('chest');
    chest.setAttribute('src', closedChestImage);
    this.stoneContainer.appendChild(chest);
    chest.onclick = (e) => {
      if (this.activeBlocks === 0 && !this.isQrCodeVisible) {
        this.animateBlock(e)({
          img: expolosionOneImage,
          animation: 'explosion-one',
          margin: 60,
        });
        this.isQrCodeVisible = true;
        chest.setAttribute('src', openedChestImage);
        setTimeout(() => {
          new QrCodeModal();
          this.stoneContainer.remove();
        }, 600);
      }
    };
    this.chest = chest;
  };

  addHammerToCursor = () => {
    const hammer = document.createElement('img');
    hammer.setAttribute('id', 'hammer');
    hammer.setAttribute('src', hammerImage);
    this.stoneContainer.appendChild(hammer);
    this.stoneContainer.onmousemove = ({ clientX, clientY }) => {
      const { x_position, y_position } = this.draggeble;
      assignStyleOnElement(hammer.style, {
        left: `${clientX - x_position + 5}px`,
        top: `${clientY - y_position + 5}px`,
      });
    };
  };
}

export default () => {
  new StoneWidget();
};
