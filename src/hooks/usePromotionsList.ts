import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { IUsePromotionsList } from '@/types/hooks.types';
import usePromotionDetailsState from './usePromotionDetailsState';
import useIsTablet from './useIsTablet';

const usePromotionsList = (promotionCategory: string): IUsePromotionsList => {
  const promotions = usePromotionsStore(selectPromotions);
  const promotionDetailsState = usePromotionDetailsState(promotionCategory);
  const isTablet = useIsTablet();

  return { promotions, promotionDetailsState, isTablet };
};

export default usePromotionsList;
