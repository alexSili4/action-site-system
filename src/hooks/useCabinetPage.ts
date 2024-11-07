import { useUserCodesStore, useUserPrizesStore } from '@/store/store';
import { selectGetUserCodes } from '@/store/userCodes/selectors';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys, StatisticsCategoriesKeys } from '@/constants';
import { selectGetUserPrizes } from '@/store/userPrizes/selectors';
import { useEffect } from 'react';

const useCabinetPage = () => {
  const getUserCodes = useUserCodesStore(selectGetUserCodes);
  const getUserPrizes = useUserPrizesStore(selectGetUserPrizes);

  const { searchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const category = searchParams.get(SearchParamsKeys.category);

  const isCodesStatisticsCategory = category === StatisticsCategoriesKeys.codes;
  const isPrizesStatisticsCategory =
    category === StatisticsCategoriesKeys.prizes;

  const shouldGetUserCodes = isCodesStatisticsCategory;
  const shouldGetUserPrizes = isPrizesStatisticsCategory;

  useEffect(() => {
    if (!shouldGetUserCodes) {
      return;
    }

    const pageNumber = Number(page);

    getUserCodes(pageNumber);
  }, [getUserCodes, shouldGetUserCodes, page]);

  useEffect(() => {
    if (!shouldGetUserPrizes) {
      return;
    }

    const pageNumber = Number(page);

    getUserPrizes(pageNumber);
  }, [getUserPrizes, page, shouldGetUserPrizes]);
};

export default useCabinetPage;
