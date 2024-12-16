import { UpdateUserDataFunc } from '@/types/code.types';
import { Func, StringOrNull } from '@/types/types';

export interface IProps {
  toggleShowSuccessMsgState: Func;
  userName: StringOrNull;
  userEmail: StringOrNull;
  codeId: number;
  updateUserData: UpdateUserDataFunc;
}
