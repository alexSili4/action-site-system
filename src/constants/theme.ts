declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
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
    myriadPro: string;
    montserrat: string;
  };
  iconSizes: {
    rulesLink: number;
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
    resultsBtn: number;
    promotionContactsPhoneLink: number;
    promotionContactsMailLink: number;
    promotionContactsMapHeader: number;
    promotionContactsMapListClose: number;
    userInfoBtn: number;
    statisticsSortBtn: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
    largeMobile: number;
  };
  breakpoints: {
    desktop: number;
  };
  zIndex: {
    prizeWheelImg: number;
    prizeStatus: number;
    animatedModalWin: number;
    promotionMapHeader: number;
    promotionShopsList: number;
    promotionNavBar: number;
    promotionSliderControls: number;
    promotionSliderPagination: number;
    dropdownBackdrop: number;
    selectCityDropdown: number;
    selectSortTypeDropdown: number;
    promotionsDatePicker: number;
    promotionPrizeDrawsDatePicker: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
  trimText: string;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
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
    myriadPro: 'Myriad Pro',
    montserrat: 'Montserrat',
  },
  iconSizes: {
    rulesLink: 14,
    socialList: 24,
    cabinet: 14,
    showLocationsBtn: 12,
    showSortTypesBtn: 12,
    showDatePickerBtn: 12,
    datePickerBtnLabel: 20,
    goBackLink: 10,
    promotionPrizesSliderBtn: 10,
    faqBtn: 14,
    phoneLink: 16,
    resultsBtn: 14,
    promotionContactsPhoneLink: 16,
    promotionContactsMailLink: 18,
    promotionContactsMapHeader: 20,
    promotionContactsMapListClose: 12,
    userInfoBtn: 12,
    statisticsSortBtn: 20,
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
  zIndex: {
    prizeWheelImg: 10,
    prizeStatus: 10,
    animatedModalWin: 10,
    promotionSliderControls: 10,
    promotionSliderPagination: 10,
    promotionMapHeader: 1000,
    promotionShopsList: 1000,
    promotionNavBar: 1000,
    dropdownBackdrop: 10000,
    selectCityDropdown: 10000,
    selectSortTypeDropdown: 10000,
    promotionsDatePicker: 10000,
    promotionPrizeDrawsDatePicker: 10000,
  },
  transitionDurationAndFunc: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
  trimText:
    'word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;',
};

export default theme;
