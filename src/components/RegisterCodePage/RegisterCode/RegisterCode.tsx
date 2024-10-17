import { FC, useState } from 'react';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import { Container } from './RegisterCode.styled';
import { RegPromotionCodeSteps } from '@/constants';
import { getRegCodeSteps } from '@/utils';
import PrizeWheelSection from '@RegisterCodePageComponents/PrizeWheelSection';
import { WheelPrizes } from '@/types/code.types';
// TODO delete icons
import rozetka from '@/rozetka.svg';
import citrus from '@/citrus.svg';
import comfy from '@/comfy.svg';
import englishdom from '@/englishdom.svg';
import foxtrot from '@/foxtrot.svg';
import luxoptyka from '@/luxoptyka.svg';
import monobank from '@/monobank.svg';
import morshynska from '@/morshynska.svg';
import podorozhnyk from '@/podorozhnyk.svg';
import wog from '@/wog.svg';

const RegisterCode: FC = () => {
  // TODO delete sectors
  const prizes: WheelPrizes = [
    { id: 1, name: 'Приз 1', icon: rozetka },
    { id: 2, name: 'Приз 2', icon: citrus },
    { id: 3, name: 'Приз 3', icon: comfy },
    { id: 4, name: 'Приз 4', icon: englishdom },
    { id: 5, name: 'Приз 5', icon: foxtrot },
    { id: 6, name: 'Приз 6', icon: wog },
    { id: 7, name: 'Приз 7', icon: luxoptyka },
    { id: 8, name: 'Приз 8', icon: podorozhnyk },
    { id: 9, name: 'Приз 9', icon: morshynska },
    { id: 10, name: 'Приз 10', icon: monobank },
  ];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps = getRegCodeSteps(RegPromotionCodeSteps);
  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  // const isThirdStep = currentStep === 3;

  const incrementCurrentStep = () => {
    setCurrentStep((prevState) => (prevState += 1));
  };

  return (
    <Container>
      {!isSecondStep && (
        <RegisterCodeStepsBar
          isHiddenOnMobile={false}
          steps={steps}
          currentStep={currentStep}
        />
      )}
      {isFirstStep && (
        <RegisterCodeSection
          steps={steps}
          currentStep={currentStep}
          incrementCurrentStep={incrementCurrentStep}
        />
      )}
      {isSecondStep && (
        <PrizeWheelSection prizes={prizes} spinningMs={8000} maxSpins={5} />
      )}
    </Container>
  );
};

export default RegisterCode;
