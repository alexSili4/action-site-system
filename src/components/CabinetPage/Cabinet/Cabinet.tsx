import { FC } from 'react';
import UserInfoContainer from '@CabinetPageComponents/UserInfoContainer';
import UserStatisticsContainer from '@CabinetPageComponents/UserStatisticsContainer';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';

const Cabinet: FC = () => {
  return (
    <UserStatisticsDetailsContainer>
      <UserInfoContainer />
      <UserStatisticsContainer />
    </UserStatisticsDetailsContainer>
  );
};

export default Cabinet;
