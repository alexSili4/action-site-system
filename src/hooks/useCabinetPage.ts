import { useUserCodesStore, useUserPrizesStore } from '@/store/store';
import {
  selectGetUserCodes,
  selectError as selectUserCodesError,
} from '@/store/userCodes/selectors';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys, StatisticsCategoriesKeys } from '@/constants';
import {
  selectGetUserPrizes,
  selectError as selectUserPrizesError,
} from '@/store/userPrizes/selectors';
import { useEffect } from 'react';
import useStoreError from './useStoreError';

const useCabinetPage = () => {
  const getUserCodes = useUserCodesStore(selectGetUserCodes);
  const getUserPrizes = useUserPrizesStore(selectGetUserPrizes);
  const userCodesError = useUserCodesStore(selectUserCodesError);
  const userPrizesError = useUserPrizesStore(selectUserPrizesError);
  useStoreError(userCodesError);
  useStoreError(userPrizesError);

  const { searchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const sort = searchParams.get(SearchParamsKeys.sort) ?? '';
  const category =
    searchParams.get(SearchParamsKeys.category) ??
    StatisticsCategoriesKeys.codes;

  const isCodesStatisticsCategory = category === StatisticsCategoriesKeys.codes;
  const isPrizesStatisticsCategory =
    category === StatisticsCategoriesKeys.prizes;

  const shouldGetUserCodes = isCodesStatisticsCategory;
  const shouldGetUserPrizes = isPrizesStatisticsCategory;

  useEffect(() => {
    if (!shouldGetUserCodes) {
      return;
    }

    getUserCodes({ page: Number(page), sort });
  }, [getUserCodes, shouldGetUserCodes, page, sort]);

  useEffect(() => {
    if (!shouldGetUserPrizes) {
      return;
    }

    getUserPrizes({ page: Number(page), sort });
  }, [getUserPrizes, page, sort, shouldGetUserPrizes]);
};

export default useCabinetPage;
