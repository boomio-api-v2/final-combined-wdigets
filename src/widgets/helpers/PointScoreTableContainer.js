import './styles.css';

import { boomioLogo } from './constants';

export class PointScoreTableContainer {
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
    const userPercentageDiscount = parseInt(this?.scoreTable?.best_discount);

    let tableHTML = '';

    tableHTML += '<div>';

    tableHTML += `

    <div style="margin-top:20px;filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));width:calc(100% - 18px); display:flex; padding:10px;justify-content:center;flex-direction:column;align-items:center;border-radius:20px;background:linear-gradient(to bottom,rgba(62, 161, 123, 1),rgba(28, 90, 48, 1));box-sizing:content-box !important;">
    <div style="width:100%;margin-top:20px; text-align: center; color: white; font-size: 20px; font-family: Georama; font-weight:400; text-transform: uppercase; word-wrap: break-word"> 
    your SCORE:  ${this.currentScore ?? 0} </div>
    <div style="width:100%;margin-top:20px; text-align: center; color: white; font-size: 20px; font-family: Georama; font-weight:600; text-transform: uppercase; word-wrap: break-word"> 
    You won </div>
    <div style="width:100%;margin-top:10px;text-align: center; color: white; font-size: 42px; font-family: Georama; font-weight:800; text-transform: uppercase; word-wrap: break-word"> 
    ${userPercentageDiscount ?? 0}% </div>
    <div style="line-height: 150%;margin-bottom:30px;width:100%;margin-top:20px; text-align: center; color: white; font-size: 14px; font-family: Georama; font-weight:400; word-wrap: break-word;max-width:250px;"> 
    discount for FPRO special edition Ball Mastery Mat! </div>
</div>
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
      ${
        false
          ? `<div style="width:100%; top: ${'440px'}; position: absolute; text-align: center; color: white; font-size: ${
              this.prop === 'Barbora' ? '18px' : fontSize
            }; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'DOVANA tau!'
                : this.prop === 'Fantazijos'
                ? '2024.06.09 ŠVENČIANT NACIONALINĘ 69 DIENĄ'
                : 'Valio, tau puikiai sekasi!'
            }</div>
            <div style="width:100%; top: ${'470px'};line-height:18px; position: absolute; text-align: center; color: white; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'Pirk <a style="color:white" target="_blank" href="https://www.barbora.lt/">Barbora.lt</a>, nuolaidos kodo laukelyje vesk <b style="font-weight:900;font-size:18px;background-color:#FFC727;"> &apos;GIMTADIENIS&apos;</b> ir gauk dovanų!'
                : this.prop === 'Fantazijos'
                ? 'net 69 geriausi žaidėjai laimės prizus! </br>Apie laimėjimą sužinosi savo nurodytu el. paštu.'
                : this.prop === 'LemonGym'
                ? 'Mėnesio gale 11 geriausių žaidėjų laimės</br> Lemon Gym PREMIUM PLUS  narystes!'
                : ''
            }</div>
              <div style="width:100%; top: ${'510px'};line-height:18px; position: absolute; text-align: center; color: white; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Fantazijos'
                ? `O PIRKDAMAS <a onclick="event.stopPropagation();" target="_blank" href=https://www.fantazijos.lt style="color:white"> Fantazijos.lt </a> SU NUOLAIDOS KODU <div><a style="background-color:#FD7A77;font-size:14px">69diena</a></div>`
                : ''
            }</div>
            <div style="width:100%; top: 546px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? '(Galioja pristatymams iki 04 14 d.)'
                : this.prop === 'Fantazijos'
                ? 'GAUK 19% NUOLAIDĄ VISKAM!'
                : 'Apie laimėjimą informuosime nurodytu el. paštu.'
            } </div> `
          : `<div style="width:100%; top: 440px; position: absolute; text-align: center; color: white; font-size: ${fontSize}; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'Pagerink rezultatą ir laimėk </br>Barbora gimtadienio dovaną iškart!'
                : this.prop === 'Fpro'
                ? 'CHECK YOUR INBOX TO CLAIM YOUR PRIZE!'
                : 'Tu gali!'
            }</div>
            <div style="width:100%; top: 470px;line-height:18px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? ''
                : this.prop === 'LemonGym'
                ? 'Pagerink rezultatą nes mėnesio gale 11 geriausių žaidėjų laimės</br>Lemon Gym PREMIUM PLUS  narystes!'
                : this.prop === 'Penki Sezonai'
                ? 'Pagerink rezultatą nes balandžio 1d.'
                : this.prop === 'Fpro'
                ? 'IMPROVE RESULTS FOR A HIGHER PRIZE.</br>Order a Mat and enter the competition to win'
                : 'Pagerink rezultatą nes 2024. 06. 09 d.</br>net 69 geriausi žaidėjai laimės prizus!'
            }</div>
              <div style="width:100%; top: ${'510px'};line-height:18px; position: absolute; text-align: center; color: white; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Fantazijos'
                ? `O PIRKDAMAS <a onclick="event.stopPropagation();" target="_blank" href=https://www.fantazijos.lt style="color:white"> Fantazijos.lt </a> SU NUOLAIDOS KODU <div ><a style="background-color:#FD7A77; font-size:14px">69diena</a></div>`
                : this.prop === 'Fpro'
                ? '300 eur coupon for shopping at nike.com store, winner </br>  will be announced on july 14th.  '
                : ''
            }</div>
              <div style="width:100%; top: 546px; position: absolute; text-align: center; color: white; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
                this.prop === 'Barbora'
                  ? '(Galioja pristatymams iki 04 14 d.)'
                  : this.prop === 'Fantazijos'
                  ? 'GAUK 19% NUOLAIDĄ VISKAM!'
                  : this.prop === 'Fpro'
                  ? ''
                  : 'Apie laimėjimą informuosime nurodytu el. paštu.'
              } </div>
        `
      }
    `;

    this.containerDiv.querySelector('.boomio-scoreboard-text').innerHTML = scoreboardText;

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;
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
      <div style="width:100%;top: 52px; position: absolute; text-align: center; color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; font-size: 40px; font-family: Georama; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-collection-scoreboard-name">${
      this.prop === 'Fpro' ? 'Congrats!' : 'REZULTATAI'
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              <div  style="width: calc(100% - 64px); height: ${'302px'}; left: 32px; top: 124px; position: absolute;border-right:none; backdrop-filter: blur(4px)">
              <div >
            <div class="boomio-tbody">
    `;

    containerDiv.innerHTML += `
            </div>
        </div>
      </div>
      <div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 38px; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word;cursor:pointer;">${
      this.prop === 'Fpro' ? 'IMPROVE RESULT' : 'ŽAISK DAR KARTĄ'
    }</div>
      </div>

      <div style="left:calc(50% - 40px);width:78px;top:625px;position:absolute;margin-top:5px;height: 22px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain;background-repeat:no-repeat;" id="boomio-game-play-again">
      </div>
    </div>`;
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
