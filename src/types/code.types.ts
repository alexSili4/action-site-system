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
  result: RegisterCodeResult;
  errors: {
    code: string[];
  };
}

export interface IGetCurrentInputIndex {
  currentInput: HTMLInputElement | EventTarget;
  regCodeInputs: HTMLInputElements;
}

// TODO fix type
export interface IWheelPrize {
  id: number;
  name: string;
  icon: string;
  prize: string;
}

// TODO fix type
export type WheelPrizes = IWheelPrize[];

export interface IGetRegCodeSteps {
  stepsSequence: IStepsSequence;
  shouldShowPrizesWheel: boolean;
}
