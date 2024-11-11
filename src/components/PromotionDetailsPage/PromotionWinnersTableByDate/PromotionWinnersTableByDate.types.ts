import { IWinnerByDate } from '@/types/winner.types';

export interface IProps {
  winners: IWinnerByDate;
  isOpenSection: boolean;
}

export interface IStyledProps {
  showWinners: boolean;
  scrollHeight: number;
}

export interface IStyledOpenContentBtnTitleProps {
  disabled: boolean;
}
