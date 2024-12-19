import { IPromotion } from './promotion.types';
import { StringOrNull } from './types';
import { CodeStatus } from './userCode.types';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IPartner {
  name: string;
  logo: string;
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
}

export interface ICode {
  id: number;
  code: string;
  created_at: number;
  shop_number: number;
  wheel_status: null;
  status: CodeStatus;
  action_id: number;
}

export interface IUserCertificateWithDetails {
  gift: IGift;
  certificate: ICertificate;
  code: ICode;
  action: IPromotion;
  expired_date: StringOrNull;
  certificate_pdf: string;
}
