const frameSvg =
    "https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/DK/development/new-puzzle-widget-ui/images/puzzle/frame.png?raw=true";

const puzzlesCoordinateForMobile = [{
    top: 0,
    left: 0,
    width: "62.84px",
    height: "83.33px"
},
    {
        top: 0,
        left: 47,
        width: "83.3px",
        height: "66.86px"
    },
    {
        top: 63,
        left: 0,
        width: "86.3px",
        height: "69.86px"
    },
    {
        top: 44,
        left: 62,
        width: "67.84px",
        height: "88.3px"
    },
];

const puzzlesCoordinateForDesktop = [{
    top: 0,
    left: 0,
    width: "89.84px",
    height: "112.33px"
},
    {
        top: 0,
        left: 67,
        width: "112.3px",
        height: "89.86px"
    },
    {
        top: 87,
        left: 0,
        width: "112.3px",
        height: "89.86px"
    },
    {
        top: 64,
        left: 89,
        width: "89.84px",
        height: "112.33px"
    },
];

const puzzlesCoordinate = isMobileDevice ?
    puzzlesCoordinateForMobile :
    puzzlesCoordinateForDesktop;
const puzzleImagesList = [
    "https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-1.png?raw=true",
    "https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-2.png?raw=true",
    "https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-3.png?raw=true",
    "https://github.com/boomio-api-v2/puzzle-widget-styles/blob/main/img/puzzle-4.png?raw=true",
];

const puzzleWidgetSize = isMobileDevice ? 135 : 185;

let isPuzzleWidgetDisplayed = false;


const mainCss = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
}
div:empty {
    display: block !important;
}
[draggable=true] {
    cursor: move;
}
.close-modal-btn {
    cursor: pointer;
}
.close-modal-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
#goModalButton {
    background: linear-gradient(39.06deg, #8559F3 8.58%, #657BEA 17.79%, #34B0DC 46.68%, #15D1D3 72.63%, #09DDD0 88.95%);
    border-radius: 32px;
    width: 116px;
    height: 40px;
    color: #FFFFFF;
    flex: none;
    order: 2;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    outline: auto;
    cursor: pointer;
}
#modalBackground {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(62, 50, 72, 0.5);
    z-index: 10000000000;
}

@keyframes appearance {
  from {
    transform: scale(0.1)
  }
  to {
    transform: scale(1);
    transform-origin: 200% 200%;
    transition: all 0.s;
  }
}

.animation-widget {
    transition: transform 0.3s;
    animation: appearance;
    animation-duration: 0.3s;
}

#widgetModal {
    overflow: hidden;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.1);
    border: 1px solid #E8E7EB;
    border-radius: 16px;
    background: #FFFFFF;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;;
    z-index: 100000000000;
    transform: scale(0.1);
    transition: all 0.3s;
    animation: appearance;
    animation-duration: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 23px;
}

#widgetModal .topText{ 
    color: #473F4E;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    
    text-align: center;
    letter-spacing: -0.02em;
}

#widgetModal .bottomText{ 
    background: linear-gradient(41.01deg, #FF6E6D 0%, #FF3183 5.48%, #598BF3 88.77%, #657BEA 95.23%, #34B0DC 101.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    
    text-align: center;
    letter-spacing: -0.02em;
}

.winningAnimation {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000000000000000;
}

.modal-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between
}

.modal-buttons button {
    border-radius: 32px;
    width: 116px;
    height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
}

.exist-or-saving-modal-title {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}

.modal-buttons .save {
    background: linear-gradient(41.01deg, #FF6E6D 0%, #FF3183 5.48%, #598BF3 88.77%, #657BEA 95.23%, #34B0DC 101.49%);
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;        
    color: #FFFFFF;
}

.modal-buttons .exit-wrapper {
    background: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;        
    background: linear-gradient(41.01deg, #FF6E6D 0%, #FF3183 5.48%, #598BF3 88.77%, #657BEA 95.23%, #34B0DC 101.49%);
    background-clip: text;
    text-fill-color: transparent;
    padding: 2px;
}

.modal-buttons .exit {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;        
    background: white;
    background-clip: text;
    color: linear-gradient(41.01deg, #FF6E6D 0%, #FF3183 5.48%, #598BF3 88.77%, #657BEA 95.23%, #34B0DC 101.49%);;
    text-fill-color: transparent;
}

.boomie-preview-mobile {
    width: 100px;
}
#boomio--qr {
    // position: fixed;
    // top: 0px;
    // left: 0px;
    z-index: 1000;
    width: 100%;
    height: 100%;
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
    width: 185px;
    height: 185px;
    border-radius: 10px;
    background-size: contain;
    position: fixed;
    z-index: 100000000000;
}

.boomio--puzzle-widget-text {
    width: 100%;
    z-index: 1000000000000;
    position: absolute;
    cursor: pointer;
    color: white;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${isMobileDevice ? 20 : 36}px;
    text-align: center;
}

.oomio-app-text {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
}

.coupon_discount_modal .coupon_info h3 {
    background: -webkit-linear-gradient(#FF3183, #8559F3);
    -webkit-background-clip: text;
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
    border: double 1px transparent;
    border-radius: 24px;
    background-image: linear-gradient(#e8dff7, #fee0e7), linear-gradient(39.06deg, #FFC24F 8.58%, #FF3183 32.32%, #8559F3 60.82%, #657BEA 66.73%, #34B0DC 77.01%, #15D1D3 84.73%, #09DDD0 88.95%);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.coupon_preview_card_footer .btn-content img {
    width: 20px;
    height: 24px;
    margin-right: 16px;
}

.coupon_preview_card_footer .btn-content .small-font {
    font-weight: 600;
    font-size: 10px;
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

.coupon-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
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
};

////////Puzzle Class ////////////
class Puzzle extends LocalStorageConfig {
    constructor() {
        super();
        this.isPrewiewDisplayed = false;
        this.config = super.getDefaultConfig();
        this.coordinates = isMobileDevice ?
            puzzlesCoordinateForMobile :
            puzzlesCoordinateForDesktop;
        this.addStyles(mainCss);
    }
    addStyles = (cssRules) => {
        const style = document.createElement("style");
        style.setAttribute("id", "boomio--stylesheet");
        document.getElementsByTagName("head")[0].appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = cssRules;
        } else {
            style.appendChild(document.createTextNode(cssRules));
        }
    };

    addImageTPuzzleWidget = () => {
        this.puzzleWidget.style.backgroundImage = `url(${frameSvg})`;
    };

    createPuzzleWidget = () => {
        const puzzleWidget = document.createElement("div");
        puzzleWidget.setAttribute("id", "puzzle-widget");
        assignStyle(puzzleWidget.style, {
            position: "relative",
            backgroundImage: ` url(${frameSvg})`,
        });
        this.puzzleWidget = puzzleWidget;

        this.drawPuzzlesByCollectedCount(puzzlesCoordinateForDesktop);
    };

    // This method for creating widget in window
    showPuzzleWidgetWindowDraggable = (isAnimation = false) => {
        const {
            x_position,
            y_position
        } = this.config;
        const puzzleWidget = document.createElement("div");
        const widgetSmallPreview = document.createElement("div");
        puzzleWidget.setAttribute("id", "puzzle-widget");
        puzzleWidget.appendChild(widgetSmallPreview);
        puzzleWidget.style.backgroundImage = ` url(${frameSvg})`;

        if (isAnimation) {
            puzzleWidget.classList.add("animation-widget");
        }

        puzzleWidget.addEventListener(isMobileDevice ? "click" : "dblclick", () => {
            puzzleWidget.remove();
            this?.animationEl?.remove();
            this.isPrewiewDisplayed = true;
            this.showModalWidgetPreview(false);
        });

        if (x_position && y_position) {
            puzzleWidget.style.left = `${x_position}px`;
            puzzleWidget.style.top = `${y_position}px`;
        }
        this.puzzleWidget = puzzleWidget;
        const size = `${puzzleWidgetSize}px`;
        assignStyle(puzzleWidget.style, {
            width: size,
            height: size,
        });

        document.body.appendChild(puzzleWidget);
        if (this.config.puzzles_collected > 0) {
            this.addCloseIconToElement(puzzleWidget);
        }
        this.drageble = new DragElement(this.puzzleWidget);
        isPuzzleWidgetDisplayed = true;
        this.drawPuzzlesByCollectedCount();
    };

    drawPuzzlesByCollectedCount = (coordinate = puzzlesCoordinate) => {
        for (let i = 0; i < this.config.puzzles_collected; i++) {
            const backgroundImage = `url(${puzzleImagesList[i]})`;
            const {
                top,
                left,
                width,
                height
            } = coordinate[i];
            const animationEl = document.createElement("div");
            animationEl.setAttribute("id", `boomio--animation-${i}`);
            animationEl.classList.add("boomio--animation__wrapper");
            assignStyle(animationEl.style, {
                top: `${top}px`,
                left: `${left}px`,
                width,
                height,
                backgroundImage,
                position: "absolute",
            });

            this.puzzleWidget.appendChild(animationEl);
        }
    };

    createModalWindow = (width = 300, height = 442) => {
        ////Add modal Background //////
        const modalBackground = document.createElement("div");
        modalBackground.setAttribute("id", "modalBackground");
        this.modalBackground = modalBackground;
        /////////////////////////

        ////////Add modal ///////
        const modal = document.createElement("div");
        modal.setAttribute("id", "widgetModal");
        assignStyle(modal.style, {
            width: `${width}px`,
            height: `${height}px`,
            transform: "scale(1)",
        });
        modalBackground.appendChild(modal);
        this.modal = modal;
        document.body.appendChild(this.modalBackground)

        ////////////////////////////
    };

    getCloseModalBtn = (closeCallback) => {
        const closeBtnWrapper = document.createElement("div");
        closeBtnWrapper.classList.add("close-modal-btn-wrapper");
        const closeBtn = document.createElement("div");
        closeBtn.innerHTML = "&#x2715; ";
        closeBtn.classList.add("close-modal-btn");
        closeBtn.onclick = closeCallback;
        closeBtnWrapper.appendChild(closeBtn);
        return closeBtnWrapper;
    };

    closeAnimation = (callback) => () => {
        this.modal.style.transformOrigin = "100% 100%";
        this.modal.style.transform = "scale(0)";
        this.modal.addEventListener("transitionend", () => {
            this.puzzleWidget.remove();
            this.modalBackground.remove();
            if (callback) {
                callback();
            }
        });
    };

    showModalWidgetPreview = (showAnimation = false) => {
        const {
            appearing_puzzle_nr
        } = this.config;
        const isLastPuzzle = appearing_puzzle_nr === 4 && showAnimation;
        this?.puzzleWidget?.remove();
        this.createPuzzleWidget();
        this.createModalWindow();

        const showWidget = () => {
            this.showPuzzleWidgetWindowDraggable(true);
        };
        ///// Add close button //////

        const animationFunc = this.closeAnimation(showWidget);

        if (!isLastPuzzle) {
            const closeBtn = this.getCloseModalBtn(animationFunc);
            this.modal.appendChild(closeBtn);
        }
        //////////////////

        ////////Add text top/////////
        const topText = document.createElement("div");
        topText.classList.add("topText");
        topText.innerHTML = isLastPuzzle ?
            "CONGRATULATIONS!ENJOY YOUR A REWARD" :
            "COLLECT ALL PIECES AND WIN A GIFT!";
        this.modal.appendChild(topText);
        //////////////////

        if (isLastPuzzle) {
            this.modal.style.height = "max-content";
            this.modal.style.padding = "54px 24px";
            this.puzzleWidget.style.marginTop = "24px";
        }

        ////////Add text bottom/////////
        if (!isLastPuzzle) {
            const bottomText = document.createElement("div");
            bottomText.classList.add("bottomText");
            bottomText.innerHTML =
                "Hint for another piece:\n" + "Adidas Stan Smith J FX7519";
            this.modal.appendChild(bottomText);
        }
        //////////////////
        this.modal.appendChild(this.puzzleWidget);

        /////Add go button ////
        if (!isLastPuzzle) {
            const goBtn = document.createElement("button");
            goBtn.setAttribute("id", "goModalButton");
            goBtn.innerHTML = "Go!";
            goBtn.onclick = animationFunc;
            this.modal.appendChild(goBtn);
        }
        //////////////////

        if (!showAnimation) return;
        setTimeout(this.addPuzzleToWidget, 1000);
    };

    addPuzzleToWidget = () => {
        let {
            puzzles_collected,
            appearing_puzzle_nr
        } = this.config;

        this.startAnimation(
            puzzlesCoordinateForDesktop, {
                zIndex: 100000000000000,
                position: "absolute"
            },
            this.puzzleWidget,
            false
        );
        if (!this.isPrewiewDisplayed) {
            super.updateConfig({
                puzzles_collected: (puzzles_collected += 1),
            });
            boomio.signal(`PUZZLE${appearing_puzzle_nr}_CLICK`);
        }
        if (puzzles_collected < 4) return;

        this.showWinningAnimation();

        setTimeout(() => {
            this.modalBackground.remove();
            this.createModalWindow(300, 480);
            this.showQR();
        }, 2000);
    };

    showWinningAnimation = () => {
        const winningAnimation = document.createElement("iframe");
        winningAnimation.classList.add("winningAnimation");
        winningAnimation.setAttribute(
            "src",
            "https://embed.lottiefiles.com/animation/35875"
        );
        document.body.appendChild(winningAnimation);
        setTimeout(() => {
            winningAnimation.remove();
        }, 2000);
    };

    onPuzzleClick = (e) => {
        const puzzle = e.target;
        puzzle.remove();
        this.isPrewiewDisplayed = false;
        this.showModalWidgetPreview(true);
    };

    getAnimateFunction = (nr) => {
        const animate = (animation) => (el) => {
            el.classList.add(`boomio--animation--${animation}`);
        };
        const animArr = [
            animate("moveRight"),
            animate("moveLeft"),
            animate("moveDown"),
            animate("moveUp"),
            animate("fadeIn"),
            animate("moveDiagonalDown"),
            animate("rotateRight"),
            animate("zoomIn"),
            animate("skewLeft"),
            animate("moveDiagonalUp"),
            animate("tada"),
            animate("lightSpeedInLeft"),
            animate("rollIn"),
        ];

        return animArr[nr];
    };

    startAnimation = (...args) => {
        const [
            coordinates,
            styles = {},
            parent = document.body,
            isClickable = true,
        ] = args;
        const {
            qrcode,
            animation,
            puzzles_collected
        } = this.config;
        const defaultCoordinates = this.coordinates[puzzles_collected];

        const currentCoordinates = coordinates?.[puzzles_collected];
        const customPosX = currentCoordinates?.left;
        const customPosY = currentCoordinates?.top;
        const width = currentCoordinates?.width ?? defaultCoordinates.width;
        const height = currentCoordinates?.height ?? defaultCoordinates.height;

        // if ((render_count % appearing_puzzle_nr) !== 0) return;
        const puzzleSize = 100;

        const dash = "-";
        const pos = qrcode.indexOf(dash);
        if (pos != -1) {
            this.config.qrcode = qrcode.substring(0, pos);
        }

        const animationEl = document.createElement("div");
        animationEl.setAttribute("id", `boomio--animation-${puzzles_collected}`);
        animationEl.classList.add("boomio--animation__wrapper");
        animationEl.classList.add("boomio--animation__wrapper--initial");
        assignStyle(animationEl.style, {
            width,
            height,
            backgroundImage: `url(${puzzleImagesList[puzzles_collected]})`,
            ...styles,
        });
        animationEl.classList.remove("boomio--qr");
        // this.addCloseIconToElement(animationEl);
        if (isClickable) {
            animationEl.classList.add("boomio--animation__hover");
            animationEl.addEventListener("click", this.onPuzzleClick, {
                once: true
            });
        }
        parent.appendChild(animationEl);

        const systemFont =
            "system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue";
        const duration = "1000ms";
        const easingBack = "cubic-bezier(0.18, 0.89, 0.32, 1.28)";
        const easing = "cubic-bezier(0.22, 0.61, 0.36, 1)";

        const {
            clientWidth,
            clientHeight
        } = document.documentElement;

        const posx =
            customPosX ??
            getRandomArbitrary(
                puzzleWidgetSize + 25,
                clientWidth - puzzleSize - 10
            ).toFixed();
        const posy =
            customPosY ??
            getRandomArbitrary(
                puzzleWidgetSize + 25,
                clientHeight - puzzleSize - 10
            ).toFixed();

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

        .boomio--animation__hover:hover {
			transform: scale(1.1);
		}

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
            // padding: 40px 20px;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
            font-style: normal;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #473F4E;
            margin: 0px;
        }

        .product-design-bg-2 {
            background-color: #ffffff;
            height: 100% !important;
            width: 100%;
            height: -moz-fit-content;
            height: fit-content;
            padding: 20px;
            border-radius: 10px;
            padding: 0;
        }
		`;

        this.addStyles(css);
        const animFunc = this.getAnimateFunction(animation);
        animFunc(animationEl);
        this.animationEl = animationEl;
    };

    closeModal = () => {
        this.modalBackground.remove();
    }

    onModalClickBtnWithCommand = (command) => () => {
        boomio.signal(command);
        this.closeModal()
    }

    showRatingModal = () => {
        this.createModalWindow(296, 154);
        const textTitle = document.createElement('p');
        textTitle.classList.add('exist-or-saving-modal-title')
        textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';
        this.modal.appendChild(textTitle)
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('modal-buttons');
        const yesBtn = document.createElement('div');
        yesBtn.style.cursor = 'pointer'
        yesBtn.onclick = this.onModalClickBtnWithCommand('well_yes')
        yesBtn.innerHTML = `
            <svg width="91" height="32" viewBox="0 0 91 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="90" height="31" rx="15.5" fill="white"/>
                <path d="M20.256 22V17.568L20.72 18.848L15.856 10.8H18.08L21.984 17.28H20.736L24.672 10.8H26.72L21.856 18.848L22.336 17.568V22H20.256ZM30.473 22.112C29.5237 22.112 28.6917 21.9253 27.977 21.552C27.273 21.168 26.7237 20.6453 26.329 19.984C25.945 19.3227 25.753 18.5707 25.753 17.728C25.753 16.8747 25.9397 16.1227 26.313 15.472C26.697 14.8107 27.2197 14.2933 27.881 13.92C28.553 13.5467 29.3157 13.36 30.169 13.36C31.001 13.36 31.7423 13.5413 32.393 13.904C33.0437 14.2667 33.5557 14.7787 33.929 15.44C34.3023 16.1013 34.489 16.88 34.489 17.776C34.489 17.8613 34.4837 17.9573 34.473 18.064C34.473 18.1707 34.4677 18.272 34.457 18.368H27.337V17.04H33.401L32.617 17.456C32.6277 16.9653 32.5263 16.5333 32.313 16.16C32.0997 15.7867 31.8063 15.4933 31.433 15.28C31.0703 15.0667 30.649 14.96 30.169 14.96C29.6783 14.96 29.2463 15.0667 28.873 15.28C28.5103 15.4933 28.2223 15.792 28.009 16.176C27.8063 16.5493 27.705 16.992 27.705 17.504V17.824C27.705 18.336 27.8223 18.7893 28.057 19.184C28.2917 19.5787 28.6223 19.8827 29.049 20.096C29.4757 20.3093 29.9663 20.416 30.521 20.416C31.001 20.416 31.433 20.3413 31.817 20.192C32.201 20.0427 32.5423 19.808 32.841 19.488L33.913 20.72C33.529 21.168 33.0437 21.5147 32.457 21.76C31.881 21.9947 31.2197 22.112 30.473 22.112ZM38.5701 22.112C37.8555 22.112 37.1675 22.0213 36.5061 21.84C35.8555 21.648 35.3381 21.4187 34.9541 21.152L35.7221 19.632C36.1061 19.8773 36.5648 20.08 37.0981 20.24C37.6315 20.4 38.1648 20.48 38.6981 20.48C39.3275 20.48 39.7808 20.3947 40.0581 20.224C40.3461 20.0533 40.4901 19.824 40.4901 19.536C40.4901 19.3013 40.3941 19.1253 40.2021 19.008C40.0101 18.88 39.7595 18.784 39.4501 18.72C39.1408 18.656 38.7941 18.5973 38.4101 18.544C38.0368 18.4907 37.6581 18.4213 37.2741 18.336C36.9008 18.24 36.5595 18.1067 36.2501 17.936C35.9408 17.7547 35.6901 17.5147 35.4981 17.216C35.3061 16.9173 35.2101 16.5227 35.2101 16.032C35.2101 15.488 35.3648 15.0187 35.6741 14.624C35.9835 14.2187 36.4155 13.9093 36.9701 13.696C37.5355 13.472 38.2021 13.36 38.9701 13.36C39.5461 13.36 40.1275 13.424 40.7141 13.552C41.3008 13.68 41.7861 13.8613 42.1701 14.096L41.4021 15.616C40.9968 15.3707 40.5861 15.2053 40.1701 15.12C39.7648 15.024 39.3595 14.976 38.9541 14.976C38.3461 14.976 37.8928 15.0667 37.5941 15.248C37.3061 15.4293 37.1621 15.6587 37.1621 15.936C37.1621 16.192 37.2581 16.384 37.4501 16.512C37.6421 16.64 37.8928 16.7413 38.2021 16.816C38.5115 16.8907 38.8528 16.9547 39.2261 17.008C39.6101 17.0507 39.9888 17.12 40.3621 17.216C40.7355 17.312 41.0768 17.4453 41.3861 17.616C41.7061 17.776 41.9621 18.0053 42.1541 18.304C42.3461 18.6027 42.4421 18.992 42.4421 19.472C42.4421 20.0053 42.2821 20.4693 41.9621 20.864C41.6528 21.2587 41.2101 21.568 40.6341 21.792C40.0581 22.0053 39.3701 22.112 38.5701 22.112Z" fill="url(#paint0_linear_5066_50976)"/>
                <g clip-path="url(#clip0_5066_50976)">
                    <path d="M58 15V23C58 23.2652 57.8946 23.5196 57.7071 23.7071C57.5196 23.8946 57.2652 24 57 24H55C54.7348 24 54.4804 23.8946 54.2929 23.7071C54.1054 23.5196 54 23.2652 54 23V16C54 15.7348 54.1054 15.4804 54.2929 15.2929C54.4804 15.1054 54.7348 15 55 15H58C59.0609 15 60.0783 14.5786 60.8284 13.8284C61.5786 13.0783 62 12.0609 62 11V10C62 9.46957 62.2107 8.96086 62.5858 8.58579C62.9609 8.21071 63.4696 8 64 8C64.5304 8 65.0391 8.21071 65.4142 8.58579C65.7893 8.96086 66 9.46957 66 10V15H69C69.5304 15 70.0391 15.2107 70.4142 15.5858C70.7893 15.9609 71 16.4696 71 17L70 22C69.8562 22.6135 69.5834 23.1402 69.2227 23.501C68.8619 23.8617 68.4328 24.0368 68 24H61C60.2044 24 59.4413 23.6839 58.8787 23.1213C58.3161 22.5587 58 21.7956 58 21" fill="url(#paint1_linear_5066_50976)"/>
                    <path d="M58 15V23C58 23.2652 57.8946 23.5196 57.7071 23.7071C57.5196 23.8946 57.2652 24 57 24H55C54.7348 24 54.4804 23.8946 54.2929 23.7071C54.1054 23.5196 54 23.2652 54 23V16C54 15.7348 54.1054 15.4804 54.2929 15.2929C54.4804 15.1054 54.7348 15 55 15H58ZM58 15C59.0609 15 60.0783 14.5786 60.8284 13.8284C61.5786 13.0783 62 12.0609 62 11V10C62 9.46957 62.2107 8.96086 62.5858 8.58579C62.9609 8.21071 63.4696 8 64 8C64.5304 8 65.0391 8.21071 65.4142 8.58579C65.7893 8.96086 66 9.46957 66 10V15H69C69.5304 15 70.0391 15.2107 70.4142 15.5858C70.7893 15.9609 71 16.4696 71 17L70 22C69.8562 22.6135 69.5834 23.1402 69.2227 23.501C68.8619 23.8617 68.4328 24.0368 68 24H61C60.2044 24 59.4413 23.6839 58.8787 23.1213C58.3161 22.5587 58 21.7956 58 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <rect x="0.5" y="0.5" width="90" height="31" rx="15.5" stroke="url(#paint2_linear_5066_50976)"/>
                <defs>
                    <linearGradient id="paint0_linear_5066_50976" x1="16" y1="28" x2="41.2291" y2="-2.82007" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#34B0DC"/>
                        <stop offset="0.510417" stop-color="#15D1D3"/>
                        <stop offset="0.942708" stop-color="#09DDD0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_5066_50976" x1="54" y1="24.0048" x2="70.9893" y2="4.40941" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#34B0DC"/>
                        <stop offset="0.510417" stop-color="#15D1D3"/>
                        <stop offset="0.942708" stop-color="#09DDD0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_5066_50976" x1="2.60247e-06" y1="32" x2="20.1155" y2="-30.1157" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#34B0DC"/>
                        <stop offset="0.510417" stop-color="#15D1D3"/>
                        <stop offset="0.942708" stop-color="#09DDD0"/>
                    </linearGradient>
                    <clipPath id="clip0_5066_50976">
                        <rect width="24" height="24" fill="white" transform="translate(51 4)"/>
                    </clipPath>
                </defs>
            </svg>
        `;
        const noBtn = document.createElement('div');
        noBtn.onclick = this.onModalClickBtnWithCommand('well_no');
        noBtn.style.cursor = 'pointer'

        noBtn.innerHTML = `
            <svg width="87" height="32" viewBox="0 0 87 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="86" height="31" rx="15.5" fill="white"/>
                <path d="M17.504 22V10.8H19.216L26.24 19.424H25.392V10.8H27.456V22H25.744L18.72 13.376H19.568V22H17.504ZM33.6251 22.112C32.7505 22.112 31.9718 21.9253 31.2891 21.552C30.6065 21.168 30.0678 20.6453 29.6731 19.984C29.2785 19.3227 29.0811 18.5707 29.0811 17.728C29.0811 16.8747 29.2785 16.1227 29.6731 15.472C30.0678 14.8107 30.6065 14.2933 31.2891 13.92C31.9718 13.5467 32.7505 13.36 33.6251 13.36C34.5105 13.36 35.2945 13.5467 35.9771 13.92C36.6705 14.2933 37.2091 14.8053 37.5931 15.456C37.9878 16.1067 38.1851 16.864 38.1851 17.728C38.1851 18.5707 37.9878 19.3227 37.5931 19.984C37.2091 20.6453 36.6705 21.168 35.9771 21.552C35.2945 21.9253 34.5105 22.112 33.6251 22.112ZM33.6251 20.4C34.1158 20.4 34.5531 20.2933 34.9371 20.08C35.3211 19.8667 35.6198 19.5573 35.8331 19.152C36.0571 18.7467 36.1691 18.272 36.1691 17.728C36.1691 17.1733 36.0571 16.6987 35.8331 16.304C35.6198 15.8987 35.3211 15.5893 34.9371 15.376C34.5531 15.1627 34.1211 15.056 33.6411 15.056C33.1505 15.056 32.7131 15.1627 32.3291 15.376C31.9558 15.5893 31.6571 15.8987 31.4331 16.304C31.2091 16.6987 31.0971 17.1733 31.0971 17.728C31.0971 18.272 31.2091 18.7467 31.4331 19.152C31.6571 19.5573 31.9558 19.8667 32.3291 20.08C32.7131 20.2933 33.1451 20.4 33.6251 20.4Z" fill="url(#paint0_linear_5066_50977)"/>
                <g clip-path="url(#clip0_5066_50977)">
                    <path d="M54 16.9999V8.99993C54 8.73472 53.8946 8.48036 53.7071 8.29283C53.5196 8.10529 53.2652 7.99993 53 7.99993H51C50.7348 7.99993 50.4804 8.10529 50.2929 8.29283C50.1054 8.48036 50 8.73472 50 8.99993V15.9999C50 16.2651 50.1054 16.5195 50.2929 16.707C50.4804 16.8946 50.7348 16.9999 51 16.9999H54C55.0609 16.9999 56.0783 17.4214 56.8284 18.1715C57.5786 18.9217 58 19.9391 58 20.9999V21.9999C58 22.5304 58.2107 23.0391 58.5858 23.4141C58.9609 23.7892 59.4696 23.9999 60 23.9999C60.5304 23.9999 61.0391 23.7892 61.4142 23.4141C61.7893 23.0391 62 22.5304 62 21.9999V16.9999H65C65.5304 16.9999 66.0391 16.7892 66.4142 16.4141C66.7893 16.0391 67 15.5304 67 14.9999L66 9.99993C65.8562 9.38646 65.5834 8.85969 65.2227 8.49897C64.8619 8.13825 64.4328 7.96311 64 7.99993H57C56.2044 7.99993 55.4413 8.316 54.8787 8.87861C54.3161 9.44122 54 10.2043 54 10.9999" fill="url(#paint1_linear_5066_50977)"/>
                    <path d="M54 16.9999V8.99993C54 8.73472 53.8946 8.48036 53.7071 8.29283C53.5196 8.10529 53.2652 7.99993 53 7.99993H51C50.7348 7.99993 50.4804 8.10529 50.2929 8.29283C50.1054 8.48036 50 8.73472 50 8.99993V15.9999C50 16.2651 50.1054 16.5195 50.2929 16.707C50.4804 16.8946 50.7348 16.9999 51 16.9999H54ZM54 16.9999C55.0609 16.9999 56.0783 17.4214 56.8284 18.1715C57.5786 18.9217 58 19.9391 58 20.9999V21.9999C58 22.5304 58.2107 23.0391 58.5858 23.4141C58.9609 23.7892 59.4696 23.9999 60 23.9999C60.5304 23.9999 61.0391 23.7892 61.4142 23.4141C61.7893 23.0391 62 22.5304 62 21.9999V16.9999H65C65.5304 16.9999 66.0391 16.7892 66.4142 16.4141C66.7893 16.0391 67 15.5304 67 14.9999L66 9.99993C65.8562 9.38646 65.5834 8.85969 65.2227 8.49897C64.8619 8.13825 64.4328 7.96311 64 7.99993H57C56.2044 7.99993 55.4413 8.316 54.8787 8.87861C54.3161 9.44122 54 10.2043 54 10.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <rect x="0.5" y="0.5" width="86" height="31" rx="15.5" stroke="url(#paint2_linear_5066_50977)"/>
                <defs>
                    <linearGradient id="paint0_linear_5066_50977" x1="27.5" y1="4" x2="27.5" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF9161"/>
                        <stop offset="1" stop-color="#F4AB22"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_5066_50977" x1="58.5" y1="7.99512" x2="58.5" y2="23.9999" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF9161"/>
                        <stop offset="1" stop-color="#F4AB22"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_5066_50977" x1="43.5" y1="0" x2="43.5" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF9161"/>
                        <stop offset="1" stop-color="#F4AB22"/>
                    </linearGradient>
                    <clipPath id="clip0_5066_50977">
                        <rect width="24" height="24" fill="white" transform="translate(47 4)"/>
                    </clipPath>
                </defs>
            </svg>
        `;
        buttonContainer.appendChild(yesBtn);
        buttonContainer.appendChild(noBtn);

        this.modal.appendChild(buttonContainer);
    }

    showSavingOrExitModal = () => {
        this.createModalWindow(296, 154);

        const textTitle = document.createElement('p');
        textTitle.classList.add('exist-or-saving-modal-title')
        textTitle.innerHTML = 'Are you sure you want to exit without saving the reward?';

        const onCloseClick = () => {
            this.closeModal()
            this.showRatingModal();
        }

        const saveBtn = document.createElement('button');
        saveBtn.onclick = () => {
            boomio.signal('exit_yes');
            onCloseClick();
        }
        saveBtn.classList.add('save')
        saveBtn.innerHTML = 'Save';

        const exitBtn = document.createElement('div');
        exitBtn.onclick =  () => {
            boomio.signal('exit_cancel');
            onCloseClick();
        }
        exitBtn.style.cursor = 'pointer';
        exitBtn.innerHTML = `
            <svg width="110" height="40" viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.424 19.456H48.992V21.168H43.424V19.456ZM43.584 24.256H49.904V26H41.504V14.8H49.68V16.544H43.584V24.256ZM50.2421 26L54.0021 21.104L53.9701 22.176L50.3861 17.456H52.6101L55.1221 20.816H54.2741L56.8021 17.456H58.9621L55.3461 22.176L55.3621 21.104L59.1061 26H56.8501L54.2101 22.432L55.0421 22.544L52.4501 26H50.2421ZM60.102 26V17.456H62.102V26H60.102ZM61.11 16.048C60.7367 16.048 60.4273 15.9307 60.182 15.696C59.9473 15.4613 59.83 15.1787 59.83 14.848C59.83 14.5067 59.9473 14.224 60.182 14C60.4273 13.7653 60.7367 13.648 61.11 13.648C61.4833 13.648 61.7873 13.76 62.022 13.984C62.2673 14.1973 62.39 14.4693 62.39 14.8C62.39 15.152 62.2727 15.4507 62.038 15.696C61.8033 15.9307 61.494 16.048 61.11 16.048ZM67.463 26.112C66.5243 26.112 65.799 25.872 65.287 25.392C64.775 24.9013 64.519 24.1813 64.519 23.232V15.568H66.519V23.184C66.519 23.5893 66.6203 23.904 66.823 24.128C67.0363 24.352 67.3297 24.464 67.703 24.464C68.151 24.464 68.5243 24.3467 68.823 24.112L69.383 25.536C69.1483 25.728 68.8603 25.872 68.519 25.968C68.1777 26.064 67.8257 26.112 67.463 26.112ZM63.111 19.12V17.52H68.807V19.12H63.111Z" fill="url(#paint0_linear_5088_52471)"/>
                <rect x="1.5" y="1" width="107" height="38" rx="19" stroke="url(#paint1_linear_5088_52471)" stroke-width="2"/>
                <defs>
                    <linearGradient id="paint0_linear_5088_52471" x1="40" y1="32" x2="61.3471" y2="1.31291" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF6E6D"/>
                        <stop offset="0.0539493" stop-color="#FF3183"/>
                        <stop offset="0.874705" stop-color="#598BF3"/>
                        <stop offset="0.938372" stop-color="#657BEA"/>
                        <stop offset="1" stop-color="#34B0DC"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_5088_52471" x1="0.5" y1="40" x2="22.48" y2="-28.8811" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF6E6D"/>
                        <stop offset="0.0539493" stop-color="#FF3183"/>
                        <stop offset="0.874705" stop-color="#598BF3"/>
                        <stop offset="0.938372" stop-color="#657BEA"/>
                        <stop offset="1" stop-color="#34B0DC"/>
                    </linearGradient>
                </defs>
            </svg>
`;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('modal-buttons');
        buttonContainer.appendChild(saveBtn);
        buttonContainer.appendChild(exitBtn);

        this.modal.appendChild(textTitle);
        this.modal.appendChild(buttonContainer)
    }

    showQR = () => {
        boomio.signal("PUZZLE_CODE_REVEALED");
        const {
            qrcode
        } = this.config;
        const qrEl = document.createElement("div");

        qrEl.setAttribute("id", "boomio--qr");

        qrEl.innerHTML = this.qrCodeInnerHtml();

        const closeAnimation = this.closeAnimation(this.showSavingOrExitModal);

        const closeModalBtn = this.getCloseModalBtn(closeAnimation);


        this.modal.appendChild(closeModalBtn);
        this.modal.append(qrEl);

        new QRCode("qrcodeShowHtml", {
            text: qrcode,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
        const coupon = document.getElementById("coupon_div");
        const qrcodeShow = document.getElementById("qrcodeShow");
        qrcodeShow.style.display = isMobileDevice ? "none" : "block";
        coupon.style.display = isMobileDevice ? "block" : "none";
        if (isMobileDevice) return;
        qrcodeShow.onclick = () => {
            coupon.style.display = "block";
            qrcodeShow.style.display = "none";
        };
        coupon.onclick = () => {
            qrcodeShow.style.display = "block";
            coupon.style.display = "none";
        };
    };

    addCloseIconToElement = (element) => {
        const closeBtn = document.createElement("div");
        closeBtn.classList.add("custom-close-icon");
        closeBtn.innerHTML = "&#x2715; ";
        closeBtn.addEventListener(
            "click",
            (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.disableWidgetAndRemoveAllElements();
            }, {
                once: true
            }
        );
        element.appendChild(closeBtn);
    };

    disableWidgetAndRemoveAllElements = () => {
        boomio.signal("PUZZLE_CLOSED");
        this.puzzleWidget.remove();
        this.animationEl.remove();
    };

    qrCodeInnerHtml =
        () => `<div class="product-design-bg-2 p-0 Preview-select box-show qr-div" >
    
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
				<p class="coupon-text">To have immpediate access for all your great rewards <b> open of download</b></p>
							<div class="coupon_preview_card_footer">

				<a href=${this.config.app_url}>
				<div class="btn-content d-flex align-items-center justify-content-center" style="height: 46px;">
					<img src="${dotImage}" alt="img not find">
					<div class="d-flex flex-column btn-text-group ml-2"><small class="small-font">Open</small>
						<b>Boomio app</b>
					</div>
				</div>
				</a>
		
			</div>
		</div>
	</div>`;
}
////////////////////////////

const inizialization = () => {
    const puzzle = new Puzzle();

    const {
        success,
        puzzles_collected,
        appearing_puzzle_nr
    } = puzzle.config;

    if (!success) {
        return;
    }

    if (puzzles_collected > 0) {
        puzzle.showPuzzleWidgetWindowDraggable();
    }

    if (appearing_puzzle_nr > 1) {
        puzzle.addImageTPuzzleWidget();
    }

    if (appearing_puzzle_nr) {
        puzzle.startAnimation();
    }
};

inizialization();