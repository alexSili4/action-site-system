import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  PromotionsSortTypesKeys,
} from '@/constants';
import { PageLocation } from './types';

export type BannerDt = string | null;

export type BannerMob = string | null;

export type DateFrom = number | null;

export type DateTo = number | null;

export interface IPromotion {
  id: number;
  name: string;
  logo: string | null;
  date_from: DateFrom;
  date_to: DateTo;
  conditions_text: string;
  main_banner_dt: BannerDt;
  main_banner_mob: BannerMob;
  second_banner_dt: BannerDt;
  second_banner_mob: BannerMob;
  third_banner_mob: string | null;
  third_banner_dt: string | null;
  hot_line_phone: string;
  hot_line_email: string;
  hot_line_text: string;
}

export type Promotions = IPromotion[];

export type TranslatedPromotionsSortTypesKeys = {
  [key in PromotionsSortTypesKeys]: string;
};

export type PromotionsSortTypesValues = PromotionsSortTypesKeys[];

export type PromotionsCategoriesValues = PromotionsCategoriesKeys[];

export type TranslatedPromotionsCategoriesKeys = {
  [key in PromotionsCategoriesKeys]: string;
};

export type TranslatedPromotionDetailsPageSections = {
  [key in PromotionDetailsPageSections]: string;
};

export interface IPromotionDetailsState {
  from: PageLocation;
  promotionCategory: string;
}

export type PromotionDetailsState = {
  state: Partial<IPromotionDetailsState>;
};

export interface IGetPromotionBannerUrlsProps {
  bannerDt: BannerDt;
  bannerMob: BannerMob;
}

export interface IGetPromotionBannerUrls {
  bannerDtUrl: string;
  bannerMobUrl: string;
}

export interface IGetPromotionDateProps {
  dateFrom: DateFrom;
  dateTo: DateTo;
}
