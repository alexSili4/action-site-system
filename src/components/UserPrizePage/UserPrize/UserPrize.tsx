import { FC } from 'react';
import UserPrizeBanner from '@UserPrizePageComponents/UserPrizeBanner';
import UserPrizeDetails from '@UserPrizePageComponents/UserPrizeDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';

const UserPrize: FC = () => {
  return (
    <UserStatisticsDetailsContainer>
      <UserPrizeBanner />
      <UserPrizeDetails />
    </UserStatisticsDetailsContainer>
  );
};

export default UserPrize;
