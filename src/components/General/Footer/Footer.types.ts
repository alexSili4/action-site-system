import { StringOrNull } from '@/types/types';

export interface IStyledProps {
  isRootPage: boolean;
}

export interface IStyledFooterProps {
  isRootPage: boolean;
  isPromotionDetailsPage: boolean;
}

export interface IProps {
  legalText: StringOrNull;
}
