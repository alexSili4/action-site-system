import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  onRegisterCodeBtnClickOnAllPages: OnBtnClickFunc;
  onRegisterCodeBtnClickOnPromotionPage: OnBtnClickFunc;
}

export interface IStyledLinkProps {
  isPreviewPage: boolean;
}
