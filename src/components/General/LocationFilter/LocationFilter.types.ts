export interface IProps {
  isRootPage?: boolean;
  makeScroll?: boolean;
  isModalWin?: boolean;
  showOtherModalWin?: boolean;
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
