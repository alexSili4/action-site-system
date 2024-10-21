import { FC } from 'react';
import { Container } from './Cabinet.styled';
import UserInfoContainer from '@CabinetPageComponents/UserInfoContainer';

const Cabinet: FC = () => {
  return (
    <Container>
      <UserInfoContainer />
    </Container>
  );
};

export default Cabinet;
