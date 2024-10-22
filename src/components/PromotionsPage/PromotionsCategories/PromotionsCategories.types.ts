import { PromotionsCategoriesValues } from '@/types/promotion.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  promotionCategory: string;
  categories: PromotionsCategoriesValues;
  changePromotionCategory: InputChangeFunc;
}
