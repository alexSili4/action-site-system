import { FC, useState } from 'react';
import {
  Container,
  ContentWrap,
  RegisterUserFormWrap,
} from './RegisterUserSection.styled';
import { IProps } from './RegisterUserSection.types';
// components
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterUserForm from '@RegisterCodePageComponents/RegisterUserForm';
import SuccessRegisterCodeMsg from '@RegisterCodePageComponents/SuccessRegisterCodeMsg';

const RegisterUserSection: FC<IProps> = ({
  steps,
  currentStep,
  logoUrl,
  name,
  promotionDate,
  thirdBannerMob,
  thirdBannerDt,
  hotLinePhone,
  hotLineWorkHours,
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

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
        {showSuccessMsg ? (
          <SuccessRegisterCodeMsg
            hotLinePhone={hotLinePhone}
            hotLineWorkHours={hotLineWorkHours}
          />
        ) : (
          <RegisterUserFormWrap>
            <RegisterCodeStepsBar
              isHiddenOnMobile
              steps={steps}
              currentStep={currentStep}
            />
            <RegisterUserForm
              toggleShowSuccessMsgState={toggleShowSuccessMsgState}
            />
          </RegisterUserFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default RegisterUserSection;
