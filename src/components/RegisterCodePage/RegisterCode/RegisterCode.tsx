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
    { id: 2, name: 'citrus', icon: citrus },
    { id: 1, name: 'rozetka', icon: rozetka },
    { id: 5, name: 'foxtrot', icon: foxtrot },
    { id: 3, name: 'comfy', icon: comfy },
    { id: 4, name: 'englishdom', icon: englishdom },
    { id: 7, name: 'luxoptyka', icon: luxoptyka },
    { id: 6, name: 'wog', icon: wog },
    { id: 8, name: 'podorozhnyk', icon: podorozhnyk },
    { id: 10, name: 'monobank', icon: monobank },
    { id: 9, name: 'morshynska', icon: morshynska },
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
