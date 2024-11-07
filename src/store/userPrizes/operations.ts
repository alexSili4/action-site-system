import cabinetService from '@/services/cabinet.service';
import operationWrapper from './operationWrapper';
import { IGetUserPrizesOperationProps } from '@/types/userPrizesState.types';
import { UserPrizes } from '@/types/userPrize.types';

const getUserPrizesOperation = async ({
  set,
  data,
}: IGetUserPrizesOperationProps): Promise<UserPrizes | undefined> => {
  const { data: items, totalPages } = await cabinetService.getClientPrizes(
    data
  );
  set({
    items,
    isLoaded: true,
    totalPages,
  });

  return items;
};

export const getUserPrizes = operationWrapper(getUserPrizesOperation);
