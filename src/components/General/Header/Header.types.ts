import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isDesktop: boolean;
  onRegisterCodeBtnClickOnAllPages: OnBtnClickFunc;
  onRegisterCodeBtnClickOnPromotionPage: OnBtnClickFunc;
}

export interface IStyledHeaderWrapProps {
  isPromotionDetailsPage: boolean;
  shouldHideHeader: boolean;
}

export interface IStyledHeaderBackgroundProps {
  isColoredBackground: boolean;
}
