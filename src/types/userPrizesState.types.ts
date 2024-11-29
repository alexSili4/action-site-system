import { GetStateFunc, SetStateFunc } from './store.types';
import { StringOrNull } from './types';
import { UserPrizes } from './userPrize.types';

export interface IUserPrizesInitialState {
  items: UserPrizes;
  totalPages: number;
  isLoading: boolean;
  isLoaded: boolean;
  error: StringOrNull;
}

export interface IUserPrizesState extends IUserPrizesInitialState {
  getUserPrizes: (
    data: IGetUserPrizesOperationData
  ) => Promise<UserPrizes | undefined>;
}

export type GetUserPrizesStateFunc = GetStateFunc<IUserPrizesState>;

export type SetUserPrizesStateFunc = SetStateFunc<IUserPrizesState>;

export interface IGetUserPrizesOperationData {
  page: number;
  sort: string;
}

export interface IGetUserPrizesOperationProps {
  set: SetUserPrizesStateFunc;
  data: IGetUserPrizesOperationData;
}
