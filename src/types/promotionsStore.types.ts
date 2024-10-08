import { Promotions } from './promotion.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IPromotionsInitialState {
  items: Promotions;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IPromotionsState extends IPromotionsInitialState {
  getPromotions: (cityId: string) => Promise<Promotions | undefined>;
}

export type GetPromotionsStateFunc = GetStateFunc<IPromotionsState>;

export type SetPromotionsStateFunc = SetStateFunc<IPromotionsState>;

export interface IGetPromotionsOperationProps {
  set: SetPromotionsStateFunc;
  data: string;
}
