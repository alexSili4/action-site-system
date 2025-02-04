import { PromotionVStatus } from '@/types/promotion.types';

const getIsFinishedPromotion = (data: PromotionVStatus | undefined) => {
  const isFinishedPromotion = data === 'finished';

  return isFinishedPromotion;
};

export default getIsFinishedPromotion;
