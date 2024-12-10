import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetUnusedUserCodesStateFunc,
  IUnusedUserCodesState,
  SetUnusedUserCodesStateFunc,
} from '@/types/unusedUserCodesStore.types';
import { getUnusedUserCodes } from './operations';
import { ClientCodes } from '@/types/userCodeWithDetails.types';

const unusedUserCodesSlice = (
  set: SetUnusedUserCodesStateFunc,
  get: GetUnusedUserCodesStateFunc
): IUnusedUserCodesState => ({
  ...initialState,
  getUnusedUserCodes: async (): Promise<ClientCodes | undefined> =>
    await getUnusedUserCodes({
      set: setState({ set, name: 'getUnusedUserCodes' }),
      get,
      data: undefined,
    }),
});

const params = {
  name: 'unusedUserCodesStore',
};

const unusedUserCodesStore = {
  store: unusedUserCodesSlice,
  params,
};

export default unusedUserCodesStore;
