import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  isPromotionDetailsPage: boolean;
  onRegisterCodeBtnClick: OnBtnClickFunc;
  isFake?: boolean;
}

export interface IStyledProps {
  isRootPage: boolean;
  isFake: boolean;
}
