import { IPromotion } from './promotion.types';
import { HTMLInputElements, NumberOrNull, StringOrNull } from './types';
import { CodeStatus } from './userCode.types';

export interface IStepsSequence {
  [key: string]: string;
}

export interface IRegisterCode {
  code: string;
}

export type RegisterCodeResult = 'error' | 'ok' | 'general_error';

export interface IRegisterCodeRes {
  codeModel: { id: number } | null;
  result: RegisterCodeResult;
  errors: {
    code: string[];
  };
  action: IPromotion;
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
  send_to_email_status?: boolean;
}

export interface IUserDataWithCode extends IUserData {
  code: {
    status: CodeStatus;
    marks: NumberOrNull;
  };
}

export type UpdateUserDataWithCodeFunc = (data: IUserDataWithCode) => void;

export interface IRegisterCodePageState {
  defaultCodeId?: number;
  defaultPromotion?: IPromotion;
}

export type RegisterCodePageState = {
  state: Partial<IRegisterCodePageState>;
};
