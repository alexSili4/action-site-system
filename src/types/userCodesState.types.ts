import { GetStateFunc, SetStateFunc } from './store.types';
import { StringOrNull } from './types';
import { IUserCode } from './userCode.types';

export interface IUserCodesInitialState {
  items: IUserCode[];
  totalPages: number;
  isLoading: boolean;
  isLoaded: boolean;
  error: StringOrNull;
}

export interface IUserCodesState extends IUserCodesInitialState {
  getUserCodes: (
    data: IGetUserCodesOperationData
  ) => Promise<IUserCode[] | undefined>;
}

export type GetUserCodesStateFunc = GetStateFunc<IUserCodesState>;

export type SetUserCodesStateFunc = SetStateFunc<IUserCodesState>;

export interface IGetUserCodesOperationData {
  page: number;
  sort: string;
}

export interface IGetUserCodesOperationProps {
  set: SetUserCodesStateFunc;
  data: IGetUserCodesOperationData;
}
