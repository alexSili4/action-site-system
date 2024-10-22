import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetAuthStateFunc,
  IAuthState,
  Refresh,
  SetAuthStateFunc,
} from '@/types/authStore.types';
import { refresh, logout } from './operations';
import { ICsrf } from '@/types/types';

const authSlice = (
  set: SetAuthStateFunc,
  get: GetAuthStateFunc
): IAuthState => ({
  ...initialState,
  refresh: async (): Promise<Refresh | undefined> =>
    await refresh({
      set: setState({ set, name: 'refresh' }),
      get,
      data: undefined,
    }),
  logout: async (data: ICsrf): Promise<undefined> =>
    await logout({
      set: setState({ set, name: 'logout' }),
      get,
      data,
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
