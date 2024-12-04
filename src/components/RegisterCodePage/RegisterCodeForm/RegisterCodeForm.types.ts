import { SetNumberFunc } from '@/types/types';

export interface IProps {
  onSuccessRegisterCode: SetNumberFunc;
  rulesPdf: string;
}

export interface IStyledProps {
  isError: boolean;
}
