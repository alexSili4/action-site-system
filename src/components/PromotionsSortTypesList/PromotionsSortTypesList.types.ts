import { InputChangeFunc } from '@/types/types';
import { PromotionsSortTypesValues } from '@/types/promotion.types';

export interface IProps {
  types: PromotionsSortTypesValues;
  sortType: string;
  onChange: InputChangeFunc;
}
