import './styles.css';
import { checkIcon } from './constants';

export class InputRegisterContainer {
  constructor(prop) {
    this.prop = prop; // Store the this.prop in a class this.property
    this.isMobile = window.innerWidth <= 1280;
  }
  createInputRegisterContainer() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('input-register-container');
    containerDiv.setAttribute('id', 'input-register-container');
    containerDiv.style.background = `none`;
    containerDiv.style.backgroundSize = 'cover';

    containerDiv.style.width =
      document.body.offsetWidth < 426 ? document.body.offsetWidth + 'px' : '426px';

    let privacyCheckboxChecked = true; // Use let instead of const to allow reassignment
    containerDiv.innerHTML = `
      <div style="height: 124px; top: 50px; position: relative; text-align: center;margin:10px; color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; font-size: 40px; font-family: Georama; font-weight: 900; text-transform: uppercase; line-height: 62.40px; word-wrap: break-word">${
      this.prop === 'Fpro' ? 'Register to play' : 'REGISTRUOKIS ŽAISTI'
    }</div>
      <div id="boomio-competition-confirm-field" style="cursor:pointer;width: calc(100% - 54px); padding-top: 11px; padding-bottom: 11px; left: 27px; top: 430px; position: absolute; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div style="text-align: center; color: ${'#3D4928'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word" >${
      this.prop === 'Fpro' ? 'NEXT' : 'TOLIAU'
    }</div>
      </div>
      <div class="boomio-privacyCheckbox" id="boomio-privacyCheckbox" style="cursor:${
        this.prop === 'Fpro' ? 'auto' : 'pointer'
      } ;left: 34px; top: 375px; position: absolute; justify-content: center; align-items: center; gap: 5px; display: inline-flex">
      <div  style=" display: ${this.prop === 'Fpro' ? 'none' : 'inline-flex'};cursor: ${
      this.prop === 'Fpro' ? 'auto' : 'pointer'
    };">
            <img id="privacyCheckboxImg" src="${
              privacyCheckboxChecked ? checkIcon : ''
            }" style="width: 20px; height: 20px;">
        </div>
        <div style="color: ${
          this.prop === 'Barbora' ||
          this.prop === 'Fpro' ||
          this.prop === 'Fantazijos' ||
          this.prop === 'LemonGym'
            ? 'white'
            : 'white'
        }; font-size: 14px; font-family: Montserrat; font-weight: 400; width:330px;word-wrap: break-word;text-align:start;">${
      this.prop === 'Fpro'
        ? 'By continuing, I agree to receive FPRO newsletters.'
        : this.prop === 'Fantazijos'
        ? 'Sutinku gauti Fantazijos.lt naujienlaiškius.'
        : this.prop === 'Makalius'
        ? 'Sutinku gauti Makaliaus naujienlaiškius.'
        : `Sutinku  ${
            this.prop === 'LemonGym'
              ? 'gauti naujienas bei informaciją, laimėjimo atveju, dėl prizų atsiėmimo. '
              : 'gauti naujienas'
          } `
    }
    ${
      this.prop !== 'Barbora' &&
      this.prop !== 'Fpro' &&
      this.prop !== 'Fantazijos' &&
      this.prop !== 'Makalius' &&
      this.prop !== 'LemonGym'
        ? `<a onclick="event.stopPropagation();" target="_blank" href="${
            this.prop === 'Barbora' ||
            this.prop === 'Fpro' ||
            this.prop === 'Fantazijos' ||
            this.prop === 'LemonGym'
              ? 'https://www.barbora.lt/info/privatumo-politika'
              : 'https://penkisezonai.lt/lt-lt/privatumo-politika.html'
          }" style="color:white;text-decoration: underline;font-size:14px;">privatumo politika.</a> `
        : ''
    }
      


    </div>
      </div>
   

      <div style="width: calc(100% - 70px); height: 24px; left: 35px; top: 258px; position: absolute;text-align:start;z-index:99999;color: #D8000C;
      font-family: Montserrat;
      font-size: 11px;
      font-style: normal;
      font-weight: 900;
      letter-spacing: -0.42px;
      border-radius:4px;
      padding:1px 8px 1px 8px;
      " id="competition-name-error"></div>


      <div style="width: calc(100% - 70px); height: 24px; left: 35px; top: 338px; position: absolute;text-align:start;z-index:99999;color: #D8000C;
      font-family: Montserrat;
      font-size: 11px;
      font-style: normal;
      font-weight: 900;
      letter-spacing: -0.42px;
      border-radius:4px;
      padding:1px 8px 1px 8px;
      " id="competition-email-error"></div>


      <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: 287px; position: absolute; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'LemonGym' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos'
          ? 'white'
          : 'white'
      }; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'}"></div>



      <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: 204px; position: absolute; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'}"></div>
      <input id="boomio-competition-email-input-field" class="boomio-competition-email-input-field" type="text" style="padding:0px;border:none;width:calc(100% - 94px);position: absolute; left: 51px; top: 299px; opacity: 0.60;background-color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; text-align: start; color:  ${
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop === 'LemonGym'
        ? 'rgba(61, 73, 40, 1)'
        : '#473F4E'
    } ; font-size: 18px; font-family: Georama; font-weight: 500; line-height: 24px; word-wrap: break-word" placeholder="${
      this.prop === 'Fpro' ? 'Email address' : 'Elektroninio pašto adresas'
    }">
      <input id="boomio-competition-name-input-field" class="boomio-competition-name-input-field" type="text" style="padding:0px;border:none;width:calc(100% - 94px);position: absolute; left: 51px; top: 215px; opacity: 0.60;background-color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; text-align: start; color:  ${
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop === 'LemonGym'
        ? 'rgba(61, 73, 40, 1)'
        : '#473F4E'
    } ; font-size: 18px; font-family: Georama; font-weight: 500; line-height: 24px; word-wrap: break-word" placeholder="${
      this.prop === 'Fpro' ? 'Players full name' : 'Žaidėjo slapyvardis'
    }">
    `;

    return containerDiv;
  }
}
