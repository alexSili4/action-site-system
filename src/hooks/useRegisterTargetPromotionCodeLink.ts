import { getRegisterCodeLink } from '@/utils';
import useCityId from './useCityId';
import useDynamicId from './useDynamicId';

const useRegisterTargetPromotionCodeLink = (): string => {
  const cityId = useCityId();
  const promotionId = useDynamicId();

  const registerCodeLink = getRegisterCodeLink({ promotionId, cityId });

  return registerCodeLink;
};

export default useRegisterTargetPromotionCodeLink;
