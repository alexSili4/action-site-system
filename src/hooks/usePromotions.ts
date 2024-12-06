import { useEffect } from 'react';
import { selectGetPromotions, selectError } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import useCityId from './useCityId';
import useStoreError from './useStoreError';

const usePromotionsPage = () => {
  const getPromotions = usePromotionsStore(selectGetPromotions);
  const error = usePromotionsStore(selectError);
  const cityId = useCityId();
  useStoreError(error);

  useEffect(() => {
    if (!cityId) {
      return;
    }

    getPromotions(cityId);
  }, [cityId, getPromotions]);
};

export default usePromotionsPage;
