import { Messages } from '@/constants';
import { IGetUserCodeMessage } from '@/types/userCode.types';

const getUserCodeMessage = ({
  isSuccessStatus,
  isErrorStatus,
}: IGetUserCodeMessage): Messages =>
  isSuccessStatus
    ? Messages.userCodeSuccessMsg
    : isErrorStatus
    ? Messages.userCodeErrorMsg
    : Messages.userCodeDefaultMsg;

export default getUserCodeMessage;
