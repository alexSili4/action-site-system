import { PromotionsCategoriesKeys, PromotionsSortTypesKeys } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';
import { Location } from 'react-router-dom';

export type Func = () => void;

export type DatePickerEvent = Date | null;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type SetLocationFunc = (data: string) => void;

export type SetActiveMarkerFunc = (data: number) => void;

export type onDivClickFunc = (e: DivClickEvent) => void;

export type TranslatedPromotionsSortTypesKeys = {
  [key in PromotionsSortTypesKeys]: string;
};

export type PromotionsSortTypesValues = PromotionsSortTypesKeys[];

export type PromotionsCategoriesValues = PromotionsCategoriesKeys[];

export type TranslatedPromotionsCategoriesKeys = {
  [key in PromotionsCategoriesKeys]: string;
};

export interface IFormatDateProps {
  date: Date | string;
  dateFormat: string;
}

export type PageLocation = Location<any>;

export interface IPromotionDetailsState {
  from: PageLocation;
  promotionCategory: string;
}

export type PartialPromotionDetailsState = Partial<IPromotionDetailsState>;

export type PromotionDetailsState = {
  state: PartialPromotionDetailsState;
};

export interface IFAQ {
  question: string;
  answer: string;
}

export type FAQs = IFAQ[];

export interface IPromotionPrizeDraws {
  from: string;
  to: string;
}

export type PromotionPrizeDraws = IPromotionPrizeDraws[];

export type ActiveMarkerId = number | null;
