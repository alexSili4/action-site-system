import { ChangePromotionCategoryFunc } from '@/types/types';

export interface IProps {
  isActiveCategory: boolean;
  isPreviousCategory: boolean;
  changePromotionCategory: ChangePromotionCategoryFunc;
}
