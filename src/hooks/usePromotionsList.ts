import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { IUsePromotionsList } from '@/types/hooks.types';
import usePromotionDetailsState from './usePromotionDetailsState';

const usePromotionsList = (promotionCategory: string): IUsePromotionsList => {
  const promotions = usePromotionsStore(selectPromotions);
  const promotionDetailsState = usePromotionDetailsState(promotionCategory);

  return { promotions, promotionDetailsState };
};

export default usePromotionsList;
