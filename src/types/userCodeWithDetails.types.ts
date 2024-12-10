import { IPromotion } from './promotion.types';
import { NumberOrNull } from './types';
import { CodeStatus } from './userCode.types';

export interface IClientCode {
  id: number;
  code: string;
  created_at: number;
  shop_number: number;
  wheel_status: NumberOrNull;
  status: CodeStatus;
  action_id: number;
}

export type ClientCodes = IClientCode[];

export interface IShop {
  shop_num: number;
  name: string;
  street: string;
  geo_lat: string;
  geo_long: string;
  work_hours: string;
  city: {
    name: string;
    coordinates: string;
  };
  region: {
    name: string;
  };
}

export interface IAtbCode {
  id: number;
  promo_id: number;
  promo_code: string;
  shop_number: number;
  receipt_date: string;
  receipt_number: number;
  receipt_sum: string;
  created_at: number;
  shop: IShop;
}

export interface IWinner {
  id: number;
  client_name: string;
  client_phone: string;
  code: string;
  gift_name: string;
  win_date: string;
}

export interface IImage {
  image: string;
}

export type Images = IImage[];

export interface IPartner {
  name: string;
  logo: string;
}

export interface IPresent {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: null;
  discount: null;
  images: Images;
  banner: null;
  partner: IPartner;
}

export interface IDateFrom {
  date_from: string;
}

export type DatesFrom = IDateFrom[];

export interface ICertificate {
  certificate_code: string;
  created_at: number;
  sent_at: null;
  gift: {
    id: number;
    name: string;
    use_conditions: string;
    get_conditions: string;
    price: number;
    discount: null;
    images: Images;
    banner: null;
    partner: IPartner;
  };
  pdf_url: string;
}

export interface IUserCodeWithDetails {
  client_code: IClientCode;
  atb_code: IAtbCode | null;
  action: IPromotion;
  winner: IWinner | null;
  present: IPresent | null;
  certificate: ICertificate | null;
  dates: DatesFrom;
}
