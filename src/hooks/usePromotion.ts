import promotionsService from '@/services/promotions.service';
import { TargetPromotionDetailsState } from '@/types/promotion.types';
import { useEffect, useState } from 'react';
import useDynamicId from './useDynamicId';

const usePromotion = (): TargetPromotionDetailsState => {
  const [promotion, setPromotion] = useState<TargetPromotionDetailsState>(null);
  const promotionId = useDynamicId();

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
