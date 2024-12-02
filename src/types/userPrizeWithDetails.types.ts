import { IPromotion } from './promotion.types';
import { ICode } from './userCertificateWithDetails.types';

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

export interface IUserPrizeWithDetails {
  gift: IGift;
  code: ICode;
  action: IPromotion;
}
