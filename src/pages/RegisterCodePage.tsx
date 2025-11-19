import { FC, useEffect, useState } from 'react';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';
import {
  useCabinetState,
  useRegisterCodePageState,
  useIsUnusedUserCodes,
  useServiceUnavailablePageNavigate,
} from '@/hooks';
import { NumberOrNull } from '@/types/types';
import { Partners } from '@/types/code.types';
import codesService from '@/services/codes.service';
import { useNavigate } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { IPromotion } from '@/types/promotion.types';
import { AxiosError } from 'axios';

const RegisterCodePage: FC = () => {
  const isUnusedUserCodes = useIsUnusedUserCodes();
  const cabinetState = useCabinetState({ isRedirectFromRegCodePage: true });
  const { defaultCodeId, defaultPromotion } = useRegisterCodePageState();
  const isDefaultCodeId = Boolean(defaultCodeId);
  const targetCurrentStep = isDefaultCodeId ? 2 : 1;
  const [currentStep, setCurrentStep] = useState<number>(
    () => targetCurrentStep
  );
  const [codeId, setCodeId] = useState<NumberOrNull>(() => defaultCodeId);
  const [partners, setPartners] = useState<Partners | null>(null);
  const [promotion, setPromotion] = useState<IPromotion | null>(
    () => defaultPromotion
    // null
  );
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
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigateToErrorPage({ isError: true, errorMessage });
      }
    };

    if (codeId && promotion?.action_type !== 2) {
      getPartners(codeId);
    }
  }, [codeId, promotion]);

  const updatePromotion = (promotion: IPromotion | null) => {
    setPromotion(promotion);
  };

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
        updatePromotion={updatePromotion}
        isDefaultCodeId={isDefaultCodeId}
      />
    </Section>
  );
};

export default RegisterCodePage;
