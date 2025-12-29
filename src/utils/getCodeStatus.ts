import { IGetCodeStatus } from '@/types/types';
import { CodeStatus } from '@/types/userCode.types';

const getCodeStatus = (codeStatus: CodeStatus): IGetCodeStatus => {
  const isErrorStatus = codeStatus === 2;
  const isSuccessStatus = codeStatus === 1;
  const isCanceledStatus = codeStatus === 5;

  return { isErrorStatus, isSuccessStatus, isCanceledStatus };
};

export default getCodeStatus;
