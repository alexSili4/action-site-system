import { usePromotionsStore } from '@/store/store';
import { selectPromotions, selectIsLoaded } from '@/store/promotions/selectors';
import { IUsePromotionsList } from '@/types/hooks.types';
import usePromotionDetailsState from './usePromotionDetailsState';
import useIsTablet from './useIsTablet';

const usePromotionsList = (promotionCategory: string): IUsePromotionsList => {
  const promotions = usePromotionsStore(selectPromotions);
  const isLoaded = usePromotionsStore(selectIsLoaded);
  const promotionDetailsState = usePromotionDetailsState(promotionCategory);
  const isTablet = useIsTablet();
  const isPromotions = Boolean(promotions.length);
  const isEmptyList = isLoaded && !isPromotions;

  return { promotions, promotionDetailsState, isTablet, isEmptyList };
};

export default usePromotionsList;
