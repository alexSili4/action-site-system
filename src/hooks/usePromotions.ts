import { useEffect } from 'react';
import { selectGetPromotions } from '@/store/promotions/selectors';
import { usePromotionsStore } from '@/store/store';
import useCityId from './useCityId';
import useSetSearchParams from './useSetSearchParams';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';

const usePromotionsPage = () => {
  const { searchParams } = useSetSearchParams();
  const promotionsCategory = searchParams.get(SearchParamsKeys.category);
  const getPromotions = usePromotionsStore(selectGetPromotions);
  const cityId = useCityId();
  const isPreviousCategory =
    promotionsCategory === PromotionsCategoriesKeys.previous;

  useEffect(() => {
    if (!cityId) {
      return;
    }

    getPromotions({ cityId, isPreviousCategory });
  }, [cityId, getPromotions, isPreviousCategory]);
};

export default usePromotionsPage;
