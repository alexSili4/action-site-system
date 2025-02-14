import { Slides } from '@/types/prize.types';

export interface IProps {
  prizes: Slides;
  activeIndex: number;
}

export interface IStyledProps {
  isActiveBtn: boolean;
}
