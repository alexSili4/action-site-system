import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  PromotionsSortTypesKeys,
} from '@/constants';
import { NumberOrNull, PageLocation, StringOrNull } from './types';

export type CoverageType = 'national' | 'base';

export type ActionType = 1 | 2 | 3; // 1 - колесо 2 - розіграш 3 - колесо + розіграш

export interface IPromotion {
  id: number;
  name: string;
  logo: StringOrNull;
  date_from: NumberOrNull;
  date_to: NumberOrNull;
  conditions_text: string;
  main_banner_dt: StringOrNull;
  main_banner_mob: StringOrNull;
  second_banner_dt: StringOrNull;
  second_banner_mob: StringOrNull;
  third_banner_mob: StringOrNull;
  third_banner_dt: StringOrNull;
  hot_line_phone: string;
  hot_line_email: string;
  hot_line_text: string;
  hot_line_text_2: string;
  hot_line_work_hours: string;
  coverage_type: CoverageType;
  action_type: ActionType;
  rules_pdf: string;
  logo_partner: string;
  legal_text: string;
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
  promotionCategory?: string;
}

export type PromotionDetailsState = {
  state: Partial<IPromotionDetailsState>;
};

export interface IGetPromotionBannerUrlsProps {
  bannerDt: StringOrNull;
  bannerMob: StringOrNull;
}

export interface IGetPromotionBannerUrls {
  bannerDtUrl: string;
  bannerMobUrl: string;
}

export interface IGetPromotionDateProps {
  dateFrom: NumberOrNull;
  dateTo: NumberOrNull;
}

export type TargetPromotionDetailsState = IPromotion | null;
