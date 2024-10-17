import { WheelPrizes } from '@/types/code.types';

export interface IProps {
  prizes: WheelPrizes;
  spinningMs: number;
  maxSpins: number;
}

export interface IStyledProps {
  totalDegrees: number;
  spinningMs: number;
}

export interface IStyledSectorProps {
  number: number;
  length: number;
}
