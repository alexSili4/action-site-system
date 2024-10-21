import { FC } from 'react';
import { Container } from './UserStatisticsContainer.styled';
import StatisticsFilter from '@CabinetPageComponents/StatisticsFilter';

const UserStatisticsContainer: FC = () => {
  return (
    <Container>
      <StatisticsFilter />
    </Container>
  );
};

export default UserStatisticsContainer;
