import { Shops } from '@/types/shop.types';

export interface IProps {
  shops: Shops;
  hotLineEmail: string;
  hotLinePhone: string;
  logoUrl: string;
  secondBannerDt: string;
  secondBannerMob: string;
  isNationalPromotion: boolean;
  validHotLinePhone: string;
}
