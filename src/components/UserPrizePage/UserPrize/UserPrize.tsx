import { FC, useEffect } from 'react';
import UserPrizeBanner from '@UserPrizePageComponents/UserPrizeBanner';
import UserPrizeDetails from '@UserPrizePageComponents/UserPrizeDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';
import { IProps } from './UserPrize.types';

const UserPrize: FC<IProps> = ({ prize }) => {
  useEffect(() => {
    console.log(prize);
  }, [prize]);

  return (
    <UserStatisticsDetailsContainer>
      <UserPrizeBanner />
      <UserPrizeDetails />
    </UserStatisticsDetailsContainer>
  );
};

export default UserPrize;
