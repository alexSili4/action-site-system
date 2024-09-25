import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import PromotionsCategories from '@/components/PromotionsCategories';
import { IProps } from './PromotionsFilterюtypes';

const PromotionsFilter: FC<IProps> = ({
  isActiveCategory,
  isPreviousCategory,
  changePromotionCategory,
}) => {
  return (
    <Container>
      <PromotionsCategories
        isActiveCategory={isActiveCategory}
        isPreviousCategory={isPreviousCategory}
        changePromotionCategory={changePromotionCategory}
      />
    </Container>
  );
};

export default PromotionsFilter;
