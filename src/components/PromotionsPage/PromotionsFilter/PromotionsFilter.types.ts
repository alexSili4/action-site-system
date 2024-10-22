import { InputChangeFunc } from '@/types/types';
import { PromotionsCategoriesValues } from '@/types/promotion.types';

export interface IProps {
  promotionCategory: string;
  categories: PromotionsCategoriesValues;
  changePromotionCategory: InputChangeFunc;
}
