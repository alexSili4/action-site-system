import { IWheelPrize } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  moveToNextStep: Func;
  targetPrize: IWheelPrize;
  animationDuration?: number;
}
