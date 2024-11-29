import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import { IProps } from './RegisterCodeSection.types';
// components
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeForm from '@RegisterCodePageComponents/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';

const RegisterCodeSection: FC<IProps> = ({
  steps,
  currentStep,
  incrementCurrentStep,
  rulesPdf,
  hotLinePhone,
  hotLineWorkHours,
  name,
  logoUrl,
  thirdBannerMob,
  thirdBannerDt,
  promotionDate,
}) => {
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
        <RegisterCodeStepsBar
          isHiddenOnMobile
          steps={steps}
          currentStep={currentStep}
        />
        <RegisterCodeForm
          incrementCurrentStep={incrementCurrentStep}
          rulesPdf={rulesPdf}
        />
        <Text>
          Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
          лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
