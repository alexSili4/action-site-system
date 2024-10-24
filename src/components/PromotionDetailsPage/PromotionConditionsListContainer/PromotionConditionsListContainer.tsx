import { FC } from 'react';
import { Container } from './PromotionConditionsListContainer.styled';
import { IProps } from './PromotionConditionsListContainer.types';
import PromotionConditionsList from '@PromotionDetailsPageComponents/PromotionConditionsList';
import SmoothHorizontalScroll from '@AnimationBlocks/SmoothHorizontalScroll';

const PromotionConditionsListContainer: FC<IProps> = ({ conditions }) => {
  return (
    <Container>
      <SmoothHorizontalScroll>
        <PromotionConditionsList conditions={conditions} />
      </SmoothHorizontalScroll>
    </Container>
  );
};

export default PromotionConditionsListContainer;
