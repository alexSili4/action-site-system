import { FC } from 'react';
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import PromotionDetailsGoBackLink from '@PromotionDetailsPageComponents/PromotionDetailsGoBackLink';
import { IProps } from './PromotionBanner.types';
import { Container, InfoWrap, ContentWrap } from './PromotionBanner.styled';
import PromotionName from '@GeneralComponents/PromotionName';
import PrizesWheelLogo from '@PromotionDetailsPageComponents/PrizesWheelLogo';

const PromotionBanner: FC<IProps> = ({
  from,
  period,
  name,
  secondBannerDt,
  secondBannerMob,
  showWheelLogo,
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
        {showWheelLogo && <PrizesWheelLogo />}
      </ContentWrap>
    </Container>
  );
};

export default PromotionBanner;
