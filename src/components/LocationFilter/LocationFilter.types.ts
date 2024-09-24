export interface IProps {
  isRootPage: boolean;

  isHidden?: boolean;
}

export interface IStyledContainerProps {
  isRootPage: boolean;
  isHidden: boolean;
}

export interface IStyledShowLocationsBtnProps {
  isRootPage: boolean;
  showLocationList: boolean;
}

export interface IStyledLocationListProps {
  isRootPage: boolean;
}

export interface IStyledShowLocationsBtnTitleProps {
  targetLocation: string | null;
}
