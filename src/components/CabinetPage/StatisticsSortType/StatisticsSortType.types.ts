import { StatisticsSortTypesKeys } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  value: StatisticsSortTypesKeys;
  title: string;
  checked: boolean;
  onChange: InputChangeFunc;
}
