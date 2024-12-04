import { Conditions } from '@/types/condition.types';
import {
  NumberOrNull,
  OnSwiperSlideChange,
  SetNumberFunc,
} from '@/types/types';

export interface IProps {
  rulesPdf: string;
  conditions: Conditions;
  activeIndex: number;
  slideHeight: NumberOrNull;
  onSlideChange: OnSwiperSlideChange;
  setActiveIndexByIndex: SetNumberFunc;
}

export interface IStyledCoverProps {
  bgImgUrl?: string;
}
