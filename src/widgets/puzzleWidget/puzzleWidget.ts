import {
  boomioService,
  localStorageService,
  DragElement,
  AnimationService,
  QrCodeModal,
  widgetHtmlService,
} from '@/services';
import { closeImage, frameSvg, puzzleIconsList } from '@/сonstants/icons';
import { isMobileDevice } from '@/config';
import { getRandomArbitrary, assignStyleOnElement } from '@/utlis';
import { puzzlesCoordinateForDesktop, puzzlesCoordinate, puzzleWidgetSize } from './constants';
import { IPuzzleCoordinate } from '@/widgets/puzzleWidget/types';
/// ///// Services ////////

/// /////Puzzle Class ////////////
export class Puzzle {
  private mainContainer: HTMLElement = widgetHtmlService.container;
  private animationEl: null | HTMLElement = null;
  private isPrewiewDisplayed: boolean;
  private puzzleWidget: null | HTMLElement = null;
  private modalBackground: null | HTMLElement = null;
  private modal?: null | HTMLElement = null;
  private coordinates: IPuzzleCoordinate[] = puzzlesCoordinate;

  addImageTPuzzleWidget = () => {
    this.puzzleWidget.style.backgroundImage = `url(${frameSvg})`;
  };

  createPuzzleWidget = () => {
    const puzzleWidget = document.createElement('div');
    puzzleWidget.setAttribute('id', 'puzzle-widget');
    assignStyleOnElement(puzzleWidget.style, {
      position: 'relative',
      backgroundImage: ` url(${frameSvg})`,
    });
    this.puzzleWidget = puzzleWidget;

    this.drawPuzzlesByCollectedCount(puzzlesCoordinateForDesktop);
  };

  // This method for creating widget in window
  showPuzzleWidgetWindowDraggable = (isAnimation = false) => {
    const { x_position, y_position } = localStorageService.config;
    const puzzleWidget = document.createElement('div');
    const widgetSmallPreview = document.createElement('div');
    puzzleWidget.setAttribute('id', 'puzzle-widget');
    puzzleWidget.appendChild(widgetSmallPreview);
    puzzleWidget.style.backgroundImage = ` url(${frameSvg})`;

    if (isAnimation) {
      puzzleWidget.classList.add('animation-widget');
    }

    puzzleWidget.addEventListener(isMobileDevice ? 'click' : 'dblclick', () => {
      puzzleWidget.remove();
      this?.animationEl?.remove();
      this.isPrewiewDisplayed = true;
      this.showModalWidgetPreview(false);
    });

    const { clientWidth, clientHeight } = document.documentElement;

    const left = x_position || clientWidth - 40 - puzzleWidgetSize;
    const top = y_position || clientHeight - 40 - puzzleWidgetSize;
    const size = `${puzzleWidgetSize}px`;
    assignStyleOnElement(puzzleWidget.style, {
      width: size,
      height: size,
      left: `${left}px`,
      top: `${top}px`,
    });

    this.mainContainer.appendChild(puzzleWidget);
    this.puzzleWidget = puzzleWidget;
    if (localStorageService.config.puzzles_collected > 0) {
      this.addCloseIconToElement(puzzleWidget);
    }
    new DragElement(this.puzzleWidget);
    this.drawPuzzlesByCollectedCount();
  };

  drawPuzzlesByCollectedCount = (coordinate = puzzlesCoordinate) => {
    for (let i = 0; i < localStorageService.config.puzzles_collected; i++) {
      const backgroundImage = `url(${puzzleIconsList[i]})`;
      const { top, left, width, height } = coordinate[i];
      const animationEl = document.createElement('div');
      animationEl.classList.add('boomio--animation__wrapper');
      assignStyleOnElement(animationEl.style, {
        top: `${top}px`,
        left: `${left}px`,
        width,
        height,
        backgroundImage,
        position: 'absolute',
      });

      this.puzzleWidget.appendChild(animationEl);
    }
  };

  createModalWindow = (width = 300, height = 442) => {
    /// /Add modal Background //////
    const modalBackground = document.createElement('div');
    modalBackground.setAttribute('id', 'modalBackground');
    /// //////////////////////

    /// /////Add modal ///////
    const modal = document.createElement('div');
    modal.setAttribute('id', 'widgetModal');
    assignStyleOnElement(modal.style, {
      width: `${width}px`,
      height: `${height}px`,
      transform: 'scale(1)',
    });
    modalBackground.appendChild(modal);
    this.mainContainer.appendChild(modalBackground);
    this.modal = modal;
    this.modalBackground = modalBackground;
    /// /////////////////////////
  };

  getCloseModalBtn = (closeCallback: () => void) => {
    const closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.classList.add('close-modal-btn-wrapper');
    const closeBtn = document.createElement('img');
    closeBtn.src = closeImage;
    closeBtn.classList.add('close-modal-btn');
    closeBtn.onclick = closeCallback;
    closeBtnWrapper.appendChild(closeBtn);
    return closeBtnWrapper;
  };

  closeAnimation = (callback: () => void) => () => {
    assignStyleOnElement(this.modal.style, {
      transformOrigin: '100% 100%',
      transform: 'scale(0)',
    });

    this.modal.addEventListener('transitionend', () => {
      this.puzzleWidget.remove();
      this.modalBackground.remove();
      if (callback) {
        callback();
      }
    });
  };

  showModalWidgetPreview = (showAnimation = false) => {
    const { appearing_puzzle_nr, w_top_text, w_button_text, w_hint_static_text, w_hint_text } =
      localStorageService.config;
    const isLastPuzzle = appearing_puzzle_nr === 4 && showAnimation;
    this?.puzzleWidget?.remove();
    this.createPuzzleWidget();
    this.createModalWindow();

    const showWidget = () => {
      this.showPuzzleWidgetWindowDraggable(true);
    };
    /// // Add close button //////

    const animationFunc = this.closeAnimation(showWidget);

    if (!isLastPuzzle) {
      const closeBtn = this.getCloseModalBtn(animationFunc);
      this.modal.appendChild(closeBtn);
    }
    /// ///////////////

    /// /////Add text top/////////
    const topText = document.createElement('div');
    topText.classList.add('topText');
    topText.innerHTML = w_top_text;
    this.modal.appendChild(topText);
    /// ///////////////

    if (isLastPuzzle) {
      assignStyleOnElement(this.modal.style, {
        height: 'max-content',
        padding: '54px 24px',
      });
      this.puzzleWidget.style.marginTop = '24px';
    }

    /// /////Add text bottom/////////
    if (!isLastPuzzle) {
      const bottomText = document.createElement('div');
      bottomText.classList.add('bottomText');
      bottomText.innerHTML = `${w_hint_static_text}:<br>${w_hint_text}`;
      this.modal.appendChild(bottomText);
    }
    /// ///////////////
    this.modal.appendChild(this.puzzleWidget);

    /// //Add go button ////
    if (!isLastPuzzle) {
      const goBtn = document.createElement('button');
      goBtn.setAttribute('id', 'goModalButton');
      goBtn.innerHTML = w_button_text;
      goBtn.onclick = animationFunc;
      this.modal.appendChild(goBtn);
    }
    /// ///////////////

    if (showAnimation) {
      boomioService.signal(`PUZZLE${appearing_puzzle_nr}_CLICK`);
      setTimeout(this.addPuzzleToWidget, 1000);
    }
  };

  addPuzzleToWidget = () => {
    let { puzzles_collected } = localStorageService.config;

    this.startAnimation(
      puzzlesCoordinateForDesktop,
      {
        zIndex: 100000000000000,
        position: 'absolute',
      },
      this.puzzleWidget,
      false,
    );
    if (!this.isPrewiewDisplayed) {
      localStorageService.updateConfig({
        puzzles_collected: (puzzles_collected += 1),
      });
    }

    if (puzzles_collected < 4) return;
    setTimeout(() => {
      this.closeModal();
      boomioService.signal('PUZZLE_CODE_REVEALED');
      new QrCodeModal();
    }, 2000);
  };

  onPuzzleClick = (e: Event) => {
    const puzzle = e.target as HTMLElement;
    puzzle.remove();
    this.isPrewiewDisplayed = false;
    this.showModalWidgetPreview(true);
  };

  startAnimation = (
    coordinates?: IPuzzleCoordinate[],
    styles = {},
    parent = this.mainContainer,
    isClickable = true,
  ) => {
    const { qrcode, puzzles_collected } = localStorageService.config;
    const defaultCoordinates = this.coordinates[puzzles_collected];

    const currentCoordinates = coordinates?.[puzzles_collected];
    const customPosX = currentCoordinates?.left;
    const customPosY = currentCoordinates?.top;
    const width = currentCoordinates?.width ?? defaultCoordinates.width;
    const height = currentCoordinates?.height ?? defaultCoordinates.height;

    // if ((render_count % appearing_puzzle_nr) !== 0) return;
    const puzzleSize = 100;

    const dash = '-';
    const pos = `${qrcode}`.indexOf(dash);

    if (pos !== -1) {
      localStorageService.config.qrcode = qrcode.substring(0, pos);
    }

    const { clientWidth, clientHeight } = document.documentElement;
    const startCoordinate = puzzleWidgetSize + 25;
    const limitX = clientWidth - puzzleSize - 10;
    const limitY = clientHeight - puzzleSize - 10;

    const posx = customPosX ?? getRandomArbitrary(startCoordinate, limitX);
    const posy = customPosY ?? getRandomArbitrary(startCoordinate, limitY);

    const animStyles = {
      width,
      height,
      backgroundSize: 'container',
      backgroundImage: `url(${puzzleIconsList[puzzles_collected]})`,
      ...styles,
    };

    const { animationEl } = new AnimationService({
      posx,
      posy,
      size: puzzleWidgetSize,
      parent,
      styles: animStyles,
    });

    animationEl.classList.remove('boomio--qr');

    if (isClickable) {
      animationEl.classList.add('boomio--animation__hover');
      animationEl.addEventListener('click', this.onPuzzleClick, {
        once: true,
      });
    }
    this.animationEl = animationEl;
  };

  closeModal = () => {
    this.modalBackground.remove();
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
        this.disableWidgetAndRemoveAllElements();
      },
      {
        once: true,
      },
    );
    element.appendChild(closeBtn);
  };

  disableWidgetAndRemoveAllElements = () => {
    boomioService.signal('PUZZLE_CLOSED');
    this.puzzleWidget.remove();
    this.animationEl?.remove();
  };
}
/// /////////////////////////

export default () => {
  const puzzle = new Puzzle();

  const { success, puzzles_collected, appearing_puzzle_nr } = localStorageService.config;

  if (!success) {
    return;
  }

  if (puzzles_collected > 0) {
    puzzle.showPuzzleWidgetWindowDraggable();
  }

  if (appearing_puzzle_nr > 1) {
    puzzle.addImageTPuzzleWidget();
  }

  if (appearing_puzzle_nr) {
    puzzle.startAnimation();
  }
};
