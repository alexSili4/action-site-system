import { IPromotionsState } from '@/types/promotionsStore.types';

export const selectIsLoading = (state: IPromotionsState) => state.isLoading;

export const selectPromotions = (state: IPromotionsState) => state.items;

export const selectIsLoaded = (state: IPromotionsState) => state.isLoaded;

export const selectError = (state: IPromotionsState) => state.error;

export const selectGetPromotions = (state: IPromotionsState) =>
  state.getPromotions;
