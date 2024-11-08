import { FC } from 'react';
import { Container } from './UserCertificate.styled';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';
import UserCertificateDetails from '@UserCertificatePageComponents/UserCertificateDetails';

const UserCertificate: FC = () => {
  return (
    <Container>
      <UserCertificateBanner />
      <UserCertificateDetails />
    </Container>
  );
};

export default UserCertificate;
