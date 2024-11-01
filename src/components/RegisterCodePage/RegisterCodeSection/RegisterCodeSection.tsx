import { useTargetPromotionData } from '@/hooks';
import { FC } from 'react';
import { Container, ContentWrap, Text } from './RegisterCodeSection.styled';
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeForm from '@RegisterCodePageComponents/RegisterCodeForm';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import { IProps } from './RegisterCodeSection.types';
import { getFileUrl, getPromotionBannerUrls, getPromotionDate } from '@/utils';

const RegisterCodeSection: FC<IProps> = ({
  steps,
  currentStep,
  incrementCurrentStep,
}) => {
  const {
    hotLinePhone,
    name,
    dateFrom,
    dateTo,
    hotLineWorkHours,
    logoPartner,
    thirdBannerDt,
    thirdBannerMob,
  } = useTargetPromotionData();
  // TODO fix
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });
  const promotionDate = getPromotionDate({
    dateFrom,
    dateTo,
  });
  const logoPartnerUrl = getFileUrl(logoPartner);

  return (
    <Container>
      <RegisterCodeBanner
        bannerMobUrl={bannerMobUrl}
        bannerDtUrl={bannerDtUrl}
        name={name}
        period={promotionDate}
        logoPartner={logoPartnerUrl}
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
          лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
        </Text>
      </ContentWrap>
    </Container>
  );
};

export default RegisterCodeSection;
