import { Conditions } from '@/types/condition.types';

export interface IProps {
  conditions: Conditions;
}

export interface IStyledContainerProps {
  paddingSideMobile: string;
  paddingSideDesk: string;
  slideHeight: number;
}

export interface IStyledRulesCardProps {
  bgImgUrl: string;
}
