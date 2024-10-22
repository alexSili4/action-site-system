import { FC } from 'react';
import { Container } from './StatisticsFilter.styled';
import StatisticsCategories from '@CabinetPageComponents/StatisticsCategories';
import { IProps } from './StatisticsFilter.types';
import CategoriesSortTypesContainer from '@CabinetPageComponents/CategoriesSortTypesContainer';

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
      <CategoriesSortTypesContainer
        isAscSortType={isAscSortType}
        onSortBtnClick={onSortBtnClick}
      />
    </Container>
  );
};

export default StatisticsFilter;
