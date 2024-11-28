import { Func } from '@/types/types';

export interface IProps {
  incrementCurrentStep: Func;
  rulesPdf: string;
}

export interface IStyledProps {
  isError: boolean;
}
