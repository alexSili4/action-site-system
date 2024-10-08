import promotionsService from '@/services/promotions.service';
import operationWrapper from './operationWrapper';
import { Promotions } from '@/types/promotion.types';
import { IGetPromotionsOperationProps } from '@/types/promotionsStore.types';

const getPromotionsOperation = async ({
  set,
  data,
}: IGetPromotionsOperationProps): Promise<Promotions | undefined> => {
  const response = await promotionsService.getPromotions(data);
  set({
    items: response,
    isLoaded: true,
  });

  return response;
};

export const getPromotions = operationWrapper(getPromotionsOperation);
