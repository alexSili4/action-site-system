import { FC } from 'react';
import {
  Container,
  Banner,
  BannerTitleWrap,
  LogoPartner,
  PromotionName,
} from './RegisterCodeBanner.styled';
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import { useRegisterCodeBanner } from '@/hooks';

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
