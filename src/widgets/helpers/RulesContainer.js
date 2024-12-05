import './styles.css';

import { boomioLogo, close } from './constants';
export class RulesContainer {
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
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;
    this.language = urlParams.get('language');

    const content =
      this.campaignUrlProp === 'https://pigu.lt' && this.language === 'LT'
        ? `<div><p><meta charset="utf-8"></p>

<p><strong>BENDROSIOS NUOSTATOS</strong></p>

<p>1.&nbsp; &nbsp; &nbsp;&nbsp;Šios žaidimo taisyklės (toliau – Žaidimo taisyklės) nustato UAB „Pigu“ (įmonės kodas 300866792, buveinė Laisvės pr. 75, LT-06144 Vilnius) (toliau – Akcijos organizatorius) organizuojamo žaidimo vykdymo tvarką, žaidimo dovanas ir jų įteikimo, ginčų sprendimo ir kitą tvarką. &nbsp;</p>

<p>2.&nbsp; &nbsp; &nbsp;&nbsp;Žaidimo vykdymo laikotarpis:&nbsp;2024 m. lapkričio 15 d. – 2024 m. gruodžio 22 d.&nbsp;(imtinai).</p>

<p>3.&nbsp; &nbsp; &nbsp;&nbsp;Žaidimo dalyvis turi būti registruotas pigu.lt narys&nbsp;&nbsp;ir būti sutikęs gauti žaidimo naujienas ir informaciją apie prizus.</p>

<p>4.&nbsp; &nbsp; &nbsp;&nbsp;Žaidimas vykdomas Pigu.lt mobiliojoje programėlėje. Žaidimo metu žaidimo dalyvis kontroliuoja žaidimo herojų, kurio tikslas šokinėjant platformomis pakilti kuo aukščiau nenukrentat. Platformos gali sulūžti. Kiekviena užšokta platforma suteikia taškų. Siekiant pagerinti rezultatą, žaidimo dalyvis žaidimą gali kartoti.</p>

<p><strong>ŽAIDIMO DOVANOS IR JŲ ĮTEIKIMO TVARKA</strong></p>

<p>5.&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Žaidimo dovanas sudaro:</p>

<p>5.1.&nbsp;&nbsp;nuolaidos kodai, apsiperkant Pigu.lt programėlėje, kurie galioja tik laimėjimo dieną iki vidurnakčio, nurodytomis sąlygomis žaidimo lange.</p>

<p>5.2.&nbsp;dešimt&nbsp;20€&nbsp;vertės dovanų kuponų, kuriuos laimi 10 daugiausiai taškų pasiekusių žaidimo dalyvių kiekvieną savaitę.</p>

<p>6.&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kasdien, daugiau nei 1500 taškų surinkę, žaidimo dalyviai gauna nuolaidos kodą.</p>

<p>7.&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kiekvieną savaitę, dešimt daugiausiai taškų pasiekusių žaidimo dalyvių laimės&nbsp;20€&nbsp;vertės dovanų kuponus.</p>

<p>8.&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informavimo apie žaidimo dovaną ir jų įteikimo tvarka:</p>

<p>8.1.&nbsp;&nbsp;Apie žaidimo dovaną, nurodytą Žaidimo taisyklių 5.1. punkte, žaidimo dalyvis yra informuojamas rezultatų lange, iš karto po žaidimo laimėjimo.</p>

<p>8.2.&nbsp;Apie žaidimo dovaną, nurodytą Žaidimo taisyklių 5.2. punkte, žaidimo dalyvis yra informuojamas jo nurodytu&nbsp;elektroninio pašto adresu. Informacija apie praėjusios savaitės žaidimo laimėjimą siunčiama pirmadieniais, šiomis dienomis: 2024 m.&nbsp;lapkričio 25 d., 2024 m. gruodžio 2 d., 2024 m. gruodžio 9 d., 2024 m. gruodžio 16 d., 2024 m. gruodžio 23 d.</p>

<p>9.&nbsp; &nbsp; &nbsp;&nbsp;Žaidimo dovanų kuponų panaudojimo sąlygos:</p>

<p>9.1.&nbsp;Dovanų kuponas galioja 1 savaitę nuo jo išsiuntimo dienos.</p>

<p>9.2.&nbsp;Dovanų kuponas negrąžinamas bei į pinigus nekeičiamas.</p>

<p>9.3.&nbsp;Jei užsakymo, už kurį atsiskaitoma pritaikius dovanų kuponą, suma viršija dovanų kupono vertę, trūkstamą sumą galima sumokėti pasirinkus vieną iš Pigu.lt siūlomų atsiskaitymo būdų.</p>

<p>9.4.&nbsp;Dovanų kupono kodas gali būti pritaikytas tik vienam užsakymui. Jei užsakymo, už kurį atsiskaitoma pritaikius dovanų kuponą suma yra mažesnė nei dovanų kupono vertė, susidaręs skirtumas negrąžinamas.</p>

<p>9.5.&nbsp;Dovanų kuponas negalioja PVM mokėtojams - fiziniams ir juridiniams asmenims (išskyrus biudžetines įstaigas), kai bandoma atsiskaityti už prekes, kurioms taikomas atvirkštinis PVM apmokestinimas.</p>

<p><strong>BAIGIAMOSIOS NUOSTATOS</strong></p>

<p>10.&nbsp; &nbsp;Nustačius nesąžiningą žaidimo dalyvio elgesį, Akcijos organizatorius pasilieka teisę žaidimo dalyvį pašalinti iš žaidimo be išankstinio pranešimo.</p>

<p>11.&nbsp; &nbsp;Visi ginčai, kylantys dėl žaidimo, yra sprendžiami derybų būdu. Jei susitarimo nepavyksta pasiekti derybomis, ginčai yra sprendžiami Lietuvos teisme Lietuvos Respublikos įstatymų nustatyta tvarka pagal Akcijos organizatoriaus buveinės vietą.</p>

<p>12.&nbsp; &nbsp;Akcijos organizatorius turi teisę vienašališkai nutraukti žaidimą ir panaikinti prizus dėl nenugalimos jėgos aplinkybių (force majeure) iš karto po to, kai dalyviai informuojami apie žaidimo nutraukimą viešai.</p>

<p>13.&nbsp; &nbsp;Akcijos organizatorius turi teisę be išankstinio įspėjimo vienašališkai keisti ar papildyti šias Žaidimo taisykles, apie tai žaidimo dalyvius informuodamas&nbsp;https://pigu.lt/lt/t/zaidimo-taisykles-jump&nbsp;puslapyje.</p>

<p>14.&nbsp; &nbsp;Akcijos organizatorius įsipareigoja užtikrinti jam perduotų asmens duomenų saugumą ir neperduoti jų tretiesiems asmenims, išskyrus atvejus, kai to duomenų pateikimas būtinas pagal teisės aktų reikalavimus.</p>

<p>15.&nbsp; &nbsp;Apriboti Jūsų asmens duomenų tvarkymą ir/ar įgyvendinti Jūsų kaip asmens duomenų subjekto teises Jūs galite šiais būdais:</p>

<p>- susisiekdami su mumis el. paštu:&nbsp;<a href="mailto:duomenuapsauga@pigu.lt">duomenuapsauga@pigu.lt</a>;</p>

<p>- susisiekdami su mumis telefonu: +370 52073998.</p>

<p>Su žaidimu susijusių asmens duomenų tvarkymui yra taikomos Privatumo politikos nuostatos, su kuriomis galite susipažinti adresu&nbsp;https://pigu.lt/lt/t/privatumo-politika.</p>

<p>Mums svarbi Jūsų nuomonė bei pasiūlymai! Lauksime jų el.p.&nbsp;<a href="mailto:rinkodara@pigu.lt">rinkodara@pigu.lt</a>.</p></div>`
        : this.campaignUrlProp === 'https://pigu.lt' && this.language === 'EN'
        ? `<div>
    <meta charset="utf-8">
    <p><strong>GENERAL PROVISIONS</strong></p>

    <p>1. These game rules (hereinafter referred to as the Game Rules) establish the procedures for organizing the game by UAB "Pigu" (company code 300866792, registered address Laisvės pr. 75, LT-06144 Vilnius) (hereinafter referred to as the Promotion Organizer), the game prizes and their delivery, dispute resolution and other procedures.</p>

    <p>2. Game period: November 15, 2024 - December 22, 2024 (inclusive).</p>

    <p>3. The game participant must be a registered pigu.lt member and have agreed to receive game news and information about prizes.</p>

    <p>4. The game is played on the Pigu.lt mobile app. During the game, the game participant controls the game hero, whose goal is to jump on platforms to jump as high as possible without falling. Platforms can break. Each platform jumped on gives points. To improve the result, the game participant can repeat the game.</p>

    <p><strong>GAME PRIZES AND THEIR DELIVERY PROCEDURE</strong></p>

    <p>5. Game prizes consist of:</p>

    <p>5.1. Discount codes, when shopping in the Pigu.lt app, which are valid only on the day of winning until midnight with additional conditions shown in the game window.</p>

    <p>5.2. Ten gift vouchers worth 20€, which are won by the 10 game participants who have scored the most points each week.</p>

    <p>6. Every day, game participants who score more than 1500 points receive a discount code.</p>

    <p>7. Every week, the ten game participants who score the most points will win gift vouchers worth 20€.</p>

    <p>8. The procedure for informing about the game prize and its delivery:</p>

    <p>8.1. The game participant is informed about the game prize specified in clause 5.1 of the Game Rules in the results window, immediately after winning the game.</p>

    <p>8.2. The game participant is informed about the game prize specified in clause 5.2 of the Game Rules at the e-mail address provided by them. Information about winning the previous week's game is sent on Mondays, on the following dates: November 25, 2024, December 2, 2024, December 9, 2024, December 16, 2024, December 23, 2024.</p>

    <p>9. Terms of use of game gift vouchers:</p>

    <p>9.1. The gift voucher is valid for 1 week from the date of its dispatch.</p>

    <p>9.2. The gift voucher is non-refundable and cannot be exchanged for cash.</p>

    <p>9.3. If the amount of the order for which payment is made by applying the gift voucher exceeds the value of the gift voucher, the missing amount can be paid by choosing one of the payment methods offered by Pigu.lt.</p>

    <p>9.4. The gift voucher code can only be applied to one order. If the amount of the order for which payment is made by applying the gift voucher is less than the value of the gift voucher, the resulting difference is non-refundable.</p>

    <p>9.5. The gift voucher is not valid for VAT payers - natural and legal persons (except for budgetary institutions), when trying to pay for goods subject to reverse VAT taxation.</p>

    <p><strong>FINAL PROVISIONS</strong></p>

    <p>10. Upon detecting unfair behavior of the game participant, the Promotion Organizer reserves the right to remove the game participant from the game without prior notice.</p>

    <p>11. All disputes arising from the game shall be resolved through negotiation. If no agreement can be reached through negotiations, disputes shall be resolved in a Lithuanian court in accordance with the procedure established by the laws of the Republic of Lithuania according to the location of the Promotion Organizer's registered office.</p>

    <p>12. The Promotion Organizer has the right to unilaterally terminate the game and cancel the prizes due to force majeure circumstances immediately after the participants are informed about the termination of the game publicly.</p>

    <p>13. The Promotion Organizer has the right to unilaterally change or supplement these Game Rules without prior notice, informing the game participants about it on the <a href="https://pigu.lt/lt/t/zaidimo-taisykles" target="_blank">https://pigu.lt/lt/t/zaidimo-taisykles</a> page.</p>

    <p>14. The Promotion Organizer undertakes to ensure the security of personal data transferred to it and not to transfer it to third parties, except in cases where the provision of such data is necessary in accordance with the requirements of legal acts.</p>

    <p>15. You can limit the processing of your personal data and/or exercise your rights as a data subject in the following ways:</p>

    <p>- By contacting us by e-mail: <a href="mailto:duomenuapsauga@pigu.lt" target="_blank">duomenuapsauga@pigu.lt</a>;</p>

    <p>- By contacting us by phone: +370 52073998.</p>

    <p>The provisions of the Privacy Policy, which you can find at <a href="https://pigu.lt/lt/t/privatumo-politika" target="_blank">https://pigu.lt/lt/t/privatumo-politika</a>, apply to the processing of personal data related to the game.</p>

    <p>We value your opinion and suggestions! We will be waiting for them at the e-mail address <a href="mailto:rinkodara@pigu.lt" target="_blank">rinkodara@pigu.lt</a>.</p>
</div>
`
        : this.campaignUrlProp === 'https://220.lv' && this.language === 'LV'
        ? `<div><p><strong>VISPĀRĪGI NOTEIKUMI</strong></p>

<p>1. Šos&nbsp;spēles noteikumus (turpmāk tekstā “Spēles noteikumi”) nosaka&nbsp;SIA "Pigu Latvia"&nbsp;(uzņēmuma kods&nbsp;43603025092, juridiskā adrese&nbsp;Krasta iela 52, Rīga, LV-1003, Latvija) (turpmāk tekstā “Akcijas organizētājs”) organizētās spēles norises kārtību, spēles balvas un to piegādi, strīdu risināšanu un citas procedūras.</p>

<p>2. Spēles periods: 2024. gada 15. novembris - 2024. gada 22. decembris (ieskaitot).</p>

<p>3. Spēles dalībniekam jābūt&nbsp;reģistrētam 220.lv lietotājam&nbsp;un jāpiekrīt saņemt spēles jaunumus un informāciju par balvām.</p>

<p>4. Spēle norisinās 220.lv mobilajā lietotnē. Spēles laikā dalībnieks kontrolē spēles varoni, kura mērķis ir lēkt pa platformām, lai uzlēktu pēc iespējas augstāk, nenokrītot. Platformas var salūzt. Katra sasniegtā platforma dod punktus. Lai uzlabotu rezultātu, spēles dalībnieks var atkārtot spēli.</p>

<p><strong>SPĒLES BALVAS UN TO PIEGĀDES PROCEDŪRA</strong></p>

<p>5.&nbsp;Spēles balvas sastāv no:</p>

<p>&nbsp; &nbsp;5.1. Atlaižu kodi, iepērkoties<a href="https://www.google.com/url?q=http://220.lv&amp;sa=D&amp;source=editors&amp;ust=1731608554328927&amp;usg=AOvVaw1isZq09jHrS3R--QBwjmjh">&nbsp;</a>220.lv&nbsp;lietotnē, kas ir derīgi tikai uzvaras dienā līdz pusnaktij ar papildu nosacījumiem tiek parādīti spēles logā.</p>

<p>&nbsp; &nbsp;5.2. desmit 220.lv dāvanu kartes 20 eiro vērtībā, kurus iegūst 10 spēles dalībnieki, kuri katru nedēļu ir ieguvuši visvairāk punktu.</p>

<p>6.&nbsp;Katru dienu, spēles dalībnieki, kuri iegūst vairāk nekā 1500 punktius, saņem atlaižu kodu.</p>

<p>7. Katru nedēļu desmit spēles dalībnieki, kuri iegūst visvairāk punktu, laimēs 220.lv dāvanu kartes 20 eiro vērtībā.</p>

<p>8. Informēšana par spēles balvu un tās piegādes procedūra:</p>

<p>&nbsp; &nbsp;8.1. par spēles balvu, kas norādīta Spēles noteikumu 5.1. punktā, spēles dalībnieks tiek informēts rezultātu logā uzreiz pēc spēles pabeigšanas un uzvaras.</p>

<p>&nbsp; &nbsp;8.2. par spēles balvu, kas norādīta Spēles noteikumu 5.2. punktā, spēles dalībnieks tiek informēts uz viņa norādīto e-pasta adresi. Informācija par iepriekšējās nedēļas spēles uzvarām tiek nosūtīta pirmdienās šādos datumos: 2024. gada 25. novembrī, 2024. gada 2. decembrī, 2024. gada 9. decembrī, 2024. gada 16. decembrī, 2024. gada 23. decembrī.</p>

<p>9. Spēles dāvanu kartes izmantošanas noteikumi:</p>

<p>&nbsp; &nbsp;9.1. dāvanu karte ir derīga 1 nedēļu no tās nosūtīšanas dienas;</p>

<p>&nbsp; &nbsp;9.2. dāvanu karte nav atmaksājama un to nevar apmainīt pret skaidru naudu;</p>

<p>&nbsp; &nbsp;9.3. ja pasūtījuma, par kuru tiek veikts maksājums, piemērojot dāvanu karti, summa pārsniedz dāvanu kartes vērtību, trūkstošo summu var samaksāt, izvēloties vienu no 220.lv piedāvātajiem maksājumu veidiem;</p>

<p>&nbsp; &nbsp;9.4. dāvanu kartes kods var tikt piemērots tikai vienam pasūtījumam. Ja pasūtījumam, par kuru tiek veikts maksājums, piemērojot dāvanu karti, summa ir mazāka par dāvanu kartes vērtību, starpība netiek atmaksāta;</p>

<p>&nbsp; &nbsp;9.5.&nbsp;Dāvanu karte nav izmantojama PVN maksātājiem &nbsp;norēķiniem par precēm, kurām tiek pielietots reversais PVN.</p>

<p><strong>NOBEIGUMA NOTEIKUMI</strong></p>

<p>10.&nbsp;Konstatējot negodīgu spēles dalībnieka rīcību, Akcijas organizētājs patur tiesības izslēgt spēles dalībnieku no spēles bez iepriekšēja brīdinājuma.</p>

<p>11. Visi strīdi, kas izriet no spēles, tiek risināti sarunu ceļā. Ja sarunu ceļā neizdodas panākt vienošanos, strīdi tiek risināti Latvijas tiesā saskaņā ar Latvijas Republikas likumdošanā noteikto kārtību atbilstoši Akcijas organizētāja juridiskās adreses atrašanās vietai.</p>

<p>12. Akcijas organizētājam ir tiesības vienpusēji izbeigt spēli un atcelt balvas nepārvaramas varas apstākļu (force majeure) dēļ nekavējoties pēc tam, kad dalībnieki ir publiski informēti par spēles izbeigšanu.</p>

<p>13. Akcijas organizētājam ir tiesības vienpusēji mainīt vai papildināt šos Spēles noteikumus bez iepriekšēja brīdinājuma, par to informējot spēles dalībniekus tīmekļa vietnē<a href="https://www.google.com/url?q=https://pigu.lt/lt/t/zaidimo-taisykles&amp;sa=D&amp;source=editors&amp;ust=1731608554330305&amp;usg=AOvVaw36sTBgp6D0mUmW74bLSHqi">&nbsp;</a>https://220.lv/lv/t/game-rules-jump.</p>

<p>14. Akcijas organizētājs apņemas nodrošināt tam nodoto personas datu drošību un nenodot tos trešajām personām, izņemot gadījumus, kad šādu datu sniegšana ir nepieciešama saskaņā ar normatīvo aktu prasībām.</p>

<p>15. Jūs varat ierobežot savu personas datu apstrādi un/vai izmantot savas kā datu subjekta tiesības šādos veidos:</p>

<ul>
	<li>sazinoties ar mums pa e-pastu:&nbsp;<a href="mailto:datuaizsardziba@220.lv">datuaizsardziba@220.lv</a>;</li>
	<li>sazinoties ar mums pa tālruni:&nbsp;+371 60001472.</li>
</ul>

<p>Spēles noteikumiem piemērojami Privātuma politikas noteikumi, ar kuriem varat iepazīties vietnē<a href="https://www.google.com/url?q=https://pigu.lt/lt/t/privatumo-politika&amp;sa=D&amp;source=editors&amp;ust=1731608554330940&amp;usg=AOvVaw0xhPhnLtWuNvBXwUZplShE">&nbsp;</a>https://220.lv/lv/t/privatuma-politika.</p>

<p>Mēs novērtējam Jūsu viedokli un ieteikumus! Gaidīsim tos uz e-pasta adresi&nbsp;<a href="mailto:reklama220@220.lv">reklama220@220.lv</a>.</p></div>`
        : this.campaignUrlProp === 'https://220.lv' && this.language === 'RU'
        ? `<div><p><strong>ОБЩИЕ ПОЛОЖЕНИЯ</strong></p>

<p>1. &nbsp; &nbsp; &nbsp;Настоящие правила игры (далее — Правила игры) устанавливают порядок организации игры&nbsp;SIA "Pigu Latvia"&nbsp;(код компании&nbsp;43603025092, юридический адрес Улица Краста, 52, Рига, LV-1003, Латвия) (далее — Организатор акции), призы игры и их доставку, разрешение споров и другие процедуры.</p>

<p>2. &nbsp; &nbsp; &nbsp;Период проведения игры: 15 ноября 2024 г. - 22 декабря 2024 г. (включительно).</p>

<p>3. &nbsp; &nbsp; &nbsp;Участник игры должен быть зарегистрированным участником 220.lv и согласиться получать новости игры и информацию о призах.</p>

<p>4. &nbsp; &nbsp; &nbsp;Игра проводится в мобильном приложении 220.lv. Во время игры участник управляет героем игры, цель которого — прыгать по платформам, чтобы прыгнуть как можно выше, не упав. Платформы могут ломаться. Каждая пройденная платформа дает очки. Чтобы улучшить результат, участник игры может повторить игру.</p>

<p><strong>ИГРОВЫЕ ПРИЗЫ И ПОРЯДОК ИХ ДОСТАВКИ</strong></p>

<p>5. &nbsp; Игровые призы состоят из:</p>

<p>5.1. Скидочные коды для покупок в приложении 220.lv, действующие только в день выигрыша до полуночи с дополнительными условиями, отображаются в игровом окне.</p>

<p>5.2. десять подарочных карт на сумму 20 евро, которые выиграют 10 участников игры, набравших наибольшее количество очков каждую неделю.</p>

<p>6. &nbsp; Kаждый день игроки, набравшие более 1500 очков, получают скидочный код.</p>

<p>7. &nbsp; Каждую неделю десять участников игры, набравших наибольшее количество очков, будут выигрывать подарочных карт на сумму 20 евро.</p>

<p>8. &nbsp; Порядок информирования об игровом призе и его доставке:</p>

<p>8.1. &nbsp;участник игры информируется об игровом призе, указанном в пункте 5.1 Правил игры, в окне результатов сразу после выигрыша в игре.</p>

<p>8.2. участник игры информируется об игровом призе, указанном в пункте 5.2 Правил игры, по предоставленному им адресу электронной почты. Информация о выигрыше в игре за предыдущую неделю отправляется по понедельникам в следующие даты: 25 ноября 2024 г., 2 декабря 2024 г., 9 декабря 2024 г., 16 декабря 2024 г., 23 декабря 2024 г.</p>

<p>9. &nbsp; &nbsp; &nbsp;Условия использования подарочных ваучеров игры:</p>

<p>9.1. подарочная карта действительна в течение 1 недели с даты его отправки;</p>

<p>9.2. подарочная карта возврату не подлежит и не может быть обмененa на наличные;</p>

<p>9.3. если сумма заказа, оплачиваемого с помощью подарочной карты, превышает стоимость подарочной карты, недостающую сумму можно оплатить, выбрав один из способов оплаты, предлагаемых 220.lv;</p>

<p>9.4. подарочная карта может быть применена только к одному заказу. Если сумма заказа, оплачиваемого с помощью подарочной карты, меньше стоимости подарочной карты, образовавшаяся разница возврату не подлежит;</p>

<p>9.5. Подарочные карты не могут быть использованы плательщиками PVN для оплаты товаров, облагаемых обратным налогом;</p>

<p><strong>ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</strong></p>

<p>10. &nbsp; При обнаружении недобросовестного поведения участника игры Организатор акции оставляет за собой право удалить участника игры из игры без предварительного уведомления.</p>

<p>11. Все споры, возникающие в связи с игрой, разрешаются путем переговоров. Если в ходе переговоров не удается достичь соглашения, споры разрешаются в латвийском суде в соответствии с процедурой, установленной законодательством Латвийской Республики, в соответствии с местонахождением зарегистрированного офиса Организатора акции.</p>

<p>12. Организатор акции имеет право в одностороннем порядке прекратить игру и отменить призы в связи с обстоятельствами непреодолимой силы (форс-мажор) сразу же после того, как участники будут публично проинформированы о прекращении игры.</p>

<p>13. Организатор акции имеет право в одностороннем порядке изменять или дополнять настоящие Правила игры без предварительного уведомления, информируя об этом участников игры на странице&nbsp;https://220.lv/ru/t/game-rules-jump.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</p>

<p>14. Организатор акции обязуется обеспечивать безопасность переданных ему персональных данных и не передавать их третьим лицам, за исключением случаев, когда предоставление таких данных необходимо в соответствии с требованиями законодательных актов.</p>

<p>15. Вы можете ограничить обработку своих персональных данных и/или осуществить свои права субъекта данных следующими способами:</p>

<ul>
	<li>связавшись с нами по электронной почте:&nbsp;<a href="mailto:datuaizsardziba@220.lv">datuaizsardziba@220.lv</a>;</li>
	<li>связавшись с нами по телефону:&nbsp;+371 60001472.</li>
</ul>

<p>К обработке персональных данных, связанных с игрой, применяются положения Политики конфиденциальности, с которой вы можете ознакомиться по адресу&nbsp;https://220.lv/ru/t/politika-konfidencialnosti.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</p>

<p>Мы ценим ваше мнение и предложения! Ждем их на электронный адрес&nbsp;<a href="mailto:reklama220@220.lv">reklama220@220.lv</a>.</p></div>`
        : this.campaignUrlProp === 'https://220.lv' && this.language === 'EN'
        ? `<div>
    <p><strong>Game Rules</strong></p>

    <p><strong>GENERAL PROVISIONS</strong></p>
    <p>1. These game rules (hereinafter referred to as the Game Rules) establish the procedures for organizing the game by SIA "Pigu Latvia” (company code 43603025092, registered address Krasta iela 52, Rīga, LV-1003, Latvija) (hereinafter referred to as the Promotion Organizer), the game prizes and their delivery, dispute resolution and other procedures.</p>
    <p>2. Game period: November 15, 2024 - December 22, 2024 (inclusive).</p>
    <p>3. The game participant must be a registered 220.lv member and have agreed to receive game news and information about prizes.</p>
    <p>4. The game is played on the 220.lv mobile app. During the game, the game participant controls the game hero, whose goal is to jump on platforms to jump as high as possible without falling. Platforms can break. Each platform jumped on gives points. To improve the result, the game participant can repeat the game.</p>

    <p><strong>GAME PRIZES AND THEIR DELIVERY PROCEDURE</strong></p>
    <p>5. Game prizes consist of:</p>
    <p>5.1. Discount codes, when shopping in the 220.lv app, which are valid only on the day of winning until midnight with additional conditions shown in the game window.</p>
    <p>5.2. Ten gift vouchers worth 20€, which are won by the 10 game participants who have scored the most points each week.</p>
    <p>6. Every day, game participants who score more than 1500 points receive a discount code.</p>
    <p>7. Every week, the ten game participants who score the most points will win gift vouchers worth 20€.</p>
    <p>8. The procedure for informing about the game prize and its delivery:</p>
    <p>8.1. The game participant is informed about the game prize specified in clause 5.1 of the Game Rules in the results window, immediately after winning the game.</p>
    <p>8.2. The game participant is informed about the game prize specified in clause 5.2 of the Game Rules at the e-mail address provided by them. Information about winning the previous week's game is sent on Mondays, on the following dates: November 25, 2024, December 2, 2024, December 9, 2024, December 16, 2024, December 23, 2024.</p>
    <p>9. Terms of use of game gift vouchers:</p>
    <p>9.1. The gift voucher is valid for 1 week from the date of its dispatch.</p>
    <p>9.2. The gift voucher is non-refundable and cannot be exchanged for cash.</p>
    <p>9.3. If the amount of the order for which payment is made by applying the gift voucher exceeds the value of the gift voucher, the missing amount can be paid by choosing one of the payment methods offered by 220.lv.</p>
    <p>9.4. The gift voucher code can only be applied to one order. If the amount of the order for which payment is made by applying the gift voucher is less than the value of the gift voucher, the resulting difference is non-refundable.</p>
    <p>9.5. The gift voucher is not valid for VAT payers - natural and legal persons (except for budgetary institutions), when trying to pay for goods subject to reverse VAT taxation.</p>

    <p><strong>FINAL PROVISIONS</strong></p>
    <p>10. Upon detecting unfair behavior of the game participant, the Promotion Organizer reserves the right to remove the game participant from the game without prior notice.</p>
    <p>11. All disputes arising from the game shall be resolved through negotiation. If no agreement can be reached through negotiations, disputes shall be resolved in a Latvian court in accordance with the procedure established by the laws of the Republic of Latvia according to the location of the Promotion Organizer's registered office.</p>
    <p>12. The Promotion Organizer has the right to unilaterally terminate the game and cancel the prizes due to force majeure circumstances immediately after the participants are informed about the termination of the game publicly.</p>
    <p>13. The Promotion Organizer has the right to unilaterally change or supplement these Game Rules without prior notice, informing the game participants about it on the <a href="https://220.lv/lv/t/game-rules-jump" target="_blank">https://220.lv/lv/t/game-rules-jump</a> page.</p>
    <p>14. The Promotion Organizer undertakes to ensure the security of personal data transferred to it and not to transfer it to third parties, except in cases where the provision of such data is necessary in accordance with the requirements of legal acts.</p>
    <p>15. You can limit the processing of your personal data and/or exercise your rights as a data subject in the following ways:</p>
    <ul>
        <li>By contacting us by e-mail: <a href="mailto:datuaizsardziba@220.lv" target="_blank">datuaizsardziba@220.lv</a>.</li>
        <li>By contacting us by phone: +371 60001472.</li>
    </ul>
    <p>The provisions of the Privacy Policy, which you can find at <a href="https://220.lv/lv/t/privatuma-politika" target="_blank">https://220.lv/lv/t/privatuma-politika</a>, apply to the processing of personal data related to the game.</p>
    <p>We value your opinion and suggestions! We will be waiting for them at the e-mail address <a href="mailto:reklama220@220.lv" target="_blank">reklama220@220.lv</a>.</p>
</div>
`
        : (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee') &&
          this.language === 'ET'
        ? `<div><p><strong>ÜLDISED SÄTTED</strong></p>

<p>1.&nbsp;Käesolevad mängureeglid (edaspidi "mängureeglid") kehtestavad DLB Trading OÜ (ettevõtte reg.nr 11791329, aadressil Peterburi tee 2F, 11415 Tallinn, Eesti) (edaspidi "kampaania korraldaja") korraldatava mängu läbiviimise korra, mängu auhinnad ja nende kättetoimetamise, vaidluste lahendamise ja muud protseduurid.</p>

<p>2. Mängu periood: 15. november 2024 - 22. detsember 2024 (kaasa arvatud)</p>

<p>3. Mängus osaleja peab olema registreeritud pigu.lt liige ja olema nõustunud saama mängu uudiseid ja teavet auhindade kohta.</p>

<p>4. Mängu mängitakse Kaup24.ee mobiilirakenduses. Mängu ajal juhib mängus osaleja mängu kangelast, kelle eesmärk on hüpata platvormidel võimalikult kõrgele, ilma et ta kukuks. Platvormid võivad puruneda. Iga hüpatud platvorm annab punkte. Tulemuse parandamiseks võib mängus osaleja mängu korrata.</p>

<p><strong>MÄNGU AUHINNAD JA NENDE KÄTTEANDMISE KORD</strong></p>

<p>5.&nbsp;Mängu auhinnad koosnevad:</p>

<p>&nbsp; &nbsp;5.1.&nbsp;allahindluskoodid, ostude tegemisel Kaup24.ee rakenduses, mis kehtivad ainult võitmise päeval kuni südaööni mänguaknas näidatud lisatingimustega</p>

<p>&nbsp; &nbsp;5.2. kümme kinkekaarti väärtuses 20€, mille võidavad 10 mängus osalejat, kes on igal nädalal kogunud kõige rohkem punkte.</p>

<p>6.&nbsp;Iga päev saavad mängus osalejad, kes koguvad rohkem kui 1500 punkti, allahindluskoodi.</p>

<p>7. Igal nädalal võidavad kümme enim punkte kogunud mängus osalejat kinkekaardid väärtusega 20€.</p>

<p>8. Mängu auhinnast ja selle kättetoimetamisest teavitamise kord:</p>

<p>&nbsp; &nbsp;8.1. mängu auhinnast, mis on nimetatud mängureeglite punktis 5.1, teavitatakse mängus osalejat tulemuste aknas kohe pärast mängu võitmist.</p>

<p>&nbsp; &nbsp;8.2. mängu auhinnast, mis on nimetatud mängureeglite punktis 5.2, teavitatakse mängus osalejat tema poolt megatud e-posti aadressil. Teave eelmise nädala mängu võitmise kohta saadetakse välja esmaspäeviti järgmistel kuupäevadel: 25. november 2024, 2. detsember 2024, 9. detsember 2024, 16. detsember 2024, 23. detsember 2024.</p>

<p>9. Mängu kinkekaartide kasutustingimused:</p>

<p>&nbsp; &nbsp;9.1. kinkekaart kehtib 1 nädala jooksul alates selle väljastamise kuupäevast;</p>

<p>&nbsp; &nbsp;9.2. kinkekaart ei ole tagastatav ega vahetatav raha vastu;</p>

<p>&nbsp; &nbsp;9.3. kui tellimuse, mille eest tasutakse kinkekaardiga, summa ületab kinkekaardi väärtuse, saab puuduoleva summa tasuda, valides ühe Kaup24.ee pakutavatest makseviisidest;</p>

<p>&nbsp; &nbsp;9.4. kinkekaardi koodi saab kasutada ainult ühe tellimuse kohta. Kui tellimuse, mille eest tasutakse kinkekaardiga, summa on väiksem kui kinkekaardi väärtus, siis tekkinud vahet ei tagastata;</p>

<p>&nbsp; &nbsp;9.5. kinkekaart ei kehti käibemaksukohustuslastele - füüsilistele ja juriidilistele isikutele (välja arvatud eelarvelised asutused), kui püütakse tasuda kaupade eest, millele kohaldatakse pöördmaksustamist;.</p>

<p><strong>LÕPPSÄTTED</strong></p>

<p>10.&nbsp;Mängus osaleja ebaausate tegude avastamise korral jätab kampaania korraldaja endale õiguse mängus osaleja mängust ilma eelneva etteteatamiseta eemaldada.</p>

<p>11. Kõik mängust tulenevad vaidlused lahendatakse läbirääkimiste teel. Kui läbirääkimiste teel ei jõuta kokkuleppele, lahendatakse vaidlused kohtus vastavalt Eesti Vabariigi seadustega kehtestatud korrale vastavalt kampaania korraldaja registrijärgsele asukohale.</p>

<p>12. Kampaania korraldajal on õigus mäng ühepoolselt lõpetada ja auhinnad tühistada vääramatu jõu (force majeure) tõttu kohe pärast seda, kui osalejaid on mängu lõpetamisest avalikult teavitatud.</p>

<p>13. Kampaania korraldajal on õigus neid mängureegleid ühepoolselt ja ette teatamata muuta või täiendada, teavitades sellest mängus osalejaid lehel<a href="https://www.google.com/url?q=https://pigu.lt/lt/t/zaidimo-taisykles&amp;sa=D&amp;source=editors&amp;ust=1731660373673165&amp;usg=AOvVaw3GRPqEDJGdwN1Ndo1TsNhq">&nbsp;</a>https://kaup24.ee/et/t/game-rules-jump.</p>

<p>14. Kampaania korraldaja kohustub tagama talle edastatud isikuandmete turvalisuse ja mitte edastama neid kolmandatele isikutele, välja arvatud juhul, kui selliste andmete esitamine on vajalik vastavalt õigusaktide nõuetele.</p>

<p>15. Te saate oma isikuandmete töötlemist piirata ja/või kasutada oma andmesubjekti õigusi järgmistel viisidel:</p>

<ul>
	<li>võttes meiega ühendust e-posti teel: andmekaitse@kaup24.ee;</li>
	<li>võttes meiega ühendust telefoni teel: +372 6 468 107.</li>
</ul>

<p>Mänguga seotud isikuandmete töötlemisele kohaldatakse privaatsuspoliitika sätteid, millega saab tutvuda aadressil&nbsp;https://kaup24.ee/et/t/privaatsuspoliitika.</p>

<p>Me hindame teie arvamust ja ettepanekuid! Ootame neid e-posti aadressil pood@kaup24.ee.</p></div>`
        : this.campaignUrlProp === 'https://pigu.lt' && this.language === 'RU'
        ? `<div><p><strong>ОБЩИЕ ПОЛОЖЕНИЯ</strong></p>

<p>1. &nbsp; &nbsp; &nbsp;Настоящие правила игры (далее — Правила игры) устанавливают порядок организации игры UAB «Pigu» (код компании 300866792, юридический адрес Laisvės pr. 75, LT-06144 Вильнюс) (далее — Организатор акции), призы игры и их доставку, разрешение споров и другие процедуры.</p>

<p>2. &nbsp; &nbsp; &nbsp;Период проведения игры: 15 ноября 2024 г. - 22 декабря 2024 г. (включительно).</p>

<p>3. &nbsp; &nbsp; &nbsp;Участник игры должен быть зарегистрированным участником pigu.lt и согласиться получать новости игры и информацию о призах.</p>

<p>4. &nbsp; &nbsp; &nbsp;Игра проводится в мобильном приложении Pigu.lt. Во время игры участник управляет героем игры, цель которого — прыгать по платформам, чтобы прыгнуть как можно выше, не упав. Платформы могут ломаться. Каждая пройденная платформа дает очки. Чтобы улучшить результат, участник игры может повторить игру.</p>

<p><strong>ИГРОВЫЕ ПРИЗЫ И ПОРЯДОК ИХ ДОСТАВКИ</strong></p>

<p>5. &nbsp; Игровые призы состоят из:</p>

<p>5.1. &nbsp;Скидочные коды для покупок в приложении pigu.lt, действующие только в день выигрыша до полуночи с дополнительными условиями, отображаются в игровом окне.</p>

<p>5.2. десять подарочных карт на сумму 20 евро, которые выиграют 10 участников игры, набравших наибольшее количество очков каждую неделю.</p>

<p>6. Kаждый день игроки, набравшие более 1500 очков, получают скидочный код.</p>

<p>7. Каждую неделю десять участников игры, набравших наибольшее количество очков, будут выигрывать подарочные карты &nbsp;на сумму 20 евро.</p>

<p>8. Порядок информирования об игровом призе и его доставке:</p>

<p>8.1. &nbsp;участник игры информируется об игровом призе, указанном в пункте 5.1 Правил игры, в окне результатов сразу после выигрыша в игре.</p>

<p>8.2. участник игры информируется об игровом призе, указанном в пункте 5.2 Правил игры, по предоставленному им адресу электронной почты. Информация о выигрыше в игре за предыдущую неделю отправляется по понедельникам в следующие даты: 25 ноября 2024 г., 2 декабря 2024 г., 9 декабря 2024 г., 16 декабря 2024 г., 23 декабря 2024 г.</p>

<p>9. &nbsp; &nbsp; &nbsp;Условия использования подарочных карт игры:</p>

<p>9.1. подарочная карта действительна в течение 1 недели с даты отправки;</p>

<p>9.2. подарочная карта возврату не подлежит и не может быть обмененa на наличные;</p>

<p>9.3. если сумма заказа, оплачиваемого с помощью подарочной карты, превышает стоимость подарочной карты, недостающую сумму можно оплатить, выбрав один из способов оплаты, предлагаемых Pigu.lt;</p>

<p>9.4. подарочная карта может быть применена только к одному заказу. Если сумма заказа, оплачиваемого с помощью подарочной карты, меньше стоимости подарочной карты, образовавшаяся разница возврату не подлежит;</p>

<p>9.5. Подарочные карты не могут быть использованы плательщиками PVN для оплаты товаров, облагаемых обратным налогом;</p>

<p><strong>ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</strong></p>

<p>10. &nbsp; При обнаружении недобросовестного поведения участника игры Организатор акции оставляет за собой право удалить участника игры из игры без предварительного уведомления.</p>

<p>11. Все споры, возникающие в связи с игрой, разрешаются путем переговоров. Если в ходе переговоров не удается достичь соглашения, споры разрешаются в литовском суде в соответствии с процедурой, установленной законодательством Литовской Республики, в соответствии с местонахождением зарегистрированного офиса Организатора акции.</p>

<p>12. Организатор акции имеет право в одностороннем порядке прекратить игру и отменить призы в связи с обстоятельствами непреодолимой силы (форс-мажор) сразу же после того, как участники будут публично проинформированы о прекращении игры.</p>

<p>13. Организатор акции имеет право в одностороннем порядке изменять или дополнять настоящие Правила игры без предварительного уведомления, информируя об этом участников игры на странице https://pigu.lt/ru/lt/t/zaidimo-taisykles-jump.</p>

<p>14. Организатор акции обязуется обеспечивать безопасность переданных ему персональных данных и не передавать их третьим лицам, за исключением случаев, когда предоставление таких данных необходимо в соответствии с требованиями законодательных актов.</p>

<p>15. Вы можете ограничить обработку своих персональных данных и/или осуществить свои права субъекта данных следующими способами:</p>

<ul>
	<li>связавшись с нами по электронной почте: duomenuapsauga@pigu.lt;</li>
	<li>связавшись с нами по телефону: +370 52073998.</li>
</ul>

<p>К обработке персональных данных, связанных с игрой, применяются положения Политики конфиденциальности, с которой вы можете ознакомиться по адресу<a href="https://www.google.com/url?q=https://pigu.lt/ru/lt/t/privatumo-politika&amp;sa=D&amp;source=editors&amp;ust=1731608554338801&amp;usg=AOvVaw3jd7KZuhrBY-GKsGTIsf7y">&nbsp;</a>https://pigu.lt/ru/lt/t/privatumo-politika.</p>

<p>Мы ценим ваше мнение и предложения! Ждем их на электронный адрес&nbsp;<a href="mailto:rinkodara@pigu.lt">rinkodara@pigu.lt</a>.</p></div>`
        : (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee') &&
          this.language === 'RU'
        ? `<div><p><strong>ОБЩИЕ ПОЛОЖЕНИЯ</strong></p>

<p>1. &nbsp; &nbsp; &nbsp;Настоящие правила игры (далее — Правила игры) устанавливают порядок организации игры&nbsp;DLB Trading OÜ&nbsp;(код компании&nbsp;11791329, юридический адрес Peterburi tee 2F, 11415 Таллинн, Эстония) (далее — Организатор акции), призы игры и их доставку, разрешение споров и другие процедуры.</p>

<p>2. &nbsp; &nbsp; &nbsp;Период проведения игры: 15 ноября 2024 г. - 22 декабря 2024 г. (включительно).</p>

<p>3. &nbsp; &nbsp; &nbsp;Участник игры должен быть зарегистрированным участником&nbsp;Kaup24.ee&nbsp;и согласиться получать новости игры и информацию о призах.</p>

<p>4. &nbsp; &nbsp; &nbsp;Игра проводится в мобильном приложении&nbsp;Kaup24.ee.&nbsp;Во время игры участник управляет героем игры, цель которого — прыгать по платформам, чтобы прыгнуть как можно выше, не упав. Платформы могут ломаться. Каждая пройденная платформа дает очки. Чтобы улучшить результат, участник игры может повторить игру.</p>

<p><strong>ИГРОВЫЕ ПРИЗЫ И ПОРЯДОК ИХ ДОСТАВКИ</strong></p>

<p>5. &nbsp; Игровые призы состоят из:</p>

<p>5.1. Скидочные коды для покупок в приложении<a href="https://www.google.com/url?q=http://220.lv&amp;sa=D&amp;source=editors&amp;ust=1731660373684228&amp;usg=AOvVaw3X-rIIzt7SzODD9NwZ4hHy">&nbsp;</a>kaup24.ee, действующие только в день выигрыша до полуночи с дополнительными условиями, отображаются в игровом окне.</p>

<p>5.2. десять подарочных карт на сумму 20 евро, которые выиграют 10 участников игры, набравших наибольшее количество очков каждую неделю.</p>

<p>6. &nbsp; Kаждый день игроки, набравшие более 1500 очков, получают скидочный код.</p>

<p>7. &nbsp; Каждую неделю десять участников игры, набравших наибольшее количество очков, будут выигрывать подарочных карт на сумму 20 евро.</p>

<p>8. &nbsp; Порядок информирования об игровом призе и его доставке:</p>

<p>8.1. &nbsp;участник игры информируется об игровом призе, указанном в пункте 5.1 Правил игры, в окне результатов сразу после выигрыша в игре.</p>

<p>8.2. участник игры информируется об игровом призе, указанном в пункте 5.2 Правил игры, по предоставленному им адресу электронной почты. Информация о выигрыше в игре за предыдущую неделю отправляется по понедельникам в следующие даты: 25 ноября 2024 г., 2 декабря 2024 г., 9 декабря 2024 г., 16 декабря 2024 г., 23 декабря 2024 г.</p>

<p>9. &nbsp; &nbsp; &nbsp;Условия использования подарочных карт игры:</p>

<p>9.1. подарочная карта действительна в течение 1 недели с даты его отправки;</p>

<p>9.2. подарочная карта возврату не подлежит и не может быть обмененa на наличные;</p>

<p>9.3. если сумма заказа, оплачиваемого с помощью подарочной карты, превышает стоимость подарочной карты, недостающую сумму можно оплатить, выбрав один из способов оплаты, предлагаемых&nbsp;Kaup24.ee;</p>

<p>9.4. подарочная карта может быть применен только к одному заказу. Если сумма заказа, оплачиваемого с помощью подарочной карты, меньше стоимости подарочной карты, образовавшаяся разница возврату не подлежит;</p>

<p>9.5. Подарочные карты не могут быть использованы плательщиками PVN для оплаты товаров, облагаемых обратным налогом;</p>

<p><strong>ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</strong></p>

<p>10. &nbsp; При обнаружении недобросовестного поведения участника игры Организатор акции оставляет за собой право удалить участника игры из игры без предварительного уведомления.</p>

<p>11. Все споры, возникающие в связи с игрой, разрешаются путем переговоров. Если в ходе переговоров не удается достичь соглашения, споры разрешаются в эстонском суде в соответствии с процедурой, установленной законодательством Эстонской республики, в соответствии с местонахождением зарегистрированного офиса Организатора акции.</p>

<p>12. Организатор акции имеет право в одностороннем порядке прекратить игру и отменить призы в связи с обстоятельствами непреодолимой силы (форс-мажор) сразу же после того, как участники будут публично проинформированы о прекращении игры.</p>

<p>13. Организатор акции имеет право в одностороннем порядке изменять или дополнять настоящие Правила игры без предварительного уведомления, информируя об этом участников игры на странице<a href="https://www.google.com/url?q=https://pigu.lt/lt/t/zaidimo-taisykles&amp;sa=D&amp;source=editors&amp;ust=1731660373685390&amp;usg=AOvVaw23DTsxh1gr0USMOg46ax-I">&nbsp;</a>https://kaup24.ee/ru/t/game-rules-jump.</p>

<p>14. Организатор акции обязуется обеспечивать безопасность переданных ему персональных данных и не передавать их третьим лицам, за исключением случаев, когда предоставление таких данных необходимо в соответствии с требованиями законодательных актов.</p>

<p>15. Вы можете ограничить обработку своих персональных данных и/или осуществить свои права субъекта данных следующими способами:</p>

<ul>
<li>связавшись с нами по электронной почте:&nbsp;<a href="mailto:andmekaitse@kaup24.ee">andmekaitse@kaup24.ee</a>;</li>
<li>связавшись с нами по телефону:&nbsp;+372 6 468 107.</li>
</ul>

<p>К обработке персональных данных, связанных с игрой, применяются положения Политики конфиденциальности, с которой вы можете ознакомиться по адресу&nbsp;https://kaup24.ee/ru/t/konfidencialnos.</p>

<p>Мы ценим ваше мнение и предложения! Ждем их на электронный адрес&nbsp;<a href="mailto:pood@kaup24.ee">pood@kaup24.ee</a>.</p></div>`
        : this.campaignUrlProp === 'https://hobbyhall.fi' && this.language === 'FI'
        ? `<div><p><strong>YLEISET&nbsp;MÄÄRÄYKSET</strong></p>

<p>1.&nbsp;Nämä pelisäännöt (jäljempänä "pelisäännöt") määrittelevät&nbsp;Hobby Hall Suomi Oy&nbsp;(jäljempänä "kampanjan järjestäjä") järjestämän pelin järjestämismenettelyjä, pelin palkintoja ja niiden toimitusta, riitojen ratkaisua ja muita menettelyjä.</p>

<p>2. Pelijakso: 15.11. - 22.12.2024.</p>

<p>3. Pelin osallistujan on oltava rekisteröitynyt Hobbyhall.fi-verkkokauppaan ja hänen on oltava hyväksynyt pelin tietojen ja palkintotietojen vastaanotto.</p>

<p>4. Peliä pelataan Hobbyhall.fi-mobiilisovelluksessa. Pelin aikana pelaaja ohjaa pelin sankaria, jonka tavoitteena on hypätä alustoille päästäkseen mahdollisimman korkealle putoamatta. Alustat voivat rikkoutua. Jokainen hypätty alusta antaa pisteitä. Tuloksen parantamiseksi pelaaja voi pelata pelin uudelleen.</p>

<p><strong>PELIN PALKINNOT JA NIIDEN TOIMITUSMENETTELY</strong></p>

<p>5.&nbsp;Pelipalkinnot koostuvat seuraavista:</p>

<p>&nbsp; &nbsp;5.1.&nbsp;Joka päivä, pelin osallistujat jotka saavat yli 1500 pistettä saavat alekoodin. Koodin voi käyttää Hobbyhall.fi-sovelluksessa ja se on voimassa vain voittopäivänä 23:59 asti. Ehdot näkyvät pelin ruudulla.</p>

<p>&nbsp; &nbsp;5.2. Viikoittain kymmenen eniten pisteitä saanutta osallistujaa voittaa 20€:n lahjakortin.</p>

<p>6. Pelipalkinnosta ja sen toimittamisesta tiedottaminen:</p>

<p>&nbsp; &nbsp;6.1. Pelin osallistujalle ilmoitetaan pelisääntöjen kohdassa 5.1 määritellystä pelipalkinnosta tulosikkunassa heti pelin päättymisen jälkeen.</p>

<p>&nbsp; &nbsp;6.2. Pelisääntöjen kohdassa 5.2 määritellystä pelipalkinnosta ilmoitetaan pelin osallistujalle hänen ilmoittamaansa sähköpostiosoitteeseen. Tiedot edellisen viikon pelin voittamisesta lähetetään maanantaisin seuraavina päivinä: 25.11.2024, 2.12.2024, 9.12.2024, 16.12.2024, 23.12.2024.</p>

<p>7. Pelissä voitettujen lahjakorttien käyttöehdot:</p>

<p>&nbsp; &nbsp;7.1. lahjakortti on voimassa yhden viikon sen lähettämispäivästä;</p>

<p>&nbsp; &nbsp;7.2. lahjakorttia ei voi palauttaa eikä vaihtaa rahaksi;</p>

<p>&nbsp; &nbsp;7.3. jos tilauksen, joka maksetaan lahjakorttia käyttämällä, summa ylittää lahjakortin arvon, puuttuvan summan voi maksaa valitsemalla jonkin muun Hobbyhall.fi-verkkokaupan tarjoamista maksutavoista;</p>

<p>&nbsp; &nbsp;7.4. lahjakorttikoodia voi käyttää vain yhteen tilaukseen. Jos tilauksen, joka maksetaan lahjakorttia käyttämällä, summa on pienempi kuin lahjakortin arvo, erotusta ei palauteta;</p>

<p>&nbsp;&nbsp;&nbsp;7.5. Lahjakorttia eivät voi käyttää arvonlisäverovelvolliset (luonnolliset henkilöt ja oikeushenkilöt, lukuun ottamatta julkisia organisaatioita ja laitoksia), kun maksetaan tuotteita, joihin sovelletaan käännettyä arvonlisäverovelvollisuutta;</p>

<p><strong>LOPPUMÄÄRÄYKSET</strong></p>

<p>8. Kampanjan järjestäjä pidättää oikeuden poistaa pelin osallistuja pelistä ilman ennakkoilmoitusta, jos havaitaan&nbsp;epärehellistä toimintaa.</p>

<p>9. Kaikki pelistä johtuvat riidat ratkaistaan neuvottelemalla. Jos neuvotteluissa ei päästä sopimukseen, riidat ratkaistaan Suomen tuomioistuimessa Suomen tasavallan lakien mukaisesti kampanjan järjestäjän rekisteröidyn toimipaikan sijainnin mukaan.</p>

<p>10. Kampanjan järjestäjällä on oikeus yksipuolisesti lopettaa peli ja peruuttaa palkinnot force majeure&nbsp;-olosuhteiden vuoksi välittömästi sen jälkeen, kun osallistujille on ilmoitettu julkisesti pelin päättymisestä.</p>

<p>11. Kampanjan järjestäjällä on oikeus yksipuolisesti muuttaa tai täydentää näitä pelisääntöjä ilman ennakkoilmoitusta ilmoittamalla siitä pelin osallistujille osoitteessa&nbsp;https://hobbyhall.fi/fi/t/game-rules-jump&nbsp;</p>

<p>12. Kampanjan järjestäjä sitoutuu varmistamaan sille siirrettyjen henkilötietojen turvallisuuden eikä luovuta niitä kolmansille osapuolille, paitsi jos kyseisten tietojen toimittaminen on tarpeen lakisääteisten vaatimusten mukaisesti.</p>

<p>13. Voit rajoittaa henkilötietojesi käsittelyä ja/tai käyttää oikeuksiasi rekisteröitynä seuraavasti:</p>

<ul>
<li>ottamalla meihin yhteyttä sähköpostitse:&nbsp;asiakaspalvelu@hobbyhall.fi</li>
<li>ottamalla meihin yhteyttä puhelimitse:&nbsp;09 8566 8000.</li>
</ul>
<p>Peliin liittyvien henkilötietojen käsittelyyn sovelletaan tietosuojakäytännön määräyksiä, jotka löytyvät osoitteesta https://hobbyhall.fi/fi/t/privacy-policy.</p></div>`
        : (this.campaignUrlProp === 'https://kaup.ee' ||
            this.campaignUrlProp === 'https://kaup24.ee') &&
          this.language === 'EN'
        ? `<div>
    <p><strong>GENERAL PROVISIONS</strong></p>
    <p>1. These game rules (hereinafter referred to as the Game Rules) establish the procedures for organizing the game by DLB Trading OÜ (company code 11791329, registered address Peterburi tee 2F, 11415 Tallinn, Eesti) (hereinafter referred to as the Promotion Organizer), the game prizes and their delivery, dispute resolution and other procedures.</p>
    <p>2. Game period: November 15, 2024 - December 22, 2024 (inclusive).</p>
    <p>3. The game participant must be a registered Kaup24.ee member and have agreed to receive game news and information about prizes.</p>
    <p>4. The game is played on the Kaup24.ee mobile app. During the game, the game participant controls the game hero, whose goal is to jump on platforms to jump as high as possible without falling. Platforms can break. Each platform jumped on gives points. To improve the result, the game participant can repeat the game.</p>

    <p><strong>GAME PRIZES AND THEIR DELIVERY PROCEDURE</strong></p>
    <p>5. Game prizes consist of:</p>
    <p>5.1. Discount codes, when shopping in the Kaup24.ee app, which are valid only on the day of winning until midnight with additional conditions shown in the game window.</p>
    <p>5.2. Ten gift vouchers worth 20€, which are won by the 10 game participants who have scored the most points each week.</p>
    <p>6. Every day, game participants who score more than 1500 points receive a discount code.</p>
    <p>7. Every week, the ten game participants who score the most points will win gift vouchers worth 20€.</p>
    <p>8. The procedure for informing about the game prize and its delivery:</p>
    <p>8.1. The game participant is informed about the game prize specified in clause 5.1 of the Game Rules in the results window, immediately after winning the game.</p>
    <p>8.2. The game participant is informed about the game prize specified in clause 5.2 of the Game Rules at the e-mail address provided by them. Information about winning the previous week's game is sent on Mondays, on the following dates: November 25, 2024, December 2, 2024, December 9, 2024, December 16, 2024, December 23, 2024.</p>
    <p>9. Terms of use of game gift vouchers:</p>
    <p>9.1. The gift voucher is valid for 1 week from the date of its dispatch.</p>
    <p>9.2. The gift voucher is non-refundable and cannot be exchanged for cash.</p>
    <p>9.3. If the amount of the order for which payment is made by applying the gift voucher exceeds the value of the gift voucher, the missing amount can be paid by choosing one of the payment methods offered by Kaup24.ee.</p>
    <p>9.4. The gift voucher code can only be applied to one order. If the amount of the order for which payment is made by applying the gift voucher is less than the value of the gift voucher, the resulting difference is non-refundable.</p>
    <p>9.5. The gift voucher is not valid for VAT payers - natural and legal persons (except for budgetary institutions), when trying to pay for goods subject to reverse VAT taxation.</p>

    <p><strong>FINAL PROVISIONS</strong></p>
    <p>10. Upon detecting unfair behavior of the game participant, the Promotion Organizer reserves the right to remove the game participant from the game without prior notice.</p>
    <p>11. All disputes arising from the game shall be resolved through negotiation. If no agreement can be reached through negotiations, disputes shall be resolved in an Estonian court in accordance with the procedure established by the laws of the Republic of Estonia according to the location of the Promotion Organizer's registered office.</p>
    <p>12. The Promotion Organizer has the right to unilaterally terminate the game and cancel the prizes due to force majeure circumstances immediately after the participants are informed about the termination of the game publicly.</p>
    <p>13. The Promotion Organizer has the right to unilaterally change or supplement these Game Rules without prior notice, informing the game participants about it on the <a href="https://kaup24.ee/et/t/game-rules-jump" target="_blank">https://kaup24.ee/et/t/game-rules-jump</a> page.</p>
    <p>14. The Promotion Organizer undertakes to ensure the security of personal data transferred to it and not to transfer it to third parties, except in cases where the provision of such data is necessary in accordance with the requirements of legal acts.</p>
    <p>15. You can limit the processing of your personal data and/or exercise your rights as a data subject in the following ways:</p>
    <ul>
        <li>By contacting us by e-mail: <a href="mailto:andmekaitse@kaup24.ee" target="_blank">andmekaitse@kaup24.ee</a>.</li>
        <li>By contacting us by phone: +372 6 468 107.</li>
    </ul>
    <p>The provisions of the Privacy Policy, which you can find at <a href="https://kaup24.ee/et/t/privaatsuspoliitika" target="_blank">https://kaup24.ee/et/t/privaatsuspoliitika</a>, apply to the processing of personal data related to the game.</p>
    <p>We value your opinion and suggestions! We will be waiting for them at the e-mail address <a href="mailto:pood@kaup24.ee" target="_blank">pood@kaup24.ee</a>.</p>
</div>

`
        : this.campaignUrlProp === 'https://hobbyhall.fi' &&
          this.language === 'EN' &&
          `<div>
    <p><strong>GENERAL PROVISIONS</strong></p>
    <p>1. These game rules (hereinafter referred to as the Game Rules) establish the procedures for organizing the game by Hobby Hall Suomi Oy (hereinafter referred to as the Promotion Organizer), the game prizes and their delivery, dispute resolution, and other procedures.</p>
    <p>2. Game period: November 15, 2024 - December 22, 2024 (inclusive).</p>
    <p>3. The game participant must be a registered Hobbyhall.fi member and have agreed to receive game news and information about prizes.</p>
    <p>4. The game is played on the Hobbyhall.fi mobile app. During the game, the game participant controls the game hero, whose goal is to jump on platforms to jump as high as possible without falling. Platforms can break. Each platform jumped on gives points. To improve the result, the game participant can repeat the game.</p>

    <p><strong>GAME PRIZES AND THEIR DELIVERY PROCEDURE</strong></p>
    <p>5. Game prizes consist of:</p>
    <p>5.1. Discount codes, when shopping in the Hobbyhall.fi app, which are valid only on the day of winning until midnight with additional conditions shown in the game window.</p>
    <p>5.2. Ten gift vouchers worth 20€, which are won by the 10 game participants who have scored the most points each week.</p>
    <p>6. Every day, game participants who score more than 1500 points receive a discount code.</p>
    <p>7. Every week, the ten game participants who score the most points will win gift vouchers worth 20€.</p>
    <p>8. The procedure for informing about the game prize and its delivery:</p>
    <p>8.1. The game participant is informed about the game prize specified in clause 5.1 of the Game Rules in the results window, immediately after winning the game.</p>
    <p>8.2. The game participant is informed about the game prize specified in clause 5.2 of the Game Rules at the e-mail address provided by them. Information about winning the previous week's game is sent on Mondays, on the following dates: November 25, 2024, December 2, 2024, December 9, 2024, December 16, 2024, December 23, 2024.</p>
    <p>9. Terms of use of game gift vouchers:</p>
    <p>9.1. The gift voucher is valid for 1 week from the date of its dispatch.</p>
    <p>9.2. The gift voucher is non-refundable and cannot be exchanged for cash.</p>
    <p>9.3. If the amount of the order for which payment is made by applying the gift voucher exceeds the value of the gift voucher, the missing amount can be paid by choosing one of the payment methods offered by Hobbyhall.fi.</p>
    <p>9.4. The gift voucher code can only be applied to one order. If the amount of the order for which payment is made by applying the gift voucher is less than the value of the gift voucher, the resulting difference is non-refundable.</p>
    <p>9.5. The gift voucher is not valid for VAT payers - natural and legal persons (except for budgetary institutions), when trying to pay for goods subject to reverse VAT taxation.</p>

    <p><strong>FINAL PROVISIONS</strong></p>
    <p>10. Upon detecting unfair behavior of the game participant, the Promotion Organizer reserves the right to remove the game participant from the game without prior notice.</p>
    <p>11. All disputes arising from the game shall be resolved through negotiation. If no agreement can be reached through negotiations, disputes shall be resolved in a Finnish court in accordance with the procedure established by the laws of the Republic of Finland according to the location of the Promotion Organizer's registered office.</p>
    <p>12. The Promotion Organizer has the right to unilaterally terminate the game and cancel the prizes due to force majeure circumstances immediately after the participants are informed about the termination of the game publicly.</p>
    <p>13. The Promotion Organizer has the right to unilaterally change or supplement these Game Rules without prior notice, informing the game participants about it on the <a href="https://hobbyhall.fi/fi/t/game-rules-jump" target="_blank">https://hobbyhall.fi/fi/t/game-rules-jump</a> page.</p>
    <p>14. The Promotion Organizer undertakes to ensure the security of personal data transferred to it and not to transfer it to third parties, except in cases where the provision of such data is necessary in accordance with the requirements of legal acts.</p>
    <p>15. You can limit the processing of your personal data and/or exercise your rights as a data subject in the following ways:</p>
    <ul>
        <li>By contacting us by e-mail: <a href="mailto:asiakaspalvelu@hobbyhall.fi" target="_blank">asiakaspalvelu@hobbyhall.fi</a>.</li>
        <li>By contacting us by phone: 09 8566 8000.</li>
    </ul>
    <p>The provisions of the Privacy Policy, which you can find at <a href="https://hobbyhall.fi/fi/t/privacy-policy" target="_blank">https://hobbyhall.fi/fi/t/privacy-policy</a>, apply to the processing of personal data related to the game.</p>
</div>
`;
    const containerDiv = document.querySelector('.rules-table-container');
    containerDiv.innerHTML += `
              </div>
              <div id="close-rules-container" style="display:block;width: 100%; display:flex;justify-content:end;align-items:end;margin-top:10px">
<img src=${close} alt="Image Description" style="width:32px;height:32px;margin-right:10px;"></img>
</div>
<div class="boomio-custom-scrollbar-rules" style="overflow-x:hidden;overflow-y: scroll;height: calc(100% - 20px);text-align:left;padding-left:10px;font-size:10px;line-height:14px;min-width:320px;">
  ${content}
</div>
              </div>
    `;

    this.containerDiv = containerDiv;
    const closeBtn = document.getElementById('close-rules-container');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        const rulesTableContainer = document.getElementById('rules-table-container');

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
    }
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
      };
    }
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('rules-table-container');
    containerDiv.setAttribute('id', 'rules-table-container');
    containerDiv.style.background = '#DDDDDD';
    containerDiv.style.borderRadius = '10px';
    containerDiv.style.paddingBottom = '20px';

    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '315px'
          : document.body.offsetWidth - 60 + 'px'
        : '366px';
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
