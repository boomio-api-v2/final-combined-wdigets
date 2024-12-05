import './styles.css';

import { boomioLogo } from './constants';
import { BarboraAppleStore, BarboraGoogleStore } from '../driveWidget/js/constants';
export class DownloadScoreTableContainer {
  constructor(prop, scoreTable, currentScore) {
    this.prop = prop;
    this.isMobile = window.innerWidth <= 1280;
    this.scoreTable = scoreTable;
    this.currentScore = currentScore;
    this.containerDiv = null; // Store container reference
    this.render();
  }

  updateProps(prop, scoreTable, currentScore) {
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.currentScore = currentScore;
    this.updateVisuals();
  }

  updateVisuals() {
    if (!this.containerDiv) return;
    const userPercentageDiscount = parseInt(this?.scoreTable?.best_discount) || 0;
    const userDiscountCode = this?.scoreTable?.coupon_code || '';

    let tableHTML = '';

    tableHTML += '<div>';
    tableHTML +=
      this.currentScore >= 2000 && this.prop === 'Barbora'
        ? `

    <div style="margin-top:20px;filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));width:calc(100% - 18px); display:flex; padding:10px;justify-content:center;flex-direction:column;align-items:center;border-radius:20px;background:linear-gradient(161deg, #C54040 21.3%, #CC0001 49.66%, #990A0B 86.97%);filter;box-sizing:content-box !important;">
                  <div style="width:100%;top: -60px; position: absolute; text-align: center; color: ${'white'}; font-size: 40px; font-family: Montserrat; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-collection-scoreboard-name">LAIMĖJAI!
          </div>
    <div id='boomio-your-score' style="margin-bottom:10px;width:100%;margin-top:-120px;top:30px;position:absolute; text-align: center; color: white; font-size: 16px; font-family: Montserrat; font-weight:400; text-transform: uppercase; word-wrap: break-word"> 
    TAVO REZULTATAS:  ${this.currentScore ?? 0} </div>

    <div style="width:100%;margin-top:20px; text-align: center; color: white; font-size: 12px; font-family: Montserrat; font-weight:400; text-transform: uppercase; word-wrap: break-word"> 
    NUOLAIDA APSIPIRKIMUI </div>
    <div style="width:100%;margin-bottom:10px;text-align: center;color: white; font-size: 14px; font-family: Montserrat; font-weight:700; text-transform: uppercase; word-wrap: break-word"> 
    „BARBORA“ PROGRAMĖLĖJE </div>
    <div style="width:100%;text-align: center; color: white; font-size: 42px; font-family: Montserrat; font-weight:800; text-transform: uppercase; word-wrap: break-word"> 
    ${userPercentageDiscount ?? 0}% </div>
       <div style="box-sizing: border-box;width: 100%; padding-left: 12px; padding-right: 12px; padding-top: 7px; padding-bottom: 7px; background:     ${'linear-gradient(90deg, rgba(254, 227, 233, 0.60) 0%, rgba(255, 214.63, 231.75, 0.60) 22%, rgba(243, 219, 240, 0.60) 42%, rgba(234, 223, 247, 0.60) 62%, rgba(234, 223, 247, 0.60) 82%, rgba(238.45, 215.69, 255, 0.60) 100%)'}; border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid; justify-content: space-between; align-items: center; display: inline-flex;width:250px;margin-top:20px;">
<div style="height: 17px; color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 16px; word-wrap: break-word" id="p_code_text2">
 ${userDiscountCode ?? 'CODE'}
    </div>
    <svg width="22" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" id="boomio-copy-modal-btn" style="cursor:pointer">
    <path d="M18.5625 3.42188H7.5625C7.42575 3.42188 7.2946 3.4762 7.1979 3.5729C7.1012 3.6696 7.04688 3.80075 7.04688 3.9375V7.54688H3.4375C3.30075 7.54688 3.1696 7.6012 3.0729 7.6979C2.9762 7.7946 2.92188 7.92575 2.92188 8.0625V19.0625C2.92188 19.1993 2.9762 19.3304 3.0729 19.4271C3.1696 19.5238 3.30075 19.5781 3.4375 19.5781H14.4375C14.5743 19.5781 14.7054 19.5238 14.8021 19.4271C14.8988 19.3304 14.9531 19.1993 14.9531 19.0625V15.4531H18.5625C18.6993 15.4531 18.8304 15.3988 18.9271 15.3021C19.0238 15.2054 19.0781 15.0743 19.0781 14.9375V3.9375C19.0781 3.80075 19.0238 3.6696 18.9271 3.5729C18.8304 3.4762 18.6993 3.42188 18.5625 3.42188ZM13.9219 18.5469H3.95312V8.57812H13.9219V18.5469ZM18.0469 14.4219H14.9531V8.0625C14.9531 7.92575 14.8988 7.7946 14.8021 7.6979C14.7054 7.6012 14.5743 7.54688 14.4375 7.54688H8.07812V4.45312H18.0469V14.4219Z" fill="white"/>
    </svg>
</div> 
    <div style="letter-spacing: -0.3px;line-height: 150%;width:100%;margin-top:20px; text-align: center; color: white; font-size: 10px; font-family: Montserrat; font-weight:400; word-wrap: break-word;"> 
    Nuolaida galioja apsiperkant iki 200 eur. Minimali krepšelio suma 29.99 eur Nuolaida netaikoma alkoholinių gėrimų, pradinio maitinimo kūdikių prekių, taip pat pakavimo, pristatymo mokesčių bei pradinio krepšelio papildymo sumoms.</div>
</div>
        `
        : `<div style="margin-top:20px;height:240px;filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));width:calc(100% - 18px); display:flex; padding:10px;justify-content:center;flex-direction:column;align-items:center;border-radius:20px;background: ${
            this.prop === 'SaludSA'
              ? 'linear-gradient(161deg, #1384B9 21.3%, #0377B5 49.66%, #1C3E7E 86.97%)'
              : 'linear-gradient(161deg, #C54040 21.3%, #CC0001 49.66%, #990A0B 86.97%)'
          };filter;box-sizing:content-box !important;"> <div id='boomio-your-score' style="margin-bottom:10px;width:100%;margin-top:-120px;top:30px;position:absolute; text-align: center; color: white; font-size: 16px; font-family: Montserrat; font-weight:400; text-transform: uppercase; word-wrap: break-word"> 
   ${this.prop === 'SaludSA' ? 'Tu PUNTUACIÓN:' : ' TAVO REZULTATAS:'}  ${
            this.currentScore ?? 0
          } </div>
    ${
      this.prop === 'SaludSA'
        ? `<div style="width:100%;top: -60px; position: absolute; text-align: center; color: ${'white'}; font-size: 40px; font-family: Montserrat; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-collection-scoreboard-name">${
            this.currentScore >= 5000 && this.prop === 'SaludSA' ? '¡Felicidades!' : ''
          }</div>`
        : ''
    }
    <div style="width:100%;text-align: center; color: white; font-size:18px;font-family: Montserrat; font-weight:800; text-transform: uppercase; word-wrap: break-word"> 
    ${
      this.prop === 'SaludSA'
        ? this.currentScore >= 9999
          ? '¡GANASTE!'
          : this.currentScore >= 5000
          ? '¡GANASTE!'
          : ''
        : ''
    } </div>
<div style="width:100%;text-align: center; color: white; font-size: ${
            this.prop === 'SaludSA' ? '32px' : '42px'
          }; font-family: Montserrat; font-weight:800; text-transform: uppercase; word-wrap: break-word;line-height:32px;"> 
    ${
      this.prop === 'SaludSA'
        ? this.currentScore >= 9999
          ? 'esfero de Julián'
          : this.currentScore >= 5000
          ? 'Premio Sorpresa'
          : 'No ganaste ningún premio'
        : 'NELAIMĖJAI'
    } </div></div>
`;

    tableHTML += '</div>';

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;

    let fontSize =
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop === 'LemonGym'
        ? '14px'
        : '10px';
    let fontWeight =
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop === 'LemonGym'
        ? '900'
        : '700';
    let scoreboardText = `

   <div style="width:calc(100% - 40px);margin-left:20px; top: 420px;margin-top:10px; position: absolute; text-align: center; color: white; font-size: 14px; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">   ${
      this.prop === 'SaludSA'
        ? this.currentScore >= 9999
          ? 'además estás participando por un Reloj Garmin. </br>¡Mejora tu puntuación para ganar un premio mayor!'
          : this.currentScore >= 5000
          ? 'además estás participando por un Reloj Garmin.'
          : 'Ya estás participando por un reloj Garmin, si deseas ganar un premio instantáneo de saludsa vitality mejora tu puntaje. '
        : this.currentScore >= 2000 && this.prop === 'Barbora'
        ? 'ATSISIŲSK PROGRAMĖLĘ'
        : 'PAGERINK REZULTATĄ!</br> pasiek daugiau nei 2000 taškų ir laimėk prizus!'
    }</div>
  
          <div style="width:100%; top: 440px;margin-top:10px; position: absolute; text-align: center; color: white; font-size: 14px; font-family: Montserrat; font-weight: 400;  word-wrap: break-word"> ${
            this.currentScore >= 2000 && this.prop === 'Barbora'
              ? 'panaudok nuolaidos kodą ir laimėk 50 eurų Makaliaus dovanų kuponą.'
              : ''
          }</div>
             </div>
                          <div style="width:100%; top: 500px;margin-top:10px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">
                           ${
                             this.currentScore >= 2000 && this.prop === 'Barbora'
                               ? `<div>
  <a href="https://apps.apple.com/lt/app/barbora-lt/id903888629" target="_blank">
    <img src="${BarboraAppleStore}" id="boomio-barbora-apple-store" alt="Image Description" style="cursor:pointer;margin-right:10px;max-width: 167px; height: 49px;">
  </a>
  <a href="https://play.google.com/store/apps/details?id=lt.barbora&hl=lt&gl=US&pli=1" target="_blank">
    <img src="${BarboraGoogleStore}" id="boomio-barbora-google-store" alt="Image Description" style="cursor:pointer;margin-left:10px;max-width: 167px; height: 49px;">
  </a>
</div>`
                               : ''
                           }
             </div>
         
            </div>
        </div>
      </div>
      ${
        this.currentScore >= 2000 && this.prop === 'Barbora'
          ? `

          <div style="width: calc(100% - 40px);font-weight:700;font-size:16px;margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 38px; text-decoration: underline;color: #FFF;overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
   ŽAISTI DAR
      </div>
`
          : `<div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 46px; background: ${'white'};cursor:pointer; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word;">${
              this.prop === 'SaludSA' ? 'JUEGA DE NUEVO' : 'PAGERINK REZULTATĄ'
            }</div>
      </div>`
      }

      <div style="left:calc(50% - 40px);width:78px;top:625px;position:absolute;margin-top:5px;height: 22px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain;background-repeat:no-repeat;" >
      </div>
    </div>`;

    this.containerDiv.querySelector('.boomio-scoreboard-text').innerHTML = scoreboardText;

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;

    if (document.getElementById('boomio-copy-modal-btn')) {
      document.getElementById('boomio-copy-modal-btn').onclick = () => {
        const textToCopy = userDiscountCode;
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const copyButton = document.getElementById('p_code_text2');
        copyButton.textContent = 'Copied';

        setTimeout(() => {
          copyButton.textContent = userDiscountCode;
        }, 2000);
      };
    }
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('competition-table-container');
    containerDiv.setAttribute('id', 'competition-table-container');
    containerDiv.style.background = 'none';
    // containerDiv.style.border = this.prop === 'Penki Sezonai' && '2px solid #A6CE39';

    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '375px'
          : document.body.offsetWidth + 'px'
        : '426px';
    containerDiv.innerHTML = `
    <div style="width: 100%; height: 100%; position: relative; ">

      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              <div  style="width: calc(100% - 40px); height: ${'280px'}; left: 20px; top: 124px; position: absolute;border-right:none; backdrop-filter: blur(4px)">
              <div >
            <div class="boomio-tbody">
    `;

    this.containerDiv = containerDiv;

    const existingContainer = document.getElementById('collection-table-container');
    if (existingContainer) {
      existingContainer.parentNode.replaceChild(containerDiv, existingContainer);
    } else {
      document.body.appendChild(containerDiv);
    }

    this.updateVisuals();
  }
}
