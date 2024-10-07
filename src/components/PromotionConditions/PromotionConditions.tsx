import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import PromotionConditionsSlider from '@/components/PromotionConditionsSlider';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';

const PromotionConditions: FC = () => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSlider />
    </Container>
  );
};

export default PromotionConditions;
