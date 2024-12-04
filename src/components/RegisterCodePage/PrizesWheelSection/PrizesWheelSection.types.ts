import { WheelPrizes } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  prizes: WheelPrizes;
  spinningMs: number;
  maxSpins: number;
  moveToNextStep: Func;
}

export interface IStyledWheelProps {
  totalDegrees: number;
  spinningMs: number;
  shouldStopWheel: boolean;
}

export interface IStyledSectorProps {
  number: number;
  length: number;
}
