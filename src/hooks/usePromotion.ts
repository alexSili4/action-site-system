import promotionsService from '@/services/promotions.service';
import { TargetPromotionDetailsState } from '@/types/promotion.types';
import { useEffect, useState } from 'react';
import usePromotionId from './usePromotionId';

const usePromotion = (): TargetPromotionDetailsState => {
  const [promotion, setPromotion] = useState<TargetPromotionDetailsState>(null);
  const promotionId = usePromotionId();

  useEffect(() => {
    const getPromotion = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getPromotionById(promotionId);
        setPromotion(response);
      } catch (error) {
        // TODO error handler
      }
    };

    getPromotion(promotionId);
  }, [promotionId]);

  return promotion;
};

export default usePromotion;
