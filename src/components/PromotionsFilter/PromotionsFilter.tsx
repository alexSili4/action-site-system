import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import PromotionsCategories from '@/components/PromotionsCategories';
import { IProps } from './PromotionsFilter.types';
import PromotionsSortTypesContainer from '@/components/PromotionsSortTypesContainer';
import PromotionsControls from '@/components/PromotionsControls';

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
      <PromotionsSortTypesContainer />
    </Container>
  );
};

export default PromotionsFilter;
