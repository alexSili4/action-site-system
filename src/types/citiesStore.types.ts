import { Cities } from './city.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface ICitiesInitialState {
  items: Cities;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface ICitiesState extends ICitiesInitialState {
  getCities: () => Promise<Cities | undefined>;
}

export type GetCitiesStateFunc = GetStateFunc<ICitiesState>;

export type SetCitiesStateFunc = SetStateFunc<ICitiesState>;

export interface IGetCitiesOperationProps {
  set: SetCitiesStateFunc;
}
