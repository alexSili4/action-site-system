import { PromotionsCategoriesKeys, PromotionsSortTypesKeys } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';

export type Func = () => void;

export type DatePickerEvent = Date | null;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type SetLocationFunc = (data: string) => void;

export type onDivClickFunc = (e: DivClickEvent) => void;

export type ChangePromotionCategoryFunc = (data: string) => void;

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
