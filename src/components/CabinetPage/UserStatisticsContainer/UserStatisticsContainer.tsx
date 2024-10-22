import { FC } from 'react';
import { Container } from './UserStatisticsContainer.styled';
import StatisticsFilter from '@CabinetPageComponents/StatisticsFilter';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import {
  SearchParamsKeys,
  SortTypes,
  StatisticsCategoriesKeys,
} from '@/constants';
import { makeBlur } from '@/utils';

const UserStatisticsContainer: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const statisticCategory =
    searchParams.get(SearchParamsKeys.category) ??
    StatisticsCategoriesKeys.prizes;
  const sortType = searchParams.get(SearchParamsKeys.sort) ?? SortTypes.asc;
  const isAscSortType = sortType === SortTypes.asc;

  const categories = Object.values(StatisticsCategoriesKeys);

  const changeStatisticCategory = (e: InputChangeEvent): void => {
    const { name: key, value } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  const onSortBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const value = isAscSortType ? SortTypes.desc : SortTypes.asc;
    updateSearchParams({ key: SearchParamsKeys.sort, value });
  };

  return (
    <Container>
      <StatisticsFilter
        categories={categories}
        changeStatisticCategory={changeStatisticCategory}
        statisticCategory={statisticCategory}
        isAscSortType={isAscSortType}
        onSortBtnClick={onSortBtnClick}
      />
    </Container>
  );
};

export default UserStatisticsContainer;
