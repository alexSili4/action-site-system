import { IPromotion } from './promotion.types';
import { NumberOrNull, StringOrNull } from './types';
import { CodeStatus } from './userCode.types';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IPartner {
  name: string;
  logo: string;
  id: number;
}

export interface IGift {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: number;
  discount: null;
  images: Images;
  banner: null;
  partner: IPartner;
}

export interface ICertificate {
  certificate_code: string;
  pdf_url: string;
  created_at: number;
  sent_status: number;
  sent_at: null;
  win_status: number;
  win_at: number;
  gift: IGift;
  expired_date: string;
}

export interface ICode {
  id: number;
  code: string;
  created_at: number;
  shop_number: number;
  wheel_status: NumberOrNull;
  status: CodeStatus;
  action_id: number;
  verified_at: number;
  verified_status: number;
  marks: number;
}

export interface IUserCertificateWithDetails {
  gift: IGift;
  certificate: ICertificate;
  code: ICode;
  action: IPromotion;
  expired_date: StringOrNull;
  certificate_pdf: string;
}
