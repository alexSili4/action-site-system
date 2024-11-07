import setState from '@/store/setState';
import initialState from './initialState';
import { getUserPrizes } from './operations';
import {
  GetUserPrizesStateFunc,
  IUserPrizesState,
  SetUserPrizesStateFunc,
} from '@/types/userPrizesState.types';
import { UserPrizes } from '@/types/userPrize.types';

const userPrizesSlice = (
  set: SetUserPrizesStateFunc,
  get: GetUserPrizesStateFunc
): IUserPrizesState => ({
  ...initialState,
  getUserPrizes: async (data: number): Promise<UserPrizes | undefined> =>
    await getUserPrizes({
      set: setState({ set, name: 'getUserPrizes' }),
      get,
      data,
    }),
});

const params = {
  name: 'userPrizesStore',
};

const userPrizesStore = {
  store: userPrizesSlice,
  params,
};

export default userPrizesStore;
