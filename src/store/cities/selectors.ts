import { ICitiesState } from '@/types/citiesStore.types';

export const selectIsLoading = (state: ICitiesState) => state.isLoading;

export const selectCities = (state: ICitiesState) => state.items;

export const selectIsLoaded = (state: ICitiesState) => state.isLoaded;

export const selectError = (state: ICitiesState) => state.error;

export const selectGetCities = (state: ICitiesState) => state.getCities;
