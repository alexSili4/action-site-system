import { FC } from 'react';
import UserReceiptDetails from '@UserCodePageComponents/UserReceiptDetails';
import UserCodeDetails from '@UserCodePageComponents/UserCodeDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';

const UserCode: FC = () => {
  return (
    <UserStatisticsDetailsContainer>
      <UserReceiptDetails />
      <UserCodeDetails />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCode;
