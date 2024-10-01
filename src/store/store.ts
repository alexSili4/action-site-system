import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import citiesStore from './cities/cities.store';
import { ICitiesState } from '@/types/citiesStore.types';

export const useCitiesStore = create<ICitiesState>()(
  devtools(citiesStore.store, citiesStore.params)
);
