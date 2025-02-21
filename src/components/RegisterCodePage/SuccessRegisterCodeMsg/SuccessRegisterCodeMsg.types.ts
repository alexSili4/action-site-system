import { ActionType } from '@/types/promotion.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  supportServiceText: string;
  userName: string;
  message: string;
  marks: NumberOrNull;
  actionType: ActionType | null | undefined;
}

export interface IStyledTextWrapProps {
  isHiddenOnDesk?: boolean;
}
