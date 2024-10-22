import { Func, InputChangeFunc, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  isAscSortType: boolean;
  onSortBtnClick: OnBtnClickFunc;
  onSortTypeInputChange: InputChangeFunc;
  showSortTypesList: boolean;
  toggleShowSortTypesList: Func;
  onShowSortTypesBtnClick: OnBtnClickFunc;
  sortType: string;
}
