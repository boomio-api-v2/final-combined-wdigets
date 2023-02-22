import { localStorageService, DragElement, QrCodeModal, AnimationService } from '@/services';

class ImageWidget {
  constructor() {
    this.startAnimation();
  }
  startAnimation = () => {
    const { img } = localStorageService.config;

    const { animationEl } = new AnimationService({
      size: 250,
      styles: {
        width: '100px',
        height: '100px',
        backgroundImage: `url(${img})`,
      },
    });
    animationEl.onclick = (e) => {
      e.target.remove();
      new QrCodeModal();
    };
    new DragElement(animationEl);
  };
}

export const startImageWidget = () => {
  new ImageWidget();
};
