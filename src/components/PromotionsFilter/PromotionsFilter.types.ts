import {
  ChangePromotionCategoryFunc,
  PromotionsCategoriesValues,
} from '@/types/types';

export interface IProps {
  promotionCategory: string;
  categories: PromotionsCategoriesValues;
  changePromotionCategory: ChangePromotionCategoryFunc;
}
