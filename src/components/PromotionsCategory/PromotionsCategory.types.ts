import { PromotionsCategoriesKeys } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  title: string;
  checked: boolean;
  value: PromotionsCategoriesKeys;
  onChange: InputChangeFunc;
}
