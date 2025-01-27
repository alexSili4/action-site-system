import { SetNumberFunc, SetPromotionFunc } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  supportServiceText: string;
  onSuccessRegisterCode: SetNumberFunc;
  updatePromotion: SetPromotionFunc;
}
