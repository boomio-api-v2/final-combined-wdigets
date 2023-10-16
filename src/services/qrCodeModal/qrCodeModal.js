import { QRCode } from 'exports-loader?type=commonjs&exports=QRCode!../../qrcode.min.js';
import { boomioService, localStorageService, widgetHtmlService } from '@/services';
import { assignStyleOnElement } from '@/utlis';
import { closeImage, dotImage, oldCouponImage, winningConfetinGif } from '@/сonstants/icons';
import { exitBtnHtml, exitBtnEmailHtml } from '@/сonstants/htmlTemplates';
import './styles.css';
import { isMobileDevice } from '@/config';

const likeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/like.svg';
const disLikeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/dislike.svg';

export default class {
  constructor() {
    this.updateConfigData();
    this.mainContainer = widgetHtmlService.container;
    if (!this.config?.email_collection_required) {
      this.showQrCode();
    } else {
      this.updateConfigData();
      this.showTextfield();
    }
    this.showWinningAnimation();
  }

  showQrCode = () => {
    this.updateConfigData();
    this.loadQrCodeData();
    isMobileDevice ? this.showQRCodeMobile() : this.showQRDesktop();
    this.showSpinner();
  };

  showSpinner = () => {
    this.loading = true;
    const qrcodeShowDiv = document.querySelector('#qrcodeShow');
    const spinnerDiv = document.querySelector('#qr_loader_spinner .spinner');
    if (spinnerDiv) {
      spinnerDiv.classList.add('show');
    }
  };

  hideSpinner = () => {
    const qrcodeShowDiv = document.querySelector('#qrcodeShow');
    const element = document.getElementById('qr_loader_spinner');
    if (element) {
      element.remove();
    }
  };

  updateConfigData = () => {
    this.config = localStorageService.config;
  };

  async loadQrCodeData() {
    try {
      this.loading = true;
      await boomioService.signal('PUZZLE_CODE_REVEALED', 'signal', {
        user_email: JSON.parse(localStorage.getItem('boomioPluginConfig'))?.user_email,
      });
      this.updateConfigData();

      this.showFinalData(); // Show the final data after the request is finished
    } catch (error) {
      console.error(error);
      // Handle error if necessary
    }
  }
  mobilePaper() {
    const coupon = document.getElementById('coupon_div');
    coupon.style.display = 'block';
  }

  showFinalData() {
    {
      isMobileDevice
        ? this.mobilePaper()
        : new QRCode('qrcodeShowHtml', {
            text: this.config.app_url,
            width: isMobileDevice ? 150 : 100,
            height: isMobileDevice ? 150 : 100,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
          });
    }

    this.insideShowFinalDataHTML = `
    <a href=${this.config.app_url}>
      <div class="btn-content d-flex align-items-center justify-content-center" style="height: 46px;">
        <img src="${dotImage}" alt="img not find">
        <div class="text-wrapper">
          <p style="font-size: 10px; line-height: initial;text-align:start;" id='p_button_text_line1'>${this.config.p_button_text_line1}</p>
          <p style="font-size: 14px; line-height: initial;" id='p_button_text_line2'>${this.config.p_button_text_line2}</p>
        </div>
      </div>
    </a>
  `;

    const buttonMobileElement = document.getElementById('buttonMobile');
    if (buttonMobileElement) {
      buttonMobileElement.innerHTML = this.insideShowFinalDataHTML;
    }
    this.hideSpinner();

    this.loading = false;
    this.updateConfigData();

    const p_coupon_text_line1 = document.getElementById('p_coupon_text_line1');
    const p_coupon_text_line2 = document.getElementById('p_coupon_text_line2');
    const p_code_text = document.getElementById('p_code_text');
    const product = document.getElementById('product');

    const p_bottom_text_start_pc = document.getElementById('p_bottom_text_start_pc');
    const p_top_text = document.getElementById('p_top_text');
    const p_bottom_text_start_m = document.getElementById('p_bottom_text_start_m');
    const p_button_text_line1 = document.getElementById('p_button_text_line1');
    const p_button_text_line2 = document.getElementById('p_button_text_line2');
    var p_bottom_text_end_pc = document.getElementById('p_bottom_text_end_pc');
    var p_bottom_text_end_m = document.getElementById('p_bottom_text_end_m');
    // Check if p_coupon_text_line1 element exists and is not null
    if (p_coupon_text_line1) {
      p_coupon_text_line1.textContent = '- ' + this.config?.p_coupon_text_line1;
    }

    // Check if p_coupon_text_line2 element exists and is not null
    if (p_coupon_text_line2) {
      p_coupon_text_line2.textContent = this.config?.p_coupon_text_line2;
    }

    if (p_code_text) {
      p_code_text.textContent = this.config?.p_code_text;
    }

    if (product) {
      product.textContent = this.config?.product;
    }

    // Check if p_bottom_text_start_pc element exists and is not null
    if (p_bottom_text_start_pc) {
      p_bottom_text_start_pc.textContent = this.config?.p_bottom_text_start_pc;
    }

    // Check if p_top_text element exists and is not null
    if (p_top_text) {
      p_top_text.textContent = this.config?.p_top_text;
    }

    // Check if p_bottom_text_start_m element exists and is not null
    if (p_bottom_text_start_m) {
      p_bottom_text_start_m.textContent = this.config?.p_bottom_text_start_m;
    }

    // Check if p_button_text_line1 element exists and is not null
    if (p_button_text_line1) {
      p_button_text_line1.textContent = this.config?.p_button_text_line1;
    }

    // Check if p_button_text_line2 element exists and is not null
    if (p_button_text_line2) {
      p_button_text_line2.textContent = this.config.p_button_text_line2;
    }

    // Check if p_bottom_text_end_pc element exists and is not null
    if (p_bottom_text_end_pc) {
      p_bottom_text_end_pc.innerHTML = this.config.p_bottom_text_end_pc;
    }

    // Check if p_bottom_text_end_m element exists and is not null
    if (p_bottom_text_end_m) {
      p_bottom_text_end_m.innerHTML = this.config.p_bottom_text_end_m;
    }
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

  showWinningAnimation = () => {
    setTimeout(() => {
      const winningAnimation = document.createElement('img');
      winningAnimation.classList.add('winningAnimation');
      winningAnimation.setAttribute('src', winningConfetinGif);
      this.mainContainer.appendChild(winningAnimation);
      localStorage.removeItem('start_widget');
      localStorage.removeItem('closing_button');
      localStorage.removeItem('boomio_hint_widget');
      localStorage.removeItem('start_signal');
      winningAnimation.addEventListener('load', () => {
        setTimeout(() => {
          winningAnimation.remove();
        }, 3000);
      });
    }, 100);
  };

  closeModal = (exit) => {
    this.modalBackground.remove();
    if (exit) {
      const localStoragePropertyName = 'boomioPluginConfig';
      const existingConfigJSON = localStorage.getItem(localStoragePropertyName);
      if (existingConfigJSON) {
        const existingConfig = JSON.parse(existingConfigJSON);
        existingConfig.p_top_text = 'YOU GOT ??? DISCOUNT!';
        existingConfig.user_email = null;
        existingConfig.email_collection_required = false;
        localStorage.setItem(localStoragePropertyName, JSON.stringify(existingConfig));
      } else {
        const updatedConfig = {
          p_top_text: 'YOU GOT ??? DISCOUNT!',
          user_email: null,
        };
        localStorage.setItem(localStoragePropertyName, JSON.stringify(updatedConfig));
      }
      const element = document.getElementById('boomio-widget-screen-wrapper-content');
      if (element) {
        element.remove();
      }
    }
  };

  showRatingModal = () => {
    this.createModalWindow(316, 154);
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
    this.createModalWindow(316, 154);

    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');
    textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';

    const saveBtn = document.createElement('button');
    saveBtn.onclick = () => {
      boomioService.signal('exit_cancel');
      this.closeModal();
      this.showQrCode();
    };
    saveBtn.classList.add('save');
    saveBtn.style.fontSize = '16px';
    saveBtn.innerHTML = 'Save';

    const exitBtn = document.createElement('div');
    exitBtn.onclick = () => {
      boomioService.signal('exit_yes');
      this.closeModal(true);
      // this.showRatingModal();
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

  showSavingOrExitEmailModal = () => {
    this.createModalWindow(296, 154);

    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');
    textTitle.innerHTML = 'Are you sure you don’t want your reward?';

    const saveBtn = document.createElement('button');
    saveBtn.onclick = () => {
      boomioService.signal('exit_cancel');
      this.closeModal();
      this.showTextfield();
    };
    saveBtn.classList.add('save');
    saveBtn.style.fontSize = '14px';
    saveBtn.innerHTML = 'Yes, I want!';

    const exitBtn = document.createElement('div');
    exitBtn.onclick = () => {
      boomioService.signal('exit_yes');
      this.closeModal(true);
      // this.showRatingModal();
    };
    exitBtn.style.cursor = 'pointer';
    exitBtn.innerHTML = exitBtnEmailHtml;
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('modal-buttons');
    buttonContainer.appendChild(saveBtn);
    buttonContainer.appendChild(exitBtn);

    this.modal.appendChild(textTitle);
    this.modal.appendChild(buttonContainer);
  };

  getCloseModalBtn = (closeCallback) => {
    const closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.classList.add('boomio-close-modal-btn-wrapper');
    const closeBtn = document.createElement('img');
    closeBtn.src = closeImage;
    closeBtn.classList.add('boomio-close-modal-btn');
    closeBtn.onclick = closeCallback;
    closeBtnWrapper.appendChild(closeBtn);
    return closeBtnWrapper;
  };

  onModalClickBtnWithCommand = (command) => () => {
    boomioService.signal(command);
    this.closeModal();
  };

  static getGreyCoupon = () => {
    this.config = localStorageService.config;
    return `
        <div class="coupon-grey-shadow-wrapper" id="coupon_div">
          <div class="coupon-grey" style="background-image: url(${oldCouponImage})">
            <div class="coupon_info">
                <h3 >- ${
                  this.config.p_coupon_text_line1 !== 'YOUR'
                    ? this.config.p_coupon_text_line1
                    : '???'
                }</h3>
              <p >${this.config.product} </p> 
              <p >${this.config.p_code_text} </p>
            </div>
          </div>
        </div>
        `;
  };

  getEmailHtml = () => {
    if (!JSON.parse(localStorage.getItem('boomioPluginConfig'))?.user_email) {
      return ``;
    }
    return `
      <div style="margin-bottom:8px;">
        <p style="line-height:14px !important;color: black; font-weight: 400; display: inline; font-size: 14px;">
          Your reward was sent to:
        </p>
        <div style="margin-bottom:14px;">
          <p style="line-height:14px !important;color: black; font-weight: 600; display: inline; font-size: 14px;">
            ${JSON.parse(localStorage.getItem('boomioPluginConfig')).user_email}
          </p>
        </div>
      </div>`;
  };

  getCouponHtml = () => {
    if (this.config.app_url === 'ice') {
      return QrCodeModal.getGreyCoupon();
    }
    return `
       <div class="coupon__preview__card coupon_div" id="coupon_div" >
          <div class="coupon_info"> 
                <h3 id="p_coupon_text_line1">- ${
                  this.config.p_coupon_text_line1 !== 'YOUR'
                    ? this.config.p_coupon_text_line1
                    : '???'
                }</h3>
                <p id="product" style="text-align: center; font-weight: 500; font-size: 12px">${
                  this.config.product
                } </p>
                <p id="p_code_text" style="text-align: center; margin-top: 0px; font-weight: 600; font-size: 12px">${
                  this.config.p_code_text
                } </p>
          </div>
          <div class="coupon__preview__card__after"></div>
          <div class="coupon__preview__card__befor"></div>
      </div>`;
  };

  showTextfield = () => {
    this.createModalWindow(290, 284);
    this.modal.classList.add('desktop-qr-modal');
    this.modal.innerHTML = `
    <div class="boomio-close-modal-btn-wrapper" style='display:flex;width:100%; justify-content:end;'>
    <img src="${closeImage}" id="boomio-close-modal-btn" class="boomio-close-modal-btn"/>
  </div>
  <div class="text-center d-block" >
    <h1 id='p_top_text_new' style='margin-bottom:16px;font-size:34px;color: #473F4E;font-weight:600;'>YOU WON!</h1>
  </div>
  <div class="text-center d-block">
    <h6 id='p_top_text' style='margin:0px 24px;font-size:14px;color: #473F4E;font-weight:400;'>Where should we send your reward?</h6>
  </div>
      <div class="text-center" style="display:flex;flex-direction:column;height:100%;justify-content:space-between;align-items:center;">
        <input style='width:210px;margin-top:16px;font-size:14px;color:#473F4E;font-weight:400;border-radius:25px;padding:11px 16px' type="text" id="boomio-emailField" placeholder="Enter your email address...">
        <div id="email-error-message" style="color: red; margin-top: 4px; display: none;font-size:12px;">Please enter a valid email address.</div>
        <div class="coupon_preview_card_footer" style='width:240px;'>
          <a id="boomio-email-btn">
            <div class="btn-content d-flex align-items-center justify-content-center" style="height: 40px;">
              <div class="text-wrapper">
                <p style="font-size: 16px; line-height: initial;" id='p_button_text_line2'>Get reward</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
    this.modal.style.justifyContent = 'start';
    const closeBtn = document.getElementById('boomio-close-modal-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        this.modalBackground.remove();
        this.showSavingOrExitEmailModal();
      };
    }

    const emailInput = document.getElementById('boomio-emailField');
    const emailErrorMessage = document.getElementById('email-error-message');

    const emailBtn = document.getElementById('boomio-email-btn');
    if (emailBtn) {
      emailBtn.onclick = () => {
        const emailValue = emailInput.value;

        // Validate email format using a regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
          // Invalid email format, show error message and add red border
          emailInput.style.border = '2px solid red';
          emailErrorMessage.style.display = 'block';
          return;
        } else {
          // Reset styling and hide error message
          emailInput.style.border = ''; // Reset border to default
          emailErrorMessage.style.display = 'none';
        }

        // Proceed with storing the email in local storage and showing the QR code
        const localStoragePropertyName = 'boomioPluginConfig';
        const existingConfigJSON = localStorage.getItem(localStoragePropertyName);

        if (existingConfigJSON) {
          const existingConfig = JSON.parse(existingConfigJSON);
          existingConfig.user_email = emailValue;
          localStorage.setItem(localStoragePropertyName, JSON.stringify(existingConfig));
        }

        this.modalBackground.remove();
        this.showQrCode();
      };
    }
  };
  showQRDesktop = () => {
    this.createModalWindow(272, 520);
    this.modal.classList.add('desktop-qr-modal');
    this.modal.innerHTML = `
    <div class="boomio-close-modal-btn-wrapper" style='display:flex;width:100%; justify-content:end;'>
      <img src="${closeImage}" id="boomio-close-modal-btn" class="boomio-close-modal-btn"/>
    </div>
    <div class="text-center d-block">
        <h1 id='p_top_text_new' style='margin-bottom:16px;font-size:32px;color: #473F4E;font-weight:600;'>YOU WON! </h1>
    </div>
    ${this.getCouponHtml()}
    <div style='font-size:14px;'>  
      ${this.getEmailHtml()}

    <p style="line-height:14px !important;color: black; font-weight: 400; display: inline;font-size: 14px;" id="p_bottom_text_start_pc">${
      this.config.p_bottom_text_start_pc
    }<p style="line-height:14px !important;color: black; font-weight: 600; display: inline; font-size: 14px;" >${
      this.config.p_bottom_text_end_pc
    }</p></p></div>
    <div id='qrcodeShow'>
        <a class="qrcodeShowHtml" id="qrcodeShowHtml"> </a>
    </div>
    <div id='qr_loader_spinner'>
    <div class="spinner"></div>
  </div>
    `;

    document.getElementById('boomio-close-modal-btn').onclick = () => {
      this.modalBackground.remove();
      boomioService.signal('exit_yes');
      this.closeModal(true);

      // this.showSavingOrExitModal();
    };
  };

  showQRCodeMobile = () => {
    this.createModalWindow(272, 442);
    const { app_url } = localStorageService.config;
    const qrEl = document.createElement('div');

    qrEl.setAttribute('id', 'boomio--qr');

    qrEl.innerHTML = this.qrCodeInnerHtml();

    // const closeAnimation = this.closeAnimation(this.showSavingOrExitModal);
    const closeAnimation = this.closeAnimation(
      boomioService.signal('exit_yes'),
      this.closeModal(true),
    );

    const closeModalBtn = this.getCloseModalBtn(closeAnimation);

    this.modal.appendChild(closeModalBtn);
    this.modal.append(qrEl);

    const coupon = document.getElementById('coupon_div');
    const qrcodeShow = document.getElementById('qrcodeShow');
    qrcodeShow.style.display = 'none';
    coupon.style.display = 'none';

    // qrcodeShow.onclick = () => {
    //   coupon.style.display = 'block';
    //   qrcodeShow.style.display = 'none';
    // };
    // coupon.onclick = () => {
    //   qrcodeShow.style.display = 'block';
    //   coupon.style.display = 'none';
    // };
  };

  createModalWindow = (width = 300, height = 442) => {
    /// /Add modal Background //////
    const modalBackground = document.createElement('div');
    modalBackground.setAttribute('id', 'modalBackground');
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
    console.log('test', this.modal);
  };

  qrCodeInnerHtml = () => {
    return `<div class="product-design-bg-2 p-0 Preview-select box-show qr-div" >
    
        <div class="coupon__preview__body coupon_discount_modal">
    
            <div class="text-center d-block">
                <h1 id='p_top_text_new' style='margin-bottom:16px;font-size:32px;color: #473F4E;font-weight:600;'>YOU WON!</h1>
            </div>
    
            <div class="coupon_preview_card_info ">
                <div id='qrcodeShow' style="display:none">
                    <a class="qrcodeShowHtml" id="qrcodeShowHtml"> </a>
                </div>
                <div id='qr_loader_spinner'>
                <div class="spinner"></div>
              </div>
                ${this.getCouponHtml()}
            </div>
            <div style='font-size:14px;'>
                <p class="coupon-text" id='p_bottom_text_start_m' style='line-height:14px !important;'>  
                  ${this.config.p_bottom_text_start_m}
                  <p style="line-height:14px !important;color: black; font-weight: 600; display: inline; font-size: 14px;"  id='p_bottom_text_end_m'>${
                    this.config.p_bottom_text_end_m
                  }</p>
                </p></div>
                            <div class="coupon_preview_card_footer" style='width:200px;'>
    
                <div id='buttonMobile' >
                </div>
            </div>
        </div>
    </div>`;
  };
}
