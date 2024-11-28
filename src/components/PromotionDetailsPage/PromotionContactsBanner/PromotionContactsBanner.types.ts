import { BannerDt, BannerMob } from '@/types/promotion.types';

export interface IProps {
  logoUrl: string;
  secondBannerDt: string;
  secondBannerMob: string;
  hotLinePhone: string;
  hotLineEmail: string;
}

export interface IStyledProps {
  secondBannerDt: BannerDt;
  secondBannerMob: BannerMob;
}
