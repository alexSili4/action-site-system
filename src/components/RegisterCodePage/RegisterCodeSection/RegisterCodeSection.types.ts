import { Numbers, SetNumberFunc } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  steps: Numbers;
  currentStep: number;
  hotLinePhone: string;
  hotLineWorkHours: string;
  name: string;
  logoUrl: string;
  thirdBannerMob: string;
  thirdBannerDt: string;
  promotionDate: string;
  onSuccessRegisterCode: SetNumberFunc;
}
