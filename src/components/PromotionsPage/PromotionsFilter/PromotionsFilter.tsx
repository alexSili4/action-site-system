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

  return (
    <Container>
      <PromotionsControls isActiveCategory={isActiveCategory} />
      <PromotionsCategories
        changePromotionCategory={changePromotionCategory}
        categories={categories}
        promotionCategory={promotionCategory}
      />
      <PromotionsControls isActiveCategory={isActiveCategory} isFake />
    </Container>
  );
};

export default PromotionsFilter;
