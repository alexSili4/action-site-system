import { FC, useRef } from 'react';
import { Container } from './PromotionConditionsListContainer.styled';
import { IProps } from './PromotionConditionsListContainer.types';
import PromotionConditionsList from '@PromotionDetailsPageComponents/PromotionConditionsList';
import SmoothHorizontalScroll from '@AnimationBlocks/SmoothHorizontalScroll';

const PromotionConditionsListContainer: FC<IProps> = ({ conditions }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const listContentWidth = listRef?.current ? listRef?.current?.scrollWidth : 0;
  const width = listRef?.current ? listRef?.current?.clientWidth : 0;
  const contentWidth = listContentWidth - width;

  return (
    <Container>
      <SmoothHorizontalScroll contentWidth={contentWidth}>
        <PromotionConditionsList conditions={conditions} listRef={listRef} />
      </SmoothHorizontalScroll>
    </Container>
  );
};

export default PromotionConditionsListContainer;
