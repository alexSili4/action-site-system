import { Images } from '@/types/prize.types';

export interface IProps {
  images: Images;
  activeIndex: number;
}

export interface IStyledProps {
  isActiveBtn: boolean;
}
