import { FC, useEffect } from 'react';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';
import UserCertificateDetails from '@UserCertificatePageComponents/UserCertificateDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';
import { IProps } from './UserCertificate.types';

const UserCertificate: FC<IProps> = ({ certificate }) => {
  useEffect(() => {
    console.log(certificate);
  }, [certificate]);

  return (
    <UserStatisticsDetailsContainer>
      <UserCertificateBanner />
      <UserCertificateDetails />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCertificate;
