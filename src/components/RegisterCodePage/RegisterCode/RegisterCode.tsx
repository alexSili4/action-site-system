import { FC, useState } from 'react';
import { Content } from './RegisterCode.styled';
import { RegPromotionCodeSteps } from '@/constants';
import {
  getFileUrl,
  getPromotionBannerUrls,
  getPromotionDate,
  getRegCodeSteps,
  getShouldShowPrizesWheel,
  makeBlur,
} from '@/utils';
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
// components
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import PrizesWheelSection from '@RegisterCodePageComponents/PrizesWheelSection';
import RegisterUserSection from '@RegisterCodePageComponents/RegisterUserSection';
import Container from '@GeneralComponents/Container';
import { IProps } from './RegisterCode.types';
import { BtnClickEvent } from '@/types/types';

const RegisterCode: FC<IProps> = ({ promotion }) => {
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
  const logoUrl = getFileUrl(logo ?? '');
  const rulesPdfUrl = getFileUrl(rulesPdf);
  const promotionDate = getPromotionDate({ dateFrom, dateTo });
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });
  // TODO delete sectors
  const prizes: WheelPrizes = [
    { id: 2, name: 'citrus', icon: citrus, prize: '10%' },
    { id: 1, name: 'rozetka', icon: rozetka, prize: '100₴' },
    { id: 5, name: 'foxtrot', icon: foxtrot, prize: '200₴' },
    { id: 3, name: 'comfy', icon: comfy, prize: '300₴' },
    { id: 4, name: 'englishdom', icon: englishdom, prize: '400₴' },
    { id: 7, name: 'luxoptyka', icon: luxoptyka, prize: '500₴' },
    { id: 6, name: 'wog', icon: wog, prize: '600₴' },
    { id: 8, name: 'podorozhnyk', icon: podorozhnyk, prize: '700₴' },
    { id: 10, name: 'monobank', icon: monobank, prize: '800₴' },
    { id: 9, name: 'morshynska', icon: morshynska, prize: '900₴' },
  ];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCompleteRegCode, setIsCompleteRegCode] = useState<boolean>(false);
  const steps = getRegCodeSteps({
    stepsSequence: RegPromotionCodeSteps,
    shouldShowPrizesWheel,
  });

  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  const isThirdStep = currentStep === 3;

  const isRegisterCodeStep = isFirstStep;
  const isPrizesWheelStep = shouldShowPrizesWheel && isSecondStep;

  const showAfterPrizesWheel = shouldShowPrizesWheel && isThirdStep;
  const showInsteadPrizesWheel = !shouldShowPrizesWheel && isSecondStep;
  const isConfirmEmailStep = showAfterPrizesWheel || showInsteadPrizesWheel;

  const incrementCurrentStep = () => {
    setCurrentStep((prevState) => (prevState += 1));
  };

  const toggleIsCompleteRegCode = () => {
    setIsCompleteRegCode((prevState) => !prevState);
  };

  const onCompleteRegCodeBtnClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);

    toggleIsCompleteRegCode();
  };

  return (
    <Content>
      {isCompleteRegCode ? (
        <div>form submit</div>
      ) : (
        <>
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
                hotLinePhone={hotLinePhone}
                hotLineWorkHours={hotLineWorkHours}
                logoUrl={logoUrl}
                name={name}
                promotionDate={promotionDate}
                rulesPdf={rulesPdfUrl}
                thirdBannerDt={bannerDtUrl}
                thirdBannerMob={bannerMobUrl}
                steps={steps}
                currentStep={currentStep}
                incrementCurrentStep={incrementCurrentStep}
              />
            </Container>
          )}
          {isPrizesWheelStep && (
            <PrizesWheelSection
              prizes={prizes}
              spinningMs={8000}
              maxSpins={5}
              moveToNextStep={incrementCurrentStep}
            />
          )}
          {isConfirmEmailStep && (
            <Container>
              <RegisterUserSection
                onCompleteRegCodeBtnClick={onCompleteRegCodeBtnClick}
                steps={steps}
                currentStep={currentStep}
                hotLinePhone={hotLinePhone}
                hotLineWorkHours={hotLineWorkHours}
                logoUrl={logoUrl}
                name={name}
                promotionDate={promotionDate}
                thirdBannerDt={bannerDtUrl}
                thirdBannerMob={bannerMobUrl}
              />
            </Container>
          )}
        </>
      )}
    </Content>
  );
};

export default RegisterCode;
