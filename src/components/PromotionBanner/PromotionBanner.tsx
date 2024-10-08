import { FC } from 'react';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionDetailsGoBackLink from '@/components/PromotionDetailsGoBackLink';
import { IProps } from './PromotionBanner.types';
import { Container, InfoWrap } from './PromotionBanner.styled';
import PromotionName from '../PromotionName';

const PromotionBanner: FC<IProps> = ({ from, period }) => {
  return (
    // TODO fix PromotionName
    <Container>
      <PromotionDetailsGoBackLink from={from} />
      <InfoWrap>
        <PromotionPeriodLabel period={period} />
        <PromotionName name={'дуже довга назва акції'} />
      </InfoWrap>
    </Container>
  );
};

export default PromotionBanner;
