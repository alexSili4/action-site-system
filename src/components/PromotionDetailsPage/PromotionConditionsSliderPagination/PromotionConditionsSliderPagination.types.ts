import { SetNumberFunc } from '@/types/types';

export interface IProps {
  conditions: Array<any>;
  activeIndex: number;
  setActiveIndexByIndex: SetNumberFunc;
}

export interface IStyledProps {
  isActiveBtn: boolean;
  isAnExtraDeskButton: boolean;
  isAnExtraTabletButton: boolean;
}
