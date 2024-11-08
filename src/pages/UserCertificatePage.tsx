import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCertificate from '@UserCertificatePageComponents/UserCertificate';

const UserCertificatePage: FC = () => {
  return (
    <Section>
      <Container>
        <UserCertificate/>
      </Container>
    </Section>
  );
};

export default UserCertificatePage;
