import { Messages } from '@/constants';
import { IGetUserCodeMessage } from '@/types/userCode.types';

const getUserCodeMessage = ({
  isSuccessStatus,
  isErrorStatus,
  actionType,
}: IGetUserCodeMessage): string =>
  isSuccessStatus
    ? Messages.userCodeSuccessMsg
    : isErrorStatus
    ? Messages.userCodeErrorMsg
    : actionType === 2
    ? 'Очікуйте підтвердження коду'
    : Messages.userCodeDefaultMsg;

export default getUserCodeMessage;
