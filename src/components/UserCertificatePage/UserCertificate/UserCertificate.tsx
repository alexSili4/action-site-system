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
    certificatePdf,
    getConditions,
    partnerLogoUrl,
    partnerName,
    prizeName,
    expiredFormatDate,
    hotLinePhone,
    hotLineWorkHours,
    promotionName,
    promotionDetailsPath,
    codeDetailsPath,
    validHotLinePhone,
    certificateCode,
    certificateImg,
    shouldShowDownloadLink,
  } = useUserCertificate(certificate);

  return (
    <UserStatisticsDetailsContainer>
      <UserCertificateBanner
        shouldShowDownloadLink={shouldShowDownloadLink}
        certificateCode={certificateCode}
        certificateImg={certificateImg}
        certificatePdf={certificatePdf}
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
        codeDetailsPath={codeDetailsPath}
        validHotLinePhone={validHotLinePhone}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserCertificate;
