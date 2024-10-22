import { FC } from 'react';
import { IProps } from './StatisticsContent.types';
import StatisticsCodesCategoryContent from '@CabinetPageComponents/StatisticsCodesCategoryContent';
import StatisticsPrizesCategoryContent from '@CabinetPageComponents/StatisticsPrizesCategoryContent';
import { Container } from './StatisticsContent.styled';

const StatisticsContent: FC<IProps> = ({
  isPrizesCategory,
  isCodesCategory,
}) => {
  return (
    <Container>
      {isCodesCategory && <StatisticsCodesCategoryContent />}
      {isPrizesCategory && <StatisticsPrizesCategoryContent />}
    </Container>
  );
};

export default StatisticsContent;
