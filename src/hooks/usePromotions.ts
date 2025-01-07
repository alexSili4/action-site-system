import { useEffect } from 'react';
import { selectGetPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import useCityId from './useCityId';

const usePromotionsPage = () => {
  const getPromotions = usePromotionsStore(selectGetPromotions);
  const cityId = useCityId();

  useEffect(() => {
    if (!cityId) {
      return;
    }

    getPromotions(cityId);
  }, [cityId, getPromotions]);
};

export default usePromotionsPage;
