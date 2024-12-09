import { FC, useEffect, useState } from 'react';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';
import { usePromotion } from '@/hooks';
import { NumberOrNull } from '@/types/types';
import { Partners } from '@/types/code.types';
import codesService from '@/services/codes.service';

const RegisterCodePage: FC = () => {
  // TODO fix
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [codeId, setCodeId] = useState<NumberOrNull>(null);
  const [partners, setPartners] = useState<Partners | null>(null);
  const promotion = usePromotion();

  useEffect(() => {
    const getPartners = async (codeId: number) => {
      try {
        const response = await codesService.getPartners(codeId);

        setPartners(response);
      } catch (error) {
        // TODO fix
      }
    };

    if (codeId) {
      getPartners(codeId);
    }
  }, [codeId]);

  const updateCodeId = (codeId: number): void => {
    setCodeId(codeId);
  };

  const incrementCurrentStep = () => {
    setCurrentStep((prevState) => (prevState += 1));
  };

  const onSuccessRegisterCode = (codeId: number) => {
    incrementCurrentStep();
    updateCodeId(codeId);
  };

  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  const isThirdStep = currentStep === 3;

  return (
    <Section>
      {promotion && (
        <RegisterCode
          onSuccessRegisterCode={onSuccessRegisterCode}
          promotion={promotion}
          isFirstStep={isFirstStep}
          isSecondStep={isSecondStep}
          isThirdStep={isThirdStep}
          partners={partners}
          incrementCurrentStep={incrementCurrentStep}
          currentStep={currentStep}
          codeId={codeId}
        />
      )}
    </Section>
  );
};

export default RegisterCodePage;
