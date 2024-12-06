import { PageLocation } from './types';

export interface IServiceUnavailableState {
  from: PageLocation;
  isRedirect: boolean;
}

export type ServiceUnavailableState = {
  state: Partial<IServiceUnavailableState>;
};
