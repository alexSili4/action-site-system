import { InputChangeFunc, PromotionsSortTypesValues } from '@/types/types';

export interface IProps {
  types: PromotionsSortTypesValues;
  sortType: string;
  onChange: InputChangeFunc;
}
