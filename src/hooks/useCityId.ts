import { SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';

const useCityId = (): string => {
  const { searchParams } = useSetSearchParams();
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';

  return cityId;
};

export default useCityId;
