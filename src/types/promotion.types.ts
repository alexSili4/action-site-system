import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  PromotionsSortTypesKeys,
} from '@/constants';
import { PageLocation } from './types';

export type MainBannerDT = string | null;

export type MainBannerMob = string | null;

export type DateFrom = number | null;

export type DateTo = number | null;

export interface IPromotion {
  id: number;
  name: string;
  logo: string | null;
  date_from: DateFrom;
  date_to: DateTo;
  conditions_text: string;
  main_banner_dt: MainBannerDT;
  main_banner_mob: MainBannerMob;
  second_banner_dt: string | null;
  second_banner_mob: string | null;
  third_banner_mob: string | null;
  third_banner_dt: string;
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
  mainBannerDt: MainBannerDT;
  mainBannerMob: MainBannerMob;
}

export interface IGetPromotionBannerUrls {
  mainBannerDtUrl: string;
  mainBannerMobUrl: string;
}

export interface IGetPromotionDateProps {
  dateFrom: DateFrom;
  dateTo: DateTo;
}
