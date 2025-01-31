import { SetNumberFunc, SetPromotionFunc } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  isPromotion: boolean;
  supportServiceText: string;
  onSuccessRegisterCode: SetNumberFunc;
  updatePromotion: SetPromotionFunc;
}
