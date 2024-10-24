import { FC } from 'react';
import PromotionConditionsList from '@PromotionDetailsPageComponents/PromotionConditionsList';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import { Container } from './PromotionConditions.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionConditions.types';
import SmoothHorizontalScroll from '@AnimationBlocks/SmoothHorizontalScroll';

const PromotionConditions: FC<IProps> = ({ conditions }) => {
  return (
    <Container id={PromotionDetailsPageSections.conditions}>
      <PromotionSectionTitle title='Умови участі' />
      <SmoothHorizontalScroll>
        <PromotionConditionsList conditions={conditions} />
      </SmoothHorizontalScroll>
    </Container>
  );
};

export default PromotionConditions;
