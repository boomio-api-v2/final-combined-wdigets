import { QRCode } from 'exports-loader?type=commonjs&exports=QRCode!../../qrcode.min.js';
import { boomioService, localStorageService } from '@/services';
import { isMobileDevice } from '@/config';
import { assignStyleOnElement } from '@/utlis';
import { closeImage, dotImage } from '@/сonstants/icons';
import { exitBtnHtml } from '@/сonstants/htmlTemplates';
import './styles.css';

const likeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/like.svg';
const disLikeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/dislike.svg';

export default class QrCodeModal {
  constructor() {
    this.showQR();
  }

  closeAnimation = (callback) => () => {
    assignStyleOnElement(this.modal.style, {
      transformOrigin: '100% 100%',
      transform: 'scale(0)',
    });
    this.modal.addEventListener('transitionend', () => {
      this.modalBackground.remove();
      if (callback) {
        callback();
      }
    });
  };

  closeModal = () => {
    this.modalBackground.remove();
  };

  showRatingModal = () => {
    this.createModalWindow(296, 154);
    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');
    textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';
    this.modal.appendChild(textTitle);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('modal-buttons');

    const likeBtn = document.createElement('img');
    likeBtn.setAttribute('src', likeBtnImage);

    const yesBtn = document.createElement('button');
    yesBtn.onclick = this.onModalClickBtnWithCommand('well_yes');
    yesBtn.classList.add('yes-button');
    yesBtn.innerHTML = 'Yes!';
    yesBtn.appendChild(likeBtn);

    const dislikeBtn = document.createElement('img');
    dislikeBtn.setAttribute('src', disLikeBtnImage);

    const noBtn = document.createElement('button');
    noBtn.onclick = this.onModalClickBtnWithCommand('well_no');
    noBtn.classList.add('no-button');
    noBtn.innerHTML = 'No!';
    noBtn.appendChild(dislikeBtn);

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);

    this.modal.appendChild(buttonContainer);
  };

  showSavingOrExitModal = () => {
    this.createModalWindow(296, 154);

    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');
    textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';

    const saveBtn = document.createElement('button');
    saveBtn.onclick = () => {
      boomioService.signal('exit_yes');
      this.closeModal();
      this.showQR();
    };
    saveBtn.classList.add('save');
    saveBtn.innerHTML = 'Save';

    const exitBtn = document.createElement('div');
    exitBtn.onclick = () => {
      boomioService.signal('exit_cancel');
      this.closeModal();
      this.showRatingModal();
    };
    exitBtn.style.cursor = 'pointer';
    exitBtn.innerHTML = exitBtnHtml;
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('modal-buttons');
    buttonContainer.appendChild(saveBtn);
    buttonContainer.appendChild(exitBtn);

    this.modal.appendChild(textTitle);
    this.modal.appendChild(buttonContainer);
  };

  getCloseModalBtn = (closeCallback) => {
    const closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.classList.add('close-modal-btn-wrapper');
    const closeBtn = document.createElement('img');
    closeBtn.src = closeImage;
    closeBtn.classList.add('close-modal-btn');
    closeBtn.onclick = closeCallback;
    closeBtnWrapper.appendChild(closeBtn);
    return closeBtnWrapper;
  };

  onModalClickBtnWithCommand = (command) => () => {
    boomioService.signal(command);
    this.closeModal();
  };

  showQR = () => {
    this.createModalWindow(272, 442);
    boomioService.signal('PUZZLE_CODE_REVEALED');
    const { qrcode } = localStorageService.config;
    const qrEl = document.createElement('div');

    qrEl.setAttribute('id', 'boomio--qr');

    qrEl.innerHTML = this.qrCodeInnerHtml();

    const closeAnimation = this.closeAnimation(this.showSavingOrExitModal);

    const closeModalBtn = this.getCloseModalBtn(closeAnimation);

    this.modal.appendChild(closeModalBtn);
    this.modal.append(qrEl);

    new QRCode('qrcodeShowHtml', {
      text: qrcode,
      width: 146,
      height: 146,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H,
    });
    const coupon = document.getElementById('coupon_div');
    const qrcodeShow = document.getElementById('qrcodeShow');
    qrcodeShow.style.display = isMobileDevice ? 'none' : 'block';
    coupon.style.display = isMobileDevice ? 'block' : 'none';

    if (isMobileDevice) return;

    qrcodeShow.onclick = () => {
      coupon.style.display = 'block';
      qrcodeShow.style.display = 'none';
    };
    coupon.onclick = () => {
      qrcodeShow.style.display = 'block';
      coupon.style.display = 'none';
    };
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
    document.body.appendChild(modalBackground);
    this.modal = modal;
    this.modalBackground = modalBackground;
    /// /////////////////////////
  };

  qrCodeInnerHtml = () => {
    const { p_top_text, p_coupon_text, p_code_text, p_button_text, p_bottom_text, app_url } =
      localStorageService.config;
    return `<div class="product-design-bg-2 p-0 Preview-select box-show qr-div" >
    
        <div class="coupon__preview__body coupon_discount_modal">
    
            <div class="coupon__preview__card__header text-center d-block">
                <h1>${p_top_text} </h1>
            </div>
    
            <div class="coupon_preview_card_info ">
                <div id='qrcodeShow' style="display:none">
                    <a class="qrcodeShowHtml" id="qrcodeShowHtml"> </a>
                </div>
                <div class="coupon__preview__card coupon_div" id="coupon_div" >
                    <div class="coupon_info">
                        ${
                          p_coupon_text
                            ? `<h3>${p_coupon_text}</h3>`
                            : `
                          <h3>20%</h3>
                          <h4>Discount</h1>
                        `
                        }
                        <p style="text-align: center; margin-top: 8px">${p_code_text} </p>
                    </div>
                    <div class="coupon__preview__card__after"></div>
                    <div class="coupon__preview__card__befor"></div>
                </div>
            </div>
                <p class="coupon-text">${
                  p_bottom_text ??
                  `
                  To have immediate access for all your great rewards <span>open or download</span>
                `
                }</p>
                            <div class="coupon_preview_card_footer">
    
                <a href=${app_url}>
                <div class="btn-content d-flex align-items-center justify-content-center" style="height: 46px;">
                    <img src="${dotImage}" alt="img not find">               
                    ${
                      p_button_text
                        ? `<p>${p_button_text}</p>`
                        : `
                      <div class="text-wrapper">                   
                        <p style="font-size: 10px">Open</p>
                        <p style="font-size: 14px">Boomio app</p>
                      </div>
                    `
                    }
                </div>
                </a>
        
            </div>
        </div>
    </div>`;
  };
}
