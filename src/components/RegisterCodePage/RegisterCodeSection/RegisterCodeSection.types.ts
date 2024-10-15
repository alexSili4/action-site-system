import { Func, Numbers } from '@/types/types';

export interface IProps {
  steps: Numbers;
  currentStep: number;
  incrementCurrentStep: Func;
}
