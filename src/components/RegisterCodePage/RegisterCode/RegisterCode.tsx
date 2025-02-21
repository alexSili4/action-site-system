import { FC } from 'react';
import { Content } from './RegisterCode.styled';
import {
  getFileUrl,
  getShouldShowPrizesWheel,
  getSupportServiceText,
} from '@/utils';
// components
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import PrizesWheelSection from '@RegisterCodePageComponents/PrizesWheelSection';
import SentCertificateSection from '@RegisterCodePageComponents/SentCertificateSection';
import Container from '@GeneralComponents/Container';
import { IProps } from './RegisterCode.types';

const RegisterCode: FC<IProps> = ({
  isFirstStep,
  isSecondStep,
  isThirdStep,
  promotion,
  partners,
  codeId,
  isDefaultCodeId,
  onSuccessRegisterCode,
  incrementCurrentStep,
  updatePromotion,
}) => {
  const {
    action_type: actionType,
    hot_line_phone: hotLinePhone = '',
    hot_line_work_hours: hotLineWorkHours = '',
    rules_pdf: rulesPdf,
  } = promotion ?? {};
  const shouldShowPrizesWheel = isDefaultCodeId
    ? true
    : actionType
    ? getShouldShowPrizesWheel(actionType)
    : false;
  const supportServiceText = getSupportServiceText({
    hotLinePhone,
    hotLineWorkHours,
  });
  const isPromotion = Boolean(promotion);

  const rulesPdfUrl = getFileUrl(rulesPdf ?? '');

  const isRegisterCodeStep = isFirstStep;
  const isPrizesWheelStep = shouldShowPrizesWheel && isSecondStep;

  const showAfterPrizesWheel = shouldShowPrizesWheel && isThirdStep;
  const showInsteadPrizesWheel = !shouldShowPrizesWheel && isSecondStep;
  const isConfirmEmailStep = showAfterPrizesWheel || showInsteadPrizesWheel;

  const shouldShowPrizesWheelSection = isPrizesWheelStep && partners && codeId;
  const shouldShowSentCertificateSection = isConfirmEmailStep && codeId;

  return (
    <Content>
      {isRegisterCodeStep && (
        <Container>
          <RegisterCodeSection
            isPromotion={isPromotion}
            supportServiceText={supportServiceText}
            rulesPdf={rulesPdfUrl}
            onSuccessRegisterCode={onSuccessRegisterCode}
            updatePromotion={updatePromotion}
          />
        </Container>
      )}
      {shouldShowPrizesWheelSection && (
        <PrizesWheelSection
          partners={partners}
          spinningMs={8000}
          maxSpins={5}
          moveToNextStep={incrementCurrentStep}
          codeId={codeId}
        />
      )}
      {shouldShowSentCertificateSection && (
        <Container>
          <SentCertificateSection
            codeId={codeId}
            supportServiceText={supportServiceText}
            actionType={actionType}
          />
        </Container>
      )}
    </Content>
  );
};

export default RegisterCode;
