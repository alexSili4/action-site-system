import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import PromotionConditionsSlider from '@/components/PromotionConditionsSlider';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSlider conditions={conditions} />
    </Container>
  );
};

export default PromotionConditions;
