import { FC } from 'react';
import { IProps } from './PromotionPeriodLabel.types';
import { Container, Period } from './PromotionPeriodLabel.styled';

const PromotionPeriodLabel: FC<IProps> = ({ period }) => {
  return (
    <Container>
      <Period>{period}</Period>
    </Container>
  );
};

export default PromotionPeriodLabel;
