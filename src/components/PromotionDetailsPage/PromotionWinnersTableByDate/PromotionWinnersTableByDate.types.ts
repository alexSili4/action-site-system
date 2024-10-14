import { Winners } from '@/types/winner.types';

export interface IProps {
  date: string;
  winners: Winners;
}

export interface IStyledProps {
  showWinners: boolean;
  scrollHeight: number;
}
