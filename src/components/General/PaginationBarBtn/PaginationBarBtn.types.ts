import { SetPageFunc } from '@/types/hooks.types';

export interface IProps {
  number: number;
  currentPage: number;
  step: number;
  setPage: SetPageFunc;
}

export interface IStyledButtonProps {
  isActivePageBtn?: boolean;
}
