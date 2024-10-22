import { FC } from 'react';
import { Container } from './UserStatisticsContainer.styled';
import StatisticsFilter from '@CabinetPageComponents/StatisticsFilter';
import { InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys, StatisticsCategoriesKeys } from '@/constants';

const UserStatisticsContainer: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const statisticCategory =
    searchParams.get(SearchParamsKeys.category) ??
    StatisticsCategoriesKeys.prizes;

  const categories = Object.values(StatisticsCategoriesKeys);

  const changeStatisticCategory = (e: InputChangeEvent): void => {
    const { name: key, value } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  return (
    <Container>
      <StatisticsFilter
        categories={categories}
        changeStatisticCategory={changeStatisticCategory}
        statisticCategory={statisticCategory}
      />
    </Container>
  );
};

export default UserStatisticsContainer;
