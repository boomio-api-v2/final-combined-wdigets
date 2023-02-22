import { isMobileDevice } from '@/config';

export const iceBackgroundImage =
  'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice_background.png?raw=true';

export const iceExplosionImage =
  'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice-explosion.gif?raw=true';

export const penguinParams = [
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/penguin1.gif?raw=true',
    x: isMobileDevice ? 58 : 82,
    y: isMobileDevice ? 43 : 62,
    size: isMobileDevice ? 35 : 50,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/penguin2.gif?raw=true',
    x: isMobileDevice ? 28 : 89,
    y: isMobileDevice ? 68 : 115,
    size: isMobileDevice ? 32 : 40,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/penguin3.gif?raw=true',
    x: isMobileDevice ? 64 : 38,
    y: isMobileDevice ? 84 : 102,
    size: isMobileDevice ? 25 : 40,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/penguin4.gif?raw=true',
    x: isMobileDevice ? 84 : 116,
    y: isMobileDevice ? 96 : 135,
    size: isMobileDevice ? 36 : 55,
  },
];

export const iceBlocksParams = [
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice-cubes/ice-watermelon.png?raw=true',
    fruitImg:
      'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/fruits/watermelon.png?raw=true',
    size: isMobileDevice ? 53 : 75,
    x: isMobileDevice ? 122 : 175,
    y: isMobileDevice ? 48 : 62,
    moveX: isMobileDevice ? 58 : 82,
    moveY: isMobileDevice ? 52 : 62,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice-cubes/ice-pine-apple.png?raw=true',
    fruitImg:
      'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/fruits/pine-apple.png?raw=true',
    size: isMobileDevice ? 53 : 75,
    x: isMobileDevice ? 150 : 230,
    y: isMobileDevice ? 50 : 67,
    moveX: isMobileDevice ? 65 : 89,
    moveY: isMobileDevice ? 80 : 115,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice-cubes/ice-cherry.png?raw=true',
    fruitImg:
      'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/fruits/cherry.png?raw=true',
    size: isMobileDevice ? 55 : 70,
    x: isMobileDevice ? 121 : 180,
    y: 10,
    moveX: isMobileDevice ? 25 : 38,
    moveY: isMobileDevice ? 65 : 102,
  },
  {
    img: 'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/ice-cubes/ice-banana.png?raw=true',
    fruitImg:
      'https://github.com/boomio-api-v2/final-combined-wdigets-1/blob/da8bb2c3063250997ef061433a5558d0f48faaef/images/penguinWidget/fruits/banana.png?raw=true',
    size: isMobileDevice ? 55 : 70,
    x: isMobileDevice ? 151 : 238,
    y: isMobileDevice ? 13 : 20,
    moveX: isMobileDevice ? 83 : 116,
    moveY: isMobileDevice ? 100 : 135,
  },
];
