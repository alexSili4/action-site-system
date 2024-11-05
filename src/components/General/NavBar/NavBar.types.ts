import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  isDesktop: boolean;
  isPromotionDetailsPage: boolean;
  onRegisterCodeBtnClick: OnBtnClickFunc;
}

export interface IStyledProps {
  isRootPage: boolean;
  isDesktop: boolean;
}
