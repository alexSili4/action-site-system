import { getRegisterCodeLink } from '@/utils';
import useCityId from './useCityId';
import usePromotionId from './usePromotionId';

const useRegisterTargetPromotionCodeLink = (): string => {
  const cityId = useCityId();
  const promotionId = usePromotionId();

  const registerCodeLink = getRegisterCodeLink({ promotionId, cityId });

  return registerCodeLink;
};

export default useRegisterTargetPromotionCodeLink;
