import { useLocation } from 'react-router-dom';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { IUsePromotionsList } from '@/types/hooks.types';

const usePromotionsList = (promotionCategory: string): IUsePromotionsList => {
  const promotions = usePromotionsStore(selectPromotions);
  const location = useLocation();

  const linkState = {
    from: location,
    promotionCategory,
  };

  return { promotions, linkState };
};

export default usePromotionsList;
