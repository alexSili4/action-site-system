import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import citiesStore from './cities/cities.store';
import { ICitiesState } from '@/types/citiesStore.types';
import promotionsStore from './promotions/promotions.store';
import { IPromotionsState } from '@/types/promotionsStore.types';
import authStore from './auth/auth.store';
import { IAuthState } from '@/types/authStore.types';

export const useAuthStore = create<IAuthState>()(
  devtools(authStore.store, authStore.params)
);

export const useCitiesStore = create<ICitiesState>()(
  devtools(citiesStore.store, citiesStore.params)
);

export const usePromotionsStore = create<IPromotionsState>()(
  devtools(promotionsStore.store, promotionsStore.params)
);
