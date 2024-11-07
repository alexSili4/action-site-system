import { GetStateFunc, SetStateFunc } from './store.types';
import { UserPrizes } from './userPrize.types';

export interface IUserPrizesInitialState {
  items: UserPrizes;
  totalPages: number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IUserPrizesState extends IUserPrizesInitialState {
  getUserPrizes: (data: number) => Promise<UserPrizes | undefined>;
}

export type GetUserPrizesStateFunc = GetStateFunc<IUserPrizesState>;

export type SetUserPrizesStateFunc = SetStateFunc<IUserPrizesState>;

export interface IGetUserPrizesOperationProps {
  set: SetUserPrizesStateFunc;
  data: number;
}
