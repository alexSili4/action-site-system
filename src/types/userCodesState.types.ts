import { GetStateFunc, SetStateFunc } from './store.types';
import { UserCodes } from './userCode.types';

export interface IUserCodesInitialState {
  items: UserCodes;
  totalPages: number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IUserCodesState extends IUserCodesInitialState {
  getUserCodes: (data: number) => Promise<UserCodes | undefined>;
}

export type GetUserCodesStateFunc = GetStateFunc<IUserCodesState>;

export type SetUserCodesStateFunc = SetStateFunc<IUserCodesState>;

export interface IGetUserCodesOperationProps {
  set: SetUserCodesStateFunc;
  data: number;
}
