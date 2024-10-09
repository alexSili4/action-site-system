import { FC } from 'react';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionDetailsGoBackLink from '@/components/PromotionDetailsGoBackLink';
import { IProps } from './PromotionBanner.types';
import { Container, InfoWrap } from './PromotionBanner.styled';
import PromotionName from '@/components/PromotionName';

const PromotionBanner: FC<IProps> = ({
  from,
  period,
  name,
  secondBannerDt,
  secondBannerMob,
}) => {
  return (
    <Container
      secondBannerDt={secondBannerDt}
      secondBannerMob={secondBannerMob}
    >
      <PromotionDetailsGoBackLink from={from} />
      <InfoWrap>
        <PromotionPeriodLabel period={period} />
        <PromotionName name={name} />
      </InfoWrap>
    </Container>
  );
};

export default PromotionBanner;
