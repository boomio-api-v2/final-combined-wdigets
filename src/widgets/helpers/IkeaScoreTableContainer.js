import './styles.css';

import { boomioLogo } from './constants';
import { BarboraAppleStore, BarboraGoogleStore } from '../driveWidget/js/constants';
export class IkeaScoreTableContainer {
  constructor(prop, scoreTable, currentScore) {
    this.prop = prop;
    this.isMobile = window.innerWidth <= 1280;
    this.scoreTable = scoreTable;
    this.currentScore = currentScore;
    this.containerDiv = null; // Store container reference
    this.render();
  }

  updateProps(prop, scoreTable, currentScore) {
    console.log(prop, scoreTable, currentScore);
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.currentScore = currentScore;
    this.updateVisuals();
    const appleStore = document.getElementById('boomio-barbora-apple-store');
    const googleStore = document.getElementById('boomio-barbora-google-store');
    function clickHandler(event) {
      event.preventDefault(); // Prevent any default behavior

      const url = event.currentTarget.getAttribute('href');
      window.location.href = url; // Redirect to the URL
    }
    appleStore.addEventListener('click', clickHandler);
    googleStore.addEventListener('click', clickHandler);
  }

  updateVisuals() {
    if (!this.containerDiv) return;
    const userPercentageDiscount = parseInt(this?.scoreTable?.collection?.discount);
    const userDiscountCode = parseInt(this?.scoreTable?.collection?.coupon_code);

    let tableHTML = '';

    tableHTML += '<div>';

    tableHTML += `

    <div style="margin-top:20px;filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));width:calc(100% - 40px); display:flex; padding:20px;justify-content:center;flex-direction:column;align-items:center;border-radius:20px;background:#0058A3;filter;box-sizing:content-box !important;">


    <div style="width:100%;margin-top:20px;text-align: start; color: white; font-size: 42px;font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight:800; text-transform: uppercase; word-wrap: break-word"> 
    ${userPercentageDiscount ?? 0}% </div>
        <div style="letter-spacing: -0.3px;margin-top:10px;line-height: 150%;width:100%;text-align: start; color: white; font-size: 12px; font-family:${
          this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
        } ; font-weight:400; word-wrap: break-word;"> 
   Nuolaida jūsų pirkinių krepšeliui, perkant už 50 € 
ar daugiau.</div>

    <div style="letter-spacing: -0.3px;line-height: 150%;margin-bottom:15px;width:100%;margin-top:10px; text-align: start; color: white; font-size: 10px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight:400; word-wrap: break-word;"> 
    <strong>Pasiūlymas galioja X d. , parodžius šį žaidimo langą kasoje.</strong></br>Kuponas galioja vieno apsipirkimo metu (nuolaidos nesumuojamos) įsigijus prekių IKEA fizinėje parduotuvėje Vilniuje. Kuponas negalioja pirkinių krepšeliui Švediškame restorane, bistro bei lauko kavinėje ir negali būti naudojamas alkoholiniams gėrimams įsigyti.</div>
</div></div>
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
     <div style="width:100%; top: 430px;margin-top:10px; position: absolute; text-align: center; color: white; font-size: 14px; font-family:${
       this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
     } ;font-weight: ${fontWeight};  word-wrap: break-word">Pagerink rezultatą, nes surinkus daugiau nei</br><div style='font-weight:500'> 2000 taškų laimėsi nuolaidą!</div></div>
             </div>

       
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
      document.body.offsetWidth < 426 ? document.body.offsetWidth + 'px' : '426px';

    containerDiv.innerHTML = `
    <div style="width: 100%; height: 100%; position: relative; ">
        <div style="margin-bottom:10px;width:100%;margin-top:20px;top:30px;position:absolute; text-align: center; color: white; font-size: 16px; font-family:${
          this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
        } ; font-weight:400; text-transform:${
      this.prop === 'Ikea' ? 'none' : 'uppercase'
    } ; word-wrap: break-word"> 
    TAVO REZULTATAS:  ${this.currentScore ?? 0} </div>
      <div style="width:100%;top: 70px; position: absolute; text-align: center; color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; font-size: 40px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight: 900; ; word-wrap: break-word" id="boomio-collection-scoreboard-name">${
      this.prop === 'Fpro' ? 'Congrats!' : 'Laimejai'
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              <div  style="width: calc(100% - 40px); height: ${'280px'}; left: 20px; top: 124px; position: absolute;border-right:none; backdrop-filter: blur(4px);filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));">
              <div >
            <div class="boomio-tbody">
    `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 46px; background: ${'white'}; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight: 700; line-height: 24px; word-wrap: break-word;cursor:pointer;">${'Pagerink rezultatą'}</div>
      </div>

      <div style="left:calc(50% - 40px);width:80px;top:625px;position:absolute;height: 45px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain; " >
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
