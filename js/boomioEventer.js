const localStoragePropertyName = 'boomioPluginConfig';

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


/////////// Scripts ////////

const imageWidgetScript = 'https://rawcdn.githack.com/boomio-api-v2/final-combined-wdigets-1/8e352f90cfadb73c4afb4e4133e3a3af742937f2/js/imagePlugin.js?min=1';

const puzzleScript = 'https://rawcdn.githack.com/boomio-api-v2/final-combined-wdigets-1/e7e5b809dc42982fbea3d0c3892d7d0253ecb94d/js/puzzlePlugin.js';

const wheelScript = 'https://raw.githubusercontent.com/boomio-api-v2/final-combined-wdigets-1/main/js/wheelOfFortunePlugin.js?min=1';

const startWidgetScript = 'https://rawcdn.githack.com/boomio-api-v2/final-combined-wdigets-1/8e352f90cfadb73c4afb4e4133e3a3af742937f2/js/startWidget.js?min=1';
///////////////////////////

const appStoreImage =
    'https://github.com/boomio-api-v2/easter-egg-styles/blob/main/img/appstore.png?raw=true';
const playStoreImage =
    'https://github.com/boomio-api-v2/easter-egg-styles/blob/main/img/playstore.png?raw=true';
const dotImage =
    'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/DK/development/new-puzzle-widget-ui/images/boomio-app.png?raw=true';

const createScript = (url) => {
    const script = document.createElement('script');
    script.setAttribute('src', url)
    document.head.appendChild(script)
    return script
};


class DragElement extends LocalStorageConfig {
    constructor(elmnt) {
        super();
        this.x_position = null;
        this.y_position = null;
        this.elmnt = elmnt;
        this.pos1 = 0;
        this.pos2 = 0;
        this.pos3 = 0;
        this.pos4 = 0;

        if (isMobileDevice) {
            this.addMobileListener()
            return;
        }

        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = this.dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = this.dragMouseDown;

        }
    }

    getQrCodePosition(element, posx, posy) {
        const windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const elementHeight = element.offsetHeight;
        const elementWidth = element.offsetWidth;
        const posX = this.x_position ??  posx;
        const posY = this.y_position ??  posy;

        return {
            posX: (windowWidth <= posX + elementWidth) ? (windowWidth - elementWidth) : posX,
            posY: (windowHeight <= posY + elementHeight) ? (windowHeight - elementHeight) : posY
        }

    }


    addMobileListener() {
        let mobileX = 0;
        let mobileY = 0;
        this.elmnt.addEventListener('touchmove', (e) =>  {
            e.preventDefault()
            const { clientX, clientY } = e.touches[0];
            const isBlocking = this.checkIsMoveBlocking(clientX, clientY);
            if (isBlocking) return;
            const x_position = clientX - mobileX;
            const y_position = clientY - mobileY;
            super.updateConfig({ x_position, y_position })
            this.x_position = x_position;
            this.y_position = y_position;
            this.elmnt.style.left = x_position + 'px';
            this.elmnt.style.top = y_position + 'px';
        })
        this.elmnt.addEventListener('touchstart', (e) => {
            const { clientX, clientY } = e.touches[0]
            const { left, top } = e.target.getBoundingClientRect();
            mobileX = clientX - left - 10;
            mobileY = clientY - top - 10;
        })

    }

    closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    checkIsMoveBlocking(x, y) {
        if (x <= 0 || y <= 0) return true;
        return false;
    }

    elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;

        const x_position = this.elmnt.offsetLeft - this.pos1;
        const y_position = this.elmnt.offsetTop - this.pos2;

        super.updateConfig({ x_position, y_position })

        const isBlocking = this.checkIsMoveBlocking(x_position, y_position);
        if (isBlocking) return;

        this.x_position = x_position;
        this.y_position = y_position;

        this.elmnt.style.top = y_position + "px";
        this.elmnt.style.left = x_position + "px";
    }


    dragMouseDown = (e) => {
        e = e || window.event;
        e.stopImmediatePropagation()
        e.stopPropagation()
        e.preventDefault();
        // get the mouse cursor position at startup:
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = this.elementDrag;
    }

}

class StylesEnvironment {
    addStylesToHtml = (cssRules) => {
        const style = document.createElement("style");
        style.setAttribute("id", "boomio--stylesheet");
        document.getElementsByTagName("head")[0].appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = cssRules;
        } else {
            style.appendChild(document.createTextNode(cssRules));
        }
    };
    addCssLinkToHtml = (href) => {
        const link = document.createElement("link");
        link.setAttribute("href", href);
        link.setAttribute('rel', 'stylesheet')
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    assignStyleOnElement = (style, properties) => {
        Object.assign(style, properties);
    }
};

class Boomio extends LocalStorageConfig {
    constructor() {
        super()
        this.url = window.location.href;
        this.user_session = this.session();
        this.setInitialConfiguration()
    }
    session(){
        let session = this.getCookie('boomio_session');
        if(!session){
            session = this.uuidv4();
            this.setCookie('boomio_session',session,120);
        }
        return session;
    }
    setCookie(name,value,days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    getScriptUrl = (widget_type) => {
        if (widget_type === 'puzzle') {
            return puzzleScript;
        } else if (widget_type === 'wheel') {
            return wheelScript;
        } else if (widget_type === 'start_widget') {
            return startWidgetScript;
        } else if (widget_type === 'image') {
            return imageWidgetScript;
        }
    };

     async setInitialConfiguration() {
        try {
            super.updateConfig({
                success: true,
                puzzles_collected: 3,
                appearing_puzzle_nr: 4
            })
            createScript(puzzleScript)
            // const content = await this.send({ go_hunt: "true"});
            // super.setConfigFromApi(content);
            // if (content?.widget_type && content.instruction !== 'stop') {
            //     const scriptUrl = this.getScriptUrl(content.widget_type)
            //     createScript(scriptUrl)
            // }
        } catch (err) {
            console.log(err)
        }

    }

    checkIsRequestDenied() {
        const boomioStopTill = this.config?.boomioStopTill
        if (!boomioStopTill) return false;
        const isTimeout = new Date(boomioStopTill).getTime() > new Date().getTime();
        if (!isTimeout) {
            super.removeByKey('boomioStopTill');
        }
        return isTimeout;
    }

    send(data){
        const isDenied = this.checkIsRequestDenied();
        if (isDenied) return {success: false};
        const request_data = {
            "user_session": this.user_session,
            "current_page_url": this.url,
            "extra_data": data
        };

        return new Promise(async (resolve) => {
            const rawResponse = await fetch(newLinkBoomio, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request_data)
            });
            resolve(rawResponse.json())
        })
    }

    signal(signal_code) {
        this.send({
            go_hunt: "true",
            ev_type: 'signal',
            signal_code
        })
    }
};

const boomio = new Boomio();
const stylesEnvironment = new StylesEnvironment();


