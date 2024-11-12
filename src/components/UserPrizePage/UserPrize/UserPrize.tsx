import { FC } from 'react';
import { Container } from './UserPrize.styled';
import UserPrizeBanner from '@UserPrizePageComponents/UserPrizeBanner';
import UserPrizeDetails from '@UserPrizePageComponents/UserPrizeDetails';

const UserPrize: FC = () => {
  return (
    <Container>
      <UserPrizeBanner />
      <UserPrizeDetails />
    </Container>
  );
};

export default UserPrize;
