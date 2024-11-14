import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  isDesktop: boolean;
  onRegisterCodeBtnClick: OnBtnClickFunc;
}

export interface IStyledHeaderProps {
  shouldHideHeader: boolean;
  isMulticolorHeader: boolean;
  isPromotionDetailsPage: boolean;
}
