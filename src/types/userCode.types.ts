import { ActionType } from './promotion.types';

export interface IUserCode {
  code: string;
  code_status: 0 | 1 | 2; // 0 - pending, 1 - success, 2 - error
  code_created_at: number;
  action_id: number;
  action_name: string;
  action_type: ActionType;
  action_date_from: number;
  action_date_to: number;
  present_gift_id: number;
  present_gift_name: string;
  wheel_is_used: string;
  wheel_certificate_code: null;
  wheel_gift_name: null;
  present_gift_partner_logo: null | string;
}

export type UserCodes = IUserCode[];

export interface IGetUserCodeMessage {
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
}

export interface IGetClientCodesProps {
  page: number;
  sort: string;
}

export interface IGetClientCodes {
  data: UserCodes;
  totalPages: number;
}
