import { SetNumberFunc, SetPromotionFunc } from '@/types/types';

export interface IProps {
  onSuccessRegisterCode: SetNumberFunc;
  updatePromotion: SetPromotionFunc;
  rulesPdf: string;
  isPromotion: boolean;
}

export interface IStyledProps {
  isError: boolean;
}

export interface IStyledRegisterFormCheckboxLinkProps {
  disabledLink: boolean;
}
