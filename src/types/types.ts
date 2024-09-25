import { ChangeEvent, MouseEvent } from 'react';

export type Func = () => void;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type SetLocationFunc = (location: string) => void;

export type onDivClickFunc = (e: DivClickEvent) => void;
