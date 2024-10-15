import { Numbers } from '@/types/types';

export interface IProps {
  isHiddenOnMobile: boolean;
  steps: Numbers;
  currentStep: number;
}

export interface IContainerStyledProps {
  isHiddenOnMobile: boolean;
}

export interface IListItemStyledProps {
  stepsCount: number;
}

export interface ICompletedStyledProps {
  currentStep: number;
}
