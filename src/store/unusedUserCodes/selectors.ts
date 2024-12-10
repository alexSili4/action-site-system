import { IUnusedUserCodesState } from '@/types/unusedUserCodesStore.types';

export const selectIsLoading = (state: IUnusedUserCodesState) =>
  state.isLoading;

export const selectUnusedUserCodes = (state: IUnusedUserCodesState) =>
  state.items;

export const selectIsLoaded = (state: IUnusedUserCodesState) => state.isLoaded;

export const selectError = (state: IUnusedUserCodesState) => state.error;

export const selectGetUnusedUserCodes = (state: IUnusedUserCodesState) =>
  state.getUnusedUserCodes;
