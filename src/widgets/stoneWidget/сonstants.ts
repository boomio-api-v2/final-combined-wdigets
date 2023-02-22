import { isMobileDevice } from '@/config';

export const stoneBlocks = [
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick1.png?raw=true',
    left: '30px',
    bottom: '10px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick2.png?raw=true',
    left: isMobileDevice ? '75px' : '90px',
    bottom: '10px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick3.png?raw=true',
    left: isMobileDevice ? '120px' : '150px',
    bottom: '10px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick5.png?raw=true',
    left: isMobileDevice ? '10px' : '10px',
    bottom: isMobileDevice ? '60px' : '80px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick6.png?raw=true',
    left: isMobileDevice ? '55px' : '70px',
    bottom: isMobileDevice ? '60px' : '80px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick7.png?raw=true',
    left: isMobileDevice ? '100px' : '130px',
    bottom: isMobileDevice ? '60px' : '80px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick8.png?raw=true',
    left: isMobileDevice ? '140px' : '190px',
    bottom: isMobileDevice ? '60px' : '80px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick8.png?raw=true',
    left: '10px',
    bottom: isMobileDevice ? '110px' : '150px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick6.png?raw=true',
    left: isMobileDevice ? '55px' : '70px',
    bottom: isMobileDevice ? '110px' : '150px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick3.png?raw=true',
    left: isMobileDevice ? '100px' : '130px',
    bottom: isMobileDevice ? '110px' : '150px',
  },
  {
    img: 'https://github.com/kbnvch/boomio/blob/main/brick5.png?raw=true',
    left: isMobileDevice ? '140px' : '190px',
    bottom: isMobileDevice ? '110px' : '150px',
  },
];
