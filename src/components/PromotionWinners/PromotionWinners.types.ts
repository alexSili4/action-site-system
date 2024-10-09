import { Winners } from '@/types/winner.types';

export interface IProps {
  winners: Winners;
}

export interface IStyledProps {
  marginTop?: string;
  isTable?: boolean;
  isHiddenOnDesk?: boolean;
}
