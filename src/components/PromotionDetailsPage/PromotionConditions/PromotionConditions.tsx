import { FC } from 'react';
import PromotionConditionsSliderContainer from '@PromotionDetailsPageComponents/PromotionConditionsSliderContainer';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsSliderContainer conditions={conditions} />
    </Container>
  );
};

export default PromotionConditions;
