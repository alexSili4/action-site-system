import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { selectPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import { UseTargetPromotion } from '@/types/hooks.types';

const useTargetPromotion = (): UseTargetPromotion => {
  const promotions = usePromotionsStore(selectPromotions);
  const promotionId = useParams()[PagePaths.dynamicParam];

  const promotion = promotions.find(({ id }) => id === Number(promotionId));

  return promotion;
};

export default useTargetPromotion;
