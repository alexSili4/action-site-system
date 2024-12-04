import { HTMLInputElements } from './types';

export interface IStepsSequence {
  [key: string]: string;
}

export interface IRegisterCode {
  code: string;
  action_id: number;
}

export type RegisterCodeResult = 'error' | 'ok' | 'general_error';

export interface IRegisterCodeRes {
  codeModel: { id: number } | null;
  result: RegisterCodeResult;
  errors: {
    code: string[];
  };
}

export interface IGetCurrentInputIndex {
  currentInput: HTMLInputElement | EventTarget;
  regCodeInputs: HTMLInputElements;
}

export interface IGetRegCodeSteps {
  stepsSequence: IStepsSequence;
  shouldShowPrizesWheel: boolean;
}

export interface IPartner {
  id: number;
  name: string;
  logo: string;
  in_stock: boolean;
}

export type Partners = IPartner[];
