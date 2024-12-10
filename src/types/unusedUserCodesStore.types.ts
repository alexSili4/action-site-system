import { GetStateFunc, SetStateFunc } from './store.types';
import { StringOrNull } from './types';
import { ClientCodes } from './userCodeWithDetails.types';

export interface IUnusedUserCodesInitialState {
  items: ClientCodes;
  isLoading: boolean;
  isLoaded: boolean;
  error: StringOrNull;
}

export interface IUnusedUserCodesState extends IUnusedUserCodesInitialState {
  getUnusedUserCodes: () => Promise<ClientCodes | undefined>;
}

export type GetUnusedUserCodesStateFunc = GetStateFunc<IUnusedUserCodesState>;

export type SetUnusedUserCodesStateFunc = SetStateFunc<IUnusedUserCodesState>;

export interface IGetUnusedUserCodesOperationProps {
  set: SetUnusedUserCodesStateFunc;
}
