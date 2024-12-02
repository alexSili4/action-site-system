import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import { IProps } from './PromotionsFilter.types';
// components
import PromotionsCategories from '@PromotionsPageComponents/PromotionsCategories';
import PromotionsControls from '@PromotionsPageComponents/PromotionsControls';
import { PromotionsCategoriesKeys } from '@/constants';

const PromotionsFilter: FC<IProps> = ({
  changePromotionCategory,
  categories,
  promotionCategory,
}) => {
  const isActiveCategory =
    promotionCategory === PromotionsCategoriesKeys.active;
  const isPreviousCategory =
    promotionCategory === PromotionsCategoriesKeys.previous;

  return (
    <Container>
      <PromotionsControls
        isActiveCategory={isActiveCategory}
        isPreviousCategory={isPreviousCategory}
      />
      <PromotionsCategories
        changePromotionCategory={changePromotionCategory}
        categories={categories}
        promotionCategory={promotionCategory}
      />
      <PromotionsControls
        isActiveCategory={isActiveCategory}
        isPreviousCategory={isPreviousCategory}
        isFake
      />
    </Container>
  );
};

export default PromotionsFilter;
