import { PageLocation } from './types';

export interface ICabinetState {
  from: PageLocation;
  isRedirectFromRegCodePage: boolean;
}

export type CabinetState = {
  state: Partial<ICabinetState>;
};
