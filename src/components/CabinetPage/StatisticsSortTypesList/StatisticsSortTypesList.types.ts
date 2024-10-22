import { StatisticsSortTypesValues } from '@/types/auth.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  types: StatisticsSortTypesValues;
  sortType: string;
  onSortTypeInputChange: InputChangeFunc;
}
