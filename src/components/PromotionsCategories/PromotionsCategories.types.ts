import { InputChangeFunc, PromotionsCategoriesValues } from '@/types/types';

export interface IProps {
  promotionCategory: string;
  categories: PromotionsCategoriesValues;
  changePromotionCategory: InputChangeFunc;
}
