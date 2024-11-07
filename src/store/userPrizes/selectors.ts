import { IUserPrizesState } from '@/types/userPrizesState.types';

export const selectIsLoading = (state: IUserPrizesState) => state.isLoading;

export const selectUserPrizes = (state: IUserPrizesState) => state.items;

export const selectTotalPages = (state: IUserPrizesState) => state.totalPages;

export const selectIsLoaded = (state: IUserPrizesState) => state.isLoaded;

export const selectError = (state: IUserPrizesState) => state.error;

export const selectGetUserPrizes = (state: IUserPrizesState) =>
  state.getUserPrizes;
