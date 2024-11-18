import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isDesktop: boolean;
  onRegisterCodeBtnClickOnAllPages: OnBtnClickFunc;
  onRegisterCodeBtnClickOnPromotionPage: OnBtnClickFunc;
}

export interface IStyledHeaderProps {
  shouldHideHeader: boolean;
  isPromotionDetailsPage: boolean;
}
