import { useTargetPromotionData } from '@/hooks';
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
}) => {
  const { hotLinePhone, hotLineWorkHours } = useTargetPromotionData();
  // TODO fix

  return (
    <Container>
      <RegisterCodeBanner />
      <ContentWrap>
        <RegisterCodeStepsBar
          isHiddenOnMobile
          steps={steps}
          currentStep={currentStep}
        />
        <RegisterCodeForm incrementCurrentStep={incrementCurrentStep} />
        <Text>
          Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
          лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
