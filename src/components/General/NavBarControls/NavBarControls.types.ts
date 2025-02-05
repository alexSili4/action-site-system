import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  isShowRegCodeLink: boolean;
  onRegisterCodeBtnClickOnAllPages: OnBtnClickFunc;
  onRegisterCodeBtnClickOnPromotionPage: OnBtnClickFunc;
  isFake?: boolean;
}

export interface IStyledProps {
  isRootPage: boolean;
  isFake: boolean;
  isShowRegCodeLink: boolean;
}
