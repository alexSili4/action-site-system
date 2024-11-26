import { FC } from 'react';
import {
  Container,
  Banner,
  BannerTitleWrap,
  LogoPartner,
  PromotionName,
} from './RegisterCodeBanner.styled';
import { useRegisterCodeBanner } from '@/hooks';
// components
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';

const RegisterCodeBanner: FC = () => {
  const { bannerMobUrl, bannerDtUrl, promotionDate, name, logoUrl } =
    useRegisterCodeBanner();

  return (
    <Container>
      <Banner bannerMobUrl={bannerMobUrl} bannerDtUrl={bannerDtUrl}>
        <BannerTitleWrap>
          <PromotionPeriodLabel period={promotionDate} />
          <PromotionName>{name}</PromotionName>
        </BannerTitleWrap>
        <LogoPartner src={logoUrl} />
      </Banner>
    </Container>
  );
};

export default RegisterCodeBanner;
