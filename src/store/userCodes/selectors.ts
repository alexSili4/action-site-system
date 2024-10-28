import { IUserCodesState } from '@/types/userCodesState.types';

export const selectIsLoading = (state: IUserCodesState) => state.isLoading;

export const selectUserCodes = (state: IUserCodesState) => state.items;

export const selectIsLoaded = (state: IUserCodesState) => state.isLoaded;

export const selectError = (state: IUserCodesState) => state.error;

export const selectGetUserCodes = (state: IUserCodesState) =>
  state.getUserCodes;
