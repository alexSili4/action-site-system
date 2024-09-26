declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
  };
  padding: {
    container: number;
    compact: number;
  };
  fontFamily: {
    geologica: string;
    delaGothicOne: string;
  };
  iconSizes: {
    socialList: number;
    cabinet: number;
    showLocationsBtn: number;
    showSortTypesBtn: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
    largeMobile: number;
  };
  breakpoints: {
    desktop: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
  },
  // fontFamily: {  },
  // fontWeight: {  },
  // fontSize: {  },
  padding: {
    container: 16,
    compact: 8,
  },
  // borderRadius: {  },
  fontFamily: {
    geologica: 'Geologica',
    delaGothicOne: 'Dela Gothic One',
  },
  iconSizes: {
    socialList: 24,
    cabinet: 14,
    showLocationsBtn: 12,
    showSortTypesBtn: 12,
  },
  containerWidth: {
    desktop: 1376,
    mobile: 343,
    largeMobile: 359,
  },
  breakpoints: {
    desktop: 1410,
  },
  // shadows: {  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
