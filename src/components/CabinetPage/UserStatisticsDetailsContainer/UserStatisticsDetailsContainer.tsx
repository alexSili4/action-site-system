import { FC } from 'react';
import { Container } from './UserStatisticsDetailsContainer.styled';
import { IProps } from './UserStatisticsDetailsContainer.types';

const UserStatisticsDetailsContainer: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default UserStatisticsDetailsContainer;
