declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
  };
  padding: {
    container: number;
  };
  fontFamily: {
    geologica: string;
  };
  iconSizes: {
    socialList: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
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
  },
  // borderRadius: {  },
  fontFamily: {
    geologica: 'Geologica',
  },
  iconSizes: {
    socialList: 24,
  },
  containerWidth: {
    desktop: 1376,
    mobile: 375,
  },
  breakpoints: {
    desktop: 1410,
  },
  // shadows: {  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
