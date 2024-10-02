import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import PromotionConditionsSlider from '@/components/PromotionConditionsSlider';
import { Container } from './PromotionConditions.styled';

const PromotionConditions: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSlider />
    </Container>
  );
};

export default PromotionConditions;
