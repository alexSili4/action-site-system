import { SetURLSearchParams } from 'react-router-dom';
import {
  Func,
  OnAnchorClickFunc,
  OnBtnClickFunc,
  OnDivClickFunc,
} from './types';
import {
  IPromotion,
  IPromotionDetailsState,
  Promotions,
} from './promotion.types';
import { Conditions } from './condition.types';
import { Prizes } from './prize.types';
import { FAQs } from './faqs.types';

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
}

export type UseTargetPromotion = IPromotion | undefined;
