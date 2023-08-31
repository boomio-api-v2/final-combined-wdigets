import {
  widgetHtmlService,
  AnimationService,
  localStorageService,
  DragElement,
  QrCodeModal,
} from '@/services';
import './styles.css';

import { createCloseMoveButtons } from '@/utlis';

class GuessWidget {
  constructor() {
    this.startGuess();
  }

  startGuess() {
    this.config = localStorageService.getDefaultConfig();
    this.createContainer();

    this.guess = document.getElementById('boomio-guess-container');
    this.animation = new AnimationService({
      elem: this.guess,
      posx: window.matchMedia('(min-width: 450px)').matches ? 1 : -50,
      posy: 1,
    });

    if (window.matchMedia('(min-width: 600px)').matches) {
      this.draggeble = new DragElement(this.guess);
      new DragElement(this.guess);
    }
    setTimeout(() => {
      this.shuffleCard();
      this.addCardEventListeners();
    }, 200);
  }

  createContainer = () => {
    const queIcon =
      'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/1c01bd6fb616cfea26f25c6287d2d860d987ae63/src/widgets/guessWidget/que_icon.svg';
    const img1 =
      'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-1.png?raw=true';
    const myCanvas = document.createElement('div');
    myCanvas.setAttribute('id', 'boomio-guess-container');
    myCanvas.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );
    myCanvas.innerHTML = `
    <div class="boomio-wrapper">
      <ul class="boomio-guess-cards">
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="boomio-guess-card">
          <div class="boomio-view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="boomio-view back-view">
            <img src=${img1}>
          </div>
        </li>
      
      
      </ul>
    </div>
    `;
    widgetHtmlService.container.appendChild(myCanvas);
    createCloseMoveButtons(
      myCanvas.querySelector('.boomio-wrapper'),
      document.getElementById('boomio-guess-container'),
    );
  };

  shuffleCard() {
    const cards = Array.from(document.querySelectorAll('.guess-card'));

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, i) => {
      card.classList.remove('flip');
      let imgTag = card.querySelector('.back-view img');

      imgTag.src = `https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-${arr[i]}.png?raw=true`;
    });
  }

  addCardEventListeners() {
    const cards = Array.from(document.querySelectorAll('.guess-card'));
    let matched = 0;
    let cardOne, cardTwo;
    let disableDeck = false;

    function flipCard({ target: clickedCard }) {
      if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add('flip');
        if (!cardOne) {
          return (cardOne = clickedCard);
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('.back-view img').src,
          cardTwoImg = cardTwo.querySelector('.back-view img').src;
        matchCards(cardOneImg, cardTwoImg);
      }
    }

    function matchCards(img1, img2) {
      if (img1 === img2) {
        matched++;
        if (matched == 6) {
          setTimeout(() => {
            const guessContainer = document.getElementById('boomio-guess-container');
            if (guessContainer && guessContainer.parentNode) {
              guessContainer.parentNode.removeChild(guessContainer);
              new QrCodeModal();
            }
          }, 1000);
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return (disableDeck = false);
      }
      setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
      }, 400);

      setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disableDeck = false;
      }, 1200);
    }

    cards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });
  }
}

export default () => {
  new GuessWidget();
};
