import { Location } from 'react-router-dom';
import { ChangeEvent, MouseEvent } from 'react';
import Swiper from 'swiper';
import { Partners } from './code.types';
import { IPromotion } from './promotion.types';

// events
export type DatePickerEvent = Date | null;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// functions
export type Func = () => void;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type OnDivClickFunc = (e: DivClickEvent) => void;

export type OnAnchorClickFunc = (e: AnchorClickEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type OnSwiperSlideChange = (swiper: Swiper) => void;

export type SetNumberFunc = (data: number) => void;

export type SetBooleanFunc = (data: boolean) => void;

export type SetStringOrNullFunc = (data: StringOrNull) => void;

export type SetPromotionFunc = (data: IPromotion | null) => void;

export interface ISetServiceUnavailableStateFuncProps {
  isError: boolean;
  errorMessage: string;
}

export type SetServiceUnavailableStateFunc = (
  data: ISetServiceUnavailableStateFuncProps
) => void;

// other

export type NumberOrNull = number | null;

export type StringOrNull = string | null;

export interface IOnPageBtnClickProps {
  e: BtnClickEvent;
  page: number;
}

export type ListRef = HTMLUListElement | null;

export type DivRef = HTMLDivElement | null;

export type HTMLInputElements = HTMLInputElement[];

export type Numbers = number[];

export type Strings = string[];

export type Objects = {}[];

export interface IFormatDateProps {
  date: Date | string | number | undefined | null;
  dateFormat: string;
}

export type PageLocation = Location<any>;

export interface IPromotionPrizeDraws {
  from: string;
  to: string;
}

export type PromotionPrizeDraws = IPromotionPrizeDraws[];

export interface IChangeFocusToNextRegCodeInputProps {
  currentInput: HTMLInputElement;
  isFullValue: boolean;
}

export interface IGetRegCodeInputProps {
  inputFullLength: number;
  isFullValue: boolean;
}

export interface ICsrfToken {
  [key: string]: string;
}

export interface IGetPaginationBarSettingsProps {
  pageNumbers: number[];
  currentPage: number;
  step: number;
}

export interface IGetPaginationBarSettings {
  isValidPage: boolean;
  isBackNavBtnDisable: boolean;
  isNextNavBtnDisable: boolean;
  isShowNextTemplateBtn: boolean;
  isShowPrevTemplateBtn: boolean;
  isLastPage: boolean;
}

export interface ISetBtnDisplayProps {
  currentPage?: number;
  page?: number;
  step: number;
}

export interface IGetRegisterCodeLinkProps {
  code: string | number;
  cityId?: string;
}

export interface IGeneralOutletContext {
  showOtherModalWin: boolean;
}

export interface IPromotionDetailsPageOutletContext {
  updateLegalText: SetStringOrNullFunc;
  updateIsFinishedPromotion: SetBooleanFunc;
  isShowRegCodeLink: boolean;
}

export interface IOutletContext
  extends IGeneralOutletContext,
    IPromotionDetailsPageOutletContext {}

export interface IGetCodeStatus {
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
}

export interface IGetFinalTotalDegreesProps {
  partners: Partners;
  newPartnerIdx: number;
  initialTotalDegrees: number;
}

export interface IRegExp {
  email: RegExp;
}

export interface IGetSupportServiceTextProps {
  hotLinePhone: StringOrNull;
  hotLineWorkHours: StringOrNull;
}

export interface IGetPromotionByCode {
  code: string;
  action: IPromotion;
}
