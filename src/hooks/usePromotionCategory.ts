import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';

const usePromotionCategory = (): string => {
  const { searchParams } = useSetSearchParams();

  const promotionCategory =
    searchParams.get(SearchParamsKeys.category) ??
    PromotionsCategoriesKeys.active;

  return promotionCategory;
};

export default usePromotionCategory;
