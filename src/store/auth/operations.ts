import authService from '@/services/auth.service';
import operationWrapper from './operationWrapper';
import { IAuthOperationProps, Refresh } from '@/types/authStore.types';

// TODO fix
const refreshOperation = async ({
  set,
}: IAuthOperationProps): Promise<Refresh | undefined> => {
  const response = await authService.refresh();
  set({
    //  TODO fix
  });

  return response ?? undefined;
};

export const refresh = operationWrapper(refreshOperation);
