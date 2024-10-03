declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
    lightGrey: string;
  };
  padding: {
    container: number;
    compact: number;
  };
  fontFamily: {
    geologica: string;
    delaGothicOne: string;
    oswald: string;
  };
  iconSizes: {
    socialList: number;
    cabinet: number;
    showLocationsBtn: number;
    showSortTypesBtn: number;
    showDatePickerBtn: number;
    datePickerBtnLabel: number;
    goBackLink: number;
    promotionPrizesSliderBtn: number;
    faqBtn: number;
    phoneLink: number;
    regCodeLink: number;
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
  trimText: string;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    lightGrey: '#eeeeee',
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
    oswald: 'Oswald',
  },
  iconSizes: {
    socialList: 24,
    cabinet: 14,
    showLocationsBtn: 12,
    showSortTypesBtn: 12,
    showDatePickerBtn: 12,
    datePickerBtnLabel: 20,
    goBackLink: 10,
    promotionPrizesSliderBtn: 10,
    faqBtn: 12,
    phoneLink: 16,
    regCodeLink: 16,
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
  transitionDurationAndFunc: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
  trimText:
    'word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;',
};

export default theme;
