import { FC } from 'react';
import { IProps } from './PromotionBanner.types';
import { Container, InfoWrap, ContentWrap } from './PromotionBanner.styled';
// components
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import PromotionDetailsGoBackLink from '@PromotionDetailsPageComponents/PromotionDetailsGoBackLink';
import PromotionName from '@GeneralComponents/PromotionName';
import PrizesWheelLogo from '@PromotionDetailsPageComponents/PrizesWheelLogo';

const PromotionBanner: FC<IProps> = ({
  from,
  period,
  name,
  secondBannerDt,
  secondBannerMob,
  shouldShowPrizesWheel,
}) => {
  return (
    <Container
      secondBannerDt={secondBannerDt}
      secondBannerMob={secondBannerMob}
    >
      <PromotionDetailsGoBackLink from={from} />
      <ContentWrap>
        <InfoWrap>
          <PromotionPeriodLabel period={period} />
          <PromotionName name={name} />
        </InfoWrap>
        {shouldShowPrizesWheel && <PrizesWheelLogo />}
      </ContentWrap>
    </Container>
  );
};

export default PromotionBanner;
