import authService from '@/services/auth.service';
import operationWrapper from './operationWrapper';
import {
  IAuthOperationProps,
  ILogoutOperationProps,
  Refresh,
} from '@/types/authStore.types';
import { AxiosError } from 'axios';
import initialState from './initialState';

const refreshOperation = async ({
  set,
}: IAuthOperationProps): Promise<Refresh | undefined> => {
  try {
    set({ isRefreshing: true, isLoading: true, error: initialState.error });
    const response = await authService.refresh();

    if (response) {
      set({
        isLoggedIn: true,
        user: response,
      });
    }

    return response ?? undefined;
  } catch (error) {
    if (error instanceof AxiosError) {
      set({ error: error.message });
      throw new Error(error.response?.data.message);
    }
  } finally {
    set({
      isLoading: initialState.isLoading,
      isRefreshing: false,
    });
  }
};

const logOutOperation = async ({
  set,
  data,
}: ILogoutOperationProps): Promise<undefined> => {
  try {
    set({ isLoading: true, error: initialState.error });

    await authService.logout(data);

    set(initialState);
  } catch (error) {
    if (error instanceof AxiosError) {
      set({ error: error.message });
      throw new Error(error.response?.data.message);
    }
  } finally {
    set({
      isLoading: initialState.isLoading,
    });
  }
};

export const refresh = operationWrapper(refreshOperation);
export const logout = operationWrapper(logOutOperation);
