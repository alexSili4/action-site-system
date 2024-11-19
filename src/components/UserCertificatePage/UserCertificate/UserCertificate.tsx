import { FC } from 'react';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';
import UserCertificateDetails from '@UserCertificatePageComponents/UserCertificateDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';
import { IProps } from './UserCertificate.types';
import { getFileUrl } from '@/utils';

const UserCertificate: FC<IProps> = ({
  certificate: { code: userCode, gift },
}) => {
  const { code } = userCode;
  const { get_conditions: getConditions, partner, name: prizeName } = gift;
  const { name: partnerName, logo: partnerLogo } = partner;

  const partnerLogoUrl = getFileUrl(partnerLogo);

  return (
    <UserStatisticsDetailsContainer>
      <UserCertificateBanner code={code} />
      <UserCertificateDetails
        code={code}
        conditions={getConditions}
        partnerLogo={partnerLogoUrl}
        partnerName={partnerName}
        prizeName={prizeName}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCertificate;
