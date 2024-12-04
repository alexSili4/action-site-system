import { IPartner } from '@/types/code.types';
import { Func } from '@/types/types';

export interface IProps {
  moveToNextStep: Func;
  showModalWin: boolean;
  targetPartner: IPartner;
}
