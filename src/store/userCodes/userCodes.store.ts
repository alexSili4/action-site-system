import setState from '@/store/setState';
import initialState from './initialState';
import { getUserCodes } from './operations';
import {
  GetUserCodesStateFunc,
  IUserCodesState,
  SetUserCodesStateFunc,
} from '@/types/userCodesState.types';
import { UserCodes } from '@/types/userCode.types';

const userCodesSlice = (
  set: SetUserCodesStateFunc,
  get: GetUserCodesStateFunc
): IUserCodesState => ({
  ...initialState,
  getUserCodes: async (data: number): Promise<UserCodes | undefined> =>
    await getUserCodes({
      set: setState({ set, name: 'getUserCodes' }),
      get,
      data,
    }),
});

const params = {
  name: 'userCodesStore',
};

const userCodesStore = {
  store: userCodesSlice,
  params,
};

export default userCodesStore;
