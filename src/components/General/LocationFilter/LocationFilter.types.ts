import { Func } from '@/types/types';

export interface IProps {
  isRootPage?: boolean;
  makeScroll?: boolean;
  isModalWin?: boolean;
  toggleShowSelectPromotionsLocationModalWin?: Func;
}

export interface IStyledContainerProps {
  isRootPage: boolean;
  showOtherModalWin: boolean;
}

export interface IStyledShowLocationsBtnProps {
  showLocationList: boolean;
  isBigSize: boolean;
}

export interface IStyledLocationListProps {
  isBigSize: boolean;
}

export interface IStyledShowLocationsBtnTitleProps {
  isSelectedCity: boolean;
}
