import { PageLocation } from './types';

export interface IServiceUnavailableState {
  from: PageLocation;
  isError: boolean;
  errorMessage: string;
}

export type ServiceUnavailableState = {
  state: Partial<IServiceUnavailableState>;
};
