import { Func } from '@/types/types';

export interface IProps {
  isRootPage: boolean;
  setRegisterCodeModalWinState: Func;
  isFake?: boolean;
}

export interface IStyledProps {
  isRootPage: boolean;
  isFake: boolean;
}
