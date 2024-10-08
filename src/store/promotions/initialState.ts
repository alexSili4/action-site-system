import { IPromotionsInitialState } from '@/types/promotionsStore.types';

const initialState: IPromotionsInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
