import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import PromotionsCategories from '@/components/PromotionsCategories';
import { IProps } from './PromotionsFilter.types';
import PromotionsSortTypesContainer from '@/components/PromotionsSortTypesContainer';

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
      <PromotionsSortTypesContainer />
    </Container>
  );
};

export default PromotionsFilter;
