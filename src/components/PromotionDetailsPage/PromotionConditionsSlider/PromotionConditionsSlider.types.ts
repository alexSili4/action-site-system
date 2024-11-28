import { Conditions } from '@/types/condition.types';
import { OnSwiperSlideChange, SetSlideActiveIndexByIndex } from '@/types/types';

export interface IProps {
  rulesPdf: string;
  conditions: Conditions;
  activeIndex: number;
  slideHeight: number | null;
  onSlideChange: OnSwiperSlideChange;
  setActiveIndexByIndex: SetSlideActiveIndexByIndex;
}

export interface IStyledCoverProps {
  bgImgUrl?: string;
}
