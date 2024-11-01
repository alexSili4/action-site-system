import { FC } from 'react';
import { IProps } from './RegisterCodeBanner.types';
import {
  Container,
  Banner,
  BannerTitleWrap,
  LogoPartner,
  PromotionName,
} from './RegisterCodeBanner.styled';
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';

const RegisterCodeBanner: FC<IProps> = ({
  bannerMobUrl,
  bannerDtUrl,
  name,
  period,
  logoPartner,
}) => {
  return (
    <Container>
      <Banner bannerMobUrl={bannerMobUrl} bannerDtUrl={bannerDtUrl}>
        <BannerTitleWrap>
          <PromotionPeriodLabel period={period} />
          <PromotionName>{name}</PromotionName>
        </BannerTitleWrap>
        <LogoPartner src={logoPartner} />
      </Banner>
    </Container>
  );
};

export default RegisterCodeBanner;
