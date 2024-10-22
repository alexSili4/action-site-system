import { FC } from 'react';
import { Container } from './StatisticsFilter.styled';
import StatisticsCategories from '@CabinetPageComponents/StatisticsCategories';
import { IProps } from './StatisticsFilter.types';
import StatisticsSortTypesContainer from '@CabinetPageComponents/StatisticsSortTypesContainer';

const StatisticsFilter: FC<IProps> = ({
  categories,
  changeStatisticCategory,
  statisticCategory,
  isAscSortType,
  onSortBtnClick,
}) => {
  return (
    <Container>
      <StatisticsCategories
        changeStatisticCategory={changeStatisticCategory}
        categories={categories}
        statisticCategory={statisticCategory}
      />
      <StatisticsSortTypesContainer
        isAscSortType={isAscSortType}
        onSortBtnClick={onSortBtnClick}
      />
    </Container>
  );
};

export default StatisticsFilter;
