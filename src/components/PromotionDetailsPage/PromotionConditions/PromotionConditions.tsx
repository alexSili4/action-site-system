import { FC } from 'react';
import PromotionConditionsListContainer from '@PromotionDetailsPageComponents/PromotionConditionsListContainer';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <PromotionConditionsListContainer conditions={conditions} />
    </Container>
  );
};

export default PromotionConditions;
