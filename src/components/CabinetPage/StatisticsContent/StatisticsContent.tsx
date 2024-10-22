import { FC } from 'react';
import { IProps } from './StatisticsContent.types';
import StatisticsCodesCategoryContent from '@CabinetPageComponents/StatisticsCodesCategoryContent';
import StatisticsPrizesCategoryContent from '@CabinetPageComponents/StatisticsPrizesCategoryContent';

const StatisticsContent: FC<IProps> = ({
  isPrizesCategory,
  isCodesCategory,
}) => {
  return (
    <>
      {isCodesCategory && <StatisticsCodesCategoryContent />}
      {isPrizesCategory && <StatisticsPrizesCategoryContent />}
    </>
  );
};

export default StatisticsContent;
