import cabinetService from '@/services/cabinet.service';
import operationWrapper from './operationWrapper';
import { IUserCode } from '@/types/userCode.types';
import { IGetUserCodesOperationProps } from '@/types/userCodesState.types';

const getUserCodesOperation = async ({
  set,
  data,
}: IGetUserCodesOperationProps): Promise<IUserCode[] | undefined> => {
  const { data: items, totalPages } = await cabinetService.getClientCodes(data);
  set({
    items,
    isLoaded: true,
    totalPages,
  });

  return items;
};

export const getUserCodes = operationWrapper(getUserCodesOperation);
