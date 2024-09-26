import { PromotionsSortTypesKeys } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  value: PromotionsSortTypesKeys;
  title: string;
  checked: boolean;
  onChange: InputChangeFunc;
}
