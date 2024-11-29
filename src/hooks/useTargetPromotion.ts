import { selectPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import { UseTargetPromotion } from '@/types/hooks.types';
import useDynamicId from './useDynamicId';

const useTargetPromotion = (): UseTargetPromotion => {
  const promotions = usePromotionsStore(selectPromotions);
  const promotionId = useDynamicId();

  const promotion = promotions.find(({ id }) => id === Number(promotionId));

  return promotion;
};

export default useTargetPromotion;
