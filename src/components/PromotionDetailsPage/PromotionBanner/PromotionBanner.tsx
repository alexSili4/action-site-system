import { FC } from 'react';
import { IProps } from './PromotionBanner.types';
import { Container } from './PromotionBanner.styled';
// components
import PromotionDetailsGoBackLink from '@PromotionDetailsPageComponents/PromotionDetailsGoBackLink';

const PromotionBanner: FC<IProps> = ({ from, bannerDt, bannerMob }) => {
  return (
    <Container bannerDt={bannerDt} bannerMob={bannerMob}>
      <PromotionDetailsGoBackLink from={from} />
    </Container>
  );
};

export default PromotionBanner;
