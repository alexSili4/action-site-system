import { FC, useRef } from 'react';
import { Container } from './PromotionConditionsListContainer.styled';
import { IProps } from './PromotionConditionsListContainer.types';
import PromotionConditionsList from '@PromotionDetailsPageComponents/PromotionConditionsList';
import SmoothHorizontalScroll from '@AnimationBlocks/SmoothHorizontalScroll';

const PromotionConditionsListContainer: FC<IProps> = ({ conditions }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const mobileContentWidth = listRef?.current
    ? listRef?.current?.scrollWidth
    : 0;

  return (
    <Container>
      <SmoothHorizontalScroll mobileContentWidth={mobileContentWidth}>
        <PromotionConditionsList conditions={conditions} listRef={listRef} />
      </SmoothHorizontalScroll>
    </Container>
  );
};

export default PromotionConditionsListContainer;
