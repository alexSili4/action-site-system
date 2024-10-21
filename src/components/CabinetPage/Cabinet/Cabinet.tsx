import { FC } from 'react';
import { Container } from './Cabinet.styled';
import UserInfoContainer from '@CabinetPageComponents/UserInfoContainer';
import UserStatisticsContainer from '@CabinetPageComponents/UserStatisticsContainer';

const Cabinet: FC = () => {
  return (
    <Container>
      <UserInfoContainer />
      <UserStatisticsContainer />
    </Container>
  );
};

export default Cabinet;
