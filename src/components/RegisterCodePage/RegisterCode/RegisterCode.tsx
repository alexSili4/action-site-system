import { FC, useState } from 'react';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import { Container } from './RegisterCode.styled';
import { RegPromotionCodeSteps } from '@/constants';
import { getRegCodeSteps } from '@/utils';

const RegisterCode: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps = getRegCodeSteps(RegPromotionCodeSteps);

  const incrementCurrentStep = () => {
    setCurrentStep((prevState) => (prevState += 1));
  };

  return (
    <Container>
      <RegisterCodeStepsBar
        isHiddenOnMobile={false}
        steps={steps}
        currentStep={currentStep}
      />
      <RegisterCodeSection
        steps={steps}
        currentStep={currentStep}
        incrementCurrentStep={incrementCurrentStep}
      />
    </Container>
  );
};

export default RegisterCode;
