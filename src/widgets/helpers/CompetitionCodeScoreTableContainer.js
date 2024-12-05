import './styles.css';

import { boomioLogo } from './constants';
import { localStorageService } from '@/services';

export class CompetitionCodeScoreTableContainer {
  constructor(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable; // Store the prop in a class property
    this.isMobile = window.innerWidth <= 1280;
    this.isSmallMobile = window.innerWidth <= 380;
    this.containerDiv = null; // Store container reference
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'EN';

    this.render();
  }

  updateProps(prop, scoreTable) {
    this.prop = prop;
    this.scoreTable = scoreTable;
    this.language = this.config.language ? this.config.language : 'EN';
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    this.campaignUrlProp = urlParams.get('campaign_url');

    this.updateVisuals();
  }

  updateVisuals() {
    if (!this.containerDiv) return;

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

    const playerNameInput = document.querySelector('.boomio-competition-name-input-field');
    const scoreboard = this.scoreTable.scoreboard || [];
    const userBestPlace = parseInt(this.scoreTable.user_best_place);
    const userBestScore = parseInt(this.scoreTable.user_best_score);
    this.userDiscountCode = this?.scoreTable?.coupon_code
      ? this.scoreTable.coupon_code
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
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;

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
            <td style="padding-left:8px;text-align:start;width: 25px; color: ${color}; border: none;font-size: 14px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word">${
        item.place
      }</td>
      <td style="padding-left:6px;text-align:start;width: 100px; color: ${color}; border: none;font-size: 16px; font-family: Georama; font-weight: 800; text-transform: uppercase; line-height: 27px; word-wrap: break-word;">
      ${
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
      }
    </td>
              <td style="width: 48px; color: ${color}; border: none;font-size: 14px; font-family: Georama; font-weight: 800; line-height: 27px; word-wrap: break-word;padding-right:11px;">${
        item.score
      }</td>
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
        this.prop === 'Pigu.lt' && this.language === 'LT'
          ? 'Tavo rezultatas'
          : this.prop === 'Pigu.lt' && this.language === 'EN'
          ? 'YOUR SCORE'
          : this.prop === 'Pigu.lt' && this.language === 'LV'
          ? 'TAVS REZULTĀTS'
          : this.prop === 'Pigu.lt' && this.language === 'ET'
          ? 'SINU TULEMUS'
          : this.prop === 'Pigu.lt' && this.language === 'FI'
          ? 'SINUN TULOKSESI'
          : this.prop === 'Pigu.lt' && this.language === 'RU'
          ? 'ТВОЙ РЕЗУЛЬТАТ'
          : playerNameInput?.value
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
      ${
        (this.prop === 'Pegasas' && this.scoreTable?.user_best_place < 20) || true
          ? `<div style="width:100%; top: ${'390px'}; position: absolute; text-align: center; color: ${textColor}; font-size: ${
              this.prop === 'Barbora' ? '18px' : fontSize
            }; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Pigu.lt' && this.language === 'EN'
                ? 'WELL DONE!'
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? 'LABS MĒĢINĀJUMS!'
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? 'HÄSTI TEHTUD!'
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? 'Hyvä sinä!'
                : this.prop === 'Pigu.lt' && this.language === 'RU'
                ? 'ХОРОШАЯ ПОПЫТКА!'
                : this.prop === 'Barbora'
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
                : this.prop === 'Fantazijos'
                ? '2024.06.09 ŠVENČIANT NACIONALINĘ 69 DIENĄ'
                : 'Valio, tau puikiai sekasi!'
            }</div>
            <div style="width:100%; top: ${'420px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.isSmallMobile ? '8px' : this.isMobile ? '9px' : '10px'
            } ; font-family: Montserrat; font-weight: 700; word-wrap: break-word">${
              this.prop === 'Barbora'
                ? 'Pirk <a style="color:white" target="_blank" href="https://www.barbora.lt/">Barbora.lt</a>, nuolaidos kodo laukelyje vesk <b style="font-weight:900;font-size:18px;background-color:#FFC727;"> &apos;GIMTADIENIS&apos;</b> ir gauk dovanų!'
                : this.prop === 'Pieno Žvaigždės'
                ? 'Jei laimėjai, informuosime Tave el. paštu, kurį nurodei. Prizinį</br> fondą sudaro Forum Cinemas bilietai <u style="text-transform:lowercase">IR </br>pagrindiniai <u style="text-transform:uppercase">MIAU PRIZAI  </u></u>- Su Miau gyvent linksmiau!'
                : this.prop === 'Pegasas'
                ? `Jei laimėjai, informuosime Tave el. paštu, kurį nurodei. Prizinį</br> fondą sudaro 80 Pegaso knygų.</br>${
                    this.scoreTable.user_best_score > 1500
                      ? 'O PIRKDAMAS PEGASAS.LT SU NUOLAIDOS KODU'
                      : 'O surinkus daugiau nei 1500 taškų gauk </br>5€ vertės nuolaidą iškart!'
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'EN'
                ? `Each week, the top 10 players will win prizes!</br>If you win, we’ll notify you via the email address in your account.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">11% EXTRA off</strong> selected items with <strong id="startCodeRulesButtonClick" style="text-decoration:underline">code*</strong></strong></strong>  '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? `Katru nedēļu 10 labākie spēlētāji saņems balvas! Ja</br>uzvarēsi, mēs informēsim Tevi 220.lv konta norādītajā e-pasta adresē.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"> <strong style="color:#DFFC38">Papildu -11%</strong>  izvēlētām precēm ar <strong id="startCodeRulesButtonClick" style="text-decoration:underline">kodu*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? `Iga nädal võidavad 10 parimat mängijat auhindu! </br>Võidu korral teavitame Sind e-mailiga, millega oled oma konto registeerinud.</br> ${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"> <strong style="color:#DFFC38">Lisaale -11% </strong> valitud toodetele <strong id="startCodeRulesButtonClick" style="text-decoration:underline"> koodiga*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? `Joka viikko 10 parasta pelaajaa voittaa palkintoja! Jos voitat, ilmoitamme</br>siitä sähköpostitse käyttäjätililläsi olevaan osoitteeseen</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">22% LISÄALE</strong> valikoiduista tuotteista <strong id="startCodeRulesButtonClick" style="text-decoration:underline">koodilla*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  (this.campaignUrlProp === 'https://kaup.ee' ||
                    this.campaignUrlProp === 'https://kaup24.ee')
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Kaup24.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  this.campaignUrlProp === 'https://pigu.lt'
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Pigu.lt.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  this.campaignUrlProp === 'https://220.lv'
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте 220.lv.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt'
                ? `Net 10 geriausių žaidėjų kas savaitę laimės prizus!</br>Jei laimėsi informuosime tave paskyroje nurodytu el. paštu.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase">Pažymėtoms prekėms <strong style="color:#DFFC38">papildomai -11% </strong> su  <strong id="startCodeRulesButtonClick" style="text-decoration:underline">kodu*</strong></strong>  '
                      : ''
                  }`
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
                ? 'Jei laimėjai, informuosime Tave el. paštu, kurį nurodei. Prizinį</br> fondą sudaro net 10 prizų – „Gamtos ateities“ stalo žaidimų</br> „Misija Ekomiestas“ arba rūšiavimo namuose rinkinių –</br> kiekvieną savaitę!'
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
              <div style="width:100%; top: ${'495px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.isSmallMobile ? '7px' : this.isMobile ? '9px' : '10px'
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
            <div style="width:100%; top: 536px; position: absolute; text-align: center; color: ${textColor}; font-size: ${
              this.isSmallMobile ? '7px' : this.isMobile ? '9px' : '10px'
            }; font-family: Montserrat; font-weight: 700;  display:${
              this.prop === 'Pigu.lt' ? 'none' : 'block'
            };word-wrap: break-word">${
              this.prop === 'Barbora'
                ? '(Galioja pristatymams iki 04 14 d.)'
                : this.prop === 'Eurovaistine'
                ? 'Uzvarētāji tiks informēti e-pastā.'
                : this.prop === 'Pegasas' && this.scoreTable.user_best_score > 1500
                ? 'gauk 5€ vertės nuolaidą perkant internetu bent už 50 EUR.'
                : this.prop === 'Pigu.lt' && this.language === 'EN'
                ? 'get a €2 discount on €20 carts!'
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? 'un saņem 2€ atlaidi pirkumiem virs 20€!'
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? 'ja saad 2 € allahindlust igalt ostult, mis ületab 20€!'
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? 'saat 2€ alennuksen yli 20€ ostoksesta!'
                : this.prop === 'Pigu.lt' && this.language === 'RU'
                ? 'и получи скидку 2€ на покупки свыше 20€!'
                : this.prop === 'Pigu.lt'
                ? 'GAUK 2€ NUOLAIDĄ VISAM KREPŠELIUI VIRŠ 20€!'
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
                : this.prop === 'Pegasas'
                ? ''
                : this.prop.includes('Gamtos Ateitis')
                ? ''
                : this.prop === 'Pieno Žvaigždės'
                ? ''
                : 'Apie laimėjimą informuosime nurodytu el. paštu.'
            } </div> `
          : `<div style="width:100%; top: 390px; position: absolute; text-align: center; color: ${textColor}; font-size: ${fontSize}; font-family: Montserrat; font-weight: ${fontWeight}; text-transform: uppercase; word-wrap: break-word">${
              this.prop === 'Pigu.lt' && this.language === 'EN'
                ? 'YOU CAN DO IT!'
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? 'TU TO VARI!'
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? 'SA SAAD HAKKAMA!'
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? 'Pystyt siihen!'
                : this.prop === 'Pigu.lt' && this.language === 'RU'
                ? 'ТЫ СМОЖЕШЬ!'
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
                : 'Tu gali!'
            }</div>
            <div style="margin-left:10px;width:calc(100% - 30px); top: 420px;line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.isSmallMobile
                ? '7px'
                : this.isSmallMobile
                ? '7px'
                : this.isMobile
                ? '9px'
                : '11px'
            }; font-family: Montserrat; font-weight: 700;  word-wrap: break-word">${
              this.prop === 'Barbora'
                ? ''
                : this.prop === 'Eurovaistine'
                ? '50 spēlētāji, kuri iegūs vislielāko punktu skaitu, saņems </br>E-EUROAPTIEKA dāvanu, kuponus: 100€, 50€, 25€, 15€,'
                : this.prop === 'Pegasas'
                ? `Pagerink rezultatą, nes kas dvi savaites geriausi žaidėjai</br> laimės prizus! Prizinį fondą sudaro 80 Pegaso knygų.</br>${
                    this.scoreTable.user_best_score > 1500
                      ? 'O PIRKDAMAS PEGASAS.LT SU NUOLAIDOS KODU'
                      : 'O surinkus daugiau nei 1500 taškų gauk </br>5€ vertės nuolaidą iškart!'
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'EN'
                ? `Improve your score, because the top 10 players each week will win prizes!</br>If you win, we’ll notify you via the email address in your account.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">11% EXTRA off</strong> selected items with <strong id="startCodeRulesButtonClick" style="text-decoration:underline">code*</strong></strong></strong>  '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? `Uzlabo savu rezultātu, jo katru nedēļu 10 labākie spēlētāji laimēs balvas! Ja </br>uzvarēsi, mēs informēsim Tevi 220.lv konta norādītajā e-pasta adresē.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"> <strong style="color:#DFFC38">Papildu -11%</strong>  izvēlētām precēm ar <strong id="startCodeRulesButtonClick" style="text-decoration:underline">kodu*</strong></strong>'
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? `Paranda oma tulemust, sest 10 parimat mängijat võidavad iga nädal auhindu!</br>Võidu korral teavitame Sind e-mailiga, millega oled oma konto registeerinud.</br> ${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"> <strong style="color:#DFFC38">Lisaale -11% </strong> valitud toodetele <strong id="startCodeRulesButtonClick" style="text-decoration:underline"> koodiga*</strong></strong>'
                      : ''
                  }`
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? `Paranna pistemäärääsi, sillä joka viikko 10 parasta pelaajaa voittaa palkintoja! Jos</br> voitat, ilmoitamme siitä sähköpostitse käyttäjätililläsi olevaan osoitteeseen.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">22% LISÄALE</strong> valikoiduista tuotteista <strong id="startCodeRulesButtonClick" style="text-decoration:underline">koodilla*</strong></strong>'
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  (this.campaignUrlProp === 'https://kaup.ee' ||
                    this.campaignUrlProp === 'https://kaup24.ee')
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Kaup24.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  this.campaignUrlProp === 'https://pigu.lt'
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте Pigu.lt.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt' &&
                  this.language === 'RU' &&
                  this.campaignUrlProp === 'https://220.lv'
                ? `Каждую неделю 10 лучших игроков получают призы! Если ты выиграл, мы</br> свяжемся с тобой по электронной почте, указанной в твоем аккаунте 220.lv.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase"><strong style="color:#DFFC38">Дополнительно -11%</strong> на выбранные товары с <strong id="startCodeRulesButtonClick" style="text-decoration:underline">кодом*</strong></strong> '
                      : ''
                  }`
                : this.prop === 'Pigu.lt'
                ? `Pagerink rezultatą, nes net 10 geriausių žaidėjų kas savaitę laimės</br> prizus!  Jei laimėsi informuosime tave paskyroje nurodytu el. paštu.</br>${
                    this.prop === 'Pigu.lt'
                      ? '<strong style="display:none;text-transform:uppercase">Pažymėtoms prekėms <strong style="color:#DFFC38">papildomai -11%</strong> su <strong id="startCodeRulesButtonClick" style="text-decoration:underline">kodu*</strong></strong> '
                      : ''
                  }`
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
                ? 'Pagerink rezultatą, nes kas savaitę geriausi žaidėjai laimės </br>prizus! Prizinį fondą sudaro net 10 prizų – „Gamtos ateities“ </br>stalo žaidimų „MisijaEkomiestas“ arba rūšiavimo namuose</br> rinkinių – kiekvieną savaitę!'
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
              <div style="width:100%; top: ${'495px'};line-height:18px; position: absolute; text-align: center; color: ${textColor}; font-size:${
              this.isSmallMobile ? '7px' : this.isMobile ? '9px' : '10px'
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
              <div style="width:100%;display:${
                this.prop === 'Pigu.lt' ? 'none' : 'block'
              }; top: 536px; position: absolute; text-align: center; color: ${textColor}; font-size: ${
              this.isSmallMobile ? '7px' : this.isMobile ? '9px' : '10px'
            }; font-family: Montserrat; font-weight: 700;  word-wrap: break-word">${
              this.prop === 'Barbora'
                ? '(Galioja pristatymams iki 04 14 d.)'
                : this.prop === 'Eurovaistine'
                ? 'Uzvarētāji tiks informēti e-pastā.'
                : this.prop === 'Pegasas' && this.scoreTable.user_best_score > 1500
                ? 'gauk 5€ vertės nuolaidą perkant internetu bent už 50 EUR.'
                : this.prop === 'Pigu.lt' && this.language === 'EN'
                ? 'get a €2 discount on €20 carts!'
                : this.prop === 'Pigu.lt' && this.language === 'LV'
                ? 'un saņem 2€ atlaidi pirkumiem virs 20€!'
                : this.prop === 'Pigu.lt' && this.language === 'ET'
                ? 'ja saad 2 € allahindlust igalt ostult, mis ületab 20€!'
                : this.prop === 'Pigu.lt' && this.language === 'FI'
                ? 'saat 2€ alennuksen yli 20€ ostoksesta!'
                : this.prop === 'Pigu.lt' && this.language === 'RU'
                ? 'и получи скидку 2€ на покупки свыше 20€!'
                : this.prop === 'Pigu.lt'
                ? 'GAUK 2€ NUOLAIDĄ VISAM KREPŠELIUI VIRŠ 20€!'
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
                : this.prop === 'Pegasas'
                ? ''
                : 'Apie laimėjimą informuosime nurodytu el. paštu.'
            } </div>
        `
      }

${
  this.prop === 'Pigu.lt' && false
    ? `<div style="box-sizing: border-box;width: 100%; padding-left: 12px; padding-right: 12px; padding-top: 7px; padding-bottom: 7px; background:${
        this.prop === 'Pigu.lt' ? '#000000' : '#A40033'
      }; border-radius: 32px; border: 0.50px  rgba(255, 255, 255, .6) solid; justify-content: space-between; align-items: center; display: inline-flex;width:250px;position:absolute;top:495px;left:calc(50% - 130px);">
<div style="height: 17px; color: white; font-size: 16px; font-family: Montserrat; font-weight: 600; line-height: 16px; word-wrap: break-word" id="p_code_text">
 ${this.userDiscountCode ?? 'CODE'}
    </div>
    <svg width="22" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" id="boomio-copy-modal-btn" style="cursor:pointer">
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
      const closeBtn = document.getElementById('boomio-game-play-again');

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
        const startRulesButton = document.getElementById('startCodeRulesButtonClick');
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

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;

    // if (
    //   this.prop === 'Pigu.lt' &&
    //   (this.scoreTable.user_best_score > 1500 || this.prop === 'Pigu.lt')
    // ) {
    //   document.getElementById('boomio-copy-modal-btn').onclick = () => {
    //     const textToCopy = this.userDiscountCode;
    //     const textarea = document.createElement('textarea');
    //     textarea.value = textToCopy;
    //     document.body.appendChild(textarea);
    //     textarea.select();
    //     textarea.setSelectionRange(0, textarea.value.length);
    //     document.execCommand('copy');
    //     document.body.removeChild(textarea);

    //     const copyButton = document.getElementById('p_code_text');
    //     copyButton.textContent = this.prop === 'Pigu.lt' ? 'Copied' : 'Copied';

    //     setTimeout(() => {
    //       copyButton.textContent = this.userDiscountCode;
    //     }, 2000);
    //   };
    // }
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('competition-table-container');
    containerDiv.setAttribute('id', 'competition-table-container');
    containerDiv.style.background = 'none';
    // containerDiv.style.border = this.prop === 'Penki Sezonai' && '2px solid #A6CE39';

    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');
    this.isMobileHeightSmall = window.innerHeight <= 550;

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;
    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '375px'
          : document.body.offsetWidth + 'px'
        : '426px';
    containerDiv.innerHTML = `
    <div style="width: 100%; height: 100%; position: relative; ">
      <div style="width:100%;top: ${
        this.isMobileHeightSmall ? '72px' : '62px'
      }; position: absolute; text-align: center; color: ${'white'}; font-size: 40px; font-family: Georama; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-competition-scoreboard-name">${
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
        : this.language === 'FI'
        ? 'TULOKSET'
        : this.language === 'EN'
        ? 'RESULTS'
        : 'REZULTATAI'
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
              


      <div  style="width: calc(100% - 44px); height: ${'250px'}; left: 22px; top: 124px; position: absolute; background: rgba(255, 255, 255, 0.20); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset; border-radius:20px;border-right:none; backdrop-filter: blur(4px)">
        <div style="overflow-x:hidden;overflow-y: scroll; height: calc(100% - 30px);margin-right:5px; margin-top:20px;" class="boomio-custom-scrollbar">
          <table style="margin-left:2px;width: 100%;padding-top:20px;padding-bottom:20px;border-collapse: collapse;" >
            <tbody class="boomio-tbody">
    `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: calc(100% - 60px);margin-left:30px;margin-right:30px;top:585px;position:absolute; height: 34px; background: ${'white'}; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 11px; display: flex" id="boomio-game-play-again">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 20px; font-family: Georama; font-weight: 700; line-height: 22px; word-wrap: break-word;cursor:pointer;">${
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
            <div style="color:white;width:100%;font-size:${
              this.isSmallMobile ? '7px' : this.isMobile ? '9px' : '10px'
            };text-align:center;top:528px;position:absolute;margin-top:2px;height: 22px; justify-content: center; align-items: center; display: flex;font-weight:600;background-size: contain;">
      ${
        this.prop === 'Pigu.lt' && false
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
      }
      
</div>
      <div style="color:#DFFC38;width:100%;font-size:${
        this.isSmallMobile ? '8px' : this.isMobile ? '10px' : '12px'
      };text-align:center;text-transform:uppercase;top:550px;position:absolute;margin-top:2px;height: 22px; justify-content: center; align-items: center; display: flex;font-weight:600;background-size: contain;">
          <div style="display:${
            this.prop === 'Pigu.lt' ? 'block' : 'none'
          };border-radius:35px;width: calc(100% - 60px);margin-left:30px;margin-right:30px;top:585px;height: 28px; background: ${
      this.prop === 'Pigu.lt' ? 'black' : 'none'
    }; overflow: hidden; justify-content: center; align-items: center; gap: 11px; display: flex;font-family:Georama" id="boomio-game-link-to-web">
      ${
        this.prop === 'Pigu.lt'
          ? this.language === 'EN'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://pigu.lt">Discover the best Pigu.lt deals!</a>'
            : this.language === 'LV'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://220.lv">Atklāj labākos 220.lv piedāvājumus!</a>'
            : this.language === 'ET'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://kaup24.ee">Avasta Kaup24.ee parimaid ostudiile!</a>'
            : this.language === 'FI'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://hobbyhall.fi">Löydä parhaat diilit Hobbyhall.fi verkkokaupasta!</a>'
            : this.language === 'RU' &&
              (this.campaignUrlProp === 'https://kaup.ee' ||
                this.campaignUrlProp === 'https://kaup24.ee')
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://kaup24.ee">Открой для себя лучшие предложения Kaup24!</a>'
            : this.language === 'RU' && this.campaignUrlProp === 'https://pigu.lt'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://pigu.lt">Открой для себя лучшие предложения Pigu.lt!</a>'
            : this.language === 'RU' && this.campaignUrlProp === 'https://220.lv'
            ? '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://pigu.lt">Открой для себя лучшие предложения 220.lv!</a>'
            : '<a style="text-decoration:none;color:#DFFC38" target="_blank" href="https://pigu.lt">Atrask geriausius Pigu.lt pasiūlymus!</a>'
          : ''
      }
  </div>
</div>

    <div style="left:calc(50% - 40px);width:78px;top:635px;position:absolute;margin-top:5px;height: 22px; background: url(${boomioLogo}); justify-content: center; align-items: center; display: flex;background-size: contain;background-repeat:no-repeat;" id="boomio-game-play-again">
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
