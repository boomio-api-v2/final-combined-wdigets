import { boomioService, localStorageService, widgetHtmlService } from '@/services';
import { assignStyleOnElement } from '@/utlis';
import { closeImage, dotImage, oldCouponImage, winningConfetinGif } from '@/сonstants/icons';
import { exitBtnHtml, exitBtnEmailHtml } from '@/сonstants/htmlTemplates';
import './styles.css';

const likeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/like.svg';
const disLikeBtnImage =
  'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/985a91f0065a9dbca7375cdbac92c24d88508c2b/images/dislike.svg';

export default class {
  constructor(demo, value) {
    this.demo = demo;
    this.demoValue = value;
    this.updateConfigData();
    this.mainContainer = widgetHtmlService.container;
    this.customer = this.config.business_name ? this.config.business_name : 'Deprati';

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
    this.showQRDesktop();
    // this.showSpinner();
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
      await boomioService.signal('TEST', 'signal', {
        user_name: JSON.parse(localStorage.getItem('boomioPluginConfig'))?.user_name,
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
    if (coupon) {
      coupon.style.display = 'block';
    }
  }

  showFinalData() {
    // {
    //   new QRCode('qrcodeShowHtml', {
    //     text: this.config.app_url,
    //     width: isMobileDevice ? 150 : 100,
    //     height: isMobileDevice ? 150 : 100,
    //     colorDark: '#000000',
    //     colorLight: '#ffffff',
    //     correctLevel: QRCode.CorrectLevel.H,
    //   });
    // }
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
    // this.hideSpinner();

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
      p_code_text.textContent = this.config?.p_code_text.replace('Unique code: ', '');
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
          setTimeout(() => {
            const winningAnimation = document.createElement('img');
            winningAnimation.classList.add('winningAnimation');
            winningAnimation.setAttribute('src', winningConfetinGif);
            this.mainContainer.appendChild(winningAnimation);
            winningAnimation.addEventListener('load', () => {
              setTimeout(() => {
                winningAnimation.remove();
                setTimeout(() => {
                  const winningAnimation = document.createElement('img');
                  winningAnimation.classList.add('winningAnimation');
                  winningAnimation.setAttribute('src', winningConfetinGif);
                  this.mainContainer.appendChild(winningAnimation);
                  winningAnimation.addEventListener('load', () => {
                    setTimeout(() => {
                      winningAnimation.remove();
                    }, 3000);
                  });
                }, 100);
              }, 3000);
            });
          }, 100);
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
    this.createModalWindow(335, 358);
    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');

    textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';
    this.modal.style.background =
      this.customer === 'Deprati'
        ? 'linear-gradient(205deg, #C32128 31.89%, #5D1013 100%)'
        : 'linear-gradient(42.74deg, #B5252E -3.92%, #FFFFFF 132.67%)';

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
    this.createModalWindow(335, 358);

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
    this.createModalWindow(335, 358);

    const textTitle = document.createElement('p');
    textTitle.classList.add('exist-or-saving-modal-title');
    textTitle.style.color = 'white';

    textTitle.innerHTML = '¿Estás seguro de que no quieres tu premio?';
    textTitle.style.fontSize = '32px';
    textTitle.style.marginTop = '50px';
    textTitle.style.lineHeight = '40px';

    const saveBtn = document.createElement('button');
    saveBtn.onclick = () => {
      boomioService.signal('exit_cancel');
      this.closeModal();
      this.showTextfield();
    };
    saveBtn.classList.add('save');
    saveBtn.style.fontSize = '14px';
    saveBtn.innerHTML = 'Si, lo quiero!';
    this.modal.style.background =
      this.customer === 'Deprati'
        ? 'linear-gradient(164deg, #4A7F85 35.28%, #78BDC2 62.29%, #53878B 82.47%)'
        : 'linear-gradient(42.74deg, #B5252E -3.92%, #FFFFFF 132.67%)';

    const exitBtn = document.createElement('button');
    exitBtn.onclick = () => {
      boomioService.signal('exit_yes');
      this.closeModal(true);
      // this.showRatingModal();
    };
    exitBtn.style.fontSize = '14px';
    exitBtn.classList.add('save');
    exitBtn.style.cursor = 'pointer';
    exitBtn.innerHTML = 'No, lo quiero';
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
    this.createModalWindow(345, 500);
    this.modal.classList.add('desktop-qr-modal');

    this.modal.style.background =
      this.customer === 'Deprati'
        ? 'linear-gradient(164deg, #4A7F85 35.28%, #78BDC2 62.29%, #53878B 82.47%)'
        : 'linear-gradient(42.74deg, #B5252E -3.92%, #FFFFFF 132.67%)';
    this.modal.style.paddingBottom = '50px';
    this.modal.style.boxShadow = 'rgba(255, 255, 255, 0.45) 0px 0px 0px 3px inset';

    this.modal.innerHTML = `
        <div class="boomio-close-modal-btn-wrapper" style='display:flex;width:100%; justify-content:end;'>
                    <div style="width: 100%; height: 100%; flex-direction: column;align-items: center; gap: 9px; display: inline-flex">
      <img src="https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/feature/whack-testing/images/clawWidget/DePrati/logo.png" style="margin-left:22px;width:145px;height:34.8px;margin-bottom:20px;margin-top:10px;"/>
  </div>
      <img src="https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/x-circle.png?raw=true" id="boomio-close-modal-btn" class="boomio-close-modal-btn" style="width:22px;height:22px;"/>
      </div>

    <div style="width: 100%; height: 100%; position: relative;margin-bottom:4px">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 20px;font-family: Montserrat; font-weight: 400; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">Ganaste</div>
  </div>
    <div style="width: 100%; height: 100%; flex-direction: column;align-items: center; gap: 9px; display: inline-flex">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 32px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; letter-spacing: 0.34px; word-wrap: break-word;margin-bottom:10px;">$10 dólares </div>
    </div>
   <div style='width:100%'>
   <div style="width: 100%; height: 40px;position: relative; background: rgba(221, 219, 210, 0.70);border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid" id='textfield-first-name'>
   <input type="text" style="width:220px;height: 17px; left: 24px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Montserrat; font-weight: 500; line-height: 12px; word-wrap: break-word; padding: 0; border: none; outline: none; background: transparent;" placeholder="Nombre completo" id="boomio-textfield-first-name">
</div>
<div id="first-name-error-message" style="color: white; margin-top: 4px; display: none;font-size:12px;">Por favor agregue un nombre válido</div>
   <div style="width: 100%; height: 40px;margin-top:10px; position: relative;  background: rgba(221, 219, 210, 0.70); border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid" id='textfield-email'>
   <input type="text" style="width:220px;height: 17px; left: 24px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Montserrat; font-weight: 500; line-height: 12px; word-wrap: break-word; padding: 0; border: none; outline: none; background: transparent;" placeholder="Ingresa tu email " id="boomio-textfield-email">
</div>
<div id="email-error-message" style="color: white; margin-top: 4px; display: none;font-size:12px;">Por favor agregué una cuenta de email válida</div>
  <div style="margin-top: 10px; display: flex; flex-direction: column; align-items: flex-start;">
    <label style="color: white; font-size: 10px; font-family: Montserrat; font-weight: 500;line-height:12px;">
      <input type="checkbox" id="checkbox1" style="margin-right: 5px;line-height:12px;"> He leído, entiendo y acepto la Política de Privacidad de Almacenes De Prati S.A., al igual que los Términos de uso y condiciones de deprati.com

    </label>
    <label style="color: white; font-size: 10px; font-family: Montserrat; font-weight: 500;line-height:12px;">
      <input type="checkbox" id="checkbox2" style="margin-right: 5px;line-height:12px;"> Quiero recibir ofertas, novedades y comunicaciones comerciales personalizadas de De Prati y sus otras marcas a través de e-mail y otros medios de comunicación y correspondencia.

    </label>
  </div>
    <div style="margin-top:10px; display:flex;cursor:pointer; justify-content:center;align-items:center;border:2px solid white;padding:4px;border-radius: 35px;background: #FFF;box-shadow: 0px 6px 20px 0px rgba(179, 197, 234, 0.50), 2px 2px 4px 0px rgba(238, 243, 255, 0.75) inset, -4px -4px 8px 0px #DFE6F5 inset;" id='boomio-email-btn'>

   <div style="left: 225px; top: 11px;color: #738078; font-size: 24px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; line-height: 32px; word-wrap: break-word;" >Enviar </div>
</div> 
</div> 

  </div>
    `;

    let checkboxFirst = false;
    let checkboxSecond = false;

    document.getElementById('checkbox1').addEventListener('change', function () {
      checkboxFirst = this.checked;
    });

    document.getElementById('checkbox2').addEventListener('change', function () {
      checkboxSecond = this.checked;
    });

    this.modal.style.justifyContent = 'start';
    const closeBtn = document.getElementById('boomio-close-modal-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        this.modalBackground.remove();
        this.showSavingOrExitEmailModal();
      };
    }

    const emailInput = document.getElementById('boomio-textfield-email');
    const firstNameInput = document.getElementById('boomio-textfield-first-name');

    const emailErrorMessage = document.getElementById('email-error-message');
    const firstNameErrorMessage = document.getElementById('first-name-error-message');

    const emailInputErrors = document.getElementById('textfield-email');
    const firstNameInputErrors = document.getElementById('textfield-first-name');

    const emailBtn = document.getElementById('boomio-email-btn');
    if (emailBtn) {
      emailBtn.onclick = () => {
        const emailValue = emailInput.value;
        const firstNameValue = firstNameInput.value;

        // Validate email format using a regular expression

        if (!firstNameValue) {
          firstNameInputErrors.style.border = '2px solid red';
          firstNameErrorMessage.style.display = 'block';
          return;
        } else {
          firstNameInputErrors.style.border = '';
          firstNameErrorMessage.style.display = 'none';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
          emailInputErrors.style.border = '2px solid red';

          emailErrorMessage.style.display = 'block';
          return;
        } else {
          emailInputErrors.style.border = '';
          emailErrorMessage.style.display = 'none';
        }
        if (checkboxFirst === false || checkboxSecond === false) {
          return;
        }
        // Proceed with storing the email in local storage and showing the QR code
        const localStoragePropertyName = 'boomioPluginConfig';
        const existingConfigJSON = localStorage.getItem(localStoragePropertyName);

        if (existingConfigJSON) {
          const existingConfig = JSON.parse(existingConfigJSON);
          existingConfig.user_email = emailValue;
          existingConfig.user_name = firstNameValue;
          localStorage.setItem(localStoragePropertyName, JSON.stringify(existingConfig));
        }
        this.loadQrCodeData();
        this.modalBackground.remove();
        // this.showVerificationfield();
      };
    }
  };

  showVerificationfield = () => {
    this.modal.classList.add('desktop-qr-modal');

    this.modal.style.background =
      this.customer === 'Deprati'
        ? 'linear-gradient(205deg, #C32128 31.89%, #5D1013 100%)'
        : 'linear-gradient(42.74deg, #B5252E -3.92%, #FFFFFF 132.67%)';
    this.modal.style.paddingBottom = '50px';
    this.modal.style.boxShadow = 'rgba(255, 255, 255, 0.45) 0px 0px 0px 3px inset';

    this.modal.innerHTML = `
    <div class="boomio-close-modal-btn-wrapper" style='display:flex;width:100%; justify-content:end;'>
      <img src="https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/x-circle.png?raw=true" id="boomio-close-modal-btn" class="boomio-close-modal-btn" style="width:22px;height:22px;"/>
    </div>
    <div style="width: 100%; height: 100%; position: relative;margin-bottom:4px">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 28px;font-family: Montserrat; font-weight: 800; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">BOOMIO</div>
  </div>
    <div style="width: 100%; height: 100%; flex-direction: column; align-items: center; gap: 9px; display: inline-flex">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 14px; font-family: Montserrat; font-weight: 500; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">Enter your information for prize</div>
    </div>
   <div style='width:100%;margin-top:10px;'>
   <div style="width: 100%; height: 50px; position: relative; background: linear-gradient(90deg, rgba(254, 227, 233, 0.60) 0%, rgba(255, 214.63, 231.75, 0.60) 22%, rgba(243, 219, 240, 0.60) 42%, rgba(234, 223, 247, 0.60) 62%, rgba(234, 223, 247, 0.60) 82%, rgba(238.45, 215.69, 255, 0.60) 100%); border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid" id='textfield-email'>
   <div style="width: 76px; height: 47px; left: 210px;cursor:pointer; top: 1px; position: absolute; border-top-right-radius: 24.50px; border-bottom-right-radius: 24.50px" id=boomio-copy-modal-btn' id='boomio-email-btn'></div>
   <input type="text" style="height: 17px; left: 24px; top: 19px; position: absolute; color: white; font-size: 12px; font-family: Montserrat; font-weight: 500; line-height: 12px; word-wrap: break-word; padding: 0; border: none; outline: none; background: transparent;" placeholder="Verification code" id="boomio-copy-modal-btn">
   <div style="left: 200px; top: 11px;cursor:pointer; color: white; font-size: 14px; font-family: Montserrat; font-weight: 600; text-transform: uppercase; line-height: 32px; word-wrap: break-word;text-decoration:underline" id='boomio-email-btn'>Confirm</div>
</div>
<div id="code-error-message" style="color: white; margin-top: 4px; display: none;font-size:12px;">Code not valid</div>
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

    const emailInput = document.getElementById('boomio-copy-modal-btn');
    const emailErrorMessage = document.getElementById('code-error-message');
    const emailInputErrors = document.getElementById('textfield-email');

    const emailBtn = document.getElementById('boomio-email-btn');
    if (emailBtn) {
      emailBtn.onclick = () => {
        const emailValue = emailInput.value;

        // Validate email format using a regular expression
        if (emailValue.length <= 5) {
          // Invalid email format, show error message and add red border
          emailInputErrors.style.border = '2px solid red';

          emailErrorMessage.style.display = 'block';
          return;
        } else {
          // Reset styling and hide error message
          emailInputErrors.style.border = ''; // Reset border to default
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
    this.createModalWindow(335, 358);
    this.modal.classList.add('desktop-qr-modal');

    this.modal.style.background =
      this.customer === 'Deprati'
        ? 'linear-gradient(205deg, #C32128 31.89%, #5D1013 100%)'
        : 'linear-gradient(42.74deg, #B5252E -3.92%, #FFFFFF 132.67%)';
    this.modal.style.paddingBottom = '50px';
    this.modal.style.boxShadow = 'rgba(255, 255, 255, 0.45) 0px 0px 0px 3px inset';

    this.modal.innerHTML = `
    <div class="boomio-close-modal-btn-wrapper" style='display: ${
      this.demo ? 'none' : 'flex'
    }; width:100%; justify-content:end;'>
      <img src="https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/quessWidget-new-design/src/widgets/guessWidget/x-circle.png?raw=true" id="boomio-close-modal-btn" class="boomio-close-modal-btn" style="width:22px;height:22px;"/>
    </div>
    <div style="width: 100%; height: 100%; position: relative;margin-bottom:4px">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 28px;margin-top:20px; font-family: Montserrat; font-weight: 800; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">BOOMIO</div>
  </div>
    <div style="width: 100%; height: 100%; flex-direction: column; justify-content: end; align-items: center; gap: 9px; display: inline-flex">
    <div style="align-self: stretch; text-align: center; color: white; font-size: 20px; font-family: Montserrat; font-weight: 500; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">You won</div>
    </div>
    <div style="font-family:Paytone One;width: 100%; text-align: center; color: white; font-size: 42px; font-weight: 400;text-transform: uppercase; line-height: 54.60px; letter-spacing: 3.34px; word-wrap: break-word" id="p_coupon_text_line1">
    ${
      this.demo
        ? this.demoValue
        : this.config.p_coupon_text_line1 !== 'YOUR'
        ? this.config.p_coupon_text_line1
        : '???'
    } </div>
  
   <div style="width: 100%; text-align: center; color: white; font-size: 14px; font-family: Montserrat; font-weight: 400; line-height: 21px; word-wrap: break-word;margin-bottom:4px;margin-top:22px">Discount code</div>
   
   <div style='width:100%'>
   <div style="box-sizing: border-box;width: 100%; padding-left: 24px; padding-right: 24px; padding-top: 14px; padding-bottom: 14px; background: linear-gradient(90deg, rgba(254, 227, 233, 0.60) 0%, rgba(255, 214.63, 231.75, 0.60) 22%, rgba(243, 219, 240, 0.60) 42%, rgba(234, 223, 247, 0.60) 62%, rgba(234, 223, 247, 0.60) 82%, rgba(238.45, 215.69, 255, 0.60) 100%); border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid; justify-content: space-between; align-items: center; display: inline-flex">
<div style="height: 17px; color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 16px; word-wrap: break-word" id="p_code_text">
${this.config.p_code_text.replace('Unique code: ', '')}
    </div>
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" id="boomio-copy-modal-btn" style="cursor:pointer">
    <path d="M18.5625 3.42188H7.5625C7.42575 3.42188 7.2946 3.4762 7.1979 3.5729C7.1012 3.6696 7.04688 3.80075 7.04688 3.9375V7.54688H3.4375C3.30075 7.54688 3.1696 7.6012 3.0729 7.6979C2.9762 7.7946 2.92188 7.92575 2.92188 8.0625V19.0625C2.92188 19.1993 2.9762 19.3304 3.0729 19.4271C3.1696 19.5238 3.30075 19.5781 3.4375 19.5781H14.4375C14.5743 19.5781 14.7054 19.5238 14.8021 19.4271C14.8988 19.3304 14.9531 19.1993 14.9531 19.0625V15.4531H18.5625C18.6993 15.4531 18.8304 15.3988 18.9271 15.3021C19.0238 15.2054 19.0781 15.0743 19.0781 14.9375V3.9375C19.0781 3.80075 19.0238 3.6696 18.9271 3.5729C18.8304 3.4762 18.6993 3.42188 18.5625 3.42188ZM13.9219 18.5469H3.95312V8.57812H13.9219V18.5469ZM18.0469 14.4219H14.9531V8.0625C14.9531 7.92575 14.8988 7.7946 14.8021 7.6979C14.7054 7.6012 14.5743 7.54688 14.4375 7.54688H8.07812V4.45312H18.0469V14.4219Z" fill="white"/>
    </svg>
    
</div> 
</div> 

  </div>
    `;

    document.getElementById('boomio-close-modal-btn').onclick = () => {
      this.modalBackground.remove();
    };

    document.getElementById('boomio-copy-modal-btn').onclick = () => {
      const textToCopy = this.config.p_code_text.replace('Unique code: ', '');
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');
      document.body.removeChild(textarea);
    };
  };

  showQRCodeMobile = () => {
    this.createModalWindow(335, 358);
    const { app_url } = localStorageService.config;
    const qrEl = document.createElement('div');

    qrEl.setAttribute('id', 'boomio--qr');

    qrEl.innerHTML = this.qrCodeInnerHtml();

    const closeAnimation = this.closeAnimation(this.showSavingOrExitModal);

    const closeModalBtn = this.getCloseModalBtn(closeAnimation);

    this.modal.appendChild(closeModalBtn);
    this.modal.append(qrEl);

    const coupon = document.getElementById('coupon_div');
    const qrcodeShow = document.getElementById('qrcodeShow');
    qrcodeShow.style.display = 'none';
    if (coupon) {
      coupon.style.display = 'none';
    }

    // qrcodeShow.onclick = () => {
    //   coupon.style.display = 'block';
    //   qrcodeShow.style.display = 'none';
    // };
    // coupon.onclick = () => {
    //   qrcodeShow.style.display = 'block';
    //   coupon.style.display = 'none';
    // };
  };

  createModalWindow = (width = 335, height = 358) => {
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
  };

  qrCodeInnerHtml = () => {
    return `<div class="product-design-bg-2 p-0 Preview-select box-show qr-div" >
    
        <div class="coupon__preview__body coupon_discount_modal">
    
        <div style="width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 9px; display: inline-flex">
        <div style="align-self: stretch; text-align: center; color: white; font-size: 20px; font-family: Montserrat; font-weight: 500; text-transform: uppercase; line-height: 26px; letter-spacing: 0.34px; word-wrap: break-word">You won</div>
        </div>
    
            <div class="coupon_preview_card_info ">
 
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
