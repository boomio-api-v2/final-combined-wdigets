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
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.currentScore = currentScore;
    this.render();
  }

  updateVisuals() {
    if (!this.containerDiv) return;
    const userPercentageDiscount = parseInt(this?.scoreTable?.collection?.discount);

    const containerDiv = document.querySelector('.competition-table-container');
    containerDiv.innerHTML = `
    <div style="width: 100%; height: 100%; position: relative; ">
        <div style="margin-bottom:10px;width:100%;margin-top:20px;top:30px;position:absolute;margin-left:55px; text-align: start; color: white; font-size: 16px; font-family:${
          this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
        } ; font-weight:400; text-transform:${
      this.prop === 'Ikea' ? 'none' : 'uppercase'
    } ; word-wrap: break-word"> 
    Jūsų rezultatas - ${this.currentScore ?? 0} </div>
      <div style="width:100%;top: 85px; position: absolute; text-align: start; color: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; font-size: 36px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; margin-left:55px;font-weight: 700;line-height:normal ; word-wrap: break-word" id="boomio-collection-scoreboard-name">${
      this.currentScore > 2000 ? 'Sveikiname!' : 'Mes žinome, </br> kad galite geriau!'
    }
    </div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              <div  style="width: calc(100% - 40px); display:${
                this.currentScore > 2000 ? 'block' : 'none'
              };left: 20px; top: 124px; position: absolute;border-right:none;  backdrop-filter: blur(4px);filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));">
              <div >
            <div class="boomio-tbody">
    `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 38px; background: ${'white'}; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight: 400; line-height: 24px; word-wrap: break-word;cursor:pointer;">${'Žaisti dar kartą'}</div>
      </div>

      <div style="left:calc(50% - 40px);width:78px;top:625px;position:absolute;margin-top:5px;height: 22px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain;background-repeat:no-repeat;" >
      </div>
    </div>`;

    let tableHTML = '';

    tableHTML += '<div>';

    tableHTML += `

    <div style="display: flex;margin-top:20px;filter: drop-shadow(5px 8px 18.6px rgba(255, 255, 255, 0.25));width:calc(100% - 40px); padding:20px;justify-content:center;flex-direction:column;align-items:center;border-radius:20px;background:#0058A3;filter;box-sizing:content-box !important;">

<div style="letter-spacing: -0.3px;line-height: 150%;width:100%;text-align: start; color: white; font-size: 12px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight:300; word-wrap: break-word;"> 
  Laimėjote</div>
    <div style="width:100%;text-align: start; color: white; font-size: 60px;font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight:800; text-transform: uppercase; word-wrap: break-word;line-height:normal;"> 
    ${5}<sup style="font-size:30px">€</sup></div>
        <div style="letter-spacing: -0.3px;line-height: 150%;width:100%;text-align: start; color: white; font-size: 12px; font-family:${
          this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
        } ; font-weight:300; word-wrap: break-word;"> 
   nuolaidą jūsų pirkinių krepšeliui,</br> perkant už 50 € 
ar daugiau.</div>

    <div style="letter-spacing: -0.3px;line-height: 150%;margin-bottom:15px;width:100%;margin-top:10px; text-align: start; color: white; font-size: 10px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ; font-weight:300; word-wrap: break-word;"> 
    <strong style="font-weight:700">Kuponas galioja  <span id="current-date"></span></strong></br>Atsiskaitydami už pirkinius, parodykite šį langą kasoje. </br>Kuponas skirtas vienam apsipirkimui (nuolaidos nesumuojamos) parduotuvėje IKEA Vilniuje. Juo negalima atsiskaityti Švediškame restorane, Švediškame bistro ir Švediškoje lauko kavinėje. Nuolaida netaikoma alkoholiniams gėrimams.</div>
</div></div>
        `;

    tableHTML += '</div>';

    let scoreboardText = `
     <div style="width:100%; top: 400px;margin-top:10px; margin-left:55px;position: absolute; text-align: start; color: white; font-size: 14px; font-family:${
       this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
     } ;font-weight: 300;  word-wrap: break-word;display:${
      this.currentScore < 2000 ? 'block' : 'none'
    };">Deja, šį kartą nieko nelaimėjote.</br><div style='margin-top:10px;font-weight:300;font-family:'Noto Sans';'> Žaiskite vėl ir pagerinkite rezultatą.</div><div style='font-weight:300;font-family:'Noto Sans'; >Surinkę daugiau nei 2000 taškų,</div><divstyle='font-weight:300;font-family:'Noto Sans'; > gausite nuolaidą IKEA pirkinių krepšeliui.
</div></div>
             </div>
    `;

    containerDiv.querySelector('.boomio-scoreboard-text').innerHTML = scoreboardText;
    containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;

    const currentDate = new Date().toLocaleDateString('lt-LT', {
      month: 'long',
      day: 'numeric',
    });
    document.getElementById('current-date').textContent = currentDate;

    this.containerDiv = containerDiv;
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('competition-table-container');
    containerDiv.setAttribute('id', 'competition-table-container');
    containerDiv.style.background = 'none';
    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '375px'
          : document.body.offsetWidth + 'px'
        : '426px';
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
