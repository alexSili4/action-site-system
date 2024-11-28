import { FC } from 'react';
import { IProps } from './UserCertificate.types';
import { useUserCertificate } from '@/hooks';
// components
import UserCertificateDetails from '@UserCertificatePageComponents/UserCertificateDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';
import UserCertificateBanner from '@UserCertificatePageComponents/UserCertificateBanner';

const UserCertificate: FC<IProps> = ({ certificate }) => {
  const {
    code,
    bannerMobUrl,
    bannerDtUrl,
    certificatePdfUrl,
    getConditions,
    partnerLogoUrl,
    partnerName,
    prizeName,
    expiredFormatDate,
    hotLinePhone,
    hotLineWorkHours,
    promotionName,
    promotionDetailsPath,
  } = useUserCertificate(certificate);

  return (
    <UserStatisticsDetailsContainer>
      <UserCertificateBanner
        code={code}
        thirdBannerMob={bannerMobUrl}
        thirdBannerDt={bannerDtUrl}
        certificatePdf={certificatePdfUrl}
      />
      <UserCertificateDetails
        code={code}
        conditions={getConditions}
        partnerLogo={partnerLogoUrl}
        partnerName={partnerName}
        prizeName={prizeName}
        expiredDate={expiredFormatDate}
        hotLinePhone={hotLinePhone}
        hotLineWorkHours={hotLineWorkHours}
        promotionName={promotionName}
        promotionDetailsPath={promotionDetailsPath}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCertificate;
