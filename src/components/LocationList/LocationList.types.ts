import { SetLocationFunc } from '@/types/types';

export interface IProps {
  setLocation: SetLocationFunc;
  locations: string[];
}

export interface IStyledProps {
  isTitle: boolean;
}
