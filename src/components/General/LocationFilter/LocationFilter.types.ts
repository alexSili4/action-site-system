export interface IProps {
  isRootPage?: boolean;
  makeScroll?: boolean;
  isModalWin?: boolean;
  showOtherModalWin?: boolean;
}

export interface IStyledContainerProps {
  isRootPage: boolean;
  isModalWin: boolean;
  showOtherModalWin: boolean;
}

export interface IStyledShowLocationsBtnProps {
  isRootPage: boolean;
  showLocationList: boolean;
  isModalWin: boolean;
}

export interface IStyledLocationListProps {
  isRootPage: boolean;
  isModalWin: boolean;
}

export interface IStyledShowLocationsBtnTitleProps {
  isSelectedCity: boolean;
}
