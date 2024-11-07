import { ActionType } from './promotion.types';
import { Strings } from './types';

export interface IUserPrize {
  code: string;
  action_id: number;
  gift_id: number;
  action_name: string;
  action_type: ActionType;
  action_date_from: number;
  action_date_to: number;
  gift_name: string;
  gift_price: null;
  gift_discount: null;
  partner_name: string;
  payment_logo: string;
  gift_images: Strings;
}

export type UserPrizes = IUserPrize[];

export interface IGetClientPrizes {
  data: UserPrizes;
  totalPages: number;
}
