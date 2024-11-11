import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  isDesktop: boolean;
  onRegisterCodeBtnClick: OnBtnClickFunc;
}

export interface IStyledHeaderProps {
  isPromotionDetailsPage: boolean;
}
