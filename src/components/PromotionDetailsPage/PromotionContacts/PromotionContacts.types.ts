import { Shops } from '@/types/shop.types';

export interface IProps {
  shops: Shops;
  hotLineEmail: string;
  hotLinePhone: string;
  logoUrl: string;
  bannerDt: string;
  bannerMob: string;
  isNationalPromotion: boolean;
  validHotLinePhone: string;
}
