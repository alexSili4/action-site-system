import { Func, InputChangeFunc, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  onSortTypeInputChange: InputChangeFunc;
  showSortTypesList: boolean;
  toggleShowSortTypesList: Func;
  onShowSortTypesBtnClick: OnBtnClickFunc;
  sortType: string;
}

export interface IStyledProps {
  showSortTypesList: boolean;
}
