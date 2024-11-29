import { ActionType } from './promotion.types';
import { NumberOrNull, StringOrNull } from './types';

export type CodeStatus = 0 | 1 | 2; // 0 - pending, 1 - success, 2 - error

export interface IUserCode {
  code: string;
  code_status: CodeStatus;
  code_created_at: number;
  action_id: number;
  action_name: string;
  action_type: ActionType;
  action_date_from: number;
  action_date_to: number;
  present_gift_id: NumberOrNull;
  present_gift_name: StringOrNull;
  wheel_certificate_id: NumberOrNull;
  wheel_is_used: null;
  wheel_certificate_code: StringOrNull;
  wheel_gift_name: StringOrNull;
  present_gift_partner_logo: StringOrNull;
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
