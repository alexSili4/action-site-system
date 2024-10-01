import { ICitiesInitialState } from '@/types/citiesStore.types';

const initialState: ICitiesInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
