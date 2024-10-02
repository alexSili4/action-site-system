import { FC } from 'react';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionGoBackLink from '@/components/PromotionGoBackLink';
import { IProps } from './PromotionBanner.types';
import { Container, InfoWrap, Title } from './PromotionBanner.styled';

const PromotionBanner: FC<IProps> = ({ from, period }) => {
  return (
    <Container>
      <PromotionGoBackLink from={from} />
      <InfoWrap>
        <PromotionPeriodLabel period={period} />
        <Title>дуже довга назва акції</Title>
      </InfoWrap>
    </Container>
  );
};

export default PromotionBanner;
