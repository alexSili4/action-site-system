import { HTMLInputElements } from './types';

export interface IStepsSequence {
  [key: string]: string;
}

export interface IRegisterCode {
  code: string;
  action_id: number;
}

export type RegisterCodeResult = 'error' | 'ok' | 'general_error';

export type RegisterCodeErr = string | null;

export interface IRegisterCodeRes {
  result: RegisterCodeResult;
  errors: {
    code: string[];
  };
}

export interface IGetCurrentInputIndex {
  currentInput: HTMLInputElement | EventTarget;
  regCodeInputs: HTMLInputElements;
}
