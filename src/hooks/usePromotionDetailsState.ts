import { IPromotionDetailsState } from '@/types/promotion.types';
import { useLocation } from 'react-router-dom';

const usePromotionDetailsState = (
  promotionCategory?: string
): IPromotionDetailsState => {
  const location = useLocation();

  const promotionDetailsState = {
    from: location,
    promotionCategory,
  };

  return promotionDetailsState;
};

export default usePromotionDetailsState;
