import { FC } from 'react';
import {
  PromotionConditionsSlider,
  PromotionSectionTitle,
} from '@/components/PromotionDetailsPage';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  const showSlider = Boolean(conditions.length);

  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      {showSlider && <PromotionConditionsSlider conditions={conditions} />}
    </Container>
  );
};

export default PromotionConditions;
