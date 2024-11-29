import { StringOrNull } from '@/types/types';

export interface IProps {
  logoUrl: string;
  secondBannerDt: string;
  secondBannerMob: string;
  hotLinePhone: string;
  hotLineEmail: string;
}

export interface IStyledProps {
  secondBannerDt: StringOrNull;
  secondBannerMob: StringOrNull;
}
