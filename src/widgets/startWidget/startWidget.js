import {
  boomioService,
  DragElement, AnimationService,
} from '../../services';

/// /////Constants Icons/////////
const closeIcon = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/main/images/startWidget/close.png?raw=true';
const gifIcon = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/main/images/startWidget/gift.png?raw=true';
const couponsDiscountIcon = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/main/images/startWidget/couponsDiscount.png?raw=true';
const discountIcon = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/main/images/startWidget/discount.png?raw=true';
const gameIcon = 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/main/images/startWidget/game.png?raw=true';


class StartWidget {
  constructor() {
    this.startAnimation();
  }

  startAnimation = () => {
    const size = 200;
    const { clientWidth, clientHeight } = document.documentElement;

    const posx = (Math.random() * (clientWidth - size)).toFixed();
    const posy = (Math.random() * (clientHeight - (size * 1.5))).toFixed();

    const animationEl = new AnimationService({
      posx,
      posy,
      size
    })

    new DragElement(animationEl);

    function closeModalDiscount() {
      boomioService.signal('START_CLOSE');
      animationEl.remove();
    }


    animationEl.innerHTML = `<div style="background-color: rgb(255, 255, 255); width: 375px; height: fit-content; border-radius: 10px; padding: 0px;">
	<style> @import url('https://fonts.googleapis.com/css?family=Montserrat');*{font-family: 'Montserrat' ;font-style: normal;}.fontColor{background: -webkit-linear-gradient(#FF3183, #8559F3);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
	</style>
	
	<div class="coupon_user_gets_modal" style="padding: 40px 32px;">
	   <div class="close_div" >
	   <img src="${closeIcon}" alt="img not find" id="close_div_img">  
	   </div>
	   <h1>Hey !</h1>
	   <p>We prepared some rewards for you!</p>
	   <div class="coupon_user_gets_modal_img_div">
			<img src="${gifIcon}" alt="img not find">  
			<img src="${couponsDiscountIcon}" alt="img not find">  
			<img src="${discountIcon}" alt="img not find">  
			<img src="${gameIcon}" alt="img not find">    
	   </div>
	   <p>Search for your favourite products and be suprised!</p>
	   <div class="center_text">
		  <div id="letGoToBtn"
		   class="coupon_user_gets_modal_button coupon_button"><span class="coupon_user_gets_modal_button">Let’s go</span></div>
	   </div>
	</div>
 </div>`;
    document.getElementById('close_div_img').onclick = closeModalDiscount;


    const letGoBtn = document.getElementById('letGoToBtn');
    letGoBtn.onclick = () => {
      boomioService.signal('START_OK');
      animationEl.remove();
    };
  };
}

export const startStartWidget = () => {
  require('./styles.css');
  new StartWidget();
};
