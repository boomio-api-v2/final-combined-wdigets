import PxLoader from './PxLoader.js';

class PxLoaderImage {
  constructor(url, tags, priority, options) {
    options = options || {};

    this.img = new Image();
    if (options.origin) {
      this.img.crossOrigin = options.origin;
    }

    this.tags = tags;
    this.priority = priority;

    this.loader = null; // Keep a reference to the loader
    this.img.src = url; // Set image source
    this.bindEvents(); // Bind events after setting the src
  }

  bindEvents() {
    this.img.addEventListener('load', this.onLoad.bind(this), false);
    this.img.addEventListener('error', this.onError.bind(this), false);
    this.img.addEventListener('readystatechange', this.onReadyStateChange.bind(this), false);
  }

  onLoad() {
    this.loader.onLoad(this);
    this.cleanup();
  }

  onError() {
    this.loader.onError(this);
    this.cleanup();
  }

  onReadyStateChange() {
    if (this.img.readyState === 'complete') {
      this.onLoad();
    }
  }

  cleanup() {
    this.unbindEvents();
  }

  unbindEvents() {
    this.img.removeEventListener('load', this.onLoad.bind(this), false);
    this.img.removeEventListener('error', this.onError.bind(this), false);
    this.img.removeEventListener('readystatechange', this.onReadyStateChange.bind(this), false);
  }

  start(pxLoader) {
    this.loader = pxLoader; // Set the loader reference
  }

  checkStatus() {
    this.onReadyStateChange();
  }

  onTimeout() {
    if (this.img.complete) {
      this.onLoad();
    } else {
      this.loader.onTimeout(this);
      this.cleanup();
    }
  }

  getName() {
    return this.img.src; // Return the URL for logging
  }
}

// Add the convenience method to the PxLoader prototype
PxLoader.prototype.addImage = function (url, tags, priority, options) {
  const imageLoader = new PxLoaderImage(url, tags, priority, options);
  this.add(imageLoader);
  return imageLoader.img; // Return the image element
};

export default PxLoaderImage;
