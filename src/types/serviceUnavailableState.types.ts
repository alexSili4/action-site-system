import { PageLocation } from './types';

export interface IServiceUnavailableState {
  from: PageLocation;
  isError: boolean;
}

export type ServiceUnavailableState = {
  state: Partial<IServiceUnavailableState>;
};
