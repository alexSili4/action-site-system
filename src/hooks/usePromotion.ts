import promotionsService from '@/services/promotions.service';
import { TargetPromotionDetailsState } from '@/types/promotion.types';
import { useEffect, useState } from 'react';
import useDynamicId from './useDynamicId';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';

const usePromotion = (): TargetPromotionDetailsState => {
  const [promotion, setPromotion] = useState<TargetPromotionDetailsState>(null);
  const promotionId = useDynamicId();
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    const getPromotion = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getPromotionById(promotionId);
        setPromotion(response);
      } catch (error) {
        navigate();
      }
    };

    getPromotion(promotionId);
  }, [navigate, promotionId]);

  return promotion;
};

export default usePromotion;
