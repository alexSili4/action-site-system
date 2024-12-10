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
  // TODO fix
  const [partners, setPartners] = useState<Partners | null>([
    {
      id: 1,
      name: 'Фокстрот',
      logo: '/partner/0/1_112701.png',
      in_stock: true,
    },
    {
      id: 2,
      name: 'Епіцентр',
      logo: '/partner/0/2_112715.png',
      in_stock: true,
    },
    {
      id: 3,
      name: 'Комфі',
      logo: '/partner/0/3_112730.png',
      in_stock: true,
    },
    {
      id: 4,
      name: 'Єльдорадо',
      logo: '/partner/0/4_155526.webp',
      in_stock: false,
    },
  ]);
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
