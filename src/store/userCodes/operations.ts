import cabinetService from '@/services/cabinet.service';
import operationWrapper from './operationWrapper';
import { UserCodes } from '@/types/userCode.types';
import { IGetUserCodesOperationProps } from '@/types/userCodesState.types';

const getUserCodesOperation = async ({
  set,
}: IGetUserCodesOperationProps): Promise<UserCodes | undefined> => {
  const response = await cabinetService.getClientCodes();
  set({
    items: response,
    isLoaded: true,
  });

  return response;
};

export const getUserCodes = operationWrapper(getUserCodesOperation);
