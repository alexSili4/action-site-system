import { IWheelPrize } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  moveToNextStep: Func;
  showModalWin: boolean;
  targetPrize: IWheelPrize;
}
