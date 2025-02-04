import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isDesktop: boolean;
  isShowRegCodeLink: boolean;
  isPromotionDetailsPage: boolean;
  onRegisterCodeBtnClickOnAllPages: OnBtnClickFunc;
  onRegisterCodeBtnClickOnPromotionPage: OnBtnClickFunc;
}

export interface IStyledNavProps {
  isRootPage: boolean;
}

export interface IStyledLinkProps {
  isDesktop: boolean;
  isRootPage: boolean;
}
