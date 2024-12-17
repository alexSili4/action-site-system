import { NumberOrNull } from '@/types/types';

const getShouldShowPrizesWheel = (actionType: NumberOrNull): boolean => {
  const shouldShowPrizesWheel = actionType === 1 || actionType === 3;

  return shouldShowPrizesWheel;
};

export default getShouldShowPrizesWheel;
