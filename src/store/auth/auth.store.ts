import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetAuthStateFunc,
  IAuthState,
  Refresh,
  SetAuthStateFunc,
} from '@/types/authStore.types';
import { refresh } from './operations';

const authSlice = (
  set: SetAuthStateFunc,
  get: GetAuthStateFunc
): IAuthState => ({
  ...initialState,
  // TODO fix
  refresh: async (): Promise<Refresh | undefined> =>
    await refresh({
      set: setState({ set, name: 'refresh' }),
      get,
      data: undefined,
    }),
});

const params = {
  name: 'authStore',
};

const authStore = {
  store: authSlice,
  params,
};

export default authStore;
