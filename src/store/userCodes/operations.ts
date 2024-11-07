import cabinetService from '@/services/cabinet.service';
import operationWrapper from './operationWrapper';
import { UserCodes } from '@/types/userCode.types';
import { IGetUserCodesOperationProps } from '@/types/userCodesState.types';

const getUserCodesOperation = async ({
  set,
  data,
}: IGetUserCodesOperationProps): Promise<UserCodes | undefined> => {
  const { data: items, totalPages } = await cabinetService.getClientCodes(data);
  set({
    items,
    isLoaded: true,
    totalPages,
  });

  return items;
};

export const getUserCodes = operationWrapper(getUserCodesOperation);
