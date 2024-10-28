import {
  GetUserCodesStateFunc,
  SetUserCodesStateFunc,
} from '@/types/userCodesState.types';
import initialState from './initialState';
import { AxiosError } from 'axios';

const operationWrapper = <T, K>(
  operation: (data: {
    set: SetUserCodesStateFunc;
    get: GetUserCodesStateFunc;
    data: K;
  }) => Promise<T | undefined>
) => {
  return async (data: {
    set: SetUserCodesStateFunc;
    get: GetUserCodesStateFunc;
    data: K;
  }): Promise<T | undefined> => {
    try {
      data.set({ isLoading: true, error: initialState.error });
      const response = await operation(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        data.set({ error: message });
        throw new Error(message);
      }
    } finally {
      data.set({ isLoading: initialState.isLoading });
    }
  };
};

export default operationWrapper;
