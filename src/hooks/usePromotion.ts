import promotionsService from '@/services/promotions.service';
import {
  IGetPromotionByIdProps,
  TargetPromotionDetailsState,
} from '@/types/promotion.types';
import { useEffect, useState } from 'react';
import useDynamicId from './useDynamicId';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';
import { IUsePromotion } from '@/types/hooks.types';
import usePreviewPage from './usePreviewPage';

const usePromotion = (): IUsePromotion => {
  const [promotion, setPromotion] = useState<TargetPromotionDetailsState>(null);
  const [isNotFoundError, setIsNotFoundError] = useState<boolean>(false);
  const promotionId = useDynamicId();
  const { previewId } = usePreviewPage();
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    const getPromotion = async (
      data: IGetPromotionByIdProps
    ): Promise<void> => {
      try {
        const response = await promotionsService.getPromotionById(data);

        if (response) {
          setPromotion(response);
        } else {
          setIsNotFoundError(true);
        }
      } catch (error) {
        navigate();
      }
    };

    getPromotion({ actionId: promotionId, previewId });
  }, [promotionId, previewId]);

  return { promotion, isNotFoundError };
};

export default usePromotion;
