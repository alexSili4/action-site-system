import { SetNumberFunc, SetPromotionFunc } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  hotLinePhone: string;
  hotLineWorkHours: string;
  onSuccessRegisterCode: SetNumberFunc;
  updatePromotion: SetPromotionFunc;
}
