import { FC } from 'react';
import { IProps } from './StatisticsContent.types';
import StatisticsCodesCategoryContent from '@CabinetPageComponents/StatisticsCodesCategoryContent';
import StatisticsPrizesCategoryContent from '@CabinetPageComponents/StatisticsPrizesCategoryContent';
import { Container } from './StatisticsContent.styled';
import { useUserCodesStore, useUserPrizesStore } from '@/store/store';
import { selectUserCodes } from '@/store/userCodes/selectors';
import { selectUserPrizes } from '@/store/userPrizes/selectors';

const StatisticsContent: FC<IProps> = ({
  isPrizesCategory,
  isCodesCategory,
}) => {
  const userCodes = useUserCodesStore(selectUserCodes);
  const isUserCodesList = Boolean(userCodes.length);

  const userPrizes = useUserPrizesStore(selectUserPrizes);
  const isUserPrizesList = Boolean(userPrizes.length);

  const isUserDataList =
    (isCodesCategory && isUserCodesList) ||
    (isPrizesCategory && isUserPrizesList);

  return (
    <Container isUserDataList={isUserDataList}>
      {isCodesCategory && <StatisticsCodesCategoryContent />}
      {isPrizesCategory && <StatisticsPrizesCategoryContent />}
    </Container>
  );
};

export default StatisticsContent;
