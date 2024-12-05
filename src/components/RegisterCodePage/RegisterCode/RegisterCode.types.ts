import { Partners } from '@/types/code.types';
import { IPromotion } from '@/types/promotion.types';
import { Func, NumberOrNull, SetNumberFunc } from '@/types/types';

export interface IProps {
  promotion: IPromotion;
  isFirstStep: boolean;
  isSecondStep: boolean;
  isThirdStep: boolean;
  currentStep: number;
  partners: Partners | null;
  codeId: NumberOrNull;
  onSuccessRegisterCode: SetNumberFunc;
  incrementCurrentStep: Func;
}
