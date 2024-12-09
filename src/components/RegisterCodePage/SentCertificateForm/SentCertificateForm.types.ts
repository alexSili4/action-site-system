import { Func, SetStringOrNullFunc, StringOrNull } from '@/types/types';

export interface IProps {
  toggleShowSuccessMsgState: Func;
  userName: StringOrNull;
  codeId: number;
  updateUserName: SetStringOrNullFunc;
}
