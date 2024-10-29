import { FC, useState } from 'react';
import { Container } from './UserStatisticsContainer.styled';
import StatisticsFilter from '@CabinetPageComponents/StatisticsFilter';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import {
  SearchParamsKeys,
  StatisticsSortTypesKeys,
  StatisticsCategoriesKeys,
} from '@/constants';
import { makeBlur } from '@/utils';
import StatisticsContent from '@CabinetPageComponents/StatisticsContent';

const UserStatisticsContainer: FC = () => {
  const [showSortTypesList, setShowSortTypesList] = useState<boolean>(false);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const statisticCategory =
    searchParams.get(SearchParamsKeys.category) ??
    StatisticsCategoriesKeys.codes;
  const sortType =
    searchParams.get(SearchParamsKeys.sort) ?? StatisticsSortTypesKeys.asc;
  const isAscSortType = sortType === StatisticsSortTypesKeys.asc;
  const isCodesCategory = statisticCategory === StatisticsCategoriesKeys.codes;
  const isPrizesCategory =
    statisticCategory === StatisticsCategoriesKeys.prizes;

  const categories = Object.values(StatisticsCategoriesKeys);

  const changeStatisticCategory = (e: InputChangeEvent): void => {
    const { name: key, value } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  const onSortBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const value = isAscSortType
      ? StatisticsSortTypesKeys.desc
      : StatisticsSortTypesKeys.asc;
    updateSearchParams({ key: SearchParamsKeys.sort, value });
  };

  const onSortTypeInputChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;

    updateSearchParams({ key, value });
    toggleShowSortTypesList();
  };

  const toggleShowSortTypesList = () => {
    setShowSortTypesList((prevState) => !prevState);
  };

  const onShowSortTypesBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowSortTypesList();
  };

  return (
    <Container>
      <StatisticsFilter
        categories={categories}
        changeStatisticCategory={changeStatisticCategory}
        statisticCategory={statisticCategory}
        isAscSortType={isAscSortType}
        onSortBtnClick={onSortBtnClick}
        onSortTypeInputChange={onSortTypeInputChange}
        onShowSortTypesBtnClick={onShowSortTypesBtnClick}
        showSortTypesList={showSortTypesList}
        toggleShowSortTypesList={toggleShowSortTypesList}
        sortType={sortType}
      />
      <StatisticsContent
        isCodesCategory={isCodesCategory}
        isPrizesCategory={isPrizesCategory}
      />
    </Container>
  );
};

export default UserStatisticsContainer;
