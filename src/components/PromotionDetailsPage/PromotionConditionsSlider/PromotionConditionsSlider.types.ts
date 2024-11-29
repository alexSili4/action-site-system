import { Conditions } from '@/types/condition.types';
import {
  NumberOrNull,
  OnSwiperSlideChange,
  SetSlideActiveIndexByIndex,
} from '@/types/types';

export interface IProps {
  rulesPdf: string;
  conditions: Conditions;
  activeIndex: number;
  slideHeight: NumberOrNull;
  onSlideChange: OnSwiperSlideChange;
  setActiveIndexByIndex: SetSlideActiveIndexByIndex;
}

export interface IStyledCoverProps {
  bgImgUrl?: string;
}
