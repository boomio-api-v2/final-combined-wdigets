import './styles.css';

import { boomioLogo } from './constants';
import { localStorageService } from '@/services';

export class CompetitionScoreTableContainer {
  constructor(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable; // Store the prop in a class property
    this.isMobile = window.innerWidth <= 1280;
    this.containerDiv = null; // Store container reference
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'EN';
    this.render();
  }

  updateProps(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.language = this.config.language ? this.config.language : 'EN';
    this.updateVisuals();
  }

  updateVisuals() {
    if (!this.containerDiv) return;
    const playerNameInput = document.querySelector('.boomio-competition-name-input-field');
    const scoreboard = this.scoreTable.scoreboard || [];
    const userBestPlace = parseInt(this.scoreTable.user_best_place);
    const userBestScore = parseInt(this.scoreTable.user_best_score);

    let tableHTML = '';
    scoreboard.forEach((item, index) => {
      const background = index + 1 === userBestPlace ? 'rgba(255, 255, 255, 1)' : 'none';

      const color =
        index + 1 === userBestPlace
          ? this.prop === 'Barbora' ||
            this.prop === 'Fpro' ||
            this.prop === 'Fantazijos' ||
            this.prop === 'Makalius' ||
            this.prop === 'Ikea' ||
            this.prop === 'Unisend' ||
            this.prop === 'Pieno Žvaigždės' ||
            this.prop === 'Eurovaistine' ||
            this.prop === 'Akropolis' ||
            this.prop.includes('Gamtos Ateitis') ||
            this.prop === 'LemonGym'
            ? 'rgba(61, 73, 40, 1)'
            : 'white'
          : this.prop === 'Barbora' ||
            this.prop === 'Fpro' ||
            this.prop === 'Fantazijos' ||
            this.prop === 'Makalius' ||
            this.prop === 'Pieno Žvaigždės' ||
            this.prop.includes('Gamtos Ateitis') ||
            this.prop === 'LemonGym'
          ? 'white'
          : 'white';
      const boxShadow =
        index + 1 === userBestPlace ? '2px 4px 3.4px 0px rgba(0, 0, 0, 0.10) inset' : 'none';

      tableHTML += `
            <tr style="background: ${background};box-shadow:${boxShadow};margin: 0;height:44px ">
            <td style="padding-left:8px;text-align:start;width: 25px; color: ${color}; border: none;font-size: 14px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word">${item.place}</td>
      <td style="padding-left:6px;text-align:start;width: 100px; color: ${color}; border: none;font-size: 16px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word;">
      ${item.user_name}
    </td>
              <td style="width: 48px; color: ${color}; border: none;font-size: 14px; font-family: Georama; font-weight: 800; line-height: 27px; word-wrap: break-word;padding-right:10px;">${item.score}</td>
            </tr>`;
    });

    // Add new line if user_best_place is above 20
    if (userBestPlace > 20) {
      tableHTML += `
            <tr style="background: rgba(255, 255, 255, 1);box-shadow:none;margin: 0;height:44px ">
            <td style="padding-left:8px;text-align:start;width: 25px; color: rgba(61, 73, 40, 1); border: none;font-size: 14px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word">${userBestPlace}</td>

              <td style="padding-left:6px;text-align:start;width: 100px; color: ${
                this.prop === 'Barbora' ||
                this.prop === 'Fpro' ||
                this.prop === 'Fantazijos' ||
                this.prop === 'Makalius' ||
                this.prop === 'Unisend' ||
                this.prop === 'Akropolis' ||
                this.prop === 'Pieno Žvaigždės' ||
                this.prop.includes('Gamtos Ateitis') ||
                this.prop === 'LemonGym'
                  ? 'rgba(61, 73, 40, 1)'
                  : 'white'
              }; border: none;font-size: 14px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word">${
        playerNameInput?.value
      }</td>
              <td style="width: 48px; color: ${
                this.prop === 'Barbora' ||
                this.prop === 'Fpro' ||
                this.prop === 'Fantazijos' ||
                this.prop === 'Makalius' ||
                this.prop === 'Unisend' ||
                this.prop === 'Akropolis' ||
                this.prop === 'Pieno Žvaigždės' ||
                this.prop.includes('Gamtos Ateitis') ||
                this.prop === 'LemonGym'
                  ? 'rgba(61, 73, 40, 1)'
                  : 'white'
              }; border: none;font-size: 16px; font-family: Georama; font-weight: 800; line-height: 27px; word-wrap: break-word;padding-right:10px;">${userBestScore}</td>
            </tr>`;
    }

    let textColor = 'white';
    let fontSize = '14px';
    let fontWeight =
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop.includes('Gamtos Ateitis') ||
      this.prop === 'Pieno Žvaigždės' ||
      this.prop === 'LemonGym'
        ? '900'
        : '700';

    let scoreboardText = `
      ${
        (this.prop === 'LemonGym' && this.scoreTable.user_best_score > 500) ||
        (this.prop === 'Fantazijos' && this.scoreTable.user_best_score > 500) ||
        (this.prop === 'Makalius' && this.scoreTable?.user_best_place < 500) ||
        (this.prop === 'Akropolis' && this.scoreTable?.user_best_place < 35) ||
        (this.prop === 'Pieno Žvaigždės' && this.scoreTable?.user_best_place < 25) ||
        (this.prop.includes('Gamtos Ateitis') && this.scoreTable?.user_best_place < 10)
          ? `<div style="width:100%; top: ${'440px'}; position: absolute; text-align: center; color: ${textColor}; font-size: ${
              this.prop === 'Barbora' ? '18px' : fontSize
            }; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'DOVANA tau!'
                : this.prop === 'Unisend' && this.language === 'LV'
                ? 'TEV VEICAS LIELISKI!'
                : this.prop === 'Akropolis' && this.language === 'LV'
                ? 'Tev veicās lieliski!'
                : this.prop === 'Eurovaistine'
                ? 'TEV VEICAS LIELISKI!'
                : this.language === 'LV'
                ? 'Atzīmējiet karstāko vasaru'
                : this.language === 'RU'
                ? 'Отпразднуйте самый жаркий месяц лета'
                : this.prop === 'Unisend' && this.language === 'EE'
                ? 'SUL LÄHEB HÄSTI!'
                : this.language === 'EE'
                ? 'Tähistage suve kuumimat kuud ja võitke'
                : this.prop === 'Fantazijos'
                ? '2024.06.09 ŠVENČIANT NACIONALINĘ 69 DIENĄ'
                : 'Valio, tau puikiai sekasi!'
            }</div>
            <div style="width:100%; top: ${'470px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'Pirk <a style="color:white" target="_blank" href="https://www.barbora.lt/">Barbora.lt</a>, nuolaidos kodo laukelyje vesk <b style="font-weight:900;font-size:18px;background-color:#FFC727;"> &apos;GIMTADIENIS&apos;</b> ir gauk dovanų!'
                : this.prop === 'Pieno Žvaigždės'
                ? 'Jei laimėjai, informuosime Tave el. paštu, kurį nurodei. Prizinį</br> fondą sudaro Forum Cinemas bilietai <u style="text-transform:lowercase">IR </br>pagrindiniai <u style="text-transform:uppercase">MIAU PRIZAI  </u></u>- Su Miau gyvent linksmiau!'
                : this.prop === 'Unisend' && this.language === 'LV'
                ? '100 spēlētāji ar visvairāk punktiem saņems balvas. Izloze 31. </br> oktobris! Uzvarētāji tiks informēti e-pastā.'
                : this.language === 'LV' && this.prop === 'Fantazijos'
                ? 'Un laimējiet līdz 30 balvām!</br> Par laimestu informēsim e-pastā.'
                : this.language === 'RU' && this.prop === 'Fantazijos'
                ? 'и выиграйте до 30 призов! Уведомление о выигрыше </br>придет на вашу электронную почту.'
                : this.prop === 'Akropolis' && this.language === 'LV'
                ? 'Ja saglabāsi savu pozīciju 500 labāko sarakstā, tu saņemsi </br>balvu no KFC, un pēc balvas izņemšanas – automātiski </br>piedalīsies AKROPOLE dāvanu kartes izlozē 100 EUR vērtībā.  </br>Tev ir iespēja uzlabot savu rezultātu, spēlējot vēlreiz!'
                : this.prop === 'Akropolis'
                ? 'Žaisk ir kasdien laimėk vieną CAIF CAFE kavos puodelį, o</br>atsiėmęs prizą turėk galimybę laimėti 100 EUR AKROPOLIO </br>dovanų kortelę!'
                : this.prop.includes('Gamtos Ateitis')
                ? 'Jei laimėjai, informuosime Tave el. paštu, kurį nurodei. Prizinį</br> fondą šiandien sudaro net 10 prizų – „Gamtos ateities“ stalo žaidimų</br> „Misija Ekomiestas“ arba rūšiavimo namuose rinkinių!'
                : this.prop === 'Unisend' && this.language === 'EE'
                ? 'Koguni 100 enim punkte kogunud mängijat </br> võidavad 31. oktoober auhindu!'
                : this.language === 'EE' && this.prop === 'Fantazijos'
                ? 'kuni 30 auhinda oma sensuaalseteks naudinguteks.</br> Võitjaid teavitatakse nendemääratud e-posti teel.'
                : this.prop === 'Fantazijos'
                ? 'net 69 geriausi žaidėjai laimės prizus! </br>Apie laimėjimą sužinosi savo nurodytu el. paštu.'
                : this.prop === 'LemonGym'
                ? 'Mėnesio gale 11 geriausių žaidėjų laimės</br> Lemon Gym PREMIUM PLUS  narystes!'
                : this.prop === 'Makalius'
                ? 'Apie laimėjimą sužinosi savo nurodytu el. paštu liepos 1 d. </br> Prizinį fondą sudaro net 500 kuponų po 20 €, 50 €'
                : ''
            }</div>
              <div style="width:100%; top: ${'505px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Unisend' && this.language === 'EE'
                ? 'Võitjatega võetakse ühendust e-posti teel.'
                : this.language === 'LV' && this.prop === 'Fantazijos'
                ? 'IEPĒRCIETIES AR <a onclick="event.stopPropagation();" target="_blank" href=https://yesyes.lv/ style="color:white"> YESYES.LV </a> ATLAIŽU KODU: <div ><a style="background-color:#FD7A77; font-size:14px">vasara</a></div>'
                : this.language === 'RU' && this.prop === 'Fantazijos'
                ? 'ДЕЛАЙТЕ ПОКУПКИ С ПРОМОКОДОМ <a onclick="event.stopPropagation();" target="_blank" href=https://yesyes.lv/ style="color:white"> YESYES.LV: </a><div ><a style="background-color:#FD7A77; font-size:14px">vasara</a></div>'
                : this.language === 'EE' && this.prop === 'Fantazijos'
                ? 'Ostes YESYES.EE-st SOODUSKOODIGA<div ><a style="background-color:#FD7A77; font-size:14px">suvi</a></div>'
                : this.prop === 'Fantazijos'
                ? `O PIRKDAMAS <a onclick="event.stopPropagation();" target="_blank" href=https://www.fantazijos.lt style="color:white"> Fantazijos.lt </a> SU NUOLAIDOS KODU <div><a style="background-color:#FD7A77;font-size:14px">69diena</a></div>`
                : this.prop === 'Makalius' && this.language === 'LT'
                ? 'arba 100 € MAKALIAUS paslaugoms įsigyti!'
                : ''
            }</div>
            <div style="width:100%; top: 546px; position: absolute; text-align: center; color: ${textColor}; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? '(Galioja pristatymams iki 04 14 d.)'
                : this.prop === 'Eurovaistine'
                ? 'Uzvarētāji tiks informēti e-pastā.'
                : this.language === 'LV' && this.prop !== 'Akropolis'
                ? 'UN SAŅEMIET 20% ATLAIDI VISAM!'
                : this.language === 'RU'
                ? 'И ПОЛУЧИТЕ СКИДКУ 20% НА ВСЕ!'
                : this.language === 'EE'
                ? 'SAATE 20% ALLAHINDLUST KÕIGELE!'
                : this.prop === 'Fantazijos'
                ? 'GAUK 19% NUOLAIDĄ VISKAM!'
                : this.prop === 'Makalius'
                ? ''
                : this.prop === 'Akropolis'
                ? ''
                : this.prop.includes('Gamtos Ateitis')
                ? ''
                : this.prop === 'Pieno Žvaigždės'
                ? ''
                : 'Apie laimėjimą informuosime nurodytu el. paštu.'
            } </div> `
          : `<div style="width:100%; top: 440px; position: absolute; text-align: center; color: ${textColor}; font-size: ${fontSize}; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'Pagerink rezultatą ir laimėk </br>Barbora gimtadienio dovaną iškart!'
                : this.language === 'ES'
                ? 'LO ESTÁS HACIENDO MUY BIEN'
                : this.prop === 'Eurovaistine'
                ? 'TEV VEICAS LIELISKI!'
                : this.prop === 'Akropolis' && this.language === 'LV'
                ? 'Mēģini vēlreiz, tev izdosies!'
                : this.prop === 'Unisend' && this.language === 'LV'
                ? 'TEV VEICAS LIELISKI!'
                : this.language === 'LV'
                ? 'Atzīmējiet karstāko vasaru'
                : this.language === 'RU'
                ? 'Отпразднуйте самый жаркий месяц лета'
                : this.prop === 'Unisend' && this.language === 'EE'
                ? 'SUL LÄHEB HÄSTI!'
                : this.language === 'EE'
                ? 'Tähistage suve kuumimat kuud ja võitke'
                : 'Tu gali!'
            }</div>
            <div style="width:100%; top: 470px;line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? ''
                : this.prop === 'Eurovaistine'
                ? '50 spēlētāji, kuri iegūs vislielāko punktu skaitu, saņems </br>E-EUROAPTIEKA dāvanu, kuponus: 100€, 50€, 25€, 15€,'
                : this.prop === 'Pieno Žvaigždės'
                ? 'Pagerink rezultatą, nes kas savaitę geriausi žaidėjai laimės</br> prizus! Prizinį fondą sudaro Forum Cinemas bilietai <u style="text-transform:lowercase">IR </br>pagrindiniai <u style="text-transform:uppercase">MIAU PRIZAI  </u></u> - Su Miau gyvent linksmiau!'
                : this.prop === 'LemonGym'
                ? 'Pagerink rezultatą nes mėnesio gale 11 geriausių žaidėjų laimės</br>Lemon Gym PREMIUM PLUS  narystes!'
                : this.prop === 'Penki Sezonai'
                ? 'Pagerink rezultatą nes balandžio 1d.'
                : this.prop === 'Akropolis' && this.language === 'LV'
                ? 'Uzlabo savu rezultātu un saņem kādu no KFC balvām un pēc</br>balvas saņemšanas - automātiski piedalīsies  AKROPOLE</br>dāvanu kartes izlozē 100 eur vērtībā.'
                : this.prop === 'Akropolis'
                ? 'Pagerink rezultatą ir kasdien laimėk vieną CAIF CAFE kavos </br>puodelį, o atsiėmęs prizą turėk galimybę laimėti 100 EUR</br>AKROPOLIO dovanų kortelę!'
                : this.prop.includes('Gamtos Ateitis')
                ? 'Pagerink rezultatą, nes kas savaitę geriausi žaidėjai laimės </br>prizus! Prizinį fondą šiandien sudaro net 10 prizų – „Gamtos ateities“ </br>stalo žaidimų „MisijaEkomiestas“ arba rūšiavimo namuose</br> rinkinių!'
                : this.language === 'ES'
                ? 'En Diciembre, Los mejors 100 jugadores recibiran un premio!</br>Ganadores serán contactados al email del registro'
                : this.prop === 'Makalius'
                ? 'Pagerink rezultatą, nes liepos 1 dieną geriausi žaidėjai laimės </br>prizus! Prizinį fondą sudaro net 500 kuponų po 20 €, 50 € '
                : this.prop === 'Unisend' && this.language === 'LV'
                ? '100 spēlētāji ar visvairāk punktiem saņems balvas. Izloze 31. </br> oktobris! Uzvarētāji tiks informēti e-pastā.'
                : this.language === 'LV' && this.prop === 'Fantazijos'
                ? 'Un laimējiet līdz 30 balvām!</br> Par laimestu informēsim e-pastā.'
                : this.language === 'RU' && this.prop === 'Fantazijos'
                ? 'и выиграйте до 30 призов! Уведомление о выигрыше </br>придет на вашу электронную почту.'
                : this.prop === 'Unisend' && this.language === 'EE'
                ? 'Koguni 100 enim punkte kogunud mängijat </br> võidavad 31. oktoober auhindu!'
                : this.language === 'EE' && this.prop === 'Fantazijos'
                ? 'kuni 30 auhinda oma sensuaalseteks naudinguteks.</br> Võitjaid teavitatakse nendemääratud e-posti teel.'
                : ''
            }</div>
              <div style="width:100%; top: ${'505px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.prop ? '10px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Unisend' && this.language === 'EE'
                ? 'Võitjatega võetakse ühendust e-posti teel.'
                : this.prop === 'Eurovaistine'
                ? '10€, 5€ vērtība.'
                : this.language === 'LV' && this.prop === 'Fantazijos'
                ? 'IEPĒRCIETIES AR <a onclick="event.stopPropagation();" target="_blank" href=https://yesyes.lv/ style="color:white"> YESYES.LV </a> ATLAIŽU KODU: <div ><a style="background-color:#FD7A77; font-size:14px">vasara</a></div>'
                : this.language === 'RU' && this.prop === 'Fantazijos'
                ? 'ДЕЛАЙТЕ ПОКУПКИ С ПРОМОКОДОМ <a onclick="event.stopPropagation();" target="_blank" href=https://yesyes.lv/ style="color:white"> YESYES.LV: </a><div ><a style="background-color:#FD7A77; font-size:14px">vasara </a></div>'
                : this.language === 'EE' && this.prop === 'Fantazijos'
                ? 'Ostes YESYES.EE-st SOODUSKOODIGA<div ><a style="background-color:#FD7A77; font-size:14px">suvi</a></div>'
                : this.prop === 'Fantazijos'
                ? `O PIRKDAMAS <a onclick="event.stopPropagation();" target="_blank" href=https://www.fantazijos.lt style="color:white"> Fantazijos.lt </a> SU NUOLAIDOS KODU <div ><a style="background-color:#FD7A77; font-size:14px">69diena</a></div>`
                : this.prop === 'Makalius' && this.language === 'LT'
                ? 'arba 100 € MAKALIAUS paslaugoms įsigyti!'
                : ''
            }</div>
              <div style="width:100%; top: 546px; position: absolute; text-align: center; color: ${textColor}; font-size: 10px; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? '(Galioja pristatymams iki 04 14 d.)'
                : this.prop === 'Eurovaistine'
                ? 'Uzvarētāji tiks informēti e-pastā.'
                : this.language === 'LV' && this.prop === 'Fantazijos'
                ? 'UN SAŅEMIET 20% ATLAIDI VISAM!'
                : this.language === 'RU' && this.prop === 'Fantazijos'
                ? 'И ПОЛУЧИТЕ СКИДКУ 20% НА ВСЕ!'
                : this.language === 'EE' && this.prop === 'Fantazijos'
                ? 'SAATE 20% ALLAHINDLUST KÕIGELE!'
                : this.prop === 'Fantazijos'
                ? 'GAUK 19% NUOLAIDĄ VISKAM!'
                : this.prop === 'Makalius' ||
                  this.prop === 'Unisend' ||
                  this.prop === 'Akropolis' ||
                  this.prop === 'Pieno Žvaigždės' ||
                  this.prop.includes('Gamtos Ateitis')
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
      <div style="width:100%;top: 52px; position: absolute; text-align: center; color: ${'white'}; font-size: 40px; font-family: Georama; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-competition-scoreboard-name">${
      this.language === 'LV'
        ? 'REZULTĀTI'
        : this.language === 'RU'
        ? 'РЕЗУЛЬТАТЫ'
        : this.language === 'EE'
        ? 'TULEMUSED'
        : this.language === 'ET'
        ? 'TULEMUSED'
        : this.language === 'ES'
        ? 'RESULTADOS'
        : 'REZULTATAI'
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              


      <div  style="width: calc(100% - 32px); height: ${'302px'}; left: 16px; top: 124px; position: absolute; background: rgba(255, 255, 255, 0.20); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset; border-radius:20px;border-right:none; backdrop-filter: blur(4px)">
        <div style="overflow-x:hidden;overflow-y: scroll; height: calc(100% - 60px);margin-right:5px; margin-top:20px;" class="boomio-custom-scrollbar">
          <table style="margin-left:2px;width: 100%;padding-top:20px;padding-bottom:20px;border-collapse: collapse;" >
            <tbody class="boomio-tbody">
    `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:575px;position:absolute; height: 46px; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word;cursor:pointer;">${
      this.prop === 'Akropolis' && this.language === 'LV'
        ? 'SPĒLĒT VĒLREIZ'
        : this.prop === 'Eurovaistine'
        ? 'UZLABOT REZULTĀTU'
        : this.language === 'LV'
        ? 'UZLABOT REZULTĀTU'
        : this.language === 'RU'
        ? 'УЛУЧШИТЬ РЕЗУЛЬТАТ'
        : this.language === 'EE'
        ? 'PARANDA TULEMUST'
        : this.language === 'ES'
        ? 'MEJORAR EL RESULTADO'
        : 'PAGERINK REZULTATĄ'
    }</div>
      </div>

      <div style="left:calc(50% - 40px);width:78px;top:625px;position:absolute;margin-top:5px;height: 22px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain;background-repeat:no-repeat;" id="boomio-game-play-again">
      </div>
    </div>`;
    this.containerDiv = containerDiv;

    const existingContainer = document.getElementById('competition-table-container');
    if (existingContainer) {
      existingContainer.parentNode.replaceChild(containerDiv, existingContainer);
    } else {
      document.body.appendChild(containerDiv);
    }

    this.updateVisuals();
  }
}
