import { PageLocation } from './types';

export interface ICabinetState {
  from: PageLocation;
}

export type CabinetState = {
  state: Partial<ICabinetState>;
};
