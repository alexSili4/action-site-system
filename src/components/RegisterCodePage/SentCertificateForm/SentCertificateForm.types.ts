import { UpdateUserDataWithCodeFunc } from '@/types/code.types';
import { ActionType } from '@/types/promotion.types';
import { Func, SetBooleanFunc, StringOrNull } from '@/types/types';

export interface IProps {
  toggleShowSuccessMsgState: Func;
  userName: StringOrNull;
  userEmail: StringOrNull;
  codeId: number;
  updateUserData: UpdateUserDataWithCodeFunc;
  updateIsSuccessStatus: SetBooleanFunc;
  actionType: ActionType;
}
