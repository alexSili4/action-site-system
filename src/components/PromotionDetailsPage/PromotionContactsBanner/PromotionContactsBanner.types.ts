import { StringOrNull } from '@/types/types';

export interface IProps {
  logoUrl: string;
  bannerDt: string;
  bannerMob: string;
  hotLinePhone: string;
  hotLineEmail: string;
  validHotLinePhone: string;
}

export interface IStyledProps {
  bannerDt: StringOrNull;
  bannerMob: StringOrNull;
}
