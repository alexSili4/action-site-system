import { FC } from 'react';
import { Content } from './RegisterCode.styled';
import { RegPromotionCodeSteps } from '@/constants';
import {
  getFileUrl,
  getPromotionBannerUrls,
  getPromotionDate,
  getRegCodeSteps,
  getShouldShowPrizesWheel,
} from '@/utils';
// components
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import PrizesWheelSection from '@RegisterCodePageComponents/PrizesWheelSection';
import SentCertificateSection from '@RegisterCodePageComponents/SentCertificateSection';
import Container from '@GeneralComponents/Container';
import { IProps } from './RegisterCode.types';

const RegisterCode: FC<IProps> = ({
  isFirstStep,
  isSecondStep,
  isThirdStep,
  currentStep,
  promotion,
  partners,
  codeId,
  onSuccessRegisterCode,
  incrementCurrentStep,
}) => {
  const {
    action_type: actionType,
    name,
    hot_line_phone: hotLinePhone,
    hot_line_work_hours: hotLineWorkHours,
    logo,
    date_from: dateFrom,
    date_to: dateTo,
    third_banner_dt: thirdBannerDt,
    third_banner_mob: thirdBannerMob,
    rules_pdf: rulesPdf,
  } = promotion;
  const shouldShowPrizesWheel = getShouldShowPrizesWheel(actionType);
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });

  const hotLinePhoneString = hotLinePhone ?? '';
  const hotLineWorkHoursString = hotLineWorkHours ?? '';

  const logoUrl = getFileUrl(logo ?? '');
  const rulesPdfUrl = getFileUrl(rulesPdf ?? '');
  const promotionDate = getPromotionDate({ dateFrom, dateTo });
  const steps = getRegCodeSteps({
    stepsSequence: RegPromotionCodeSteps,
    shouldShowPrizesWheel,
  });

  const isRegisterCodeStep = isFirstStep;
  const isPrizesWheelStep = shouldShowPrizesWheel && isSecondStep;

  const showAfterPrizesWheel = shouldShowPrizesWheel && isThirdStep;
  const showInsteadPrizesWheel = !shouldShowPrizesWheel && isSecondStep;
  const isConfirmEmailStep = showAfterPrizesWheel || showInsteadPrizesWheel;

  const shouldShowPrizesWheelSection = isPrizesWheelStep && partners && codeId;
  const shouldShowSentCertificateSection = isConfirmEmailStep && codeId;

  return (
    <Content>
      {!isPrizesWheelStep && (
        <Container>
          <RegisterCodeStepsBar
            isHiddenOnMobile={false}
            steps={steps}
            currentStep={currentStep}
          />
        </Container>
      )}
      {isRegisterCodeStep && (
        <Container>
          <RegisterCodeSection
            hotLinePhone={hotLinePhoneString}
            hotLineWorkHours={hotLineWorkHoursString}
            logoUrl={logoUrl}
            name={name}
            promotionDate={promotionDate}
            rulesPdf={rulesPdfUrl}
            thirdBannerDt={bannerDtUrl}
            thirdBannerMob={bannerMobUrl}
            steps={steps}
            currentStep={currentStep}
            onSuccessRegisterCode={onSuccessRegisterCode}
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
            steps={steps}
            currentStep={currentStep}
            hotLinePhone={hotLinePhoneString}
            hotLineWorkHours={hotLineWorkHoursString}
            logoUrl={logoUrl}
            name={name}
            promotionDate={promotionDate}
            thirdBannerDt={bannerDtUrl}
            thirdBannerMob={bannerMobUrl}
          />
        </Container>
      )}
    </Content>
  );
};

export default RegisterCode;
