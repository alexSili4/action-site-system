import { Conditions } from '@/types/condition.types';
import { NumberOrNull } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  conditions: Conditions;
}

export interface IStyledContainerProps {
  paddingSideMobile: string;
  paddingSideDesk: string;
  slideHeight: NumberOrNull;
}
