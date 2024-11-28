import { FC } from 'react';
import {
  Container,
  Banner,
  BannerTitleWrap,
  LogoPartner,
  PromotionName,
} from './RegisterCodeBanner.styled';
// components
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import { IProps } from './RegisterCodeBanner.types';

const RegisterCodeBanner: FC<IProps> = ({
  logoUrl,
  promotionDate,
  name,
  thirdBannerMob,
  thirdBannerDt,
}) => {
  return (
    <Container>
      <Banner thirdBannerMob={thirdBannerMob} thirdBannerDt={thirdBannerDt}>
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
