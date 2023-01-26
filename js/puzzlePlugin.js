const frameSvg = 'https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/frame.png?raw=true';

const puzzlesCoordinateForMobile = [
    { top: '0px', left: '0px', width: '62.84px', height: '83.33px' },
    { top: '0px', left: '47px', width: '83.3px', height: '66.86px' },
    { top: '63px', left: '0px', width: '86.3px', height: '69.86px' },
    { top: '44px', left: '62px', width: '67.84px', height: '88.3px' },
];

const puzzlesCoordinateForDesktop =  [
    { top: '0px', left: '0px', width: '89.84px', height: '112.33px' },
    { top: '0px', left: '67px', width: '112.3px', height: '89.86px' },
    { top: '87px', left: '0px', width: '112.3px', height: '89.86px' },
    { top: '64px', left: '89px', width: '89.84px', height: '112.33px' },
]

const puzzlesCoordinate = isMobileDevice ? puzzlesCoordinateForMobile : puzzlesCoordinateForDesktop;
const puzzleImagesList = [
    'https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-1.png?raw=true',
    'https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-2.png?raw=true',
    'https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-3.png?raw=true',
    'https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-4.png?raw=true',
];

const puzzleWidgetSize = isMobileDevice ? 135 : 185;

let isPuzzleWidgetDisplayed = false;

const mainCss = `
[draggable=true] {
    cursor: move;
}

.boomie-preview-mobile {
    width: 100px;
}
#boomio--qr {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
}
.custom-close-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -16px;
    font-size: 13px;
    top: -16px;
    color: #000;
    cursor: pointer;
    background-color: lightgray;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    font-size: 10px;
    opacity: 0.45;
}
.boomio--animation__wrapper:empty {
    display: block !important;
}
.boomio--animation__wrapper {
    text-align: center;
    position: fixed;
    z-index: 9999;
    visibility: visible;
    background-size: cover;
    opacity: 1;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
#widgetPreview {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: -55px;
    cursor: pointer;
}
#puzzle-widget {
    border-radius: 10px;
    background-size: contain;
    position: fixed;
    z-index: 1000;
    left: 20px;
    top: 20px;
}
.boomio--puzzle-widget-text {
    width: 100%;
    z-index: 100000;
    position: absolute;
    cursor: pointer;
    color: white;
    font-weight: bold;
    top: 50px;
    font-size: ${isMobileDevice ? 20 : 36}px;
    text-align: center;
}
.coupon_discount_modal .coupon_info h3 {
    background: -webkit-linear-gradient(#FF3183, #8559F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 30px;
}

.coupon_discount_modal .coupon_info p {
    padding: 0;
    font-size: 13px;
    font-weight: 600;
    margin: 0;
}


.coupon_discount_modal .coupon_preview_card_footer {
    margin-top: 0px;
}
.coupon_discount_modal .coupon_preview_card_footer a {
    color:black
}

.coupon_discount_modal .coupon_preview_card_footer p {
    font-size: 14px;
}

.coupon_preview_card_footer .btn-content {
    width: 100%;
    border: none;
    padding: 1px;
    height: 47px;
    border: double 2px transparent;
    border-radius: 24px;
    background-image: linear-gradient(#e8dff7, #fee0e7), linear-gradient(39.06deg, #FFC24F 8.58%, #FF3183 32.32%, #8559F3 60.82%, #657BEA 66.73%, #34B0DC 77.01%, #15D1D3 84.73%, #09DDD0 88.95%);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.coupon_preview_card_footer .btn-content img {
    width: 30px;
}

.coupon_preview_card_footer .btn-content .small-font {
    font-weight: 500;
    font-size: 14px;
    text-align: left;
}

.coupon_preview_card_footer .appstore-img img,
.coupon_preview_card_footer .playstore-img img {
    width: 150px;
}
.coupon_preview_card_footer .btn-text-group {
    line-height: 14px;
    font-size: 14px;
}
.coupon_preview_card_footer .btn-content {
    cursor: pointer;
}
.footer-dec {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 11px;
    line-height: 21px;
}
.coupon_discount_modal .coupon_preview_card_info {
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.coupon_discount_modal .coupon__preview__card {
    box-shadow: 10px 11px 5px -5px rgb(195 195 195 / 35%);
}

.coupon__preview__card {
    position: relative;
    width: 100%;
    height: 282px;
    border: double 2px transparent;
    border-radius: 24px;
    background-image: linear-gradient(#FBFAFC, #FBFAFC), linear-gradient(39.06deg, #FFC24F 8.58%, #FF3183 32.32%, #8559F3 60.82%, #657BEA 66.73%, #34B0DC 77.01%, #15D1D3 84.73%, #09DDD0 88.95%);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.coupon__preview__card::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -18px;
    /* background-color: #fff; */
    width: 32px;
    height: 37.6px;
    transform: translate(0%, -50%);
    border-radius: 50%;
    border: 2px solid transparent;
    background-image: linear-gradient(#fff, #fff), linear-gradient(228.29deg, #FD5A97 10.56%, #FB6E80 86.04%);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.coupon__preview__card__after {
    position: absolute;
    content: "";
    width: 19px;
    top: 50%;
    left: 0px;
    height: 50px;
    background-color: #fff;
    transform: translate(-111%, -50%);
}

.coupon__preview__card::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -18px;
    background-color: #fff;
    width: 32px;
    height: 37.6px;
    transform: translate(0%, -50%);
    border-radius: 50%;
    border: 2px solid transparent;
    background-image: linear-gradient(#fff, #fff), linear-gradient(180deg, #5CB1E0 0%, #7E85E9 100%);
    background-clip: content-box, border-box;
}

.coupon__preview__card__befor {
    position: absolute;
    content: "";
    width: 19px;
    top: 50%;
    right: 0px;
    height: 50px;
    z-index: 1;
    background-color: #fff;
    transform: translate(111%, -50%);
}

.coupon_discount_modal .coupon__preview__card__header {
    padding: 0;
    text-align: center;
}

.coupon_discount_modal .coupon__preview__card__header h1 {
    text-transform: uppercase;
    margin-bottom: 14px;
}

.coupon_discount_modal .coupon__preview__card {
    height: auto;
}

.coupon_discount_modal .coupon_info {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.coupon_discount_modal .coupon_preview_card_info {
    cursor: pointer;
}



.coupon_discount_modal .coupon__preview__card {
    box-shadow: 10px 11px 5px -5px rgba(195, 195, 195, 0.35);
}

.coupon_discount_modal .coupon_info h3 {
    margin: 0;
    padding: 0;
}

.coupon_discount_modal .coupon_info h3:first-child {
    font-size: 40px;
    background: -webkit-linear-gradient(#FF3183, #8559F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    line-height: 37px;
}

`;

/////////////

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const assignStyle = (style, properties) => {
    Object.assign(style, properties);
}

////////Puzzle Class ////////////
class Puzzle extends LocalStorageConfig {
    constructor() {
        super();
        boomio.signal('START_OK')
        this.isPrewiewDisplayed = false;
        this.config = super.getDefaultConfig();
        this.isCloseIconAddedToWidget = false;
        this.addStyles(mainCss)
    }
    addStyles = (cssRules) => {
        const style = document.createElement('style');
        style.setAttribute('id', 'boomio--stylesheet');
        document.getElementsByTagName('head')[0].appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = cssRules;
        } else {
            style.appendChild(document.createTextNode(cssRules));
        }
    };

    addSmallWidgetPreview = (qrSize = 50) => {
        const widgetPreview = document.createElement('div');
        widgetPreview.setAttribute('id', 'widgetPreview')
        this.puzzleWidget.appendChild(widgetPreview)

        if (isMobileDevice) {
            widgetPreview.innerHTML = `
                <div class="coupon_preview_card_footer">
                    <div class="btn-content d-flex align-items-center justify-content-center" style="height: 40px; width: 130px">
                        <img src="${dotImage}" alt="img not find">
                        <div class="d-flex flex-column btn-text-group ml-2"><small class="small-font">Open</small>
                        <b>Boomio app</b>
                        </div>
                    </div>
                </div>
				`
        } else  {
            widgetPreview.style.background = 'white'
            if (qrSize === 50) {
                widgetPreview.style.left = '68px'
            }
            new QRCode('widgetPreview', {
                text: this.config.qrcode,
                width: qrSize,
                height: qrSize,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H,
            });
        }

        widgetPreview.addEventListener('click', () => {
            if (isMobileDevice) {
                window.open(this.config.app_url)
            } else {
                widgetPreview.remove();
                this.addSmallWidgetPreview(qrSize === 50 ? 180 : 50)
            }
        }, { once: true })

        this.isPrewiewDisplayed = true;

    }

    addImageTPuzzleWidget = () => {
        this.puzzleWidget.style.backgroundImage = `url(${frameSvg})`
    }

    showPuzzleWidget = () => {
        const { x_position, y_position } = this.config
        const puzzleWidget = document.createElement('div');
        const widgetSmallPreview = document.createElement('div');
        puzzleWidget.setAttribute('id', 'puzzle-widget');
        puzzleWidget.appendChild(widgetSmallPreview);
        if (x_position && y_position) {
            puzzleWidget.style.left = `${x_position}px`;
            puzzleWidget.style.top = `${y_position}px`
        };
        this.puzzleWidget = puzzleWidget;
        const size = `${puzzleWidgetSize}px`;
        assignStyle(puzzleWidget.style, {
            width: size,
            height: size
        })


        document.body.appendChild(puzzleWidget);
        if (this.config.puzzles_collected > 0) {
            this.addCloseIconToElement(puzzleWidget)
            this.isCloseIconAddedToWidget = true;
            this.addSmallWidgetPreview()
        }
        this.drageble = new DragElement(this.puzzleWidget)
        isPuzzleWidgetDisplayed = true;
    }

    drawPuzzlesByCollectedCount = () => {
        for (let i = 0; i < this.config.puzzles_collected; i++) {
            const backgroundImage = `url(${puzzleImagesList[i]})`;
            const { top, left, width, height } = puzzlesCoordinate[i];
            const animationEl =  document.createElement('div')
            animationEl.setAttribute('id',`boomio--animation-${i}`);
            animationEl.classList.add('boomio--animation__wrapper');
            assignStyle(animationEl.style, {
                top,
                left,
                width,
                height,
                backgroundImage,
                position: 'absolute'
            })

            this.puzzleWidget.appendChild(animationEl);
        }
    }

    onPuzzleClick = (e) => {
        if (!this.puzzleWidget) {
            this.showPuzzleWidget()
            setTimeout(() => {
                this.addImageTPuzzleWidget()
            }, 1000)
        }
        const puzzle = e.target;
        const { offsetTop , offsetLeft } = puzzle;

        document.body.removeChild(puzzle)
        this.puzzleWidget.appendChild(puzzle)

        puzzle.classList.remove('boomio--animation__wrapper--initial')
        puzzle.style.position = 'absolute';

        const { offsetTop: parentTop, offsetLeft: parentLeft } = puzzle.offsetParent;

        assignStyle(puzzle.style, {
            left: `${offsetLeft - parentLeft}px`,
            top: `${offsetTop - parentTop}px`
        })

        e.stopPropagation();

        setTimeout(() => {
            this.startPuzzleMoving(puzzle)
        }, 100)
        setTimeout(() => {
            if (this.isCloseIconAddedToWidget) return;
            this.addCloseIconToElement(this.puzzleWidget)
            this.isCloseIconAddedToWidget = true;
        }, 1000)
    }

    getAnimateFunction = (nr) => {
        const animate = (animation) => (el) => {
            el.classList.add(`boomio--animation--${animation}`);
        };
        const animArr = [
            animate('moveRight'),
            animate('moveLeft'),
            animate('moveDown'),
            animate('moveUp'),
            animate('fadeIn'),
            animate('moveDiagonalDown'),
            animate('rotateRight'),
            animate('zoomIn'),
            animate('skewLeft'),
            animate('moveDiagonalUp'),
            animate('tada'),
            animate('lightSpeedInLeft'),
            animate('rollIn'),
        ];

        return animArr[nr]
    }

    startAnimation = () => {
        const {
            qrcode,
            animation,
            puzzles_collected,
        } = this.config;
        // if ((render_count % appearing_puzzle_nr) !== 0) return;
        const puzzleSize = 100;

        const dash = '-';
        const pos = qrcode.indexOf(dash);
        if (pos != -1) {
            this.config.qrcode = qrcode.substring(0, pos);
        }

        const { width, height } =  puzzlesCoordinate[puzzles_collected];
        const animationEl = document.createElement('div');
        animationEl.setAttribute('id', `boomio--animation-${puzzles_collected}`);
        animationEl.classList.add('boomio--animation__wrapper');
        animationEl.classList.add('boomio--animation__wrapper--initial');
        assignStyle(animationEl.style, {
            width,
            height,
            backgroundImage: `url(${puzzleImagesList[puzzles_collected]})`
        })
        animationEl.classList.remove('boomio--qr');
        // this.addCloseIconToElement(animationEl);

        animationEl.addEventListener('click',  this.onPuzzleClick, { once: true });
        document.body.appendChild(animationEl);

        const systemFont =
            'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue';
        const duration = '1000ms';
        const easingBack = 'cubic-bezier(0.18, 0.89, 0.32, 1.28)';
        const easing = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

        const { clientWidth, clientHeight } = document.documentElement;

        const posx = getRandomArbitrary(puzzleWidgetSize + 25, clientWidth - puzzleSize - 10).toFixed();
        const posy = getRandomArbitrary(puzzleWidgetSize + 25, clientHeight - puzzleSize - 10).toFixed();

        const initialPosition = {
            x: animationEl.clientWidth + parseInt(posy),
            nx: -1 * (animationEl.clientWidth + parseInt(posy)),
            y: animationEl.clientHeight + parseInt(posx),
            ny: -1 * (animationEl.clientHeight + parseInt(posx)),
        };
        const css = `
		.boomio--animation__wrapper {
			text-align: center;
			position: fixed;
			z-index: 9999;
			left: ${posx}px;
			top: ${posy}px;
			visibility: visible;
			background-size: cover;
			opacity: 1;
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
		}
        .boomio--animation__wrapper {
          outline: none !important;
        }
		.boomio--animation__wrapper--initial {
			width: ${puzzleSize}px;
			cursor: pointer;
			transition: transform 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
			animation-duration: ${duration};
			animation-timing-function: ${easing};
			animation-iteration-count: 1;
		}

		.boomio--animation__wrapper--initial:hover {
			transform: scale(1.1);
		}

		// .boomio--animation__wrapper--initial:active {
		// 	transform: scale(.9);
		// }

		.boomio--animation__wrapper--qr {
			animation-name: boomio-animate-qr;
			animation-duration: 300ms;
			animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
			animation-fill-mode: forwards;
			animation-iteration-count: 1;
			background-color: #ffffff;
			box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px, rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
			// padding: 16px;
			border-radius: 7px;
		}

		.boomio--animation__heading {
			color: #000;
			font: 22px/1.2 ${systemFont};
			margin: 0 0 16px;
		}

		h4.boomio--animation__heading {
			font-size: 16px;
			opacity: .7;
			margin-top: -8px;
		}

		.boomio--animation--moveRight { animation-name: boomio-animate--moveRight; animation-timing-function: ${easingBack}; }
		.boomio--animation--moveLeft { animation-name: boomio-animate--moveLeft; animation-timing-function: ${easingBack}; }
		.boomio--animation--moveUp { animation-name: boomio-animate--moveUp; }
		.boomio--animation--moveDown { animation-name: boomio-animate--moveDown; }
		.boomio--animation--moveDiagonalDown { animation-name: boomio-animate--moveDiagonalDown; }
		.boomio--animation--moveDiagonalUp { animation-name: boomio-animate--moveDiagonalUp; }
		.boomio--animation--fadeIn { animation-name: boomio-animate--fadeIn; }
		.boomio--animation--zoomIn { animation-name: boomio-animate--zoomIn; animation-timing-function: ${easingBack}; }
		.boomio--animation--rotateRight { animation-name: boomio-animate--rotateRight; animation-timing-function: ${easingBack}; }
		.boomio--animation--skewLeft { animation-name: boomio-animate--skewLeft; }
		.boomio--animation--tada { animation-name: boomio-animate--tada; }
		.boomio--animation--lightSpeedInLeft { animation-name: boomio-animate--lightSpeedInLeft; }
		.boomio--animation--rollIn { animation-name: boomio-animate--rollIn; }

		@keyframes boomio-animate-qr {
			0% {
				transform: scale(0);
			}
			100% {
				transform: scale(1);
			}
		}

		@keyframes boomio-animate--rollIn {
			from {
				opacity: 0;
				transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
			}
		
			to {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}
		
		@keyframes boomio-animate--lightSpeedInLeft {
			from {
				transform: translate3d(${initialPosition.nx}px, 0, 0) skewX(30deg);
				opacity: 0;
			}
		
			60% {
				transform: skewX(-20deg);
				opacity: 1;
			}
		
			80% {
				transform: skewX(5deg);
			}
		
			to {
				transform: translate3d(0, 0, 0);
			}
		}
		
		@keyframes boomio-animate--tada {
			from {
				transform: scale3d(1, 1, 1);
			}
		
			10%,
			20% {
				transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
			}
		
			30%,
			50%,
			70%,
			90% {
				transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
			}
		
			40%,
			60%,
			80% {
				transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
			}
		
			to {
				transform: scale3d(1, 1, 1);
			}
		}

		@keyframes boomio-animate--moveRight {
			0% {
				transform: translateX(${initialPosition.nx}px);
			}
			100% {
				transform: translateX(0);
			}
		}

		@keyframes boomio-animate--moveLeft {
			0% {
				transform: translateX(${initialPosition.x}px);
			}
			100% {
				transform: translateX(0);
			}
		}

		@keyframes boomio-animate--moveDown {
			0% {
				transform: translateY(${initialPosition.ny}px);
			}
			100% {
				transform: translateY(0);
			}
		}
		
		@keyframes boomio-animate--moveUp {
			0% {
				transform: translateY(${initialPosition.y}px);
			}
			100% {
				transform: translateY(0);
			}
		}

		@keyframes boomio-animate--fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		
		@keyframes boomio-animate--moveDiagonalDown {
			0% {
				transform: translate(${initialPosition.nx}px, ${initialPosition.ny}px);
			}
			100% {
				transform: translate(0, 0);
			}
		}
		
		@keyframes boomio-animate--moveDiagonalUp {
			0% {
				transform: translate(${initialPosition.nx}px, ${initialPosition.y}px);
			}
			100% {
				transform: translate(0, 0);
			}
		}

		@keyframes boomio-animate--rotateRight {
			0% {
				transform: rotate(360deg);
			}
			100% {
				transform: rotate(0deg);
			}
		}

		@keyframes boomio-animate--skewLeft {
			0% {
				transform: skew(60deg, 60deg);
			}
			100% {
				transform: skew(0deg, 0deg);
			}
		}

		@keyframes boomio-animate--zoomIn {
			0% {
				transform: scale(0);
			}
			100% {
				transform: scale(1);
			}
		}
		.align-items-center {
            align-items: center !important;
        }

        .justify-content-center {
            justify-content: center !important;
        }

        .flex-column {
            flex-direction: column !important;
        }

        .d-flex {
            display: flex !important;
        }

        .pt-2 {
            padding-top: 0.5rem !important;
        }
	
        .coupon__preview__body {
            padding: 40px 20px;
        }

		@import url('https://fonts.googleapis.com/css?family=Montserrat');
          
        .product-design-bg-2 *{
            font-family: 'Montserrat' ;
            font-style: normal;
        }
        .coupon_discount_modal .coupon__preview__card__header h1 {
            text-transform: uppercase;
            margin-bottom: 14px;
        }

        .coupon__preview__card__header h1 {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #473F4E;
            margin: 0px;
        }

        .product-design-bg-2 {
            background-color: #ffffff;
            width: ${isMobileDevice ? '100%' : '375px'};
            height: -moz-fit-content;
            height: fit-content;
            padding: 20px;
            border-radius: 10px;
            padding: 0;
        }
		`;

        this.addStyles( css);
        const animFunc = this.getAnimateFunction(animation);
        animFunc(animationEl);
        this.animationEl = animationEl;
    };

    showQR = () => {
        boomio.signal('PUZZLE_CODE_REVEALED')
        document.body.removeChild(this.puzzleWidget)
        const { qrcode } = this.config;
        const qrEl = document.createElement('div');

        qrEl.setAttribute('id', 'boomio--qr');
        const { posX, posY} = this.drageble.getQrCodePosition(
            qrEl,
            this.drageble.x_position,
            this.drageble.y_position
        )
        qrEl.style.left = `${posX}px`;
        qrEl.style.top = `${posY}px`;

        qrEl.innerHTML = this.qrCodeInnerHtml();

        document.body.append(qrEl);
        new QRCode('qrcodeShowHtml', {
            text: qrcode,
            width: 300,
            height: 300,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
        const coupon = document.getElementById('coupon_div');
        const qrcodeShow = document.getElementById('qrcodeShow');
        qrcodeShow.style.display = isMobileDevice ? 'none' : 'block';
        coupon.style.display = isMobileDevice ? 'block' : 'none';
        document.getElementById('close').onclick = (e) => {
            const elementRemove = document.getElementById('boomio--qr');
            elementRemove.remove();
            e.stopPropagation();
        };
        if (isMobileDevice) return;
        qrcodeShow.onclick = () => {
            coupon.style.display = 'block'
            qrcodeShow.style.display = 'none'
        }
        coupon.onclick = () => {
            qrcodeShow.style.display = 'block'
            coupon.style.display = 'none'
        }
    }

    addWidgetText = () => {
        const widgetText = document.createElement('div');
        widgetText.classList.add('boomio--puzzle-widget-text')
        widgetText.innerText = this.config.custom_text;
        this.puzzleWidget.appendChild(widgetText)
    }

    addPuzzleToWidget = () => {
        this.puzzleWidget.style.backgroundImage = ` url(${frameSvg})`;
        if (!this.isPrewiewDisplayed) {
            this.addSmallWidgetPreview()
        }
        if (this.config.puzzles_collected >= 4) {
            this.addWidgetText()
            setTimeout(() => {
                this.showQR()
            }, 2000)
        }
        boomio.signal(`PUZZLE${this.config.appearing_puzzle_nr}_CLICK`)
    }

    startPuzzleMoving = (element) =>  {
        let { puzzles_collected } = this.config
        const { top, left } =  puzzlesCoordinate[puzzles_collected]
        assignStyle(element.style ,{ top, left, transition: 'all 1s ease' })
        setTimeout(this.addPuzzleToWidget, 1000)
        puzzles_collected += 1;
        super.updateConfig({ puzzles_collected })
    }

    addCloseIconToElement = (element) => {
        const closeBtn = document.createElement('div')
        closeBtn.classList.add('custom-close-icon')
        closeBtn.innerHTML = '&#x2715; ';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            e.preventDefault()
            this.disableWidgetAndRemoveAllElements()
        },{ once: true })
        element.appendChild(closeBtn)
    }

    disableWidgetAndRemoveAllElements = () => {
        boomio.signal('PUZZLE_CLOSED');
        this.puzzleWidget.remove()
        this.animationEl.remove()
    }


    qrCodeInnerHtml = () =>  `<div class="product-design-bg-2 p-0 Preview-select box-show qr-div" >
		<span class='custom-close-icon' style='top: 16px; right: 10px' id='close'>&#x2715; </span>
		<div class="coupon__preview__body coupon_discount_modal">

			<div class="coupon__preview__card__header text-center d-block">
				<h1>YOU GOT A 20% DISCOUNT </h1>
			</div>

			<div class="coupon_preview_card_info ">
				<div id='qrcodeShow' style="display:none">
					<a class="qrcodeShowHtml" id="qrcodeShowHtml"> </a>
				</div>
				<div class="coupon__preview__card coupon_div" id="coupon_div" >
					<div class="coupon_info">
						<h3>20 %</h3>
						<h3>Discount</h3>
						<p style="text-align: center; margin-top: 8px">Unique code: <span id="qrcode">${this.config.qrcode}</span> </p>
					</div>
					<div class="coupon__preview__card__after"></div>
					<div class="coupon__preview__card__befor"></div>
				</div>
			</div>
			<div class="coupon_preview_card_footer">
				<p>To have immpediate access for all your great rewards <b> open of download</b></p>
				<a href=${this.config.app_url}>
				<div class="btn-content d-flex align-items-center justify-content-center" style="height: 46px;">
					<img src="${dotImage}" alt="img not find">
					<div class="d-flex flex-column btn-text-group ml-2"><small class="small-font">Open</small>
						<b>Boomio
							app</b>
					</div>
				</div>
				</a>
				${!isMobileDevice ? (
                    `		<div class="d-flex pt-2">
					<div class="appstore-img "><a href=""><img src="${appStoreImage}"
								alt="App Store"></a></div>
					<div class="playstore-img"><a href=${this.config.app_url}"><img src="${playStoreImage}"
								alt="Play Store"></a></div>
				</div>`
                ) : ''}
				<div>
					<p class="footer-dec">Don't have time now? Make a screenshot and use it later!</p>
				</div>
			</div>
		</div>
	</div>`
}
////////////////////////////


const inizialization = () => {
    const puzzle = new Puzzle();

    const { success, puzzles_collected, appearing_puzzle_nr } = puzzle.config;

    if (!success){
        return;
    }

    if (appearing_puzzle_nr > 1) {
        puzzle.showPuzzleWidget()
        puzzle.addImageTPuzzleWidget()
    }

    if (puzzles_collected > 0) {
        puzzle.drawPuzzlesByCollectedCount()
    }

    if (appearing_puzzle_nr) {
        puzzle.startAnimation();
    }
};

inizialization()
