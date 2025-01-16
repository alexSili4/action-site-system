import { SetNumberFunc, SetPromotionFunc } from '@/types/types';

export interface IProps {
  onSuccessRegisterCode: SetNumberFunc;
  updatePromotion: SetPromotionFunc;
  rulesPdf: string;
}

export interface IStyledProps {
  isError: boolean;
}
