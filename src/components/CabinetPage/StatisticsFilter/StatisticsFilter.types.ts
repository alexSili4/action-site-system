import { Func, InputChangeFunc, OnBtnClickFunc } from '@/types/types';
import { StatisticsCategoriesValues } from '@/types/auth.types';

export interface IProps {
  changeStatisticCategory: InputChangeFunc;
  categories: StatisticsCategoriesValues;
  statisticCategory: string;
  isAscSortType: boolean;
  onSortBtnClick: OnBtnClickFunc;
  onSortTypeInputChange: InputChangeFunc;
  showSortTypesList: boolean;
  toggleShowSortTypesList: Func;
  onShowSortTypesBtnClick: OnBtnClickFunc;
  sortType: string;
}
