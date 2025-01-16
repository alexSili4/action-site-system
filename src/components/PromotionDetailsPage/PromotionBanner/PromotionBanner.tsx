import { FC } from 'react';
import { IProps } from './PromotionBanner.types';
import { Container } from './PromotionBanner.styled';
// components
import PromotionDetailsGoBackLink from '@PromotionDetailsPageComponents/PromotionDetailsGoBackLink';

const PromotionBanner: FC<IProps> = ({
  from,
  secondBannerDt,
  secondBannerMob,
}) => {
  return (
    <Container
      secondBannerDt={secondBannerDt}
      secondBannerMob={secondBannerMob}
    >
      <PromotionDetailsGoBackLink from={from} />
    </Container>
  );
};

export default PromotionBanner;
