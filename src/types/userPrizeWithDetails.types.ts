import { IPromotion } from './promotion.types';

export interface IImage {
  image: string;
}

export interface IPartner {
  name: string;
  logo: string;
}

export type Images = IImage[] | undefined[];

export interface IGift {
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

export interface ICode {
  code: string;
  created_at: number;
  shop_number: number;
  wheel_status: null;
}

export interface IPrizeCategoryUserPrizeWithDetails {
  gift: IGift;
  code: ICode;
  action: IPromotion;
}
