import { Numbers, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  steps: Numbers;
  currentStep: number;
  logoUrl: string;
  name: string;
  promotionDate: string;
  thirdBannerMob: string;
  thirdBannerDt: string;
  hotLinePhone: string;
  hotLineWorkHours: string;
  onCompleteRegCodeBtnClick: OnBtnClickFunc;
}
