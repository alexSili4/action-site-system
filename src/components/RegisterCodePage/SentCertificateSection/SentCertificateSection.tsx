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
import { StringOrNull } from '@/types/types';

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
  const [userName, setUserName] = useState<StringOrNull>(null);
  const shouldShowSuccessMsg = showSuccessMsg && userName;

  const updateUserName = (userName: StringOrNull) => {
    setUserName(userName);
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
              updateUserName={updateUserName}
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
