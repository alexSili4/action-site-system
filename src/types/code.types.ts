import { HTMLInputElements, StringOrNull } from './types';

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

export interface IGiftPartner {
  id: number;
  name: string;
  logo: string;
}

export interface IImage {
  image: string;
}

export type Images = IImage[];

export interface IGift {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: number;
  discount: null;
  images: Images;
  banner: string;
  partner: IGiftPartner;
}

export interface ISpinWheelResult {
  certificate_code: string;
  created_at: number;
  sent_status: number;
  sent_at: null;
  win_status: number;
  win_at: number;
  gift: IGift;
  pdf_url: string;
}

export interface IUserData {
  name: StringOrNull;
  email: StringOrNull;
  send_to_email_status: boolean;
}

export type UpdateUserDataFunc = (data: IUserData) => void;

export interface IUpdateUserDataProps extends IUserData {
  codeId: number;
}

export interface IRegisterUnusedCodeState {
  defaultCodeId?: number;
}

export type RegisterUnusedCodeState = {
  state: Partial<IRegisterUnusedCodeState>;
};
