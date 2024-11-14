import { getRegisterCodeLink } from '@/utils';
import useCityId from './useCityId';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';

const useRegisterOnePromotionCodeLink = (): string => {
  const cityId = useCityId();
  const promotion = usePromotionsStore(selectPromotions)[0];
  const promotionId = promotion?.id;

  const registerCodeLink = getRegisterCodeLink({ promotionId, cityId });

  return registerCodeLink;
};

export default useRegisterOnePromotionCodeLink;
