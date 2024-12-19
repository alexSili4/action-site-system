import { Partners } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  partners: Partners;
  spinningMs: number;
  maxSpins: number;
  codeId: number;
  moveToNextStep: Func;
}

export interface IStyledWheelProps {
  totalDegrees: number;
  spinningMs: number;
}

export interface IStyledSectorProps {
  number: number;
  rotate: number;
  size: number;
  gradientStart: number;
  isLockPrize: boolean;
  isOddPartnersNumber: boolean;
}

export interface IStyledImage {
  isLockPrize: boolean;
}

export interface IStyledDelimiter {
  rotate: number;
  isOddPartnersNumber: boolean;
}
