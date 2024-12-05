import './styles.css';
import { uncheckIcon } from './constants';
import { localStorageService } from '@/services';
export class InputRegisterContainer {
  constructor(prop) {
    this.prop = prop; // Store the this.prop in a class this.property
    this.isMobile = window.innerWidth <= 1280;
    this.config = localStorageService.getDefaultConfig();
    this.language = this.config.language ? this.config.language : 'EN';
  }
  createInputRegisterContainer() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('input-register-container');
    containerDiv.setAttribute('id', 'input-register-container');
    containerDiv.style.background = `none`;
    containerDiv.style.backgroundSize = 'cover';
    containerDiv.style.width =
      document.body.offsetWidth < 426
        ? document.body.offsetWidth < 321
          ? '375px'
          : document.body.offsetWidth + 'px'
        : '426px';
    let privacyCheckboxChecked = true;
    let privacyCheckboxChecked2 = true;

    containerDiv.innerHTML = `
      <div style="height: 124px; top:${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '0px' : '70px'
      }; position: relative; text-align:${
      this.prop === 'Ikea' ? 'start' : 'center'
    } ;left:34px;margin-right:68px; color: ${'white'}; font-size: ${
      this.language === 'LV' || this.language === 'RU' || this.language === 'EE' ? '34px' : '40px'
    }; font-family: ${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Georama'
    }; font-weight: 700; text-transform: ${
      this.prop === 'Ikea' ? 'none' : 'uppercase'
    }; line-height: 62.40px; word-wrap: break-word">${
      this.language === 'LV' && this.prop === 'Akropolis'
        ? 'REĢISTRĒJIES'
        : this.language === 'LV'
        ? 'REĢISTRĒTIES SPĒLĒŠANAI'
        : this.language === 'RU'
        ? 'ЗАРЕГИСТРИРОВАТЬСЯ ДЛЯ ИГРЫ'
        : this.language === 'EE'
        ? 'REGISTREERI MÄNGIMISEKS'
        : this.prop === 'Fpro'
        ? 'REGISTER TO PLAY'
        : this.prop === 'Ikea'
        ? 'Registracija'
        : this.prop === 'Eurovaistine'
        ? 'REĢISTRĒJIES'
        : this.prop === 'SaludSA'
        ? 'REGÍSTRATE</br>PARA JUGAR'
        : this.language === 'ES' || this.language === 'ET'
        ? 'REGISTRATE </br>PARA JUGAR '
        : 'Registruokis</br> Žaisti'
    }</div>
      <div id="boomio-competition-confirm-field" disabled=${
        privacyCheckboxChecked ? true : false
      } style="cursor:pointer;width: calc(100% - 54px); padding-top: 11px; padding-bottom: 11px; left: 27px; top: 455px; position: absolute; background: ${'white'}; box-shadow: -4px -4px 8px #DFE6F5 inset; border-radius: 35px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div style="text-align: center;font-family:${
          this.prop === 'Ikea' ? 'Noto Sans' : 'Georama'
        };   color: ${'#3D4928'} ; font-size: 24px;  font-weight: ${
      this.prop === 'Ikea' ? '400' : '700'
    }; line-height: 24px; word-wrap: break-word" >${
      this.language === 'LV'
        ? 'TĀLĀK'
        : this.language === 'RU'
        ? 'ДАЛЕЕ'
        : this.language === 'EE'
        ? 'EDASI'
        : this.language === 'ES' || this.language === 'ET'
        ? 'SIGUIENTE'
        : this.prop === 'Fpro'
        ? 'NEXT'
        : this.prop === 'SaludSA'
        ? 'SIGUIENTE'
        : this.prop === 'Ikea'
        ? 'Toliau'
        : this.prop === 'Eurovaistine'
        ? 'TĀLĀK'
        : 'TOLIAU'
    }</div>
      </div>
       <div class="boomio-privacyCheckbox2" id="boomio-privacyCheckbox2" style=";cursor:${
         this.prop === 'Fpro' ? 'auto' : 'pointer'
       } ;left: 34px; top: ${'360px'}; position: absolute; justify-content: center; align-items: center; gap: 5px; display: ${
      this.prop === 'Pegasas' ||
      this.prop === 'Pieno Žvaigždės' ||
      this.prop === 'Eurovaistine' ||
      (this.prop === 'Akropolis' && this.language === 'LV')
        ? 'inline-flex'
        : 'none'
    }">
      <div  style=" cursor: ${this.prop === 'Fpro' ? 'auto' : 'pointer'};">
            <img id="privacyCheckboxImg2" src="${
              privacyCheckboxChecked2 ? uncheckIcon : ''
            }" style="width: 20px; height: 20px;">
        </div>
        <div style="color: ${'white'}; font-size: ${
      this.isMobile
        ? this.prop === 'Akropolis' && this.language === 'LV'
          ? '8px'
          : '10px'
        : this.prop === 'Pieno Žvaigždės' || this.prop === 'Pegasas'
        ? '12px'
        : this.prop === 'Akropolis' && this.language === 'LV'
        ? '10px'
        : '10px'
    }; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    };font-weight: 400; word-wrap: break-word;text-align:start;">${
      this.prop === 'Ikea'
        ? 'Sutinku gauti IKEA naujienas.'
        : this.prop === 'Eurovaistine'
        ? 'Piekrītu saņemt Euroaptieka informatīvos izdevumus.'
        : this.prop === 'Pieno Žvaigždės'
        ? 'Sutinku gauti „Pieno žvaigždės“ naujienlaiškius.'
        : this.prop === 'Pegasas'
        ? 'Sutinku gauti Pegaso naujienlaiškius.'
        : this.prop === 'Corepetitus'
        ? 'Sutinku gauti Corepetitus naujienlaiškius.'
        : this.language === 'LV' && this.prop === 'Akropolis'
        ? 'Piekrītu saņemt AKROPOLE iepirkšanās centru jaunumus e-pastā.'
        : this.language === 'LV'
        ? 'Es piekrītu saņemt Unisend.lv jaunumus.'
        : 'Nõustun saama Unisend.ee uudiskirju.'
    }
    </div>
      </div>
      


        <div class="boomio-privacyCheckbox" id="boomio-privacyCheckbox" style="cursor:${
          this.prop === 'Fpro' ? 'auto' : 'pointer'
        } ;left: 34px; top: ${
      this.prop === 'Akropolis' && this.language === 'LV'
        ? '380px'
        : this.prop === 'Akropolis'
        ? '360px'
        : '385px'
    }; position: absolute; justify-content: center; align-items: center; gap: 5px; display: inline-flex">
      <div  style=" display: ${
        this.prop === 'Fpro' || this.prop === 'Fantazijos' ? 'none' : 'inline-flex'
      };cursor: ${this.prop === 'Fpro' ? 'auto' : 'pointer'};">
            <img id="privacyCheckboxImg" src="${
              privacyCheckboxChecked ? uncheckIcon : ''
            }" style="width: 20px; height: 20px;">
        </div>
        <div style="color: ${'white'}; font-size: ${
      this.isMobile
        ? this.prop === 'Akropolis' && this.language === 'LV'
          ? '8px'
          : '10px'
        : this.prop === 'Eurovaistine'
        ? '12px'
        : this.prop === 'Akropolis' && this.language === 'LV'
        ? '10px'
        : '12px'
    }; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Montserrat'
    } ;  font-weight: 400; width:${
      this.prop?.includes('Gamtos Ateitis') ? '320px' : '350px'
    };word-wrap: break-word;line-height:14px;text-align:start;">${
      this.prop === 'Fpro'
        ? 'By continuing, I agree to receive FPRO newsletters.'
        : this.prop === 'Pieno Žvaigždės'
        ? 'Sutinku su „Pieno žvaigždės“'
        : this.prop === 'Pegasas'
        ? 'Sutinku su Pegaso'
        : this.prop === 'Barbora'
        ? 'Sutinku gauti Barboros naujienas.'
        : this.prop?.includes('Gamtos Ateitis')
        ? 'Sutinku su Gamintojų ir importuotojų asociacijos „Gamtos ateitis“ '
        : this.prop === 'Unisend' && this.language === 'LV'
        ? `Esmu izlasījis <a style="align-self: stretch; text-align: center; color: white; font-size: 10px; font-family:Georama; font-weight: 600; line-height: 21.60px; word-wrap: break-word;"><a onclick="event.stopPropagation();" target="_blank" ${'href=https://unisend.lv/spelesnoteikumi/'} style="color:white;text-decoration: underline;"> spēles noteikumus</a>  un piekrītu tiem.`
        : this.prop === 'Unisend' && this.language === 'EE'
        ? `Olen <a style="align-self: stretch; text-align: center; color: white; font-size: 10px; font-family:Georama; font-weight: 600; line-height: 21.60px; word-wrap: break-word;"><a onclick="event.stopPropagation();" target="_blank" ${'href=https://unisend.ee/unisendi-mangureeglid/'} style="color:white;text-decoration: underline;"> mängureeglitega</a> tutvunud ja nõustun nendega.`
        : this.prop === 'Fantazijos' && this.language === 'LV'
        ? 'Turpinot spēlēt, es piekrītu saņemt yesyes.lv jaunumus.'
        : this.prop === 'Fantazijos' && this.language === 'RU'
        ? 'Продолжая играть, я соглашаюсь получать информационную рассылку yesyes.lv.'
        : this.prop === 'Fantazijos' && this.language === 'EE'
        ? 'Mängu jätkates nõustun yesyes.ee uudiskirja saamisega.'
        : this.prop === 'Fantazijos' && this.prop === 'Fantazijos'
        ? 'Sutinku gauti Fantazijos.lt naujienlaiškius.'
        : this.language === 'ES' || this.language === 'ET'
        ? 'Acepto recibir noticias y actualizaciones.'
        : this.prop === 'Makalius'
        ? 'Sutinku gauti Makaliaus naujienlaiškius.'
        : this.prop === 'Ikea'
        ? 'Sutinku su'
        : this.prop === 'SaludSA'
        ? 'Acepto recibir boletines de SaludSA.'
        : this.prop === 'Eurovaistine'
        ? 'Piekrītu Euroaptiekas'
        : this.prop === 'Akropolis' && this.language === 'LV'
        ? `Piekrītu <a style="align-self: stretch; text-align: center; color: white; font-size: 10px; font-family:Georama; font-weight: 600; line-height: 21.60px; word-wrap: break-word;"><a onclick="event.stopPropagation();" target="_blank" ${'href=https://www.akropoleriga.lv/lv/jauns/spele-un-laime-kfc-balvas-katru-dienu-speles-noteikumi/41828'} style="color:white;text-decoration: underline;"> spēles noteikumiem un privātuma politikai</a>. `
        : this.prop === 'Akropolis'
        ? 'Sutinku gauti PPC AKROPOLIS naujienas.'
        : this.prop === 'Corepetitus'
        ? 'Sutinku su'
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
      this.prop !== 'Unisend' &&
      this.prop !== 'Akropolis' &&
      this.prop !== 'SaludSA' &&
      this.prop !== 'LemonGym'
        ? `<a onclick="event.stopPropagation();" target="_blank" href="${
            this.prop === 'Barbora' ||
            this.prop === 'Fpro' ||
            this.prop === 'Fantazijos' ||
            this.prop === 'LemonGym'
              ? 'https://www.barbora.lt/info/privatumo-politika'
              : this.prop === 'Ikea'
              ? 'https://www.ikea.lt/lt/privacy-policy'
              : this.prop === 'Corepetitus'
              ? 'https://www.corepetitus.lt/privatumo-politika'
              : this.prop === 'Eurovaistine'
              ? 'https://www.e-euroaptieka.lv/privatuma-politika'
              : this.prop === 'Pieno Žvaigždės'
              ? 'https://pienozvaigzdes.lt/lt/content/18-privatumo-politika'
              : this.prop === 'Pegasas'
              ? 'https://www.pegasas.lt/c/privatumas-ir-slapuku-veikla/'
              : this.prop.includes('Gamtos Ateitis')
              ? 'https://gamtosateitis.lt/privatumo-politika/'
              : 'https://penkisezonai.lt/lt-lt/privatumo-politika.html'
          }" style="color:white;text-decoration: underline; font-size: ${
            this.isMobile ? '10px' : this.prop === 'Eurovaistine' ? '12px' : '12px'
          }; ">${
            this.prop === 'Ikea'
              ? 'IKEA privatumo politika'
              : this.prop === 'Eurovaistine'
              ? 'privātuma politikai'
              : this.prop === 'Corepetitus'
              ? 'Corepetitus privatumo politika'
              : 'privatumo politika'
          }.</a> `
        : ''
    }
    </div>
      </div>

      
        <div style="margin-right:20px;display:${
          this.prop === 'Akropolis' ? 'block' : 'none'
        } ;left: 34px; top:${
      this.language === 'LV' ? '404px' : '384px'
    }; position: absolute; justify-content: start;line-height:14px; align-items: start; gap: 5px;font-size:8px;color:white;text-align:start;line-height:8px;">
        ${
          this.language === 'LV'
            ? ``
            : `Jūsų sutikimu Jūsų el. pašto duomenis AKROPOLIS GROUP, UAB tvarkys laimėtojų nustatymo ir naujienlaiškių siuntimo tikslu. Sutikimą galėsite bet kuriuo metu atšaukti, spaudžiant nuorodą gautame naujienlaiškyje arba kreipiantis <a style="text-decoration: underline;color:white;"> privatumas@akropolis.lt</a>. Plačiau <a onclick="event.stopPropagation();" target="_blank" ${'href=www.akropolis.lt'} style="text-decoration: underline;color:white;">www.akropolis.lt</a>.`
        } 

</div>
   
   
        <div id="competition-checkbox-error" style="padding-top:1px;height:${
          this.language === 'LV' ? '14px' : '28px'
        } ;margin-right:30px;display:${
      this.prop === 'Akropolis' || this.prop === 'Eurovaistine' ? 'block' : 'none'
    } ;left: 34px; top:${
      this.prop?.includes('Gamtos Ateitis') ? '435px' : this.language === 'LV' ? '440px' : '420px'
    }; position: absolute; justify-content: start; align-items: start; gap: 5px;font-size:${
      this.isMobile ? '9px' : '10px'
    };color:${
      this.prop === 'Akropolis' && this.language === 'LV' ? '#FFD833' : '#D8000C'
    };text-align:start;line-height:8px;">
</div>

        <div id="competition-checkbox-error2" style="padding-top:1px;height:${
          this.language === 'LV' ? '14px' : '28px'
        } ;margin-right:30px;display:${
      this.prop === 'Akropolis' || this.prop === 'Eurovaistine' ? 'block' : 'none'
    } ;left: 34px; top:${
      this.prop?.includes('Gamtos Ateitis') ? '435px' : this.language === 'LV' ? '440px' : '420px'
    }; position: absolute; justify-content: start; align-items: start; gap: 5px;font-size:${
      this.isMobile ? '9px' : '10px'
    };color:${
      this.prop === 'Akropolis' && this.language === 'LV' ? '#FFD833' : '#D8000C'
    };text-align:start;line-height:8px;">
</div>




      <div style="width: calc(100% - 70px); height: 21px; left: 35px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '178px' : '258px'
      }; position: absolute;text-align:start;z-index:99999;color: ${
      this.prop === 'Akropolis' && this.language === 'LV' ? '#FFD833' : '#D8000C'
    };
      font-family: Montserrat;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.42px;
      border-radius:4px;
      padding:1px 8px 1px 8px;
      " id="competition-name-error"></div>


      <div style="width: calc(100% - 70px); height: 21px; left: 35px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '258px' : '338px'
      } ; position: absolute;text-align:start;z-index:99999;color: ${
      this.prop === 'Akropolis' && this.language === 'LV' ? '#FFD833' : '#D8000C'
    };
      font-family: Montserrat;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.42px;
      border-radius:4px;
      padding:1px 8px 1px 8px;
      " id="competition-email-error"></div>

      <div style="width: calc(100% - 70px); height: 21px; left: 35px; top:350px ; position: absolute;text-align:start;z-index:99999;display:${
        this.prop === 'SaludSA' ? 'block' : 'none'
      };color: ${this.prop === 'Akropolis' && this.language === 'LV' ? '#FFD833' : '#D8000C'};
      font-family: Montserrat;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.42px;
      border-radius:4px;
      padding:1px 8px 1px 8px;
      " id="competition-phone-error"></div>

      <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '207px' : '287px'
      }; position: absolute; background: ${
      this.prop === 'Barbora' ||
      this.prop === 'LemonGym' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos'
        ? 'white'
        : 'white'
    }; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'}"></div>



      <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '124px' : '204px'
      }; position: absolute; background: ${
      this.prop === 'Barbora' ||
      this.prop === 'Fpro' ||
      this.prop === 'Fantazijos' ||
      this.prop === 'LemonGym'
        ? 'white'
        : 'white'
    }; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'}"></div>
      <input id="boomio-competition-email-input-field" class="boomio-competition-email-input-field" type="text" style="box-shadow:none;padding:0px;border:none;width:calc(100% - 94px);position: absolute; left: 51px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '219px' : '299px'
      };height:30px; opacity: 0.60;background-color: ${
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
    } ; font-size: 18px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Georama'
    }; font-weight: 500; line-height: 24px; word-wrap: break-word" placeholder="${
      this.language === 'LV'
        ? 'Spēlētāja e-pasts'
        : this.language === 'RU'
        ? 'Емейл игрока'
        : this.language === 'EE'
        ? 'Mängija e-post'
        : this.prop === 'Fpro'
        ? 'Email address'
        : this.prop === 'Ikea'
        ? 'El. pašto adresas'
        : this.prop === 'Eurovaistine'
        ? 'Spēlētāja e-pasts'
        : this.language === 'ES' || this.language === 'ET'
        ? 'Email'
        : this.prop === 'SaludSA'
        ? 'Correo electrónico'
        : 'Elektroninio pašto adresas'
    }">
      <input id="boomio-competition-name-input-field" class="boomio-competition-name-input-field" type="text" style="box-shadow:none;padding:0px;border:none;width:calc(100% - 94px);position: absolute; left: 51px; top: ${
        this.prop === 'SaludSA' || this.prop === 'Pegasas' ? '135px' : '215px'
      };height:30px; opacity: 0.60;background-color: ${
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
    } ; font-size: 18px; font-family:${
      this.prop === 'Ikea' ? 'Noto Sans' : 'Georama'
    }; font-weight: 500; line-height: 24px; word-wrap: break-word" placeholder="${
      this.language === 'LV'
        ? 'Spēlētāja lietotājvārds'
        : this.language === 'RU'
        ? 'Псевдоним игрока'
        : this.language === 'EE'
        ? 'Mängija hüüdnimi'
        : this.prop === 'Fpro'
        ? 'Players full name'
        : this.prop === 'Ikea'
        ? 'Žaidėjo vardas'
        : this.prop === 'Eurovaistine'
        ? 'Spēlētāja lietotājvārds'
        : this.language === 'ES' || this.language === 'ET'
        ? 'Nickname del jugador'
        : this.prop === 'SaludSA'
        ? 'Nombre de usuario'
        : 'Žaidėjo slapyvardis'
    }">
      <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: ${'290px'}; position: absolute; background: ${'white'}; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'};display:${
      this.prop === 'SaludSA' || this.prop === 'Pegasas' ? 'block' : 'none'
    }"></div>
          <div style="width: calc(100% - 54px); height: 45px; left: 28px; top: ${'290px'}; position: absolute; background: ${'white'}; box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25) inset; border-radius: 35px; border: ${'1px rgba(164,164,164,0.9) solid'};display:${
      this.prop === 'SaludSA' || this.prop === 'Pegasas' ? 'block' : 'none'
    }"></div>
    <input id="boomio-competition-phone-input-field" inputmode="tel" 
 class="boomio-competition-phone-input-field" type="text" style="box-shadow:none;padding:0px;border:none;width:calc(100% - 94px);position: absolute; left: 51px; top: ${'300px'};height:30px; opacity: 0.60;background-color: ${'white'}; text-align: start; color:  ${'#473F4E'} ; font-size: 18px; font-family:${'Georama'}; font-weight: 500; line-height: 24px; word-wrap: break-word;display:${
      this.prop === 'SaludSA' || this.prop === 'Pegasas' ? 'block' : 'none'
    }" placeholder="${this.prop === 'SaludSA' ? 'Número de teléfono' : 'Telefono numeris'}">

    `;

    return containerDiv;
  }
}
