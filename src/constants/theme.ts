declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
    white: string;
    lightGrey: string;
    grey: string;
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
    prizesWheelLock: number;
    rulesLink: number;
    socialList: number;
    cabinet: number;
    showLocationsBtn: number;
    showPromotionsSortTypesBtn: number;
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
    cabinetSectionLink: number;
    certificateStatus: number;
    cabinetCodeLink: number;
    cabinetPaginationBtn: number;
    conditionsSliderBtn: number;
    registerFormCheckbox: number;
    cabinetDownloadCertificateLink: number;
    cabinetHotlinePhone: number;
    cabinetGoBackLink: number;
    userCodeDetailsMarker: number;
    showPromotionsBtn: number;
  };
  containerWidth: {
    desktop: number;
    tablet: number;
    mobile: number;
    largeMobile: number;
  };
  breakpoints: {
    tablet: 810;
    desktop: number;
  };
  zIndex: {
    prizeStatus: number;
    animatedModalWin: number;
    promotionMapHeader: number;
    promotionShopsList: number;
    promotionNavBar: number;
    promotionSliderControls: number;
    promotionSliderPagination: number;
    dropdownBackdrop: number;
    selectCityDropdown: number;
    selectPromotionsSortTypeDropdown: number;
    promotionsDatePicker: number;
    promotionPrizeDrawsDatePicker: number;
    selectStatisticsSortTypeDropdown: number;
    conditionsSliderPagination: number;
    spinWheelBtn: number;
    animatedPrizeWheelModalWin: number;
    animatedPrizeImg: number;
    header: number;
    selectPromotionDropdown: number;
    confettiAnimation: number;
  };
  transitionDurationAndFunc: {
    header: string;
    other: string;
  };
  spacing: (value?: number) => string;
  trimText: string;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    lightGrey: '#eeeeee',
    grey: '#808080',
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
    registerFormCheckbox: 8,
    cabinetCodeLink: 8,
    cabinetSectionLink: 8,
    goBackLink: 10,
    promotionPrizesSliderBtn: 10,
    userInfoBtn: 12,
    showLocationsBtn: 12,
    showPromotionsBtn: 12,
    showPromotionsSortTypesBtn: 12,
    showDatePickerBtn: 12,
    promotionContactsMapListClose: 12,
    userCodeDetailsMarker: 13,
    faqBtn: 14,
    cabinet: 14,
    rulesLink: 14,
    resultsBtn: 14,
    cabinetPaginationBtn: 14,
    phoneLink: 16,
    certificateStatus: 16,
    promotionContactsPhoneLink: 16,
    prizesWheelLock: 18,
    promotionContactsMailLink: 18,
    statisticsSortBtn: 20,
    datePickerBtnLabel: 20,
    promotionContactsMapHeader: 20,
    socialList: 24,
    conditionsSliderBtn: 18,
    cabinetDownloadCertificateLink: 12,
    cabinetHotlinePhone: 14,
    cabinetGoBackLink: 8,
  },
  containerWidth: {
    desktop: 1376,
    tablet: 730,
    mobile: 343,
    largeMobile: 359,
  },
  breakpoints: {
    tablet: 810,
    desktop: 1410,
  },
  // shadows: {  },
  zIndex: {
    prizeStatus: 10,
    spinWheelBtn: 10,
    promotionSliderControls: 10,
    promotionSliderPagination: 10,
    conditionsSliderPagination: 10,
    promotionMapHeader: 1000,
    promotionShopsList: 1000,
    promotionNavBar: 1000,
    header: 10000,
    dropdownBackdrop: 9999,
    selectCityDropdown: 10000,
    selectPromotionDropdown: 10000,
    selectPromotionsSortTypeDropdown: 10000,
    selectStatisticsSortTypeDropdown: 10000,
    promotionsDatePicker: 10000,
    promotionPrizeDrawsDatePicker: 10000,
    animatedModalWin: 100000,
    animatedPrizeWheelModalWin: 100000,
    animatedPrizeImg: 100000,
    confettiAnimation: 10000000000000000000000,
  },
  transitionDurationAndFunc: {
    header: '600ms cubic-bezier(0.4, 0, 0.2, 1)',
    other: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: (value = 1) => `${value * 4}px`,
  trimText:
    'word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;',
};

export default theme;
