import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserPrize from '@UserPrizePageComponents/UserPrize';

const UserPrizePage: FC = () => {
  return (
    <Section>
      <Container>
        <UserPrize />
      </Container>
    </Section>
  );
};

export default UserPrizePage;
