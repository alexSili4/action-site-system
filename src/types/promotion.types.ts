import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  PromotionsSortTypesKeys,
} from '@/constants';
import { PageLocation } from './types';

export interface IPromotion {}

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
