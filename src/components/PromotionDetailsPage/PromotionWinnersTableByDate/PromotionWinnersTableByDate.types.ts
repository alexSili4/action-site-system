import { IWinnerByDate } from '@/types/winner.types';

export interface IProps {
  winners: IWinnerByDate;
}

export interface IStyledProps {
  showWinners: boolean;
  scrollHeight: number;
}

export interface IStyledOpenContentBtnTitleProps {
  disabled: boolean;
}
