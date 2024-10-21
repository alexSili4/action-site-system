import { FC } from 'react';
import { Container } from './StatisticsFilter.styled';
import StatisticsCategories from '@CabinetPageComponents/StatisticsCategories';
import { IProps } from './StatisticsFilter.types';

const StatisticsFilter: FC<IProps> = ({
  changeStatisticCategory,
  categories,
  statisticCategory,
}) => {
  return (
    <Container>
      <StatisticsCategories
        changeStatisticCategory={changeStatisticCategory}
        categories={categories}
        statisticCategory={statisticCategory}
      />
      {/* <PromotionsSortTypesContainer /> */}
    </Container>
  );
};

export default StatisticsFilter;
