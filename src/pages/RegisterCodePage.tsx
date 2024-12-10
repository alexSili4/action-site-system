import { FC, useEffect, useState } from 'react';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';
import {
  useDefaultCodeId,
  usePromotion,
  useServiceUnavailablePageNavigate,
} from '@/hooks';
import { NumberOrNull } from '@/types/types';
import { Partners } from '@/types/code.types';
import codesService from '@/services/codes.service';

const RegisterCodePage: FC = () => {
  const defaultCodeId = useDefaultCodeId();
  const isDefaultCodeId = Boolean(defaultCodeId);
  const targetCurrentStep = isDefaultCodeId ? 2 : 1;
  const [currentStep, setCurrentStep] = useState<number>(
    () => targetCurrentStep
  );
  const [codeId, setCodeId] = useState<NumberOrNull>(() => defaultCodeId);
  const [partners, setPartners] = useState<Partners | null>(null);
  const promotion = usePromotion();
  const navigate = useServiceUnavailablePageNavigate();

  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  const isThirdStep = currentStep === 3;

  useEffect(() => {
    const getPartners = async (codeId: number) => {
      try {
        const response = await codesService.getPartners(codeId);

        setPartners(response);
      } catch (error) {
        navigate();
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
