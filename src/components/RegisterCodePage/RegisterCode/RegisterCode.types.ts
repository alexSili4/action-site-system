import { Partners } from '@/types/code.types';
import { IPromotion } from '@/types/promotion.types';
import { Func, SetNumberFunc } from '@/types/types';

export interface IProps {
  promotion: IPromotion;
  isFirstStep: boolean;
  isSecondStep: boolean;
  isThirdStep: boolean;
  currentStep: number;
  partners: Partners;
  onSuccessRegisterCode: SetNumberFunc;
  incrementCurrentStep: Func;
}
