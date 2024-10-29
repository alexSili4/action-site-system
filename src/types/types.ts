import { Location } from 'react-router-dom';
import { ChangeEvent, MouseEvent } from 'react';

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

// other

export type ListRef = HTMLUListElement | null;

export type DivRef = HTMLDivElement | null;

export type HTMLInputElements = HTMLInputElement[];

export type Numbers = number[];

export type Strings = string[];

export interface IFormatDateProps {
  date: Date | string | number;
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
