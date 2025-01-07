import { useUserCodesStore, useUserPrizesStore } from '@/store/store';
import { selectGetUserCodes } from '@/store/userCodes/selectors';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys, StatisticsCategoriesKeys } from '@/constants';
import { selectGetUserPrizes } from '@/store/userPrizes/selectors';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CabinetState } from '@/types/cabinet.types';
import { IUseCabinetPage } from '@/types/hooks.types';

const useCabinetPage = (): IUseCabinetPage => {
  const { state }: CabinetState = useLocation();
  const isRedirectFromRegCodePage = Boolean(state?.isRedirectFromRegCodePage);
  const [showUnusedUserCodesModalWin, setShowUnusedUserCodesModalWin] =
    useState<boolean>(() => isRedirectFromRegCodePage);
  const getUserCodes = useUserCodesStore(selectGetUserCodes);
  const getUserPrizes = useUserPrizesStore(selectGetUserPrizes);

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

  const toggleShowUnusedUserCodesModalWin = () => {
    setShowUnusedUserCodesModalWin((prevState) => !prevState);
  };

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

  return { showUnusedUserCodesModalWin, toggleShowUnusedUserCodesModalWin };
};

export default useCabinetPage;
