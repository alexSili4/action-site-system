import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import { IProps } from './PromotionsFilter.types';
// components
import PromotionsCategories from '@PromotionsPageComponents/PromotionsCategories';
import PromotionsControls from '@PromotionsPageComponents/PromotionsControls';

const PromotionsFilter: FC<IProps> = ({
  changePromotionCategory,
  categories,
  promotionCategory,
}) => {
  return (
    <Container>
      <PromotionsControls promotionCategory={promotionCategory} />
      <PromotionsCategories
        changePromotionCategory={changePromotionCategory}
        categories={categories}
        promotionCategory={promotionCategory}
      />
      <PromotionsControls promotionCategory={promotionCategory} isFake />
    </Container>
  );
};

export default PromotionsFilter;
