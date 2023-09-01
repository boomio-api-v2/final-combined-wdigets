import {
  widgetHtmlService,
  AnimationService,
  localStorageService,
  DragElement,


  QrCodeModal,
} from '@/services';
import './styles.css';


class GuessWidget {
  constructor() {
    this.startGuess();
  }

  startGuess() {
    this.config = localStorageService.getDefaultConfig();
    this.createContainer();

    this.guess = document.getElementById('guess-container');
    this.animation = new AnimationService({
      elem: this.guess,
      posx: window.matchMedia("(min-width: 450px)").matches ? 50 : -50,
      posy: 1,
    });

    if (window.matchMedia("(min-width: 600px)").matches) {
      this.draggeble = new DragElement(this.guess);
      new DragElement(this.guess);
    }
    setTimeout(() => {
      this.shuffleCard();
    }, 200);
    setTimeout(() => {
      this.addCardEventListeners();
    }, 3200);
  }

  createContainer = () => {
    const queIcon = 'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/1c01bd6fb616cfea26f25c6287d2d860d987ae63/src/widgets/guessWidget/que_icon.svg'
    const img1 = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-1.png?raw=true'
    const img7 = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/guess3/src/widgets/guessWidget/img-7.png?raw=true'
    const center = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/guess3/src/widgets/guessWidget/center.png?raw=true'
    const myCanvas = document.createElement('div');
    myCanvas.setAttribute('id', 'guess-container');
    myCanvas.classList.add(
      'boomio--animation__wrapper',
      'boomio--animation__wrapper--initial',
      'box',
    );
    myCanvas.innerHTML = `
    <div class="wrapper">
      <ul class="guess-cards">
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card disabled invisible">
          <div class="view front-view">
          <img src=${center} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${center} alt="icon">
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>
        <li class="guess-card invisible">
          <div class="view front-view">
          <img src=${queIcon} alt="icon">
          </div>
          <div class="view back-view">
            <img src=${img1}>
          </div>
        </li>    
      </ul>
    </div>
    `;
    widgetHtmlService.container.appendChild(myCanvas);
    this.addCloseIconToElement(
      myCanvas.querySelector('.wrapper'),
      document.getElementById('guess-container'),
    );
  };

  addCloseIconToElement = (element, deleteElement) => {
    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.flexDirection = 'column';
    btnContainer.style.justifyContent = 'center';
    const dragBtn = document.createElement('div')
    if (window.matchMedia("(min-width: 600px)").matches) {
      dragBtn.classList.add('action-icon', 'move');
      dragBtn.innerHTML = '<img src="https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/x-move.png?raw=true"></img>';
    }
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('action-icon', 'close');
    closeBtn.innerHTML =
      '<img src="https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/x-circle.png?raw=true"></img>';
    closeBtn.addEventListener(
      'click',
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteElement.remove(); // Remove the specified deleteElement
      },
      { once: true },
    );
    btnContainer.appendChild(closeBtn);
    if (window.matchMedia("(min-width: 600px)").matches) { btnContainer.appendChild(dragBtn); }
    element.appendChild(btnContainer);
  };


  shuffleCard() {
    const cards = Array.from(document.querySelectorAll('.guess-card'));

    let arr = [1, 2, 3, 4, 1, 2, 3, 4];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, i) => {
      card.classList.remove('flip')
      let imgTag = card.querySelector('.back-view img');

      imgTag.src = `https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/guess3-3dimages/src/widgets/guessWidget/img-${i < 4 ? arr[i] : i > 4 ? arr[i - 1] : ''}.png?raw=true`;
      // imgTag.src = `https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-${i < 4 ? arr[i] : i > 4 ? arr[i - 1] : ''}.png?raw=true`;

      

    });

    setTimeout(() => {
      for (let i = 1; i < 4; i++) {
        cards[i - 1].classList.add(`flytop${i}`)
        cards[i + 2].classList.add(`flymid${i}`)
        cards[i + 5].classList.add(`flybottom${i}`)
      }
      cards.forEach((card) => {
        card.classList.remove('invisible')
      })

    }, 400);

    setTimeout(() => {

      cards.forEach((card, i) => {
        if (i != 4) card.classList.add('flip');
      })

    }, 2000);

    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove('flip');
      })
      for (let i = 1; i < 4; i++) {
        cards[i - 1].classList.remove(`flytop${i}`)
        cards[i + 2].classList.remove(`flymid${i}`)
        cards[i + 5].classList.remove(`flybottom${i}`)
      }
    }, 3000);


  }
  addCardEventListeners() {
    const cards = Array.from(document.querySelectorAll('.guess-card'));
    let matched = 0;
    let cardOne, cardTwo;
    let disableDeck = false;

    function flipCard({ target: clickedCard }) {
      if (clickedCard.classList.contains('disabled')) return
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
        cardOne.classList.add('jump');
        cardTwo.classList.add('jump');
        if (matched == 4) {
          setTimeout(() => {
            const guessContainer = document.getElementById('guess-container');
            if (guessContainer && guessContainer.parentNode) {
              guessContainer.parentNode.removeChild(guessContainer);
              new QrCodeModal();
            }
          }, 3000);
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
