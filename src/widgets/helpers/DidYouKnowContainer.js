import './styles.css';
import { localStorageService } from '@/services';
import {
  boomioLogo,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item1Paper,
  item2Paper,
  item3Paper,
  item4Paper,
  item5Paper,
  item6Paper,
  item7Paper,
  item8Paper,
  item9Paper,
  item10Paper,
  item11Paper,
  item12Paper,
  item13Paper,
  item14Paper,
  item15Paper,
  item16Paper,
  item17Paper,
  item18Paper,
  item19Paper,
  item20Paper,
  item21Paper,
  item22Paper,
  item23Paper,
  item1Glass,
  item2Glass,
  item3Glass,
  item4Glass,
  item5Glass,
  item6Glass,
  item7Glass,
  item8Glass,
  item9Glass,
  item10Glass,
  item11Glass,
  item12Glass,
  item13Glass,
  item14Glass,
  item15Glass,
  item16Glass,
  item17Glass,
  item18Glass,
  item19Glass,
  item20Glass,
  item21Glass,
  item22Glass,
  item23Glass,
  item1PienoZvaigzdes,
  item2PienoZvaigzdes,
  item5PienoZvaigzdes,
  item7PienoZvaigzdes,
  item8PienoZvaigzdes,
  item15PienoZvaigzdes,
  item1pegasas,
  item2pegasas,
  item3pegasas,
  item4pegasas,
  item5pegasas,
  item6pegasas,
  item7pegasas,
  item8pegasas,
  item9pegasas,
  item10pegasas,
  item11pegasas,
  item12pegasas,
  item1Pigu,
  item2Pigu,
  item3Pigu,
  item4Pigu,
  item5Pigu,
  item6Pigu,
  item7Pigu,
  item8Pigu,
  item9Pigu,
  item10Pigu,
  item11Pigu,
  item12Pigu,
  item13Pigu,
  item14Pigu,
  item15Pigu,
  item16Pigu,
  item17Pigu,
  item18Pigu,
  item19Pigu,
  item20Pigu,
  item21Pigu,
  item22Pigu,
  item23Pigu,
  item24Pigu,
  item25Pigu,
  item26Pigu,
  item27Pigu,
  item28Pigu,
  item29Pigu,
  item30Pigu,
  item31Pigu,
  item32Pigu,
  item33Pigu,
  item34Pigu,
  item35Pigu,
  item36Pigu,
  item37Pigu,
  item38Pigu,
  item39Pigu,
  item40Pigu,
  item41Pigu,
  item42Pigu,
  item43Pigu,
  item44Pigu,
  item45Pigu,
  closeDidYouKnow,
} from './constants';

export class DidYouKnowContainer {
  constructor(prop) {
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'LV';
    const currentPageUrl = window.location.href;
    this.isSmallMobile = window.innerWidth <= 380;

    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');
    this.isMobileWidthSmall = window.innerWidth <= 400;

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;
    this.prop = prop;

    if (this.prop === 'Pigu.lt') {
      this.collectables = [
        item1Pigu,
        item2Pigu,
        item3Pigu,
        item4Pigu,
        item5Pigu,
        item6Pigu,
        item7Pigu,
        item8Pigu,
        item9Pigu,
        item10Pigu,
        item11Pigu,
        item12Pigu,
        item13Pigu,
        item14Pigu,
        item15Pigu,
        item16Pigu,
        item17Pigu,
        item18Pigu,
        item19Pigu,
        item20Pigu,
        item21Pigu,
        item22Pigu,
        item23Pigu,
        item24Pigu,
        item25Pigu,
        item26Pigu,
        item27Pigu,
        item28Pigu,
        item29Pigu,
        item30Pigu,
        item31Pigu,
        item32Pigu,
        item33Pigu,
        item34Pigu,
        item35Pigu,
        item36Pigu,
        item37Pigu,
        item38Pigu,
        item39Pigu,
        item40Pigu,
        item41Pigu,
        item42Pigu,
        item43Pigu,
        item44Pigu,
        item45Pigu,
      ];
    } else if (this.prop && this.prop.includes('Plastic')) {
      this.collectables = [
        item16,
        item4,
        item14,
        item1,
        item23,
        item20,
        item10,
        item8,
        item6,
        item12,
        item19,
        item7,
      ];
    } else if (this.prop && this.prop.includes('Paper')) {
      // Handle Paper collectables
      this.collectables = [
        item16Paper,
        item4Paper,
        item14Paper,
        item1Paper,
        item23Paper,
        item20Paper,
        item10Paper,
        item8Paper,
        item6Paper,
        item12Paper,
        item19Paper,
        item7Paper,
      ];
    } else if (this.prop && this.prop.includes('Glass')) {
      // Handle Glass collectables
      this.collectables = [
        item16Glass,
        item4Glass,
        item14Glass,
        item1Glass,
        item23Glass,
        item20Glass,
        item10Glass,
        item8Glass,
        item6Glass,
        item12Glass,
        item19Glass,
        item7Glass,
      ];
    } else if (this.prop === 'Pieno Žvaigždės') {
      // Handle Glass collectables
      this.collectables = [
        item15PienoZvaigzdes,
        item1PienoZvaigzdes,
        item8PienoZvaigzdes,
        item2PienoZvaigzdes,
        item7PienoZvaigzdes,
        item5PienoZvaigzdes,
      ];
    } else if (this.prop === 'Pegasas') {
      // Handle Glass collectables
      this.collectables = [
        item1pegasas,
        item2pegasas,
        item3pegasas,
        item4pegasas,
        item5pegasas,
        item6pegasas,
        item7pegasas,
        item8pegasas,
        item9pegasas,
        item10pegasas,
        item11pegasas,
        item12pegasas,
      ];
    }
    this.collectablesLinks = [];
    if (this.campaignUrlProp === 'https://pigu.lt' && this.language === 'RU') {
      this.collectablesLinks = [
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/namu-technika/dulkiu-siurbliai-robotai/dulkiu-siurblys-robotas-xiaomi-x20-plus?id=84561160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Робот-пылесос Xiaomi X20 Plus, С функцией влажной уборки, Автоматическая очистка',
        },
        {
          url: 'https://pigu.lt/lt/plansetiniai-kompiuteriai/plansetes-tablets/plansetinis-kompiuteris-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=78014478&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Планшет Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://pigu.lt/lt/televizoriai/televizorius-samsung-qe43q60dauxxh?id=81244960&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Samsung QE43Q60DAUXXH, 43" (~109 см)',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-elektronika/virtuves-iranga/kavos-aparatai/delonghi-magnifica-evo-ecam29081tb?id=55534704&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Автоматическая kофемашина Delonghi Magnifica Evo ECAM290.81.TB, С автоматическим взбиванием молока',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-elektronika/virtuves-iranga/gruzdintuves/xiaomi-mi-smart-air-fryer-65l-white?id=77539884&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Аэрофритюрница Xiaomi Mi Smart',
        },
        {
          url: 'https://pigu.lt/lt/mobilieji-telefonai-foto-ir-video/ismanieji-laikrodziai-ir-ismaniosios-apyrankes/ismanieji-laikrodziai-smartwatch/ismanusis-laikrodis-xiaomi-redmi-watch-5-active-midnight-black?id=92219210&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Смарт-часы Xiaomi Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://pigu.lt/lt/zaidimu-konsoles-kompiuteriai-xbox-sony-playstation-nintendo/zaidimu-konsole-sony-playstation-5-pro-hdmi-wi-fi?id=96696758&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Игровая приставка Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://pigu.lt/lt/televizoriai/televizorius-xiaomi-qled-tv-a-pro-2025-55?id=84030915&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Xiaomi QLED TV A Pro 2025 55", 55" (~140 см)',
        },
        {
          url: 'https://pigu.lt/lt/namu-remontas/irankiai/mechaniniai-irankiai/irankiu-rinkinys-fieldmann-fdg-5005-85r-85?id=5783159&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Набор различных инструментов Fieldmann FDG 5005-85R, 85 частей',
        },
        {
          url: 'https://pigu.lt/lt/priemones-nuo-plauku-slinkimo-stiprinimui/kauke-molekuliniam-plauku-atstatymui-k18-50-ml?id=49066209&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Несмываемая маска для молекулярного восстановления волос K18 Peptide™ Mask, 50 мл',
        },
        {
          url: 'https://pigu.lt/lt/grozis-ir-mada/kosmetika/plauku-prieziurai/sampunai/sampunas-k18-peptide-prep-detox-250ml?id=59510573&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Shampoo K18 Peptide Prep Detox Shampoo, 250 ml',
        },
        {
          url: 'https://pigu.lt/lt/kvepalai-pigiau/kvepalai-moterims/kvapusis-vanduo-tiziana-terenzi-kirke-edp-moterimsvyrams?id=20287680&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Tiziana Terenzi Kirke EDP для женщин/мужчин 100 мл',
        },
        {
          url: 'https://pigu.lt/lt/kvepalai-pigiau/kvepalai-vyrams/kvapusis-vanduo-afnan-9-pm-edp-vyrams?id=57278163&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Afnan 9 PM EDP для мужчин 100 мл, 100 мл',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/namu-technika/dulkiu-siurbliai-sluotos/dulkiu-siurblys-sluota-dyson-v15s-detect-submarine?id=77534559&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Пылесос - метла Dyson V15s Detect Submarine',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/smulki-technika/dantu-sepeteliai/dantu-sepetelis-oral-b-io9-black-special-edition?id=92346851&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/smulki-technika/plaukams/plauku-tiesinimo-prietaisai/dyson-airstrait-ht01?id=81137400&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Утюжок для волос Dyson Airstrait HT01',
        },
        {
          url: 'https://pigu.lt/lt/lovos/lova-nore-nova-160x200-cm-melyna?id=86876515&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кровать Nore Nova, 160x200 см, синяя',
        },
        {
          url: 'https://pigu.lt/lt/kosmetika-kunui/kremai-ir-losjonai-kunui/kuno-kremas-elizabeth-arden-green-tea-honey?id=3818072&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Крем для тела Elizabeth Arden Green Tea Honey Drops, 500 мл',
        },
        {
          url: 'https://pigu.lt/lt/kudikiams-ir-vaikams/zaislai/konstruktoriai-ir-kaladeles/42169-lego-technic-neom-mclaren-formula-e?id=80634900&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-ir-zaidimai-vaikams/zaislai-berniukams/virtualus-augintinis-holograma-spin-master-bitzee-magicals?id=90440246&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Виртуальный питомец-голограмма Spin Master Bitzee Magicals',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-vaikams-iki-3-metu/lavinimo-kilimeliai/lavinamasis-kilimelis-kinderkraft-smartplay-sea?id=64185678&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Развивающий коврик 2в1 Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/kudikio-prieziura/loveles-maniezai-vaikams/lovyte-lionelo-leonie-3-in-1-greystone?id=36626886&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кроватка Lionelo Leonie 3 in 1 , Grey/Stone',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-vaikams-iki-3-metu/lavinimo-kilimeliai/delione-kilimelis-kinderkraft-luno-30-daliu-geltona?id=28234534&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Коврик-пазл Kinderkraft Luno, 30 частей, желтый-серый',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/kudikiu-prekes/maitinimo-kedutes/maitinimo-kedute-lionelo-maya-white?id=37301113&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Стульчик для кормления Lionelo Maya, White',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-su-naturalia-vilna?id=24301160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-furry-juodi?id=44791583&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/ziemos-drabuziai-vaikams/huppa-ziemine-striuke-mergaitems-mona-2-300?id=56898928&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/avalyne-vyrams/vyriski-batai/aulinukai-vyrams-luhta-rudi?id=57438203&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Ботинки мужские Luhta, коричневые',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/nike-vyriska-ziemine-striuke-tf-club-puffer?id=71321561&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike vyriška žieminė striukė TF CLUB PUFFER JKT, juoda',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/aksesuarai-moterims/kepures/helly-hansen-kepure-snowfall-balta?id=73704371&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Шапка Helly Hansen SNOWFALL, белый цвет',
        },
        {
          url: 'https://pigu.lt/lt/apatinis-trikotazas-vyrams/vyriskos-kojines/calvin-klein-vyriskos-kojines-4-vnt-dovanu?id=84143020&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein vyriškos kojinės 4 vnt. dovanų dėžutėje, juodos ir baltos, 40/46',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/tom-tailor-vyriska-ziemine-striuke-tamsiai-melyna?id=84193355&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor vyriška žieminė striukė, tamsiai mėlyna',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/luhta-moteriskas-zieminis-paltas-iisalmi-tamsiai-melynas?id=84628545&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, темно-синий цвет',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/icepeak-moteriskas-zieminis-paltas-addia-juodas?id=85336055&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Icepeak ADDIA, черный цвет',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/avalyne-vyrams/vyriski-batai/helly-hansen-vyriski-batai-torshov-2-juodi?id=85467345&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen мужские ботинки TORSHOV 2, черные',
        },
        {
          url: 'https://pigu.lt/lt/slepetes-moterims/tom-tailor-moteriski-laisvalaikio-batai-konjako-rudos?id=91730395&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor женские повседневные ботинки, коньячно-коричневые',
        },
        {
          url: 'https://pigu.lt/lt/paltai-moterims/rinopelle-moteriskas-zieminis-paltas-nusa-naturalios-baltos?id=88241135&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle женское зимнее пальто NUSA, белого цвета',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/luhta-moteriskas-zieminis-paltas-iisalmi-ivairiu-spalvu?id=84628665&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, разных цветов',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-su-naturalia-vilna?id=24301160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/huppa-moteriska-ziemine-parka-su-naturaliu-kailiu?id=43275298&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa женская зимняя парка с натуральным мехом VIVIAN, черный 907143823',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/helly-hansen-moteriska-striuke-aden-juoda?id=44406588&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женская куртка Helly Hansen ADEN, черная',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-furry-juodi?id=44791583&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/ziemos-drabuziai-vaikams/huppa-ziemine-striuke-mergaitems-mona-2-300?id=56898928&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная',
        },
        {
          url: 'https://pigu.lt/lt/grozis-ir-mada/avalyne-moterims/aulinukai/luhta-moteriski-zieminiai-batai-tahtova-juodi?id=84628510&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женские зимние сапоги Luhta TAHTOVA, черный цвет',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/luhta-vyriska-ziemine-striuke-kallahti-juoda?id=84628615&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Куртка мужская зимняя Luhta KALLAHTI, черного цвета',
        },
      ];
    } else if (this.campaignUrlProp === 'https://220.lv' && this.language === 'RU') {
      this.collectablesLinks = [
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/saimniecibai/puteklu-suceji-roboti/robots-puteklu-sucejs-xiaomi-x20-plus?id=29760481&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Робот-пылесос Xiaomi X20 Plus, С функцией влажной уборки, Автоматическая очистка ',
        },
        {
          url: 'https://220.lv/lv/plansetdatori/plansetdatori/plansetdators-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=25947901&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Планшет Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE ',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/televizori-un-piederumi/televizori/televizors-samsung-qe43q60dauxxh?id=35298202&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Samsung QE43Q60DAUXXH, 43" (~109 см) ',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/maza-sadzives-tehnika-virtuvei/kafijas-automati/delonghi-magnifica-evo-ecam29081tb?id=15046011&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Автоматическая kофемашина Delonghi Magnifica Evo ECAM290.81.TB, С автоматическим взбиванием молока ',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/maza-sadzives-tehnika-virtuvei/taukvares-katli/xiaomi-smart-air-fryer-balts?id=26794246&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Аэрофритюрница Xiaomi Mi Smart ',
        },
        {
          url: 'https://220.lv/lv/mobilie-telefoni-plansetdatori-foto/viedpulksteni-un-viedas-aproces/viedpulksteni-smartwatch/viedpulkstenis-xiaomi-redmi-watch-5-active-midnight-black?id=35529252&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Смарт-часы Xiaomi Redmi Watch 5 Active Midnight Black ',
        },
        {
          url: 'https://220.lv/lv/datortehnika/spelu-konsoles/spelu-konsoles/spelu-konsole-sony-playstation-5-pro-hdmi-wi-fi?id=37855752&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Игровая приставка Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB ',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/televizori-un-piederumi/televizori/televizors-xiaomi-qled-tv-a-pro-2025-55?id=29434316&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Xiaomi QLED TV A Pro 2025 55", 55" (~140 см) ',
        },
        {
          url: 'https://220.lv/lv/majai-un-remontam/darbariki/instrumenti/instrumentu-komplekts-fieldmann-85-gab?id=1227029&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Набор различных инструментов Fieldmann FDG 5005-85R, 85 частей ',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/matu-kopsanai/matu-uzlabosanai/maska-molekularai-matu-atjaunosanai-k18-50-ml?id=14370327&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Несмываемая маска для молекулярного восстановления волос K18 Peptide™ Mask, 50 мл ',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/matu-kopsanai/sampuni/matu-sampuns-k18-peptide-prep-detox-250?id=16285785&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Shampoo K18 Peptide Prep Detox Shampoo, 250 ml ',
        },
        {
          url: 'https://220.lv/lv/smarzas/sieviesu-smarzas/parfimerijas-udens-tiziana-terenzi-kirke-edp-sievietemviriesiem?id=11478492&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Tiziana Terenzi Kirke EDP для женщин/мужчин 100 мл ',
        },
        {
          url: 'https://220.lv/lv/smarzas/viriesu_smarzas/parfimerijas-udens-afnan-9-pm-edp-viriesiem?id=20294167&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Afnan 9 PM EDP для мужчин 100 мл, 100 мл ',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/saimniecibai/puteklu-suceji-slotas/puteklu-sucejs-slota-dyson-v15s-detect-submarine?id=25668761&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Пылесос - метла Dyson V15s Detect Submarine ',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/skaistumam/zobu-birstes/oral-b-io9-black-special-edition?id=35577587&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition ',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/skaistumam/matu-ieveidotaji/dyson-airstrait-ht01?id=28405436&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Утюжок для волос Dyson Airstrait HT01 ',
        },
        {
          url: 'https://220.lv/lv/mebeles-un-interjers/gulamistabas-mebeles/gultas/gulta-nore-nova-160x200-cm-zila?id=36711707&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кровать Nore Nova, 160x200 см, синяя ',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/kermenim/kremi-un-losjoni/kermena-krems-elizabeth-arden-green-tea-honey?id=330766&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Крем для тела Elizabeth Arden Green Tea Honey Drops, 500 мл ',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/rotallietas-un-speles/konstruktori/42169-lego-technic-neom-mclaren-formula-e?id=28017941&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car ',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/rotallietas-zeniem-meitenem-zidainiem/rotallietas-zeniem/virtuala-majdzivnieka-hologramma-spin-master-bitzee-magicals?id=40421182&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Виртуальный питомец-голограмма Spin Master Bitzee Magicals ',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/rotallietas-un-speles/attistosie-paklajini/macibu-paklajins-kinderkraft-smartplay-sea?id=18815262&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Развивающий коврик 2в1 Kinderkraft Smartplay Sea ',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/mebeles-mazuliem/manezas/gultina-lionelo-leonie-3-in-1-greystone?id=8883075&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кроватка Lionelo Leonie 3 in 1 , Grey/Stone ',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/rotallietas-un-speles/attistosie-paklajini/puzle-paklajs-kinderkraft-luno-30-dalas-yellow?id=7247414&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Коврик-пазл Kinderkraft Luno, 30 частей, желтый-серый ',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/mebeles-mazuliem/barosanas-kresli/barosanas-kresls-lionelo-maya-white?id=8968044&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Стульчик для кормления Lionelo Maya, White ',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-ar-dabigo-vilnu?id=6072506&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые ',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-furry-melni?id=11235173&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные ',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/apgerbs-un-apavi-berniem/ziemas-apgerbs-berniem/huppa-ziemas-jaka-meitenem-mona-2-300?id=15731241&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apavi/kurpes/zabaki-viriesiem-luhta-bruni?id=16075266&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Ботинки мужские Luhta, коричневые ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/nike-viriesu-ziemas-virsjaka-tf-club-puffer?id=22240987&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike vīriešu ziemas virsjaka TF CLUB PUFFER JKT, melna',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/aksesuari-sievietem/sieviesu-cepures/helly-hansen-cepure-snowfall-balta?id=23900591&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Шапка Helly Hansen SNOWFALL, белый цвет ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apaksvela/zekes/calvin-klein-viriesu-zekes-4-pari-davanu?id=29572946&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein vīriešu zeķes, 4 pāri dāvanu kastītē, melnas un baltas, 40/46',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/tom-tailor-viriesu-ziemas-virsjaka-tumsi-zila?id=29719111&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor vīriešu ziemas virsjaka, tumši zila',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/luhta-sieviesu-ziemas-metelis-iisalmi-tumsi-zils?id=30020096&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, темно-синий цвет ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/icepeak-sieviesu-ziemas-metelis-addia-melns?id=30083431&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Icepeak ADDIA, черный цвет ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apavi/kurpes/helly-hansen-viriesu-apavi-torshov-2-melni?id=30140401&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen мужские ботинки TORSHOV 2, черные ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apavi/ieslucenes-cibas/tom-tailor-sieviesu-ikdienas-apavi-konjaka-bruni?id=35352752&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor женские повседневные ботинки, коньячно-коричневые ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/sieviesu-meteli/rinopelle-sieviesu-ziemas-metelis-nusa-dabiga-balta?id=33550547&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle женское зимнее пальто NUSA, белого цвета ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/luhta-sieviesu-ziemas-metelis-iisalmi-dazadu-krasu?id=30020011&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, разных цветов ',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-ar-dabigo-vilnu?id=6072506&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/huppa-sieviesu-ziemas-parka-ar-dabigo-kazokadu?id=10647914&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa женская зимняя парка с натуральным мехом VIVIAN, черный 907143823 ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/helly-hansen-jaka-sievietem-aden-melna?id=11124083&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женская куртка Helly Hansen ADEN, черная ',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-furry-melni?id=11235173&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные ',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/apgerbs-un-apavi-berniem/ziemas-apgerbs-berniem/huppa-ziemas-jaka-meitenem-mona-2-300?id=15731241&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apavi/zabaki-puszabaki/luhta-sieviesu-ziemas-zabaki-tahtova-melni?id=30020121&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женские зимние сапоги Luhta TAHTOVA, черный цвет ',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/luhta-viriesu-ziemas-virsjaka-kallahti-melna?id=30020046&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Куртка мужская зимняя Luhta KALLAHTI, черного цвета',
        },
      ];
    } else if (
      (this.campaignUrlProp === 'https://kaup.ee' ||
        this.campaignUrlProp === 'https://kaup24.ee') &&
      this.language === 'RU'
    ) {
      this.collectablesLinks = [
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/kodumasinad/robottolmuimejad/robottolmuimeja-xiaomi-x20-plus?id=23831348&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Робот-пылесос Xiaomi X20 Plus, С функцией влажной уборки, Автоматическая очистка',
        },
        {
          url: 'https://kaup24.ee/et/arvutid-ja-it-tehnika/tahvelarvutid-e-lugerid/tahvelarvutid/tahvelarvuti-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=20418318&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Планшет Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/telerid-ja-tarvikud/telerid/televiisor-samsung-qe43q60dauxxh?id=30279618&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Samsung QE43Q60DAUXXH, 43" (~109 см)',
        },
        {
          url: 'https://kaup24.ee/et/kohvimasinad/delonghi-magnifica-evo-ecam29081tb?id=11261292&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Автоматическая kофемашина Delonghi Magnifica Evo ECAM290.81.TB, С автоматическим взбиванием молока',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/vaike-koogitehnika/frituurid-kuumaohufrituurid/frituurid-xiaomi-mi-smart?id=20240698&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Аэрофритюрница Xiaomi Mi Smart',
        },
        {
          url: 'https://kaup24.ee/et/mobiiltelefonid-foto-videokaamerad/nutikellad-ja-nutivorud/nutikellad-smartwatch/nutikell-xiaomi-redmi-watch-5-active-midnight-black?id=30590228&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Смарт-часы Xiaomi Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://kaup24.ee/et/arvutid-ja-it-tehnika/mangukonsoolid-ja-tarvikud/mangukonsoolid/mangukonsool-sony-playstation-5-pro-hdmi-wi-fi?id=32859533&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Игровая приставка Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/telerid-ja-tarvikud/telerid/televiisor-xiaomi-qled-tv-a-pro-2025-55?id=23508913&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Телевизор Xiaomi QLED TV A Pro 2025 55", 55" (~140 см)',
        },
        {
          url: 'https://kaup24.ee/et/koduremont/tooriistad/kasitriistad/tooriistakomplekt-fieldmann-85-tk?id=280219&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Набор различных инструментов Fieldmann FDG 5005-85R, 85 частей',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/juuksehooldus/juuste-tugevdamiseks/mask-juuste-molekulaarseks-taastamiseks-k18-50-ml?id=10583221&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Несмываемая маска для молекулярного восстановления волос K18 Peptide™ Mask, 50 мл',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/juuksehooldus/sampoonid/sampoonid-sampoon-k18-peptide-prep-detox-shampoo-250?id=12199377&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Shampoo K18 Peptide Prep Detox Shampoo, 250 ml',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/parfuumid-ja-lohnad/naiste-lohnad/parfuum-tiziana-terenzi-kirke-edp-naistelemeestele-100?id=7585133&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Tiziana Terenzi Kirke EDP для женщин/мужчин 100 мл',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/parfuumid-ja-lohnad/meeste-lohnad/meeste-lohnad-ja-parfuumid-parfuum-afnan-9-pm-edp-meestele-100?id=15256184&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Парфюмированная вода Afnan 9 PM EDP для мужчин 100 мл, 100 мл',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/kodumasinad/varstolmuimejad/varstolmuimeja-dyson-v15s-detect-submarine?id=20120353&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Пылесос - метла Dyson V15s Detect Submarine',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/ilu-tervis-ja-hugieen/elektrilised-hambaharjad/oral-b-io9-black-special-edition?id=30603658&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/ilu-tervis-ja-hugieen/juuksesirgendajad-ja-koolutajad/dyson-airstrait-ht01?id=22620523&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Утюжок для волос Dyson Airstrait HT01',
        },
        {
          url: 'https://kaup24.ee/et/mbel-ja-sisustus/magamistoambel/voodid/voodid-voodi-nore-nova-160x200-cm-sinine?id=31805533&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кровать Nore Nova, 160x200 см, синяя',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/kehahooldus/kreemid-ja-losjoonid/kehakreem-elizabeth-arden-green-tea-honey-drops?id=40963&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Крем для тела Elizabeth Arden Green Tea Honey Drops, 500 мл',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-alates-3-aastat/kokkupandavad-manguasjad/42169-lego-technic-neom-mclaren-formula-e?id=22231288&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/manguasjad/poiste-manguasjad/virtuaalne-lemmiklooma-hologramm-spin-master-bitzee-magicals?id=35430029&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Виртуальный питомец-голограмма Spin Master Bitzee Magicals',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-kuni-3-aastat/tegelustekk/oppematt-kinderkraft-smartplay-sea?id=13892596&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Развивающий коврик 2в1 Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/imikute-kaubad/maneezid-reisivoodid/vorevoodi-lionelo-leonie-3-in-1-greystone?id=4805623&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Кроватка Lionelo Leonie 3 in 1 , Grey/Stone',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-kuni-3-aastat/tegelustekk/puslematt-kinderkraft-luno-30-osa-kollanehall?id=3239081&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Коврик-пазл Kinderkraft Luno, 30 частей, желтый-серый',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/imikute-kaubad/soogitoolid-/soogitool-lionelo-maya-white?id=4901035&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Стульчик для кормления Lionelo Maya, White',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-naturaalse-villaga-kenny-2?id=2064979&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-furry-must?id=7336895&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanud/laste-talveriidedd/huppa-tudrukute-talveparka-mona-2-300g-mundiroheline?id=11794695&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/meeste-jalatsid/meeste-saapad/luhta-meeste-saapad-tuttu-pruun?id=11891985&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Ботинки мужские Luhta, коричневые',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/nike-meeste-talvejope-tf-club-puffer-jkt?id=17252919&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike meeste talvejope TF CLUB PUFFER JKT, must',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/naiste-aksessuaarid/naiste-mtsid/helly-hansen-muts-snowfall-valge?id=18535429&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Шапка Helly Hansen SNOWFALL, белый цвет',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/meeste-aluspesu/meeste-sokid/calvin-klein-meeste-sokid-4pk-kinkekarbis-must?id=23613903&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein meeste sokid 4pk kinkekarbis, must-valge, 40/46',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/tom-tailor-meeste-talvejope-tumesinine?id=23751478&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor meeste talvejope, tumesinine',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/luhta-naiste-talvemantel-iisalmi-tumesinine?id=24138988&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, темно-синий цвет',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/icepeak-naiste-talvemantel-addia-must?id=24174628&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Icepeak ADDIA, черный цвет',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/meeste-jalatsid/meeste-saapad/helly-hansen-meeste-saapad-torshov-2-must?id=24263903&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen мужские ботинки TORSHOV 2, черные',
        },
        {
          url: 'https://kaup24.ee/et/naiste-platud-sussid/tom-tailor-naiste-vabaajajalatsid-konjakipruun?id=30418798&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor женские повседневные ботинки, коньячно-коричневые',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/naiste-riided/naiste-mantlid/rinopelle-naiste-talvemantel-nusa-naturaalvalge?id=29618263&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle женское зимнее пальто NUSA, белого цвета',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/luhta-naiste-talvemantel-iisalmi-kirju?id=24139088&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женское зимнее пальто Luhta IISALMI, разных цветов',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-naturaalse-villaga-kenny-2?id=2064979&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние сапоги Demar из натуральной шерсти KENNY 2, серые',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/huppa-naiste-talveparka-naturaalkarvaga-vivian-1-must?id=6695963&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa женская зимняя парка с натуральным мехом VIVIAN, черный 907143823',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/helly-hansen-naiste-sulemantel-aden-must?id=7054984&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женская куртка Helly Hansen ADEN, черная',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-furry-must?id=7336895&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Детские зимние ботинки Demar Furry, черные',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanud/laste-talveriidedd/huppa-tudrukute-talveparka-mona-2-300g-mundiroheline?id=11794695&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Зимняя парка Huppa для девочек Mona 2, мятная',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/naiste-jalatsid/naiste-saapad/luhta-naiste-talvesaapad-tahtova-must?id=24138953&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Женские зимние сапоги Luhta TAHTOVA, черный цвет',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/luhta-meeste-talvejope-kallahtimust?id=24139043&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Куртка мужская зимняя Luhta KALLAHTI, черного цвета',
        },
      ];
    } else if (this.campaignUrlProp === 'https://pigu.lt') {
      this.collectablesLinks = [
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/namu-technika/dulkiu-siurbliai-robotai/dulkiu-siurblys-robotas-xiaomi-x20-plus?id=84561160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Dulkių siurblys-robotas Xiaomi X20 Plus, Su plovimo funkcija, Automatinis išsivalymas',
        },
        {
          url: 'https://pigu.lt/lt/plansetiniai-kompiuteriai/plansetes-tablets/plansetinis-kompiuteris-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=78014478&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Planšetinis kompiuteris Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://pigu.lt/lt/televizoriai/televizorius-samsung-qe43q60dauxxh?id=81244960&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televizorius Samsung QE43Q60DAUXXH, 43" (~109 cm)',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-elektronika/virtuves-iranga/kavos-aparatai/delonghi-magnifica-evo-ecam29081tb?id=55534704&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Automatinis kavos aparatas Delonghi Magnifica Evo ECAM290.81.TB, Su automatiniu pieno plakimu',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-elektronika/virtuves-iranga/gruzdintuves/xiaomi-mi-smart-air-fryer-65l-white?id=77539884&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Karšto oro gruzdintuvė Xiaomi Mi Smart Air Fryer 6.5L White EU',
        },
        {
          url: 'https://pigu.lt/lt/mobilieji-telefonai-foto-ir-video/ismanieji-laikrodziai-ir-ismaniosios-apyrankes/ismanieji-laikrodziai-smartwatch/ismanusis-laikrodis-xiaomi-redmi-watch-5-active-midnight-black?id=92219210&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Išmanusis laikrodis Xiaomi Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://pigu.lt/lt/zaidimu-konsoles-kompiuteriai-xbox-sony-playstation-nintendo/zaidimu-konsole-sony-playstation-5-pro-hdmi-wi-fi?id=96696758&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Žaidimų konsolė Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://pigu.lt/lt/televizoriai/televizorius-xiaomi-qled-tv-a-pro-2025-55?id=84030915&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televizorius Xiaomi QLED TV A Pro 2025 55", 55" (~140 cm)',
        },
        {
          url: 'https://pigu.lt/lt/namu-remontas/irankiai/mechaniniai-irankiai/irankiu-rinkinys-fieldmann-fdg-5005-85r-85?id=5783159&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Įrankių rinkinys Fieldmann FDG 5005-85R, 85 dalių',
        },
        {
          url: 'https://pigu.lt/lt/priemones-nuo-plauku-slinkimo-stiprinimui/kauke-molekuliniam-plauku-atstatymui-k18-50-ml?id=49066209&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kaukė molekuliniam plaukų atstatymui K18, 50 ml',
        },
        {
          url: 'https://pigu.lt/lt/grozis-ir-mada/kosmetika/plauku-prieziurai/sampunai/sampunas-k18-peptide-prep-detox-250ml?id=59510573&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Šampūnas K18 Peptide Prep Detox, 250ml',
        },
        {
          url: 'https://pigu.lt/lt/kvepalai-pigiau/kvepalai-moterims/kvapusis-vanduo-tiziana-terenzi-kirke-edp-moterimsvyrams?id=20287680&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kvapusis vanduo Tiziana Terenzi Kirke EDP moterims/vyrams, 100 ml',
        },
        {
          url: 'https://pigu.lt/lt/kvepalai-pigiau/kvepalai-vyrams/kvapusis-vanduo-afnan-9-pm-edp-vyrams?id=57278163&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kvapusis vanduo Afnan 9 PM EDP vyrams 100 ml, 100 ml',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/namu-technika/dulkiu-siurbliai-sluotos/dulkiu-siurblys-sluota-dyson-v15s-detect-submarine?id=77534559&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Dulkių siurblys - šluota Dyson V15s Detect Submarine',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/smulki-technika/dantu-sepeteliai/dantu-sepetelis-oral-b-io9-black-special-edition?id=92346851&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://pigu.lt/lt/buitine-technika-ir-elektronika/smulki-technika/plaukams/plauku-tiesinimo-prietaisai/dyson-airstrait-ht01?id=81137400&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Plaukų tiesinimo žnyplės Dyson Airstrait HT01',
        },
        {
          url: 'https://pigu.lt/lt/lovos/lova-nore-nova-160x200-cm-melyna?id=86876515&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Lova Nore Nova, 160x200 cm, mėlyna',
        },
        {
          url: 'https://pigu.lt/lt/kosmetika-kunui/kremai-ir-losjonai-kunui/kuno-kremas-elizabeth-arden-green-tea-honey?id=3818072&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kūno kremas Elizabeth Arden Green Tea Honey Drops, 500 ml',
        },
        {
          url: 'https://pigu.lt/lt/kudikiams-ir-vaikams/zaislai/konstruktoriai-ir-kaladeles/42169-lego-technic-neom-mclaren-formula-e?id=80634900&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-ir-zaidimai-vaikams/zaislai-berniukams/virtualus-augintinis-holograma-spin-master-bitzee-magicals?id=90440246&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Virtualus augintinis holograma Spin Master Bitzee Magicals',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-vaikams-iki-3-metu/lavinimo-kilimeliai/lavinamasis-kilimelis-kinderkraft-smartplay-sea?id=64185678&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Lavinamasis kilimėlis Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/kudikio-prieziura/loveles-maniezai-vaikams/lovyte-lionelo-leonie-3-in-1-greystone?id=36626886&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Lovytė Lionelo Leonie 3 in 1 , Grey/Stone',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/zaislai-vaikams-iki-3-metu/lavinimo-kilimeliai/delione-kilimelis-kinderkraft-luno-30-daliu-geltona?id=28234534&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Dėlionė-kilimėlis Kinderkraft Luno, 30 dalių, geltona-pilka',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/kudikiu-prekes/maitinimo-kedutes/maitinimo-kedute-lionelo-maya-white?id=37301113&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Maitinimo kėdutė Lionelo Maya, White',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-su-naturalia-vilna?id=24301160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar vaikiški žieminiai batai su natūralia vilna KENNY 2, pilki',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-furry-juodi?id=44791583&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar vaikiški žieminiai batai FURRY, juodi',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/ziemos-drabuziai-vaikams/huppa-ziemine-striuke-mergaitems-mona-2-300?id=56898928&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa žieminė striukė mergaitėms Mona 2, 300 g, mėtų žalia',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/avalyne-vyrams/vyriski-batai/aulinukai-vyrams-luhta-rudi?id=57438203&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Aulinukai vyrams Luhta, rudi',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/nike-vyriska-ziemine-striuke-tf-club-puffer?id=71321561&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike vyriška žieminė striukė TF CLUB PUFFER JKT, juoda',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/aksesuarai-moterims/kepures/helly-hansen-kepure-snowfall-balta?id=73704371&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen kepurė SNOWFALL, balta',
        },
        {
          url: 'https://pigu.lt/lt/apatinis-trikotazas-vyrams/vyriskos-kojines/calvin-klein-vyriskos-kojines-4-vnt-dovanu?id=84143020&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein vyriškos kojinės 4 vnt. dovanų dėžutėje, juodos ir baltos, 40/46',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/tom-tailor-vyriska-ziemine-striuke-tamsiai-melyna?id=84193355&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor vyriška žieminė striukė, tamsiai mėlyna',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/luhta-moteriskas-zieminis-paltas-iisalmi-tamsiai-melynas?id=84628545&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta moteriškas žieminis paltas IISALMI, tamsiai mėlynas',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/icepeak-moteriskas-zieminis-paltas-addia-juodas?id=85336055&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Icepeak moteriškas žieminis paltas ADDIA, juodas',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/avalyne-vyrams/vyriski-batai/helly-hansen-vyriski-batai-torshov-2-juodi?id=85467345&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen vyriški batai TORSHOV 2, juodi',
        },
        {
          url: 'https://pigu.lt/lt/slepetes-moterims/tom-tailor-moteriski-laisvalaikio-batai-konjako-rudos?id=91730395&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor moteriški laisvalaikio batai, konjako rudos spalvos',
        },
        {
          url: 'https://pigu.lt/lt/paltai-moterims/rinopelle-moteriskas-zieminis-paltas-nusa-naturalios-baltos?id=88241135&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle moteriškas žieminis paltas NUSA, natūralios baltos spalvos',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/luhta-moteriskas-zieminis-paltas-iisalmi-ivairiu-spalvu?id=84628665&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta moteriškas žieminis paltas IISALMI, įvairių spalvų',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-su-naturalia-vilna?id=24301160&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar vaikiški žieminiai batai su natūralia vilna KENNY 2, pilki',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/huppa-moteriska-ziemine-parka-su-naturaliu-kailiu?id=43275298&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa moteriška žieminė parka su natūraliu kailiu VIVIAN 1, juoda',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-aksesuarai/drabuziai-moterims/striukes-moterims/helly-hansen-moteriska-striuke-aden-juoda?id=44406588&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen moteriška striukė ADEN, juoda',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/avalyne-vaikams/zieminiai-batai-vaikams/demar-vaikiski-zieminiai-batai-furry-juodi?id=44791583&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar vaikiški žieminiai batai FURRY, juodi',
        },
        {
          url: 'https://pigu.lt/lt/vaikams-ir-kudikiams/drabuziai-ir-avalyne-vaikams/ziemos-drabuziai-vaikams/huppa-ziemine-striuke-mergaitems-mona-2-300?id=56898928&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa žieminė striukė mergaitėms Mona 2, 300 g, mėtų žalia',
        },
        {
          url: 'https://pigu.lt/lt/grozis-ir-mada/avalyne-moterims/aulinukai/luhta-moteriski-zieminiai-batai-tahtova-juodi?id=84628510&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta moteriški žieminiai batai TAHTOVA, juodi',
        },
        {
          url: 'https://pigu.lt/lt/apranga-avalyne-galanterija/drabuziai-vyrams/vyriskos-striukes/luhta-vyriska-ziemine-striuke-kallahti-juoda?id=84628615&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta vyriška žieminė striukė KALLAHTI, juoda',
        },
      ];
    } else if (this.campaignUrlProp === 'https://220.lv') {
      this.collectablesLinks = [
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/saimniecibai/puteklu-suceji-roboti/robots-puteklu-sucejs-xiaomi-x20-plus?id=29760481&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Robots putekļu sūcējs Xiaomi X20 Plus, Ar mazgāšanas funkciju, Automātiskā tīrīšana',
        },
        {
          url: 'https://220.lv/lv/plansetdatori/plansetdatori/plansetdators-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=25947901&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Planšetdators Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/televizori-un-piederumi/televizori/televizors-samsung-qe43q60dauxxh?id=35298202&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Samsung QE43Q60DAUXXH, 43" (~109 cm)',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/maza-sadzives-tehnika-virtuvei/kafijas-automati/delonghi-magnifica-evo-ecam29081tb?id=15046011&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Automātiskais kafijas automāts Delonghi Magnifica Evo ECAM290.81.TB, Ar automātisko piena putošanu',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/maza-sadzives-tehnika-virtuvei/taukvares-katli/xiaomi-smart-air-fryer-balts?id=26794246&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Aerogrils Xiaomi Smart Air Fryer, balts',
        },
        {
          url: 'https://220.lv/lv/mobilie-telefoni-plansetdatori-foto/viedpulksteni-un-viedas-aproces/viedpulksteni-smartwatch/viedpulkstenis-xiaomi-redmi-watch-5-active-midnight-black?id=35529252&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Viedpulkstenis Xiaomi Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://220.lv/lv/datortehnika/spelu-konsoles/spelu-konsoles/spelu-konsole-sony-playstation-5-pro-hdmi-wi-fi?id=37855752&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Spēļu konsole Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/televizori-un-piederumi/televizori/televizors-xiaomi-qled-tv-a-pro-2025-55?id=29434316&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Xiaomi QLED TV A Pro 2025 55", 55" (~140 cm)',
        },
        {
          url: 'https://220.lv/lv/majai-un-remontam/darbariki/instrumenti/instrumentu-komplekts-fieldmann-85-gab?id=1227029&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Instrumentu komplekts Fieldmann, 85 gab',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/matu-kopsanai/matu-uzlabosanai/maska-molekularai-matu-atjaunosanai-k18-50-ml?id=14370327&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Maska molekulārai matu atjaunošanai K18, 50 ml',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/matu-kopsanai/sampuni/matu-sampuns-k18-peptide-prep-detox-250?id=16285785&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Matu šampūns K18 Peptide Prep Detox, 250 ml',
        },
        {
          url: 'https://220.lv/lv/smarzas/sieviesu-smarzas/parfimerijas-udens-tiziana-terenzi-kirke-edp-sievietemviriesiem?id=11478492&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Parfimērijas ūdens Tiziana Terenzi Kirke EDP sievietēm/vīriešiem, 100 ml',
        },
        {
          url: 'https://220.lv/lv/smarzas/viriesu_smarzas/parfimerijas-udens-afnan-9-pm-edp-viriesiem?id=20294167&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Parfimērijas ūdens Afnan 9 PM EDP vīriešiem 100 ml, 100 ml',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/saimniecibai/puteklu-suceji-slotas/puteklu-sucejs-slota-dyson-v15s-detect-submarine?id=25668761&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Putekļu sūcējs - slota Dyson V15s Detect Submarine',
        },
        {
          url: 'https://220.lv/lv/tv-un-sadzives-tehnika/skaistumam/zobu-birstes/oral-b-io9-black-special-edition?id=35577587&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://220.lv/lv/sadzives-tehnika/skaistumam/matu-ieveidotaji/dyson-airstrait-ht01?id=28405436&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Matu taisnotājs Dyson Airstrait HT01',
        },
        {
          url: 'https://220.lv/lv/mebeles-un-interjers/gulamistabas-mebeles/gultas/gulta-nore-nova-160x200-cm-zila?id=36711707&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Gulta Nore Nova, 160x200 cm, zila',
        },
        {
          url: 'https://220.lv/lv/smarzas-kosmetika/kermenim/kremi-un-losjoni/kermena-krems-elizabeth-arden-green-tea-honey?id=330766&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Ķermeņa krēms Elizabeth Arden Green Tea Honey Drops, 500 ml',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/rotallietas-un-speles/konstruktori/42169-lego-technic-neom-mclaren-formula-e?id=28017941&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/rotallietas-zeniem-meitenem-zidainiem/rotallietas-zeniem/virtuala-majdzivnieka-hologramma-spin-master-bitzee-magicals?id=40421182&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Virtuālā mājdzīvnieka hologramma Spin Master Bitzee Magicals',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/rotallietas-un-speles/attistosie-paklajini/macibu-paklajins-kinderkraft-smartplay-sea?id=18815262&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Mācību paklājiņš Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/mebeles-mazuliem/manezas/gultina-lionelo-leonie-3-in-1-greystone?id=8883075&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Gultiņa Lionelo Leonie 3 in 1 , Grey/Stone',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/rotallietas-un-speles/attistosie-paklajini/puzle-paklajs-kinderkraft-luno-30-dalas-yellow?id=7247414&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Puzle-paklājs Kinderkraft Luno, 30 daļas, yellow-grey',
        },
        {
          url: 'https://220.lv/lv/preces-berniem/mebeles-mazuliem/barosanas-kresli/barosanas-kresls-lionelo-maya-white?id=8968044&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Barošanas krēsls Lionelo Maya, White',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-ar-dabigo-vilnu?id=6072506&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar bērnu ziemas zābaki ar dabīgo vilnu KENNY 2, pelēki',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-furry-melni?id=11235173&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar bērnu ziemas zābaki FURRY, melni',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/apgerbs-un-apavi-berniem/ziemas-apgerbs-berniem/huppa-ziemas-jaka-meitenem-mona-2-300?id=15731241&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa ziemas jaka meitenēm Mona 2, 300 g, piparmētru zaļa',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apavi/kurpes/zabaki-viriesiem-luhta-bruni?id=16075266&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Zābaki vīriešiem Luhta, brūni',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/nike-viriesu-ziemas-virsjaka-tf-club-puffer?id=22240987&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike vīriešu ziemas virsjaka TF CLUB PUFFER JKT, melna',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/aksesuari-sievietem/sieviesu-cepures/helly-hansen-cepure-snowfall-balta?id=23900591&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen cepure SNOWFALL, balta',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apaksvela/zekes/calvin-klein-viriesu-zekes-4-pari-davanu?id=29572946&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein vīriešu zeķes, 4 pāri dāvanu kastītē, melnas un baltas, 40/46',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/tom-tailor-viriesu-ziemas-virsjaka-tumsi-zila?id=29719111&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor vīriešu ziemas virsjaka, tumši zila',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/luhta-sieviesu-ziemas-metelis-iisalmi-tumsi-zils?id=30020096&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta sieviešu ziemas mētelis IISALMI, tumši zils',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/icepeak-sieviesu-ziemas-metelis-addia-melns?id=30083431&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Icepeak sieviešu ziemas mētelis ADDIA, melns',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apavi/kurpes/helly-hansen-viriesu-apavi-torshov-2-melni?id=30140401&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen vīriešu apavi TORSHOV 2, melni',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apavi/ieslucenes-cibas/tom-tailor-sieviesu-ikdienas-apavi-konjaka-bruni?id=35352752&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor sieviešu ikdienas apavi, konjaka brūni',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/sieviesu-meteli/rinopelle-sieviesu-ziemas-metelis-nusa-dabiga-balta?id=33550547&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle sieviešu ziemas mētelis NUSA, dabīga balta krāsa',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/luhta-sieviesu-ziemas-metelis-iisalmi-dazadu-krasu?id=30020011&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta sieviešu ziemas mētelis IISALMI, dažādu krāsu',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-ar-dabigo-vilnu?id=6072506&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar bērnu ziemas zābaki ar dabīgo vilnu KENNY 2, pelēki',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/huppa-sieviesu-ziemas-parka-ar-dabigo-kazokadu?id=10647914&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa sieviešu ziemas parka ar dabīgo kažokādu VIVIAN 1, melna',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apgerbs/virsjakas-sievietem/helly-hansen-jaka-sievietem-aden-melna?id=11124083&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen jaka sievietēm ADEN, melna',
        },
        {
          url: 'https://220.lv/lv/ziemas-zabaki-berniem/demar-bernu-ziemas-zabaki-furry-melni?id=11235173&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar bērnu ziemas zābaki FURRY, melni',
        },
        {
          url: 'https://220.lv/lv/rotallietas-un-preces-berniem/apgerbs-un-apavi-berniem/ziemas-apgerbs-berniem/huppa-ziemas-jaka-meitenem-mona-2-300?id=15731241&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa ziemas jaka meitenēm Mona 2, 300 g, piparmētru zaļa',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/sieviesu-apavi/zabaki-puszabaki/luhta-sieviesu-ziemas-zabaki-tahtova-melni?id=30020121&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta sieviešu ziemas zābaki TAHTOVA, melni',
        },
        {
          url: 'https://220.lv/lv/apgerbi-apavi-aksesuari/viriesu-apgerbs/virsjakas/luhta-viriesu-ziemas-virsjaka-kallahti-melna?id=30020046&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta vīriešu ziemas virsjaka KALLAHTI, melna',
        },
      ];
    } else if (
      this.campaignUrlProp === 'https://kaup.ee' ||
      this.campaignUrlProp === 'https://kaup24.ee'
    ) {
      this.collectablesLinks = [
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/kodumasinad/robottolmuimejad/robottolmuimeja-xiaomi-x20-plus?id=23831348&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Robottolmuimeja Xiaomi X20 Plus, Märgpuhastus, Automaatne tühjendamine',
        },
        {
          url: 'https://kaup24.ee/et/arvutid-ja-it-tehnika/tahvelarvutid-e-lugerid/tahvelarvutid/tahvelarvuti-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=20418318&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tahvelarvuti Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/telerid-ja-tarvikud/telerid/televiisor-samsung-qe43q60dauxxh?id=30279618&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televiisor Samsung QE43Q60DAUXXH, 43" (~109 cm)',
        },
        {
          url: 'https://kaup24.ee/et/kohvimasinad/delonghi-magnifica-evo-ecam29081tb?id=11261292&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Täisautomaatne kohvimasin Delonghi Magnifica Evo ECAM290.81.TB, Automaatne piimavahustaja',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/vaike-koogitehnika/frituurid-kuumaohufrituurid/frituurid-xiaomi-mi-smart?id=20240698&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kuumaõhufritüür Xiaomi Mi Smart',
        },
        {
          url: 'https://kaup24.ee/et/mobiiltelefonid-foto-videokaamerad/nutikellad-ja-nutivorud/nutikellad-smartwatch/nutikell-xiaomi-redmi-watch-5-active-midnight-black?id=30590228&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nutikell Xiaomi Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://kaup24.ee/et/arvutid-ja-it-tehnika/mangukonsoolid-ja-tarvikud/mangukonsoolid/mangukonsool-sony-playstation-5-pro-hdmi-wi-fi?id=32859533&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Mängukonsool Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/telerid-ja-tarvikud/telerid/televiisor-xiaomi-qled-tv-a-pro-2025-55?id=23508913&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televiisor Xiaomi QLED TV A Pro 2025 55", 55" (~140 cm)',
        },
        {
          url: 'https://kaup24.ee/et/koduremont/tooriistad/kasitriistad/tooriistakomplekt-fieldmann-85-tk?id=280219&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tööriistakomplekt Fieldmann, 85 tk',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/juuksehooldus/juuste-tugevdamiseks/mask-juuste-molekulaarseks-taastamiseks-k18-50-ml?id=10583221&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Mask juuste molekulaarseks taastamiseks K18, 50 ml',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/juuksehooldus/sampoonid/sampoonid-sampoon-k18-peptide-prep-detox-shampoo-250?id=12199377&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Šampoon K18 Peptide Prep Detox Shampoo, 250 ml',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/parfuumid-ja-lohnad/naiste-lohnad/parfuum-tiziana-terenzi-kirke-edp-naistelemeestele-100?id=7585133&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Parfüüm Tiziana Terenzi Kirke EDP naistele/meestele, 100 ml',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/parfuumid-ja-lohnad/meeste-lohnad/meeste-lohnad-ja-parfuumid-parfuum-afnan-9-pm-edp-meestele-100?id=15256184&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Parfüüm Afnan 9 PM EDP meestele, 100 ml, 100 ml',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/kodumasinad/varstolmuimejad/varstolmuimeja-dyson-v15s-detect-submarine?id=20120353&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Varstolmuimeja Dyson V15s Detect Submarine',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/ilu-tervis-ja-hugieen/elektrilised-hambaharjad/oral-b-io9-black-special-edition?id=30603658&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://kaup24.ee/et/kodumasinad-kodutehnika/ilu-tervis-ja-hugieen/juuksesirgendajad-ja-koolutajad/dyson-airstrait-ht01?id=22620523&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Sirgendaja Dyson Airstrait HT01',
        },
        {
          url: 'https://kaup24.ee/et/mbel-ja-sisustus/magamistoambel/voodid/voodid-voodi-nore-nova-160x200-cm-sinine?id=31805533&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Voodi Nore Nova, 160x200 cm, sinine',
        },
        {
          url: 'https://kaup24.ee/et/kosmeetika-parfuumid/kehahooldus/kreemid-ja-losjoonid/kehakreem-elizabeth-arden-green-tea-honey-drops?id=40963&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kehakreem Elizabeth Arden Green Tea Honey Drops naistele, 500 ml',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-alates-3-aastat/kokkupandavad-manguasjad/42169-lego-technic-neom-mclaren-formula-e?id=22231288&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E Race Car',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/manguasjad/poiste-manguasjad/virtuaalne-lemmiklooma-hologramm-spin-master-bitzee-magicals?id=35430029&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Virtuaalne lemmiklooma hologramm Spin Master Bitzee Magicals',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-kuni-3-aastat/tegelustekk/oppematt-kinderkraft-smartplay-sea?id=13892596&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Õppematt Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/imikute-kaubad/maneezid-reisivoodid/vorevoodi-lionelo-leonie-3-in-1-greystone?id=4805623&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Võrevoodi Lionelo Leonie 3 in 1, Grey/Stone',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/lastele-kuni-3-aastat/tegelustekk/puslematt-kinderkraft-luno-30-osa-kollanehall?id=3239081&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Puslematt Kinderkraft Luno, 30 osa, kollane/hall',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/imikute-kaubad/soogitoolid-/soogitool-lionelo-maya-white?id=4901035&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Söögitool Lionelo Maya, White',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-naturaalse-villaga-kenny-2?id=2064979&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar laste talvesaapad naturaalse villaga KENNY 2, hall',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-furry-must?id=7336895&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar laste talvesaapad FURRY, must',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanud/laste-talveriidedd/huppa-tudrukute-talveparka-mona-2-300g-mundiroheline?id=11794695&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa tüdrukute talveparka MONA 2, 300g, mündiroheline',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/meeste-jalatsid/meeste-saapad/luhta-meeste-saapad-tuttu-pruun?id=11891985&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta meeste saapad TUTTU, pruun',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/nike-meeste-talvejope-tf-club-puffer-jkt?id=17252919&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike meeste talvejope TF CLUB PUFFER JKT, must',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/naiste-aksessuaarid/naiste-mtsid/helly-hansen-muts-snowfall-valge?id=18535429&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen müts SNOWFALL, valge',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/meeste-aluspesu/meeste-sokid/calvin-klein-meeste-sokid-4pk-kinkekarbis-must?id=23613903&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein meeste sokid 4pk kinkekarbis, must-valge, 40/46',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/tom-tailor-meeste-talvejope-tumesinine?id=23751478&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor meeste talvejope, tumesinine',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/luhta-naiste-talvemantel-iisalmi-tumesinine?id=24138988&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naiste talvemantel IISALMI, tumesinine',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/icepeak-naiste-talvemantel-addia-must?id=24174628&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Icepeak naiste talvemantel ADDIA, must',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/meeste-jalatsid/meeste-saapad/helly-hansen-meeste-saapad-torshov-2-must?id=24263903&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen meeste saapad TORSHOV 2, must',
        },
        {
          url: 'https://kaup24.ee/et/naiste-platud-sussid/tom-tailor-naiste-vabaajajalatsid-konjakipruun?id=30418798&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor naiste vabaajajalatsid, konjakipruun',
        },
        {
          url: 'https://kaup24.ee/et/jalanud-riided-ja-aksessuaarid/naiste-riided/naiste-mantlid/rinopelle-naiste-talvemantel-nusa-naturaalvalge?id=29618263&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle naiste talvemantel NUSA, naturaalvalge',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/luhta-naiste-talvemantel-iisalmi-kirju?id=24139088&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naiste talvemantel IISALMI, kirju',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-naturaalse-villaga-kenny-2?id=2064979&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar laste talvesaapad naturaalse villaga KENNY 2, hall',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/huppa-naiste-talveparka-naturaalkarvaga-vivian-1-must?id=6695963&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa naiste talveparka naturaalkarvaga VIVIAN 1, must',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-riided-ja-aksessuaarid/naiste-riided/naiste-joped/helly-hansen-naiste-sulemantel-aden-must?id=7054984&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen naiste sulemantel ADEN, must',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanoud/laste-jalanoud/laste-talvesaapad/demar-laste-talvesaapad-furry-must?id=7336895&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar laste talvesaapad FURRY, must',
        },
        {
          url: 'https://kaup24.ee/et/lapsed-ja-imikud/laste-riided-ja-jalanud/laste-talveriidedd/huppa-tudrukute-talveparka-mona-2-300g-mundiroheline?id=11794695&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa tüdrukute talveparka MONA 2, 300g, mündiroheline',
        },
        {
          url: 'https://kaup24.ee/et/jalatsid/naiste-jalatsid/naiste-saapad/luhta-naiste-talvesaapad-tahtova-must?id=24138953&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naiste talvesaapad TAHTOVA, must',
        },
        {
          url: 'https://kaup24.ee/et/jalanoud-ja-riided/meeste-riided/meeste-joped/luhta-meeste-talvejope-kallahtimust?id=24139043&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta meeste talvejope KALLAHTI,must',
        },
      ];
    } else if (this.campaignUrlProp === 'https://hobbyhall.fi') {
      this.collectablesLinks = [
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/kodinkoneet/robotti-imurit/robotti-imuri-xiaomi-x20-plus?id=9631293&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Robotti-imuri Xiaomi X20 Plus, Pesutoiminnolla, Automaattisella tyhjennyksellä',
        },
        {
          url: 'https://hobbyhall.fi/fi/tietokoneet-ja-pelaaminen/tabletit-ja-e-lukijat/tabletit/tabletti-samsung-galaxy-tab-a9-wifi-464gb-graphite?id=7599227&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tabletti Samsung Galaxy Tab A9+ WiFi 4/64GB Graphite SM-X210NZAAEUE',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/televisiot-ja-lisatarvikkeet/televisiot/televisio-samsung-qe43q60dauxxh?id=14981428&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televisio Samsung QE43Q60DAUXXH, 43" (~109 cm)',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/keittion-pienkoneet/kahvinkeittimet-ja-kahvikoneet/delonghi-magnifica-evo-ecam29081tb?id=3208843&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title:
            'Täysautomaattinen kahvikone Delonghi Magnifica Evo ECAM290.81.TB, Automaattisella maidonvaahdotuksella',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/keittion-pienkoneet/airfryerit-ja-friteerauskeittimet/xiaomi-smart-air-fryer-65l-valkoinen?id=8093272&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Airfryer Xiaomi Smart Air Fryer 6,5l, valkoinen',
        },
        {
          url: 'https://hobbyhall.fi/fi/puhelimet-alylaitteet-ja-kamerat/alykellot-ja-aktiivisuusrannekkeet/alykellot/alykello-redmi-watch-5-active-midnight-black?id=15315588&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Älykello Redmi Watch 5 Active Midnight Black',
        },
        {
          url: 'https://hobbyhall.fi/fi/tietokoneet-ja-pelaaminen/pelaaminen/pelikonsolit/pelikonsoli-sony-playstation-5-pro-hdmi-wi-fi?id=18015888&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Pelikonsoli Sony PlayStation 5 Pro, HDMI / Wi-Fi 7, 2 TB',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/televisiot-ja-lisatarvikkeet/televisiot/televisio-xiaomi-qled-tv-a-pro-2025-55?id=9504342&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Televisio Xiaomi QLED TV A Pro 2025 55", 55" (~140 cm)',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodin-remontointi/tyokalut/kasityokalut/fieldmann-fdg-5005-85r-tyokalusarja-85-kpl?id=481753&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Fieldmann FDG 5005-85R työkalusarja, 85 kpl',
        },
        {
          url: 'https://hobbyhall.fi/fi/hajuvedet-ja-kosmetiikka/hiustenhoitotuotteet/naamiot-oljyt-ja-seerumit/hiusnaamio-k18-50-ml?id=2981373&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Hiusnaamio K18, 50 ml',
        },
        {
          url: 'https://hobbyhall.fi/fi/hajuvedet-ja-kosmetiikka/hiustenhoitotuotteet/shampoot/shampoo-k18-peptide-prep-detox-shampoo-250?id=4254596&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Shampoo K18 Peptide Prep Detox Shampoo, 250 ml',
        },
        {
          url: 'https://hobbyhall.fi/fi/hajuvedet-ja-kosmetiikka/hajuvedet-ja-tuoksut/naisten-hajuvedet/tiziana-terenzi-kirke-edp-naisille-miehille-100?id=346863&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tiziana Terenzi Kirke EDP naisille / miehille 100 ml',
        },
        {
          url: 'https://hobbyhall.fi/fi/hajuvedet-ja-kosmetiikka/hajuvedet-ja-tuoksut/miesten-hajuvedet/hajuvesi-afnan-9-pm-edp-miehille-100?id=3895591&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Hajuvesi Afnan 9 PM EDP miehille 100 ml, 100 ml',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/kodinkoneet/varsi-imurit/varsi-imuri-dyson-v15s-detect-submarine?id=11847148&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Varsi-imuri Dyson V15s Detect Submarine',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/kauneudenhoitolaitteet/sahkohammasharjat/oral-b-io9-black-special-edition?id=15412078&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Oral-B iO9 Black Special Edition',
        },
        {
          url: 'https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/kauneudenhoitolaitteet/suoristusraudat-ja-kihartimet/dyson-airstrait-ht01?id=15230603&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Suoristusrauta Dyson Airstrait HT01',
        },
        {
          url: 'https://hobbyhall.fi/fi/huonekalut-ja-sisustus/makuuhuone/sangyt/sanky-nore-nova-160x200-cm-sininen?id=17021473&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Sänky Nore Nova, 160x200 cm, sininen',
        },
        {
          url: 'https://hobbyhall.fi/fi/hajuvedet-ja-kosmetiikka/vartalonhoito/vartalovoiteet-ja-emulsiot/vartalovoide-elizabeth-arden-green-tea-honey-drops?id=67988&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Vartalovoide Elizabeth Arden Green Tea Honey Drops naisille 500 ml',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lelut-yli-3-vuotiaille-lapsille/legot-ja-rakennuslelut/42169-lego-technic-neom-mclaren-formula-e?id=8599922&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: '42169 LEGO® Technic NEOM McLaren Formula E -kilpa-auto',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lelut/poikien-lelut/virtual-pet-hologram-spin-master-bitzee-magicals?id=20649793&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Virtual Pet Hologram Spin Master Bitzee Magicals',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/vauvatarvikkeet/vauvan-hoito/leikkimatot/leikkimatto-2in1-kinderkraft-smartplay-sea?id=3636992&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Leikkimatto 2in1 Kinderkraft Smartplay Sea',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/vauvatarvikkeet/matkasangyt/pinnasanky-lionelo-leonie-3-in-1-greystone?id=2848123&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Pinnasänky Lionelo Leonie 3 in 1, Grey/Stone',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/vauvatarvikkeet/vauvan-hoito/leikkimatot/kinderkraft-palapelimatto-keltainen?id=181708&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Kinderkraft palapelimatto, keltainen',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/vauvatarvikkeet/vauvan-ruokailutarvikkeet/syottotuolit/syottotuoli-lionelo-maya-white?id=129553&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Syöttötuoli Lionelo Maya, White',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/jalkineet-lapsille-ja-vauvoille/lasten-talvikengat/demar-lasten-talvikengat-villavuorella-kenny-2-harmaa?id=840888&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar lasten talvikengät villavuorella KENNY 2, harmaa',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/jalkineet-lapsille-ja-vauvoille/lasten-talvikengat/demar-lasten-talvisaappaat-furry-musta?id=4228&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar lasten talvisaappaat FURRY, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/lasten-talvivaatteet/huppa-tyttojen-talviparka-mona-2-300g-mintunvihrea?id=3207253&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa tyttöjen talviparka MONA 2, 300g, mintunvihreä',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-jalkineet/miesten-kengat/luhta-miesten-saappaat-tuttu-ruskea?id=3324078&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta miesten saappaat TUTTU, ruskea',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-vaatteet/miesten-ulkoilutakit/nike-miesten-talvitakki-tf-club-puffer-jkt?id=4400316&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Nike miesten talvitakki TF CLUB PUFFER JKT, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-asusteet/naisten-paahineet/helly-hansen-pipo-snowfall-valkoinen?id=5553236&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen pipo SNOWFALL, valkoinen',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-vaatteet/miesten-sukat/calvin-klein-miesten-sukat-4-kpl-lahjapakkauksessa?id=9561197&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Calvin Klein miesten sukat, 4 kpl lahjapakkauksessa, musta-valkoinen, 40/46',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-vaatteet/miesten-ulkoilutakit/tom-tailor-miesten-talvitakki-tummansininen?id=9649753&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor miesten talvitakki, tummansininen',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-ulkoilutakit/luhta-naisten-talvitakki-iisalmi-tummansininen?id=9931013&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naisten talvitakki IISALMI, tummansininen',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-ulkoilutakit/icepeak-naisten-talvitakki-addia-musta?id=10004733&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Icepeak naisten talvitakki ADDIA, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-jalkineet/miesten-kengat/helly-hansen-miesten-kengat-torshov-2-musta?id=14943898&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen miesten kengät TORSHOV 2, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-jalkineet/naisten-sandaalit-ja-tossut/tom-tailor-naisten-vapaa-ajan-kengat-konjakinruskea?id=15161298&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Tom Tailor naisten vapaa-ajan kengät, konjakinruskea',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-takit/rinopelle-naisten-takki-nusa-luonnonvalkoinen?id=13965093&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Rino&Pelle naisten takki NUSA, luonnonvalkoinen',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-ulkoilutakit/luhta-naisten-talvitakki-iisalmi-kirjava?id=9931113&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naisten talvitakki IISALMI, kirjava',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/jalkineet-lapsille-ja-vauvoille/lasten-talvikengat/demar-lasten-talvikengat-villavuorella-kenny-2-harmaa?id=840888&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar lasten talvikengät villavuorella KENNY 2, harmaa',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-ulkoilutakit/huppa-naisten-talviparka-luonnonturkiksella-vivian-1-musta?id=49208&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa naisten talviparka luonnonturkiksella VIVIAN 1, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-vaatteet/naisten-ulkoilutakit/helly-hansen-aden-naisten-pitka-toppatakki-musta?id=1730633&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Helly Hansen ADEN naisten pitkä toppatakki, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/jalkineet-lapsille-ja-vauvoille/lasten-talvikengat/demar-lasten-talvisaappaat-furry-musta?id=4228&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Demar lasten talvisaappaat FURRY, musta',
        },
        {
          url: 'https://hobbyhall.fi/fi/lapset/lasten-vaatteet-ja-jalkineet/lasten-talvivaatteet/huppa-tyttojen-talviparka-mona-2-300g-mintunvihrea?id=3207253&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Huppa tyttöjen talviparka MONA 2, 300g, mintunvihreä',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/naisille/naisten-jalkineet/naisten-saappaat/luhta-naisten-talvisaappaat-tahtova-mustat?id=9930978&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta naisten talvisaappaat TAHTOVA, mustat',
        },
        {
          url: 'https://hobbyhall.fi/fi/muoti/miehille/miesten-vaatteet/miesten-ulkoilutakit/luhta-miesten-talvitakki-kallahti-musta?id=9935988&utm_source=Boomio&utm_medium=Gamification&utm_campaign=xmas',
          title: 'Luhta miesten talvitakki KALLAHTI, musta',
        },
      ];
    } else {
      this.collectablesLinks = [
        'https://www.pegasas.lt/noriu-valgyti-sveikai-bet-skaniai-1114698',
        'https://www.pegasas.lt/liepsnojantis-kryzius-ciklo-svetimsale-5-knyga-1113987',
        'https://www.pegasas.lt/sviesos-stygius-1114152',
        'https://www.pegasas.lt/gliukozes-revoliucija-1114104',
        'https://www.pegasas.lt/wrendale-kaulinio-porceliano-puodelis-su-padekliuku-oh-christmas-tree-5994082',
        'https://www.pegasas.lt/kaledos-ateina-1114320',
        'https://www.pegasas.lt/manifestavimas-1114435',
        'https://www.pegasas.lt/nesiojama-zaidimu-konsole-my-arcade-go-gamer-tetris-301-zaidimas-viename-530631',
        'https://www.pegasas.lt/namu-kvapas-the-olphactory-white-musk-250-ml-5338027',
        'https://www.pegasas.lt/haris-poteris-kaledos-hogvartse-paveiksleliu-knyga-1114472',
        'https://www.pegasas.lt/lego-city-miesto-centro-tramvajus-ir-stotele-60423-5704456',
        'https://www.pegasas.lt/sunyciai-patruliai-advento-kalendorius-1114538',
      ];
    }
    this.isMobile = window.innerWidth <= 1280;
    this.containerDiv = null;
    this.render();
  }

  // Update properties method
  updateProps(prop) {
    this.prop = prop;
    this.isMobileWidthSmall = window.innerWidth <= 400;
    this.isSmallMobile = window.innerWidth <= 380;

    if (this.prop === 'Pigu.lt') {
      this.collectables = [
        item1pegasas,
        item2pegasas,
        item3pegasas,
        item4pegasas,
        item5pegasas,
        item6pegasas,
        item7pegasas,
        item8pegasas,
        item9pegasas,
        item10pegasas,
        item11pegasas,
        item12pegasas,
      ];
    } else if (this.prop && this.prop.includes('Plastic')) {
      // Handle Gamtos Ateitis collectables
      this.collectables = [
        item16,
        item4,
        item14,
        item1,
        item23,
        item20,
        item10,
        item8,
        item6,
        item12,
        item19,
        item7,
      ];
    } else if (this.prop && this.prop.includes('Paper')) {
      // Handle Paper collectables
      this.collectables = [
        item16Paper,
        item4Paper,
        item14Paper,
        item1Paper,
        item23Paper,
        item20Paper,
        item10Paper,
        item8Paper,
        item6Paper,
        item12Paper,
        item19Paper,
        item7Paper,
      ];
    } else if (this.prop && this.prop.includes('Glass')) {
      // Handle Glass collectables
      this.collectables = [
        item16Glass,
        item4Glass,
        item14Glass,
        item1Glass,
        item23Glass,
        item20Glass,
        item10Glass,
        item8Glass,
        item6Glass,
        item12Glass,
        item19Glass,
        item7Glass,
      ];
    } else if (this.prop === 'Pieno Žvaigždės') {
      // Handle Glass collectables
      this.collectables = [
        item15PienoZvaigzdes,
        item1PienoZvaigzdes,
        item8PienoZvaigzdes,
        item2PienoZvaigzdes,
        item7PienoZvaigzdes,
        item5PienoZvaigzdes,
      ];
    } else if (this.prop === 'Pegasas') {
      // Handle Glass collectables
      this.collectables = [
        item1pegasas,
        item2pegasas,
        item3pegasas,
        item4pegasas,
        item5pegasas,
        item6pegasas,
        item7pegasas,
        item8pegasas,
        item9pegasas,
        item10pegasas,
        item11pegasas,
        item12pegasas,
      ];
    }

    this.updateVisuals();
  }

  updateVisuals() {
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'LV';
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');

    this.campaignUrlProp = campaignUrl ? campaignUrl : currentPageUrl;
    if (!this.containerDiv) return;
    const currentDate = new Date();
    const startDate = new Date('2024-12-03'); // Set the start date as November 26, 2024
    const dayDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // Calculate days since start date

    // Determine the day index (0 for the first day, 1 for the second, 2 for the third, and then repeat)
    const dayIndex = dayDiff % 5; // This will give 0, 1, or 2, and repeat every 3 days

    // Determine which part of collectables to show based on the day index
    const startIndex = dayIndex * 9;
    const endIndex = startIndex + 9;

    // Slice the collectables array to get the correct range for the current day
    const dailyCollectables = this.collectables.slice(startIndex, endIndex);
    const dailyLinks = this.collectablesLinks.slice(startIndex, endIndex);

    // Create the table HTML for the selected collectables
    let tableHTML = '';

    const loopingImages = this.prop === 'Pigu.lt' ? dailyCollectables : this.collectables;
    loopingImages?.forEach((item, index) => {
      const globalIndex = startIndex + index; // Get the global index for links
      const link = dailyLinks[index];

      if (index % 3 === 0) {
        tableHTML += '<tr style="border-spacing:2px;border-collapse:separate">';
      }

      tableHTML += `
        <td style="padding:5px;text-align: center; border: none; ${
          this.prop === 'Pegasas' || this.prop === 'Pigu.lt' ? 'cursor:pointer' : ''
        }">
        <div id="image-${this.prop === 'Pigu.lt' ? globalIndex : index}" style="max-width:200px;">
        <img class='image-container' style='opacity:1;max-width: none; height: auto; object-fit: contain;max-height:${
          this.prop === 'Pigu.lt' ? '100px' : '70px'
        };' src=${item} alt="Scoreboard Image" >
        
      ${
        (this.prop === 'Pegasas' && this.collectablesLinks[index]) ||
        (this.prop === 'Pigu.lt' && link)
          ? `<div class='image-container-text'><a href="${
              this.prop === 'Pegasas'
                ? this.collectablesLinks[index]
                : this.prop === 'Pigu.lt' &&
                  link.url + '&utm_source=Boomio&utm_medium=Gamification&utm_campaign=Black_Friday'
            }" target="_blank" style="color: white; text-decoration: underline;"><p style="margin-left:10px;margin-right:10px;max-width:280px;line-height:10px;">${
              this.prop === 'Pegasas'
                ? this.collectablesLinks[index]
                : this.prop === 'Pigu.lt' && link.title
            }<p/></a></div>`
          : ''
      }
        </div>
        </td>`;

      if (
        (index + 1) % 3 === 0 || this.prop === 'Pigu.lt'
          ? index === dailyCollectables.length - 1
          : index === this.collectables.length - 1
      ) {
        tableHTML += '</tr>';
      }
    });

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;

    let scoreboardText = `
      ${`<div class="bomio-first-line" style="width:100%; top: ${'505px'};line-height:18px; position: absolute;font-weight: 700; text-align: center; color: white; font-size:${
        this.prop === 'Pegasas' || this.prop === 'Pieno Žvaigždės' ? '18px' : '12px'
      } ; font-family: Montserrat;  word-wrap: break-word">${
        this.prop.includes('Gamtos Ateitis')
          ? `Šių atliekų negalima mesti į
${
  this.prop === 'Gamtos Ateitis Paper'
    ? 'popieriui'
    : this.prop === 'Gamtos Ateitis Plastic'
    ? 'plastikui'
    : this.prop === 'Gamtos Ateitis Glass' && 'stiklui'
} skirtus konteinerius.`
          : this.prop === 'Pegasas'
          ? 'DAUGIAU PEGASO PRODUKTŲ RASI'
          : 'SU MIAU GYVENT SMAGIAU'
      }</div>
              <div class="bomio-second-line" style="width:100%; top: ${'525px'};line-height:18px; position: absolute; text-align: center; color: white; font-size:${'12px'} ; font-family: Montserrat; font-weight:${
        this.prop === 'Pieno Žvaigždės' ? 500 : 400
      };  word-wrap: break-word;text-decoration:${
        this.prop === 'Pieno Žvaigždės' ? 'underline' : ''
      } ">${
        this.prop === 'Pegasas'
          ? ''
          : this.prop === 'Pieno Žvaigždės'
          ? ''
          : 'Daugiau apie tinkamą  rūšiavimą sužinosi puslapyje'
      }${
        this.prop === 'Pieno Žvaigždės'
          ? `<a 
  onclick="event.stopPropagation();" 
  target="_blank" 
  href="https://pienozvaigzdes.lt/lt/20_miau" 
  style="color:white">
  DAUGIAU MIAU!
</a> `
          : ''
      }
          ${
            this.prop === 'Pegasas' || this.prop === 'Pigu.lt'
              ? `<a 
  onclick="event.stopPropagation();" 
  target="_blank" 
  href="https://www.pegasas.lt/" 
  style="color:white;font-size:16px;">
  Pegasas.lt
</a> `
              : ''
          }
          
      
      </div>
            <div style="width:100%; top: 546px; position: absolute; text-align: center; color: white; font-size: 14px; font-family: Montserrat; font-weight: 700;  word-wrap: break-word;text-decoration: underline;"><a 
  onclick="event.stopPropagation();" 
  target="_blank" 
  href="${
    this.prop === 'Pieno Žvaigždės'
      ? 'https://pienozvaigzdes.lt/lt/20_miau'
      : this.prop === 'Pegasas'
      ? 'https://www.pegasas.lt/'
      : 'https://gamtosateitis.lt/rusiavimo-abc'
  }" 
  style="color:white">
  ${
    this.prop === 'Pegasas'
      ? ''
      : this.prop === 'Pieno Žvaigždės'
      ? ''
      : 'https://gamtosateitis.lt/rusiavimo-abc/'
  }
</a> </div> `}
    `;

    if (this.prop !== 'Pigu.lt') {
      this.containerDiv.querySelector('.boomio-scoreboard-text').innerHTML = scoreboardText;
    }

    this.containerDiv.querySelector('.boomio-tbody').innerHTML = tableHTML;
    if (this.prop === 'Pegasas' || this.prop === 'Pigu.lt') {
      document.getElementById('boomio-close-did-you-know').addEventListener('click', () => {
        // Find all enlarged images by checking for the 'enlarge-image' class
        const enlargedImages = document.querySelectorAll('.enlarge-image');
        if (this.prop === 'Pigu.lt') {
          document.querySelector('.closeDidYouKnow').style.display = 'none';
        }
        // Loop through each enlarged image and remove the 'enlarge-image' class
        enlargedImages.forEach((imgElement) => {
          imgElement.classList.remove('enlarge-image');
          if (this.prop === 'Pigu.lt') {
            document.querySelector('.closeDidYouKnow').style.display = 'none';
          }
          // Also hide the text element associated with the image if it exists
          const textElement = imgElement.querySelector('.image-container-text');
          if (textElement) {
            textElement.style.display = 'none';
          }
        });
      });

      this.addfunc(); // Make sure to reapply any additional functions you need
    }
  }

  addfunc() {
    for (let index = 0; index < this.collectables?.length; index++) {
      const image = document.getElementById(`image-${index}`);
      if (image && window.getComputedStyle(image).backgroundColor !== 'rgb(255, 255, 255)') {
        image.addEventListener('click', () => {
          this.handleImageClick(image);
        });
      }
    }
  }

  handleImageClick(image) {
    // Toggle a class to make the image larger and centered
    image.classList.toggle('enlarge-image');

    const textElement = image.querySelector('.image-container-text');

    if (textElement) {
      // Toggle the visibility of the text when the image is enlarged
      textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
    }

    if (this.prop === 'Pegasas') {
      document.querySelector('.bomio-first-line').style.display =
        textElement.style.display === 'block' ? 'none' : 'block';
      document.querySelector('.bomio-second-line').style.display =
        textElement.style.display === 'block' ? 'none' : 'block';
    }

    // Get the image element (the actual <img> inside the image div)
    const imgElement = image.querySelector('img');
    if (imgElement) {
      imgElement.classList.toggle('enlarge-image');
      if (this.prop === 'Pigu.lt') {
        document.querySelector('.closeDidYouKnow').style.display =
          document.querySelector('.closeDidYouKnow').style.display === 'none' ? 'block' : 'none';
      }
    }

    // Add event listener to close image when clicking anywhere on the screen
    const closeImageHandler = (event) => {
      const firstLine = document.querySelector('.bomio-first-line');
      const secondLine = document.querySelector('.bomio-second-line');
      if (firstLine) firstLine.style.display = 'block';
      if (secondLine) secondLine.style.display = 'block';
      // Check if the click is outside the image container (image or text)
      if (!image.contains(event.target)) {
        // Close the enlarged image by removing the 'enlarge-image' class

        if (imgElement) {
          imgElement.classList.remove('enlarge-image');
          if (this.prop === 'Pigu.lt') {
            document.querySelector('.closeDidYouKnow').style.display = 'none';
          }
        }

        // Hide the text element if it exists
        if (textElement) {
          textElement.style.display = 'none';
        }

        // Remove the event listener after the image is closed to prevent memory leaks
        document.removeEventListener('click', closeImageHandler);
      }
    };
  }

  render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('did-you-know-container');
    containerDiv.setAttribute('id', 'did-you-know-container');
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
      <div style="width:calc(100% - 20px);margin-left:10px;top: 42px; position: absolute; text-align: center;line-height:42px; color: ${
        this.prop === 'Pigu.lt' ? '#DFFC38' : 'white'
      }; font-size: ${
      this.isMobileWidthSmall ? '26px' : '30px'
    }; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',    sans-serif; font-weight: 900; text-transform: uppercase; word-wrap: break-word" id="boomio-collection-scoreboard-name">${
      this.prop === 'Pigu.lt'
        ? this.language === 'EN'
          ? 'HAVE YOU SEEN THE TOP DEALS?'
          : this.language === 'LT'
          ? 'AR JAU MATEI TOP PASIŪLYMUS?'
          : this.language === 'LV'
          ? 'VAI ESI REDZĒJIS TOP PIEDĀVĀJUMUS?'
          : this.language === 'ET'
          ? 'KAS OLED TOP PAKKUMISI NÄINUD?'
          : this.language === 'FI'
          ? 'OLETKO NÄHNYT HUIPPUDIILEJÄ?'
          : this.language === 'RU' && 'А ТЫ УЖЕ ВИДЕЛ ТОП ПРЕДЛОЖЕНИЯ?'
        : this.prop === 'Pieno Žvaigždės'
        ? 'Ar visus RAGAVAI?'
        : this.prop === 'Pegasas'
        ? 'ĮSIGYK PEGASO PERKAMIAUSIUS'
        : 'Ar žinojai?'
    }</div>
      
      <div class="boomio-scoreboard-text">
      `;

    containerDiv.innerHTML += `
              </div>
      <div  style="width:100%;height: ${'302px'}; top: ${
      this.prop === 'Pegasas' ? '100px' : this.prop === 'Pieno Žvaigždės' ? '174px' : '114px'
    }; position: absolute; border-right:none;">
        <div class="boomio-custom-scrollbar">
          <table style="margin-top:${
            this.prop === 'Pigu.lt' ? (this.isMobileWidthSmall ? '30px' : '40px') : '30px'
          };border-spacing:3px;width:${
      this.isMobileWidthSmall ? 'calc(100% - 60px)' : 'calc(100% - 80px)'
    };margin-left:${this.isMobileWidthSmall ? '20px' : '40px'};border-collapse:separate">
            <tbody class="boomio-tbody">
            <div class='closeDidYouKnow' style='pointer-events: none;position:absolute;z-index:9999999;right:${
              this.isMobileWidthSmall ? '20px' : '40px'
            };top:35px;display:none' id='closeDidYouKnow'>
                            <img style="pointer-events: none;" src=${closeDidYouKnow} alt="Scoreboard Image" ></img> </div>

    `;

    containerDiv.innerHTML += `
            </tbody>
          </table>
        </div>

          <div style="color:#DFFC38;width:100%;font-size:${
            this.isSmallMobile ? '8px' : this.isMobile ? '10px' : '12px'
          };text-align:center;text-transform:uppercase;top:555px;position:absolute;margin-top:2px;height: 22px; justify-content: center; align-items: center; display: flex;font-weight:600;background-size: contain;">
          <div style="display:${
            this.prop === 'Pigu.lt' ? 'block' : 'none'
          };border-radius:35px;width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:585px;height: 28px; background: ${
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
      <div style="width: calc(100% - 40px);margin-left:20px;margin-right:20px;top:595px;position:absolute; height: 38px; background: ${
        this.prop === 'Barbora' ||
        this.prop === 'Fpro' ||
        this.prop === 'Fantazijos' ||
        this.prop === 'LemonGym'
          ? 'white'
          : 'white'
      }; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: flex" id="boomio-close-did-you-know">
        <div style="text-align: center; color: ${'rgba(61, 73, 40, 1)'} ; font-size: 24px; font-family: Georama; font-weight: 700; line-height: 24px; word-wrap: break-word;cursor:pointer;">
        ${
          this.prop !== 'Pigu.lt'
            ? 'TOLIAU'
            : this.language === 'EN'
            ? 'NEXT'
            : this.language === 'LT'
            ? 'PIRMYN'
            : this.language === 'LV'
            ? 'KLIKŠĶINI'
            : this.language === 'ET'
            ? 'JÄRGMINE'
            : this.language === 'FI'
            ? 'SEURAAVA'
            : this.language === 'RU' && 'ДАЛЕЕ'
        }
        </div>
      </div>
    </div>`;
    this.containerDiv = containerDiv;

    const existingContainer = document.getElementById('did-you-know-container');
    if (existingContainer) {
      existingContainer.parentNode.replaceChild(containerDiv, existingContainer);
    } else {
      document.body.appendChild(containerDiv);
    }

    this.updateVisuals();
  }
}
