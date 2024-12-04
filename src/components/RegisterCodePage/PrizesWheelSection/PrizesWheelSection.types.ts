import { Partners } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  partners: Partners;
  spinningMs: number;
  maxSpins: number;
  moveToNextStep: Func;
}

export interface IStyledWheelProps {
  totalDegrees: number;
  spinningMs: number;
}

export interface IStyledSectorProps {
  number: number;
  length: number;
}
