import {
  boomioService,
  localStorageService,
  DragElement,
  QrCodeModal,
  AnimationService,
  widgetHtmlService,
} from '@/services';
import { getRandomArbitrary } from '@/utlis';

import { defaultList } from './constants';

import './styles.css';
import { IWheelListItem } from '@/widgets/wheelOfFortuneWidget/types';

class WheelOfFortuneWidget {
  private friction = 0.991;
  private angVelMin = 0.002;
  private angVelMax = 0;
  private angVel = 0;
  private ang = 0;
  private PI = Math.PI;
  private isSpinning = false;
  private isAccelerating = false;
  private config = localStorageService.getDefaultConfig();
  private elSpin: HTMLElement;
  private ctx: CanvasRenderingContext2D;
  private wheelOfFortune: HTMLElement;
  private TAU: number;
  private arc: number;
  private rad: number;
  private dia: number;
  private tot: number;

  constructor() {
    if (!this.config.success) return;
    this.createWheel();
    this.elSpin = document.querySelector('#spin');
    this.ctx = (document.getElementById('wheel') as HTMLCanvasElement).getContext(`2d`);
    this.tot = defaultList.length ?? 0;
    this.dia = this.ctx.canvas.width;
    this.rad = this.dia / 2;
    this.TAU = 2 * this.PI;
    this.arc = this.TAU / (defaultList.length ?? 0);

    this.elSpin.addEventListener('click', () => {
      boomioService.signal('SPIN');
      if (this.isSpinning) return;
      this.isSpinning = true;
      this.isAccelerating = true;
      this.angVelMax = getRandomArbitrary(0.1, 0.2);
    });

    defaultList.forEach(this.drawSector);
    /// //To Check///////
    // if (document.readyState !== 'complete') return;
    this.wheelOfFortune = document.getElementById('wheelOfFortune');
    this.wheelOfFortune.style.display = 'block';
    this.addCloseIconToElement(this.wheelOfFortune);

    new DragElement(this.wheelOfFortune);

    this.rotate(); // Initial rotation
    this.engine(); // Start engine!
    this.startAnimation();
  }

  engine = () => {
    this.frame();
    requestAnimationFrame(this.engine);
  };

  frame = () => {
    if (!this.isSpinning) return;

    if (this.angVel >= this.angVelMax) this.isAccelerating = false;

    // Accelerate
    if (this.isAccelerating) {
      this.angVel ||= this.angVelMin; // Initial velocity kick
      this.angVel *= 1.06; // Accelerate
    }

    // Decelerate
    else {
      this.isAccelerating = false;
      this.angVel *= this.friction; // Decelerate by friction

      // SPIN END:
      if (this.angVel < this.angVelMin) {
        this.isSpinning = false;
        this.angVel = 0;
        new QrCodeModal();
        this.wheelOfFortune.remove();
      }
    }
    this.ang += this.angVel; // Update angle
    this.ang %= this.TAU; // Normalize angle
    this.rotate(); // CSS rotate!
  };

  getIndex = () => Math.floor(this.tot - (this.ang / this.TAU) * this.tot) % this.tot;

  rotate = () => {
    const sector = defaultList?.[this.getIndex()];
    this.ctx.canvas.style.transform = `rotate(${this.ang - this.PI / 2}rad)`;
    this.elSpin.innerHTML = !this.angVel
      ? 'SPIN'
      : `
            <img style="width: 40px; height: 40px" src="${sector.img}"></img>
        `;
    this.elSpin.style.background = sector?.color;
  };

  drawSector = (sector: IWheelListItem, i: number) => {
    const ang = this.arc * i;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = sector.color;
    this.ctx.moveTo(this.rad, this.rad);
    this.ctx.arc(this.rad, this.rad, this.rad, ang, ang + this.arc);
    this.ctx.lineTo(this.rad, this.rad);
    this.ctx.fill();
    this.ctx.translate(this.rad, this.rad);
    this.ctx.rotate(ang + this.arc / 2);
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 30px sans-serif';
    this.ctx.font = '14px serif';
    const img = new Image();
    img.src = sector.img;
    this.ctx.drawImage(img, 86, -12, 32, 32);
    this.ctx.fillText(sector.label, this.rad - 55, 10);
    this.ctx.restore();
  };

  createWheel = () => {
    const wheel = document.createElement('div');
    wheel.setAttribute('id', 'wheelOfFortune');
    wheel.classList.add('boomio--animation__wrapper', 'boomio--animation__wrapper--initial');
    wheel.style.display = 'none';
    wheel.innerHTML = `
                <canvas id="wheel" width="250" height="250"></canvas>
                <div id="spin">SPIN asd asd asd as dasd as dasd asd asd as d</div>
          `;
    widgetHtmlService.container.appendChild(wheel);
  };

  startAnimation = () => {
    new AnimationService({
      elem: this.wheelOfFortune,
      size: 250,
    });
  };

  addCloseIconToElement = (element: HTMLElement) => {
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('custom-close-icon');
    closeBtn.innerHTML = '&#x2715; ';
    closeBtn.addEventListener(
      'click',
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        element.remove();
      },
      { once: true },
    );
    element.appendChild(closeBtn);
  };
}

export default () => {
  new WheelOfFortuneWidget();
};
