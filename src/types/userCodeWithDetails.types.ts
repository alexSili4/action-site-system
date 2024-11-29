import { NumberOrNull, StringOrNull } from './types';
import { CodeStatus } from './userCode.types';

export interface IUserCodeWithDetails {
  winner_id: NumberOrNull;
  code: string;
  code_status: CodeStatus;
  code_created_at: number;
  action_id: number;
  action_name: string;
  action_type: number;
  action_date_from: number;
  action_date_to: number;
  present_gift_id: NumberOrNull;
  present_gift_name: StringOrNull;
  present_gift_partner_logo: StringOrNull;
  wheel_is_used: null;
  wheel_certificate_code: StringOrNull;
  wheel_certificate_id: NumberOrNull;
  wheel_gift_name: StringOrNull;
}
