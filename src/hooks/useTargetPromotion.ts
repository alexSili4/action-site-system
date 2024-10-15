import { selectPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import { UseTargetPromotion } from '@/types/hooks.types';
import usePromotionId from './usePromotionId';

const useTargetPromotion = (): UseTargetPromotion => {
  const promotions = usePromotionsStore(selectPromotions);
  const promotionId = usePromotionId();

  const promotion = promotions.find(({ id }) => id === Number(promotionId));

  return promotion;
};

export default useTargetPromotion;
