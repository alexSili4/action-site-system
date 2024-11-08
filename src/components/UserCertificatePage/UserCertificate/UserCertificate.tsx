import { FC } from 'react';
import { Container } from './UserCertificate.styled';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';

const UserCertificate: FC = () => {
  return (
    <Container>
      <UserCertificateBanner />
    </Container>
  );
};

export default UserCertificate;
