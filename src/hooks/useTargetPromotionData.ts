import { IUseTargetPromotionData } from '@/types/hooks.types';
import useTargetPromotion from './useTargetPromotion';

const useTargetPromotionData = (): IUseTargetPromotionData => {
  const targetPromotion = useTargetPromotion();

  const { legal_text: legalText = '' } = targetPromotion ?? {};

  return {
    legalText,
  };
};

export default useTargetPromotionData;
