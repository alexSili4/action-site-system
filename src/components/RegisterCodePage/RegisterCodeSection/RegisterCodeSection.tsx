import { useTargetPromotion } from '@/hooks';
import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeForm from '@RegisterCodePageComponents/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import { IProps } from './RegisterCodeSection.types';
import { getPromotionBannerUrls } from '@/utils';

const RegisterCodeSection: FC<IProps> = ({
  steps,
  currentStep,
  incrementCurrentStep,
}) => {
  const {
    hot_line_phone: hotLinePhone,
    main_banner_dt: mainBannerDt = '',
    main_banner_mob: mainBannerMob = '',
  } = useTargetPromotion() ?? {};
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: mainBannerDt,
    bannerMob: mainBannerMob,
  });

  return (
    <Container>
      <RegisterCodeBanner
        bannerMobUrl={bannerMobUrl}
        bannerDtUrl={bannerDtUrl}
      />
      <ContentWrap>
        <RegisterCodeStepsBar
          isHiddenOnMobile
          steps={steps}
          currentStep={currentStep}
        />
        <RegisterCodeForm incrementCurrentStep={incrementCurrentStep} />
        <Text>
          Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
          лінію за телефоном {hotLinePhone} ({'???графік роботи???'})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
