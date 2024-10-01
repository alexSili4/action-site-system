import setState from '@/store/setState';
import initialState from './initialState';
import { Cities } from '@/types/city.types';
import {
  GetCitiesStateFunc,
  ICitiesState,
  SetCitiesStateFunc,
} from '@/types/citiesStore.types';
import { getCities } from './operations';

const citiesSlice = (
  set: SetCitiesStateFunc,
  get: GetCitiesStateFunc
): ICitiesState => ({
  ...initialState,
  getCities: async (): Promise<Cities | undefined> =>
    await getCities({
      set: setState({ set, name: 'getCities' }),
      data: undefined,
      get,
    }),
});

const params = {
  name: 'citiesStore',
};

const citiesStore = {
  store: citiesSlice,
  params,
};

export default citiesStore;
