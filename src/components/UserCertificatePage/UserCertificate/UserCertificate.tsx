import { FC } from 'react';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';
import UserCertificateDetails from '@UserCertificatePageComponents/UserCertificateDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';

const UserCertificate: FC = () => {
  return (
    <UserStatisticsDetailsContainer>
      <UserCertificateBanner />
      <UserCertificateDetails />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCertificate;
