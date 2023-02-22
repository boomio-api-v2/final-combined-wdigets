import { isMobileDevice } from '@/config';
import { IPuzzleCoordinate } from './types';

export const puzzlesCoordinateForMobile: IPuzzleCoordinate[] = [
  {
    top: -1,
    left: 1,
    width: '49.84px',
    height: '61.33px',
  },
  {
    top: -1,
    left: 37,
    width: '61.3px',
    height: '49.86px',
  },
  {
    top: 47,
    left: 1,
    width: '61.3px',
    height: '49.86px',
  },
  {
    top: 44,
    left: 62,
    width: '50.84px',
    height: '63.3px',
  },
];

export const puzzlesCoordinateForDesktop: IPuzzleCoordinate[] = [
  {
    top: 0,
    left: 3,
    width: '89.84px',
    height: '111.33px',
  },

  {
    top: 0,
    left: 69,
    width: '111.3px',
    height: '88.86px',
  },
  {
    top: 87,
    left: 3,
    width: '110.3px',
    height: '89.86px',
  },
  {
    top: 65,
    left: 90,
    width: '89.84px',
    height: '111.33px',
  },
];

export const puzzlesCoordinate = isMobileDevice
  ? puzzlesCoordinateForMobile
  : puzzlesCoordinateForDesktop;

export const puzzleWidgetSize = isMobileDevice ? 101 : 185;
