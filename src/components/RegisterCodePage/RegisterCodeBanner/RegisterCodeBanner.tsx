import { FC } from 'react';
import { IProps } from './RegisterCodeBanner.types';
import { Container } from './RegisterCodeBanner.styled';
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import PromotionName from '@GeneralComponents/PromotionName';

const RegisterCodeBanner: FC<IProps> = ({
  bannerMobUrl,
  bannerDtUrl,
  name,
  period,
}) => {
  return (
      <Container bannerMobUrl={bannerMobUrl} bannerDtUrl={bannerDtUrl}>
        <PromotionPeriodLabel period={period} />
        <PromotionName name={name} />
      </Container>
  );
};

export default RegisterCodeBanner;
