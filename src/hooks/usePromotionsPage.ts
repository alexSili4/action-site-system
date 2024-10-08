import { useEffect } from 'react';
import { SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { selectGetPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';

const usePromotionsPage = () => {
  const { searchParams } = useSetSearchParams();
  const getPromotions = usePromotionsStore(selectGetPromotions);
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';

  useEffect(() => {
    if (!cityId) {
      return;
    }

    getPromotions(cityId);
  }, [cityId, getPromotions]);
};

export default usePromotionsPage;
