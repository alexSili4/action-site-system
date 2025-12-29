import { Messages } from '@/constants';
import { ActionType } from '@/types/promotion.types';

interface IGetUserCodeMessage {
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
  isCanceledStatus: boolean;
  actionType: ActionType;
}

const getUserCodeMessage = ({
  isSuccessStatus,
  isErrorStatus,
  actionType,
  isCanceledStatus,
}: IGetUserCodeMessage): string =>
  isSuccessStatus
    ? Messages.userCodeSuccessMsg
    : isErrorStatus
    ? Messages.userCodeErrorMsg
    : isCanceledStatus
    ? Messages.userCodeCanceledMsg
    : actionType === 2
    ? 'Очікуйте підтвердження коду'
    : Messages.userCodeDefaultMsg;

export default getUserCodeMessage;
