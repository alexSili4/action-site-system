import { InputChangeFunc } from '@/types/types';
import { StatisticsCategoriesValues } from '@/types/auth.types';

export interface IProps {
  changeStatisticCategory: InputChangeFunc;
  categories: StatisticsCategoriesValues;
  statisticCategory: string;
}
