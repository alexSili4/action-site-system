import { NumberOrNull } from '@/types/types';

export interface IProps {
  supportServiceText: string;
  userName: string;
  message: string;
  marks: NumberOrNull;
}

export interface IStyledTextWrapProps {
  isHiddenOnDesk?: boolean;
}
