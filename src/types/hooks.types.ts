import { SetURLSearchParams } from 'react-router-dom';
import {
  Func,
  InputChangeFunc,
  OnAnchorClickFunc,
  OnBtnClickFunc,
  OnDivClickFunc,
} from './types';
import {
  ActionType,
  BannerDt,
  BannerMob,
  CoverageType,
  DateFrom,
  DateTo,
  IPromotion,
  IPromotionDetailsState,
  Promotions,
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
import { IRegCodeFormData } from './regCode.types';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { RegisterCodeErr } from './code.types';
import { RefObject } from 'react';
import { Shops } from './shop.types';

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

export interface IUseLocationFilter {
  showLocationsBtnTitle: string;
  isSelectedCity: boolean;
  showLocationList: boolean;
  toggleShowLocationList: Func;
  onShowListBtnClick: OnBtnClickFunc;
  onLocationLinkClick: OnAnchorClickFunc;
}

export interface IUsePromotionsList {
  promotions: Promotions;
  linkState: IPromotionDetailsState;
}

export interface IUsePromotionDetailsPage {
  conditions: Conditions;
  prizes: Prizes;
  faqs: FAQs;
  winners: WinnersByDates;
  shops: Shops;
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

export interface IUseTargetPromotionData {
  rulesPdf: string;
  hotLinePhone: string | undefined;
  hotLineEmail: string | undefined;
  logo: string;
  coverageType: CoverageType | undefined;
  dateFrom: DateFrom;
  dateTo: DateTo;
  mainBannerMob: BannerMob;
  mainBannerDt: BannerDt;
  secondBannerMob: BannerMob;
  secondBannerDt: BannerDt;
  actionType: ActionType | undefined;
  name: string;
  hotLineText: string | undefined;
}

export interface IUseRegisterCodeForm {
  handleFormSubmit: SubmitHandler<IRegCodeFormData>;
  register: UseFormRegister<IRegCodeFormData>;
  handleSubmit: UseFormHandleSubmit<IRegCodeFormData, undefined>;
  inputWrapRef: RefObject<HTMLDivElement>;
  isError: boolean;
  onRegCodeInput: InputChangeFunc;
  inputMaxLength: number;
  error: RegisterCodeErr;
  disabledSubmitRegFormBtn: boolean;
}

export interface IUseCsrfToken {
  name: string;
  token: string;
}
