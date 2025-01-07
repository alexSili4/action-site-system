import { FC, useEffect, useState } from 'react';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';
import {
  useCabinetState,
  useDefaultCodeId,
  useIsUnusedUserCodes,
  usePromotion,
  useServiceUnavailablePageNavigate,
} from '@/hooks';
import { NumberOrNull } from '@/types/types';
import { Partners } from '@/types/code.types';
import codesService from '@/services/codes.service';
import { useNavigate } from 'react-router-dom';
import { PagePaths } from '@/constants';

const RegisterCodePage: FC = () => {
  const isUnusedUserCodes = useIsUnusedUserCodes();
  const cabinetState = useCabinetState({ isRedirectFromRegCodePage: true });
  const defaultCodeId = useDefaultCodeId();
  const isDefaultCodeId = Boolean(defaultCodeId);
  const targetCurrentStep = isDefaultCodeId ? 2 : 1;
  const [currentStep, setCurrentStep] = useState<number>(
    () => targetCurrentStep
  );
  const [codeId, setCodeId] = useState<NumberOrNull>(() => defaultCodeId);
  // TODO fix
  const [partners, setPartners] = useState<Partners | null>(null);
  const { promotion } = usePromotion();
  const navigate = useNavigate();
  const navigateToErrorPage = useServiceUnavailablePageNavigate();

  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  const isThirdStep = currentStep === 3;

  useEffect(() => {
    const shouldRedirectToCabinet = isUnusedUserCodes && !defaultCodeId;

    if (shouldRedirectToCabinet) {
      navigate(PagePaths.cabinet, { state: cabinetState });
    }
  }, [cabinetState, defaultCodeId, isUnusedUserCodes]);

  useEffect(() => {
    const getPartners = async (codeId: number) => {
      try {
        const response = await codesService.getPartners(codeId);

        setPartners(response);
      } catch (error) {
        navigateToErrorPage(true);
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
