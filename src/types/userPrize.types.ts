import { ActionType } from './promotion.types';
import { Strings } from './types';

export type EntityType = 'wheel' | 'present';

export interface IUserPrize {
  winner_id: number;
  code: string;
  action_id: number;
  gift_id: number;
  action_name: string;
  action_type: ActionType;
  action_date_from: number;
  action_date_to: number;
  gift_name: string;
  gift_price: null | number;
  gift_discount: null;
  partner_name: string;
  payment_logo: string;
  gift_images: Strings;
  certificate_code: string;
  entity_type: EntityType;
  gift_get_conditions: string;
  gift_use_conditions: string;
  partner_logo: string;
  win_time: number;
}

export type UserPrizes = IUserPrize[];

export interface IGetClientPrizesProps {
  page: number;
  sort: string;
}

export interface IGetClientPrizes {
  data: UserPrizes;
  totalPages: number;
}
