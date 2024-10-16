import { IUser } from './auth.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export type Refresh = IUser | null;

export interface IAuthInitialState {
  user: IUser;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: null | string;
}

export interface IAuthState extends IAuthInitialState {
  refresh: () => Promise<Refresh | undefined>;
}

export type SetAuthStateFunc = SetStateFunc<IAuthState>;

export type GetAuthStateFunc = GetStateFunc<IAuthState>;

export interface IAuthOperationProps {
  set: SetAuthStateFunc;
}
