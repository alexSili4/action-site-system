import { IPromotion } from './promotion.types';

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
}

export interface ICode {
  code: string;
  created_at: number;
  shop_number: number;
  wheel_status: null;
}

export interface IUserCertificateWithDetails {
  gift: IGift;
  certificate: ICertificate;
  code: ICode;
  action: IPromotion;
  expired_date: string;
  certificate_pdf: string;
}
