import codesService from '@/services/codes.service';
import operationWrapper from './operationWrapper';
import { IGetUnusedUserCodesOperationProps } from '@/types/unusedUserCodesStore.types';
import { ClientCodes } from '@/types/userCodeWithDetails.types';

const getUnusedUserCodesOperation = async ({
  set,
}: IGetUnusedUserCodesOperationProps): Promise<ClientCodes | undefined> => {
  const response = await codesService.getUnusedCodes();
  set({
    items: response,
    isLoaded: true,
  });

  return response;
};

export const getUnusedUserCodes = operationWrapper(getUnusedUserCodesOperation);
