import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import citiesStore from './cities/cities.store';
import { ICitiesState } from '@/types/citiesStore.types';
import promotionsStore from './promotions/promotions.store';
import { IPromotionsState } from '@/types/promotionsStore.types';

export const useCitiesStore = create<ICitiesState>()(
  devtools(citiesStore.store, citiesStore.params)
);

export const usePromotionsStore = create<IPromotionsState>()(
  devtools(promotionsStore.store, promotionsStore.params)
);
