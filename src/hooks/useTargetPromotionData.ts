import { IUseTargetPromotionData } from '@/types/hooks.types';
import useTargetPromotion from './useTargetPromotion';

const useTargetPromotionData = (): IUseTargetPromotionData => {
  const targetPromotion = useTargetPromotion();

  return {
    legalText: targetPromotion?.legal_text ?? '',
  };
};

export default useTargetPromotionData;
