import type { StyleObject } from '@/types';

export interface IAnimateBlock {
  img: string;
  animation: string;
  margin: number;
  isCloud?: boolean;
  time?: number;
  styles?: StyleObject;
}
