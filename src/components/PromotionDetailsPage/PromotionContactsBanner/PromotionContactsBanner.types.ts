import { StringOrNull } from '@/types/types';

export interface IProps {
  bannerDt: string;
  bannerMob: string;
  hotLinePhone: StringOrNull;
  hotLineEmail: StringOrNull;
  validHotLinePhone: string;
}

export interface IStyledProps {
  bannerDt: StringOrNull;
  bannerMob: StringOrNull;
}
