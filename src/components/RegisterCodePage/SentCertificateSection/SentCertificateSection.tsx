import { FC, useState } from 'react';
import {
  Container,
  ContentWrap,
  SentCertificateFormWrap,
} from './SentCertificateSection.styled';
import { IProps } from './SentCertificateSection.types';
// components
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import SentCertificateForm from '@RegisterCodePageComponents/SentCertificateForm';
import SuccessRegisterCodeMsg from '@RegisterCodePageComponents/SuccessRegisterCodeMsg';
import { IUserData } from '@/types/code.types';

const SentCertificateSection: FC<IProps> = ({
  steps,
  currentStep,
  logoUrl,
  name,
  promotionDate,
  thirdBannerMob,
  thirdBannerDt,
  hotLinePhone,
  hotLineWorkHours,
  codeId,
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData | null>(null);

  const { email: userEmail = null, name: userName = null } = userData ?? {};
  const shouldShowSuccessMsg = showSuccessMsg && userName;

  const updateUserData = (data: IUserData) => {
    setUserData(data);
  };

  const toggleShowSuccessMsgState = () => {
    setShowSuccessMsg((prevState) => !prevState);
  };

  return (
    <Container>
      <RegisterCodeBanner
        logoUrl={logoUrl}
        name={name}
        promotionDate={promotionDate}
        thirdBannerDt={thirdBannerDt}
        thirdBannerMob={thirdBannerMob}
      />
      <ContentWrap>
        {shouldShowSuccessMsg ? (
          <SuccessRegisterCodeMsg
            hotLinePhone={hotLinePhone}
            hotLineWorkHours={hotLineWorkHours}
            userName={userName}
          />
        ) : (
          <SentCertificateFormWrap>
            <RegisterCodeStepsBar
              isHiddenOnMobile
              steps={steps}
              currentStep={currentStep}
            />
            <SentCertificateForm
              userName={userName}
              userEmail={userEmail}
              updateUserData={updateUserData}
              toggleShowSuccessMsgState={toggleShowSuccessMsgState}
              codeId={codeId}
            />
          </SentCertificateFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default SentCertificateSection;
