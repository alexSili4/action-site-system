import { PagePaths, SearchParamsKeys } from '@/constants';
import useCityId from './useCityId';
import usePromotionId from './usePromotionId';

const useRegisterCodeLink = (): string => {
  const cityId = useCityId();
  const promotionId = usePromotionId();

  const registerCodeLink = `${PagePaths.code}/${promotionId}?${SearchParamsKeys.cityId}=${cityId}`;

  return registerCodeLink;
};

export default useRegisterCodeLink;
