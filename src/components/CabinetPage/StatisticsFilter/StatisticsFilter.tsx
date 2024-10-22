import { FC } from 'react';
import { Container } from './StatisticsFilter.styled';
import StatisticsCategories from '@CabinetPageComponents/StatisticsCategories';
import { IProps } from './StatisticsFilter.types';
import CategoriesSortTypesContainer from '@CabinetPageComponents/CategoriesSortTypesContainer';

const StatisticsFilter: FC<IProps> = ({
  categories,
  changeStatisticCategory,
  statisticCategory,
}) => {
  return (
    <Container>
      <StatisticsCategories
        changeStatisticCategory={changeStatisticCategory}
        categories={categories}
        statisticCategory={statisticCategory}
      />
      <CategoriesSortTypesContainer />
    </Container>
  );
};

export default StatisticsFilter;
