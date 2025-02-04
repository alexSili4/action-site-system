import { Shops } from '@/types/shop.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  shops: Shops;
  hotLineEmail: StringOrNull;
  hotLinePhone: StringOrNull;
  logoUrl: string;
  bannerDt: string;
  bannerMob: string;
  isNationalPromotion: boolean;
  validHotLinePhone: string;
}
