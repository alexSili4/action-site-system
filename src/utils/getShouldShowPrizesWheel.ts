import { ActionType } from '@/types/promotion.types';
import getIsPromotionWheelType from './getIsPromotionWheelType';

const getShouldShowPrizesWheel = (actionType: ActionType | null): boolean => {
  const isPromotionWheelType = getIsPromotionWheelType(actionType);
  const shouldShowPrizesWheel = isPromotionWheelType || actionType === 3;

  return shouldShowPrizesWheel;
};

export default getShouldShowPrizesWheel;
