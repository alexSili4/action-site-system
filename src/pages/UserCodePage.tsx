import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCode from '@UserCodePageComponents/UserCode';

const UserCodePage: FC = () => {
  return (
    <Section>
      <Container>
        <UserCode />
      </Container>
    </Section>
  );
};

export default UserCodePage;
