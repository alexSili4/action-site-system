import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  PromotionsSortTypesKeys,
} from '@/constants';
import { NumberOrNull, PageLocation, StringOrNull } from './types';

export type CoverageType = 'national' | 'base';

export type ActionType = 1 | 2 | 3; // 1 - колесо 2 - розіграш 3 - колесо + розіграш

export type PromotionVStatus = 'in_work' | 'finished' | 'preview_mode';

export interface IPromotion {
  id: number;
  name: string;
  logo: StringOrNull;
  date_from: NumberOrNull;
  date_to: NumberOrNull;
  conditions_text: StringOrNull;
  main_banner_dt: StringOrNull;
  main_banner_mob: StringOrNull;
  second_banner_dt: StringOrNull;
  second_banner_mob: StringOrNull;
  third_banner_mob: StringOrNull;
  third_banner_dt: StringOrNull;
  hot_line_phone: StringOrNull;
  hot_line_email: StringOrNull;
  hot_line_text: StringOrNull;
  hot_line_text_2: StringOrNull;
  hot_line_work_hours: StringOrNull;
  coverage_type: CoverageType;
  action_type: ActionType | null;
  rules_pdf: StringOrNull;
  logo_partner: StringOrNull;
  legal_text: StringOrNull;
  rules: StringOrNull;
  promo_id: number;
  public_status: number;
  status: number;
  v_status: PromotionVStatus;
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

export interface IGetPromotionByIdProps {
  actionId: string;
  previewId: string;
}

export interface IGetPromotionsProps {
  cityId: string;
  isPreviousCategory: boolean;
}
