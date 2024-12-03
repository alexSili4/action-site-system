import { SetURLSearchParams } from 'react-router-dom';
import {
  Func,
  InputChangeFunc,
  IOnPageBtnClickProps,
  OnAnchorClickFunc,
  OnBtnClickFunc,
  OnDivClickFunc,
  StringOrNull,
} from './types';
import {
  IPromotion,
  IPromotionDetailsState,
  Promotions,
  TargetPromotionDetailsState,
} from './promotion.types';
import { Conditions } from './condition.types';
import { Prizes } from './prize.types';
import { FAQs } from './faqs.types';
import { WinnersByDates } from './winner.types';
import {
  ControlPosition,
  DivIcon,
  LatLngBoundsExpression,
  LatLngExpression,
} from 'leaflet';
import { IRegCodeFormData, IRegUserFormData } from './regCode.types';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { RefObject } from 'react';
import { Shops } from './shop.types';

export type SetPageFunc = (data: IOnPageBtnClickProps) => void;

export interface IUsePaginationBarProps {
  totalPages: number;
  step?: number;
}

export interface IUsePaginationBar {
  isBackNavBtnDisable: boolean;
  isShowPrevTemplateBtn: boolean;
  isValidPage: boolean;
  isShowNextTemplateBtn: boolean;
  isNextNavBtnDisable: boolean;
  isLastPage: boolean;
  pageNumbers: number[];
  currentPage: number;
  step: number;
  onPrevPageBtnClick: OnBtnClickFunc;
  setPage: SetPageFunc;
  onNextPageBtnClick: OnBtnClickFunc;
}

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface IUseModalWin {
  modalRoot: Element | null;
  hideModalWin: OnDivClickFunc;
}

export interface IUseLocationFilterProps {
  makeScroll: boolean;
  isRootPage: boolean;
  isModalWin: boolean;
  toggleShowSelectPromotionsLocationModalWin?: Func;
}

export interface IUseLocationFilter {
  showLocationsBtnTitle: string;
  isSelectedCity: boolean;
  showLocationList: boolean;
  showOtherModalWin: boolean;
  isBigSize: boolean;
  toggleShowLocationList: Func;
  onShowListBtnClick: OnBtnClickFunc;
  onLocationLinkClick: OnAnchorClickFunc;
}

export interface IUsePromotionsList {
  promotions: Promotions;
  promotionDetailsState: IPromotionDetailsState;
}

export interface IUsePromotionDetailsPage {
  conditions: Conditions;
  otherPrizes: Prizes;
  wheelPrizes: Prizes;
  faqs: FAQs;
  winners: WinnersByDates;
  shops: Shops;
  promotion: TargetPromotionDetailsState;
}

export type UseTargetPromotion = IPromotion | undefined;

export interface IUsePromotionContactsVisicomMap {
  mapCenter: LatLngExpression;
  ukraineBounds: LatLngBoundsExpression;
  tileLayerUrl: string;
  zoomControlPosition: ControlPosition;
  tileLayerAttribution: string;
  customActiveMarkerIcon: DivIcon;
  customMarkerIcon: DivIcon;
}

export interface IUseRegisterCodeForm {
  handleFormSubmit: SubmitHandler<IRegCodeFormData>;
  register: UseFormRegister<IRegCodeFormData>;
  handleSubmit: UseFormHandleSubmit<IRegCodeFormData, undefined>;
  inputWrapRef: RefObject<HTMLDivElement>;
  isError: boolean;
  onRegCodeInput: InputChangeFunc;
  inputMaxLength: number;
  error: StringOrNull;
  disabledBtn: boolean;
}

export interface IUseCsrfToken {
  name: string;
  token: string;
}

export interface IUseRegisterUserForm {
  handleFormSubmit: SubmitHandler<IRegUserFormData>;
  register: UseFormRegister<IRegUserFormData>;
  handleSubmit: UseFormHandleSubmit<IRegUserFormData, undefined>;
  disabledBtn: boolean;
}

export interface IUseIsScrollingUp {
  isScrollingUp: boolean;
  isScrolling: boolean;
}

export interface IUseUserCertificate {
  certificateCode: string;
  code: string;
  bannerMobUrl: string;
  bannerDtUrl: string;
  certificatePdfUrl: string;
  getConditions: string;
  partnerLogoUrl: string;
  partnerName: string;
  prizeName: string;
  expiredFormatDate: string;
  hotLinePhone: string;
  hotLineWorkHours: string;
  promotionName: string;
  promotionDetailsPath: string;
  codeDetailsPath: string;
  validHotLinePhone: string;
}

export interface IUsePromotionFilter {
  onShowListBtnClick: OnBtnClickFunc;
  showPromotionsList: boolean;
  toggleShowPromotionsList: Func;
  onPromotionLinkClick: OnAnchorClickFunc;
}

export interface IUseTargetPromotionData {
  legalText: string;
}
