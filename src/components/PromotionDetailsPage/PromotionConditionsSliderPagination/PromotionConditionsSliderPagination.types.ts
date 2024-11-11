import { SetActiveIndexByIndexFunc } from '@/types/promotion.types';

export interface IProps {
  conditions: Array<any>;
  activeIndex: number;
  setActiveIndexByIndex: SetActiveIndexByIndexFunc;
}

export interface IStyledProps {
  isActiveBtn: boolean;
}
