import { Conditions } from '@/types/condition.types';

export interface IProps {
  rulesPdf: string;
  conditions: Conditions;
}

export interface IStyledContainerProps {
  paddingSideMobile: string;
  paddingSideDesk: string;
  slideHeight: number | null;
}
