import { FC } from 'react';
import { IProps } from './PromotionBanner.types';
import { Container } from './PromotionBanner.styled';
// components
import PromotionDetailsGoBackLink from '@PromotionDetailsPageComponents/PromotionDetailsGoBackLink';
import { useIsTablet } from '@/hooks';
import FinishedPromoLabel from '@GeneralComponents/FinishedPromoLabel';
import { getFinishedPromoLabel } from '@/utils';

const PromotionBanner: FC<IProps> = ({
  from,
  bannerDt,
  bannerMob,
  isFinishedPromotion,
}) => {
  const isTablet = useIsTablet();
  const finishedPromoLabel = getFinishedPromoLabel(isTablet);

  return (
    <Container bannerDt={bannerDt} bannerMob={bannerMob}>
      {isFinishedPromotion && (
        <FinishedPromoLabel finishedPromoLabel={finishedPromoLabel} />
      )}
      <PromotionDetailsGoBackLink from={from} />
    </Container>
  );
};

export default PromotionBanner;
