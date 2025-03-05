import { ActionType } from '@/types/promotion.types';

const getIsPromotionWheelType = (
  actionType: ActionType | null | undefined
): boolean => {
  const isPromotionWheelType = actionType === 1;

  return isPromotionWheelType;
};

export default getIsPromotionWheelType;
