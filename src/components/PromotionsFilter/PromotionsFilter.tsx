import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import PromotionsCategories from '@/components/PromotionsCategories';
import { IProps } from './PromotionsFilter.types';
import PromotionsSortTypesContainer from '@/components/PromotionsSortTypesContainer';

const PromotionsFilter: FC<IProps> = ({
  changePromotionCategory,
  categories,
  promotionCategory,
}) => {
  return (
    <Container>
      <PromotionsCategories
        changePromotionCategory={changePromotionCategory}
        categories={categories}
        promotionCategory={promotionCategory}
      />
      <PromotionsSortTypesContainer />
    </Container>
  );
};

export default PromotionsFilter;
