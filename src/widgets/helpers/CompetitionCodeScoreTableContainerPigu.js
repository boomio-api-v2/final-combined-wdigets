import './styles.css';

import { boomioLogo } from './constants';
import { localStorageService } from '@/services';

export class CompetitionCodeScoreTableContainerPigu {
  constructor(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable; // Store the prop in a class property
    this.isMobile = window.innerWidth <= 1280;
    this.containerDiv = null; // Store container reference
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'EN';
    this.couponCodeNew = this.config.couponCodeNew
      ? this.config.couponCodeNew
      : this.language === 'ET' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : this.language === 'RU' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : this.language === 'LT' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'RU' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'FI' && this.campaignUrlProp === 'https://hobbyhall.fi'
      ? '22CYBER1224'
      : this.language === 'LV' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'RU' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://hobbyhall.fi'
      ? '22CYBER1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'EN' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : '';

    this.render();
  }

  updateProps(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.language = this.config.language ? this.config.language : 'EN';
    this.config = localStorageService.getDefaultConfig();
    this.couponCodeNew = this.config.couponCodeNew
      ? this.config.couponCodeNew
      : this.language === 'ET' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : this.language === 'RU' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : this.language === 'LT' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'RU' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'FI' && this.campaignUrlProp === 'https://hobbyhall.fi'
      ? '22CYBER1224'
      : this.language === 'LV' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'RU' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://pigu.lt'
      ? '11PIRMADIENIS1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://hobbyhall.fi'
      ? '22CYBER1224'
      : this.language === 'EN' && this.campaignUrlProp === 'https://220.lv'
      ? '11CYBER1224'
      : this.language === 'EN' &&
        (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
      ? '11CYBER1224'
      : '';

    this.updateVisuals();
  }

  updateVisuals() {
    if (!this.containerDiv) return;
    const playerNameInput = document.querySelector('.boomio-competition-name-input-field');
    const scoreboard = this.scoreTable.scoreboard || [];
    const userBestPlace = parseInt(this.scoreTable.user_best_place);
    const userBestScore = parseInt(this.scoreTable.user_best_score);
    this.userDiscountCode = this?.scoreTable?.coupon_code || '';
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;

    const piguTable =
      this.prop === 'Pigu.lt' && this.campaignUrlProp === 'https://220.lv'
        ? [
            'Piparkūka',
            'Vārpstiņš',
            'Lāčplēsis',
            'Mr kruze',
            'Tīģeris Miegā',
            'Kaspars',
            'Mežsargs',
            'Vēstnesis',
            'Latvānija',
            'Saulīte',
            'LAUVIŅA',
            'Punisher',
            'Tēvzeme',
            'Skailane',
            'Freefire',
            'Zelta Saule',
            'Tumsas Burvis',
            'Spīdīgais Runcis',
            'Krauklis',
            'Jānis',
            'Mēness Kafija',
            'Gints',
            'Saulīte',
            'Meža Puika',
            'Mēness Gaisma',
            'Orests',
            'Zane',
            'Viktors',
            'Lielais Karpis',
          ]
        : this.prop === 'Pigu.lt' &&
          (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee')
        ? [
            'Mannu',
            'Seenekuningas',
            'Tots',
            'Laura',
            'Suur Kõrv',
            'Tanni',
            'Jüri',
            'Miisu',
            'Seaküla Simson',
            'Alex',
            'Pille',
            'Mees',
            'Notsu',
            'Sannu',
            'Mõmmi',
            'Tõnis',
            'Tommy',
            'Mati',
            'Karuott',
            'Tirts',
            'Siska',
            'Jänku',
            'Tibuke',
            'Paps',
            'Tannu',
            'Kitti',
            'Päikeseke',
            'Ants',
            'Zorro',
            'Jannu',
          ]
        : this.prop === 'Pigu.lt' && this.campaignUrlProp === 'https://hobbyhall.fi'
        ? [
            'Tukku',
            'Jonsku',
            'Vampyyri',
            'Simppa',
            'Möhköfantti',
            'Pekka-Pahus',
            'Aksu',
            'Pulla',
            'Sofku',
            'Eikka',
            'Timpe',
            'Hirvi',
            'Ripa',
            'Lumikko',
            'Häiskä',
            'Hanski',
            'Jarska',
            'Pupu',
            'Kivimies',
            'Kake',
            'Kauris',
            'Tuulipuku',
            'Helmi',
            'Peltsu',
            'Eltsu',
            'Nani - Banaani',
          ]
        : this.prop === 'Pigu.lt' &&
          this.campaignUrlProp === 'https://pigu.lt' && [
            'AKRIUKAS',
            'PIGUTIS',
            'BLASH',
            'BULKIN',
            'PILKASIS ŠEŠĖLIS',
            'GIEDRIUZAS',
            'ABRIKOSAS',
            'TRUMPAS',
            'UGIS',
            'MIS LIETUVA',
            'ZORO',
            'RUKIS',
            'EMILIUX',
            'VĖJO DRUMSTĖJAS',
            'RORO',
            'HARIS POTERIS',
            'VAIVORYKŠTĖ',
            'VALDELIS',
            'ŠOKLIUKĖ',
            'FANTAZUOTOJAS',
            'VALDOVAS',
            'PEMPĖ',
            'NEWYORKE',
            'VORIUKAS',
            'MISTY',
            'BLACKTHORN',
            'BLAZING BILL',
          ];
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
            this.prop === 'Pegasas' ||
            this.prop === 'Pigu.lt' ||
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
            this.prop === 'Pegasas' ||
            this.prop === 'Pigu.lt' ||
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
      ${piguTable[index]}
    </td>
              <td style="width: 48px; color: ${color}; border: none;font-size: 14px; font-family: Georama; font-weight: 800; line-height: 27px; word-wrap: break-word;padding-right:11px;">${item.score}</td>
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
                this.prop === 'Pegasas' ||
                this.prop === 'Pigu.lt' ||
                this.prop.includes('Gamtos Ateitis') ||
                this.prop === 'LemonGym'
                  ? 'rgba(61, 73, 40, 1)'
                  : 'white'
              }; border: none;font-size: 14px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word">${
        this.prop === 'Pigu.lt'
          ? userBestPlace === index + 1
            ? this.prop === 'Pigu.lt' && this.language === 'LT'
              ? 'Tavo rezultatas'
              : this.prop === 'Pigu.lt' && this.language === 'EN'
              ? 'YOUR SCORE'
              : this.prop === 'Pigu.lt' && this.language === 'LV'
              ? 'TAVS REZULTĀTS'
              : this.prop === 'Pigu.lt' && this.language === 'ET'
              ? 'SINU TULEMUS'
              : this.prop === 'Pigu.lt' && this.language === 'FI'
              ? 'SINUN TULOKSESI'
              : this.prop === 'Pigu.lt' && this.language === 'RU' && 'ТВОЙ РЕЗУЛЬТАТ'
            : piguTable[index]
          : item.user_name
      }</td>
              <td style="width: 48px; color: ${
                this.prop === 'Barbora' ||
                this.prop === 'Fpro' ||
                this.prop === 'Fantazijos' ||
                this.prop === 'Makalius' ||
                this.prop === 'Unisend' ||
                this.prop === 'Akropolis' ||
                this.prop === 'Pieno Žvaigždės' ||
                this.prop === 'Pegasas' ||
                this.prop === 'Pigu.lt' ||
                this.prop.includes('Gamtos Ateitis') ||
                this.prop === 'LemonGym'
                  ? 'rgba(61, 73, 40, 1)'
                  : 'white'
              }; border: none;font-size: 16px; font-family: Georama; font-weight: 800; line-height: 27px; word-wrap: break-word;padding-right:11px;">${userBestScore}</td>
            </tr>`;
    }

    let textColor = 'white';
    let fontSize = '16px';
    let fontWeight =
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop.includes('Gamtos Ateitis') ||
      this.prop === 'Pieno Žvaigždės' ||
      this.prop === 'Pegasas' ||
      this.prop === 'Pigu.lt' ||
      this.prop === 'LemonGym'
        ? '900'
        : '700';

    let scoreboardText = `
      ${`<div style="display:${
        this.prop === 'Pigu.lt ' ? 'none' : 'none'
      };width:100%; top: 210px; position: absolute; text-align: center; color: ${textColor}; font-size: 14px; font-family: Montserrat; font-weight: ${fontWeight};  word-wrap: break-word">${
        this.prop === 'Pigu.lt' && this.language === 'EN'
          ? 'Congratulations!'
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? 'Apsveicam!'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? 'Palju õnne!'
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? 'Onneksi olkoon!'
          : this.prop === 'Pigu.lt' && this.language === 'RU'
          ? 'Поздравляем!'
          : this.prop === 'Pigu.lt' && this.language === 'LT'
          ? 'Sveikiname!'
          : this.prop === 'Barbora'
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
          : 'Sveikiname!'
      }</div>
            <div style="display:${
              this.prop === 'Pigu.lt ' ? 'none' : 'none'
            };width:100%; top: 230px;line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size: 11px; font-family: Montserrat; font-weight: 700;  word-wrap: break-word">${
        this.prop === 'Pigu.lt' && this.language === 'EN'
          ? 'Today, you`ve won a discount code for the Pigu.lt website.'
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? 'Šodien Tu esi laimējis 220.lv atlaižu kodu.'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? 'Võitsid täna allahindluskoodi Kaup24 e-poodi. '
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? 'Olet voittanut alekoodin Hobbyhall.fi-verkkokauppaan!'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            (this.campaignUrlProp === 'https://kaup.ee' ||
              this.campaignUrlProp === 'https://kaup24.ee')
          ? 'Сегодня ты выиграл скидочный код Kaup24.'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://pigu.lt'
          ? 'Сегодня ты выиграл скидочный код Pigu.lt.'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://220.lv'
          ? 'Сегодня ты выиграл скидочный код 220.lv.'
          : this.prop === 'Pigu.lt'
          ? `Laimėjai nuolaidos kodą Pigu.lt svetainėje.`
          : ''
      }</div>
              <div style="width:100%; top: ${'265px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
        this.prop ? '11px' : '11px'
      } ; font-family: Montserrat; font-weight: 700; text-transform: uppercase; word-wrap: break-word">${
        this.prop === 'Pigu.lt' && this.language === 'EN'
          ? '<strong style="text-transform:uppercase"><strong style="color:#DFFC38">11% EXTRA off</strong> selected items with <strong id="startCodeRulesButtonClick" style="text-decoration:underline">code*</strong></strong></strong>  '
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? '<strong style="text-transform:uppercase"> <strong style="color:#DFFC38">Papildu -11%</strong>  izvēlētām precēm ar <strong id="startCodeRulesButtonClick" style="text-decoration:underline">kodu*</strong></strong>'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? '<strong style="text-transform:uppercase"> <strong style="color:#DFFC38">Lisaale -11% </strong> valitud toodetele <strong id="startCodeRulesButtonClick" style="text-decoration:underline"> koodiga*</strong></strong> '
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? '<strong style="text-transform:uppercase"><strong style="color:#DFFC38">22% LISÄALE</strong> valikoiduista tuotteista <strong id="startCodeRulesButtonClick" style="text-decoration:underline">koodilla*</strong></strong>'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            (this.campaignUrlProp === 'https://kaup.ee' ||
              this.campaignUrlProp === 'https://kaup24.ee')
          ? '<strong style="text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://pigu.lt'
          ? '<strong style="text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://220.lv'
          ? '<strong style="text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
          : this.prop === 'Pigu.lt'
          ? '<strong style="text-transform:uppercase">Pažymėtoms prekėms <strong style="color:#DFFC38">papildomai -11%</strong> su <strong id="startCodeRulesButtonClickFirst" style="text-decoration:underline">kodu*</strong></strong>  '
          : ''
      }</div>
              <div style="width:100%; top: 346px; position: absolute; text-align: center; color: ${textColor}; font-size: 11px; font-family: Montserrat; font-weight: 700;  word-wrap: break-word">      ${
        this.prop === 'Pigu.lt'
          ? this.language === 'EN'
            ? 'Only today!'
            : this.language === 'LV'
            ? 'Tikai šodien!'
            : this.language === 'ET'
            ? 'Ainult täna!'
            : this.language === 'FI'
            ? 'Vain tänään!'
            : this.language === 'RU' &&
              (this.campaignUrlProp === 'https://kaup.ee' ||
                this.campaignUrlProp === 'https://kaup24.ee')
            ? 'Только сегодня!'
            : this.language === 'RU' && this.campaignUrlProp === 'https://pigu.lt'
            ? 'Только сегодня!'
            : this.language === 'RU' && this.campaignUrlProp === 'https://220.lv'
            ? 'Только сегодня!'
            : 'Tik šiandien!'
          : ''
      } </div>
                     <div style="width:100%; top: 415px; position: absolute; text-align: center; color: ${textColor}; font-size: 14px; font-family: Montserrat; font-weight: 700;  word-wrap: break-word">${
        this.prop === 'Pigu.lt' && this.language === 'EN'
          ? 'Play again and improve your score'
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? 'Spēlē atkal un uzlabo savu rezultātu,'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? 'Mängi uuesti ja paranda oma tulemust,'
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? 'Pelaa uudelleen ja paranna tulostasi,'
          : this.prop === 'Pigu.lt' && this.language === 'RU'
          ? 'Играй снова и улучшай свой результат,'
          : this.prop === 'Pigu.lt'
          ? 'Žaisk dar ir pagerink rezultatą!'
          : ''
      } </div>
                     <div style="width:100%; top: 440px; position: absolute; text-align: center; color: ${textColor}; font-size: 11px; font-family: Montserrat; font-weight: 500;  word-wrap: break-word">${
        this.prop === 'Pigu.lt' && this.language === 'EN'
          ? 'because the top 10 players each week will win Pigu.lt gift vouchers.</br>If you will win, we’ll notify you via the email address in your account.'
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? 'jo katru nedēļu 10 labākie spēlētāji saņems 220.lv dāvanu kartes.</br>Ja uzvarēsi, mēs informēsim Tevi, izmantojot kontā norādīto e-pasta adresi.'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? 'sest 10 parimat mängijat võidavad igal nädalal Kaup24.ee kinkekaarte.</br>Kui peaksid võitma, teavitame Sind registreeritud e-posti kaudu.'
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? 'sillä joka viikko 10 parasta pelaajaa voittaa lahjakortin Hobbyhall.fi-verkkokauppaan!</br>Jos voitat, ilmoitamme siitä sähköpostitse käyttäjätililläsi olevaan osoitteeseen.'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            (this.campaignUrlProp === 'https://kaup.ee' ||
              this.campaignUrlProp === 'https://kaup24.ee')
          ? 'ведь каждую неделю 10 лучших игроков получат подарочные карты! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Kaup24.'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://pigu.lt'
          ? 'ведь каждую неделю 10 лучших игроков получат подарочные карты! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Pigu.lt.'
          : this.prop === 'Pigu.lt' &&
            this.language === 'RU' &&
            this.campaignUrlProp === 'https://220.lv'
          ? 'ведь каждую неделю 10 лучших игроков получат подарочные карты! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте 220.lv.'
          : this.prop === 'Pigu.lt'
          ? 'net 10 geriausių žaidėjų kas savaitę laimės Pigu.lt dovanų kuponus.</br>Jei laimėsi informuosime tave paskyroje nurodytu el. paštu.'
          : ''
      } </div>
        `}

${
  this.scoreTable.user_best_score > 1500 || this.prop === 'Pigu.lt'
    ? `<div style="box-sizing: border-box;width: 100%; padding-left: 12px; padding-right: 12px; padding-top: 7px; padding-bottom: 7px; background:${
        this.prop === 'Pigu.lt' ? '#000000' : '#A40033'
      }; border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid; justify-content: space-between; align-items: center; display: inline-flex;width:260px;position:absolute;top:305px;left:calc(50% - 130px);">
<div style="height: 17px; color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 16px; word-wrap: break-word" id="p_code_text2">
 ${this.couponCodeNew ?? 'CODE'}
    </div>
    <svg width="22" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" id="boomio-copy-modal-btn2" style="cursor:pointer">
    <path d="M18.5625 3.42188H7.5625C7.42575 3.42188 7.2946 3.4762 7.1979 3.5729C7.1012 3.6696 7.04688 3.80075 7.04688 3.9375V7.54688H3.4375C3.30075 7.54688 3.1696 7.6012 3.0729 7.6979C2.9762 7.7946 2.92188 7.92575 2.92188 8.0625V19.0625C2.92188 19.1993 2.9762 19.3304 3.0729 19.4271C3.1696 19.5238 3.30075 19.5781 3.4375 19.5781H14.4375C14.5743 19.5781 14.7054 19.5238 14.8021 19.4271C14.8988 19.3304 14.9531 19.1993 14.9531 19.0625V15.4531H18.5625C18.6993 15.4531 18.8304 15.3988 18.9271 15.3021C19.0238 15.2054 19.0781 15.0743 19.0781 14.9375V3.9375C19.0781 3.80075 19.0238 3.6696 18.9271 3.5729C18.8304 3.4762 18.6993 3.42188 18.5625 3.42188ZM13.9219 18.5469H3.95312V8.57812H13.9219V18.5469ZM18.0469 14.4219H14.9531V8.0625C14.9531 7.92575 14.8988 7.7946 14.8021 7.6979C14.7054 7.6012 14.5743 7.54688 14.4375 7.54688H8.07812V4.45312H18.0469V14.4219Z" fill="white"/>
    </svg>
</div> 
`
    : ''
}

      
      
      `;

    const observer = new MutationObserver((mutationsList, observer) => {
      // Check if the 'rules-table-container-pigu' and 'control-button' have been added to the DOM
      const rulesTableContainer = document.getElementById('rules-table-container-pigu');
      const closeBtn = document.getElementById('boomio-game-play-again-pigu');

      if (rulesTableContainer && closeBtn) {
        // Element found, add event listener to 'control-button'
        closeBtn.addEventListener('click', () => {
          rulesTableContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
          setTimeout(() => {
            rulesTableContainer.style.height = '10px';
            rulesTableContainer.style.top = 'calc(50% + 330px)';
            rulesTableContainer.style.opacity = 0;
          }, 100);
          setTimeout(() => {
            rulesTableContainer.style.display = 'none';
          }, 1000);
        });

        // Stop observing once the elements are found and event listener is added
        observer.disconnect();
      }
    });

    // Start observing the DOM for changes in child elements
    observer.observe(document.body, { childList: true, subtree: true });

    function showCompetitionTableContainer() {
      const rulesTableContainer = document.querySelector('.rules-table-container-pigu');
      rulesTableContainer.style.transition = 'height 1s ease, top 1s ease, opacity 1s ease';
      rulesTableContainer.style.display = 'block';
      setTimeout(() => {
        rulesTableContainer.style.height = '150px';
        rulesTableContainer.style.top = 'calc(50% + 30px)';
        rulesTableContainer.style.opacity = 1;
      }, 100);
    }
    if (this.prop === 'Pigu.lt') {
      const observer = new MutationObserver((mutationsList, observer) => {
        // Check if the element has been added to the DOM
        const startRulesButton = document.getElementById('startCodeRulesButtonClickFirst');
        if (startRulesButton) {
          // Element found, add event listener
          startRulesButton.addEventListener('click', showCompetitionTableContainer);
          // Stop observing once the element is found
          observer.disconnect();
        }
      });

      // Start observing the DOM for changes
      observer.observe(document.body, { childList: true, subtree: true });
    }

    this.containerDiv.querySelector('.boomio-scoreboard-text').innerHTML = scoreboardText;

    if (this.scoreTable.user_best_score > 1500 || this.prop === 'Pigu.lt') {
      document.getElementById('boomio-copy-modal-btn2').onclick = () => {
        const textToCopy = this.couponCodeNew;
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const copyButton = document.getElementById('p_code_text2');
        copyButton.textContent = this.prop === 'Pigu.lt' ? 'Copied' : 'Copied';

        setTimeout(() => {
          copyButton.textContent = this.couponCodeNew;
        }, 2000);
      };
    }
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('competition-table-container-pigu');
    containerDiv.setAttribute('id', 'competition-table-container-pigu');
    containerDiv.style.background = 'none';
    // containerDiv.style.border = this.prop === 'Penki Sezonai' && '2px solid #A6CE39';
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    this.campaignUrlProp = urlParams.get('campaign_url');

    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '375px'
          : document.body.offsetWidth + 'px'
        : '426px';
    containerDiv.innerHTML = `
    <div style="width: 100%; height: 100%; position: relative; ">
      <div style="width:100%;top: 100px; position: absolute; text-align: center; color: ${'white'}; font-size: ${
      this.isMobile ? '24px' : '34px'
    }; font-family: Montserrat;line-height:32px; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-competition-scoreboard-name">${
      this.language === 'ET' &&
      (this.campaignUrlProp === 'https://kaup.ee' || this.campaignUrlProp === 'https://kaup24.ee')
        ? 'Avasta Kaup24.ee parimaid ostudiile! '
        : this.language === 'RU' &&
          (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee')
        ? 'Открой для себя лучшие предложения Kaup24!'
        : this.language === 'LT' && this.campaignUrlProp === 'https://pigu.lt'
        ? 'Atrask geriausius Pigu.lt pasiūlymus!'
        : this.language === 'RU' && this.campaignUrlProp === 'https://pigu.lt'
        ? 'Открой для себя лучшие предложения Pigu.lt!'
        : this.language === 'FI' && this.campaignUrlProp === 'https://hobbyhall.fi'
        ? 'Löydä parhaat diilit Hobbyhall.fi-verkkokaupasta!'
        : this.language === 'LV' && this.campaignUrlProp === 'https://220.lv'
        ? 'Atklāj labākos 220.lv piedāvājumus!'
        : this.language === 'RU' && this.campaignUrlProp === 'https://220.lv'
        ? 'Открой для себя лучшие предложения 220.lv!'
        : this.language === 'EN' && this.campaignUrlProp === 'https://pigu.lt'
        ? 'Discover the best Pigu.lt deals!'
        : this.language === 'EN' && this.campaignUrlProp === 'https://hobbyhall.fi'
        ? 'Discover the best Hobbyhall.fi deals!'
        : this.language === 'EN' && this.campaignUrlProp === 'https://220.lv'
        ? 'Discover the best 220.lv deals!'
        : this.language === 'EN' &&
          (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee')
        ? 'Discover the best Kaup24 deals!'
        : ''
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: calc(100% - 60px);margin-left:30px;margin-right:30px;top:575px;position:absolute; height: 38px; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 11px; display: flex" id="boomio-game-play-again-pigu">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word;cursor:pointer;">${
      this.prop === 'Akropolis' && this.language === 'LV'
        ? 'SPĒLĒT VĒLREIZ'
        : this.prop === 'Pigu.lt' && this.language === 'EN'
        ? 'IMPROVE SCORE'
        : this.prop === 'Pigu.lt' && this.language === 'LV'
        ? 'UZLABOT REZULTĀTU'
        : this.prop === 'Pigu.lt' && this.language === 'ET'
        ? 'PARANDA TULEMUSI '
        : this.prop === 'Pigu.lt' && this.language === 'FI'
        ? 'PARANNA TULOSTA'
        : this.prop === 'Pigu.lt' && this.language === 'RU'
        ? 'УЛУЧШИТЬ РЕЗУЛЬТАТ'
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

    </div>`;

    this.containerDiv = containerDiv;

    const existingContainer = document.getElementById('competition-table-container-pigu');
    if (existingContainer) {
      existingContainer.parentNode.replaceChild(containerDiv, existingContainer);
    } else {
      document.body.appendChild(containerDiv);
    }

    this.updateVisuals();
  }
}
