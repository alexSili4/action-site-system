import { ActionType } from '@/types/promotion.types';
import { NumberOrNull, StringOrNull } from '@/types/types';

export interface IProps {
  supportServiceText: string;
  userName: StringOrNull;
  message: string;
  marks: NumberOrNull;
  actionType: ActionType | null | undefined;
}

export interface IStyledTextWrapProps {
  isHiddenOnDesk?: boolean;
}
