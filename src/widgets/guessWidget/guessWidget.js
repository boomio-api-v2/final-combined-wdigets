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
    // <img src=${queIcon} alt="icon"></img>
    myCanvas.innerHTML = `
    <div class="wrapper">
      <ul class="guess-cards">
      <li id="cube1" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube2" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube3" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube4" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube5" class='cube'>
      <div class="front front-view centertile"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view centertile "></div>
      <div class="left front-view centertile"></div>
      <div class="top front-view centertile"></div>
      <div class="bottom front-view centertile"></div>
    </li>
      <li id="cube6" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube7" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube8" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
    </li>
      <li id="cube9" class='cube'>
      <div class="front front-view question"></div>
      <div class="back front-view"> <img class="cube-image"src=${img1}></div>
      <div class="right front-view"></div>
      <div class="left front-view"></div>
      <div class="top front-view"></div>
      <div class="bottom front-view"></div>
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
    const cubes = Array.from(document.querySelectorAll('.cube'));
    console.log('cubes', cubes)
    let arr = [1, 2, 3, 4, 1, 2, 3, 4];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    // for (let i = 1; i < 10; i++) {
    //   const element = document.getElementById(`cube${i}`);
    //   let imgTag = element.querySelector('img')
    //   console.log('imgTag ===', imgTag);
    //   imgTag.src = `https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-${i < 5 ? arr[i-1] : i > 5 ? arr[i - 2] : ''}.png?raw=true`;
    // }

    cubes.forEach((cube, i) => {
      let imgTag = cube.querySelector('img');
      // card.classList.remove('flip')

imgTag.src = `https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/img-${i < 4 ? arr[i] : i > 4 ? arr[i - 1] : ''}.png?raw=true`;
if (i === 4) {imgTag.src = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/guess3/src/widgets/guessWidget/center.png?raw=true'} 
    });

    // setTimeout(() => {
    //   for (let i = 1; i < 4; i++) {
    //     cards[i - 1].classList.add(`flytop${i}`)
    //     cards[i + 2].classList.add(`flymid${i}`)
    //     cards[i + 5].classList.add(`flybottom${i}`)
    //   }
    //   cards.forEach((card) => {
    //     card.classList.remove('invisible')
    //   })

    // }, 400);

    setTimeout(() => {

      cubes.forEach((cube, i) => {
        if (i != 4) {
          cube.classList.remove('turn-front')
          cube.classList.add('turn-back')
          const walls = Array.from(document.querySelectorAll('div'))
          walls.forEach((wall)=> {
            wall.classList.remove('front-view')
            wall.classList.add('back-view')
          })
        }
          })

    }, 500);

    setTimeout(() => {
      cubes.forEach((cube, i) => {
        if (i != 4) {
          cube.classList.add('turn-front')
          cube.classList.remove('turn-back')
          const walls = Array.from(document.querySelectorAll('div'))
          walls.forEach((wall)=> {
            wall.classList.add('front-view')
            wall.classList.remove('back-view')
          })
        }
          })
    },2000);

    // setTimeout(() => {
    //   cards.forEach((card) => {
    //     card.classList.remove('flip');
    //   })
    //   for (let i = 1; i < 4; i++) {
    //     cards[i - 1].classList.remove(`flytop${i}`)
    //     cards[i + 2].classList.remove(`flymid${i}`)
    //     cards[i + 5].classList.remove(`flybottom${i}`)
    //   }
    // }, 3000);


  }
  addCardEventListeners() {
    const cards = Array.from(document.querySelectorAll('.cube'));
    let matched = 0;
    let cardOne, cardTwo;
    let disableDeck = false;

    function flipCard({ target: clickedCard }) {
      const showBack = (el) => {
        el.classList.remove('turn-front')
        el.classList.add('turn-back')
        const walls = Array.from(el.querySelectorAll('div'))
        walls.forEach((wall)=> {
          wall.classList.remove('front-view')
          wall.classList.add('back-view')
        })
      }
  

// clickedCard.parentElement   
  
      console.log({ target: clickedCard.parentElement
      },'flip'  )

      if (clickedCard.parentElement.classList.contains('disabled')) return
      if (cardOne !== clickedCard.parentElement && !disableDeck) {
        // clickedCard.classList.add('flip');
        showBack(clickedCard.parentElement)
        if (!cardOne) {
          return (cardOne = clickedCard.parentElement);
        }
        cardTwo = clickedCard.parentElement;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('img').src,
          cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
      }
    }

    function matchCards(img1, img2) {
      const showFront = (el) => {
        el.classList.add('turn-front')
        el.classList.remove('turn-back')
        const walls = Array.from(el.querySelectorAll('div'))
        walls.forEach((wall)=> {
          wall.classList.add('front-view')
          wall.classList.remove('back-view')
        })
      }
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
        //cia matomai reikes listeneri nuimti nuo visu sienu 
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        return (disableDeck = false);
      }
      setTimeout(() => {
        // add mismach animation 
        // cardOne.classList.add('shake');
        // cardTwo.classList.add('shake');
      }, 400);

      setTimeout(() => {
        // remove mismach anim 
        // cardOne.classList.remove('shake');
        // cardTwo.classList.remove('shake');
        showFront(cardOne)
        showFront(cardTwo)
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
