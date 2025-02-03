import setState from '@/store/setState';
import initialState from './initialState';
import { IGetPromotionsProps, Promotions } from '@/types/promotion.types';
import {
  GetPromotionsStateFunc,
  IPromotionsState,
  SetPromotionsStateFunc,
} from '@/types/promotionsStore.types';
import { getPromotions } from './operations';

const promotionsSlice = (
  set: SetPromotionsStateFunc,
  get: GetPromotionsStateFunc
): IPromotionsState => ({
  ...initialState,
  getPromotions: async (
    data: IGetPromotionsProps
  ): Promise<Promotions | undefined> =>
    await getPromotions({
      set: setState({ set, name: 'getPromotions' }),
      get,
      data: data,
    }),
});

const params = {
  name: 'promotionsStore',
};

const promotionsStore = {
  store: promotionsSlice,
  params,
};

export default promotionsStore;
