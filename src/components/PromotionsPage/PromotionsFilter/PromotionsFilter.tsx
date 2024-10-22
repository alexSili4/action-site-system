import { FC } from 'react';
import { Container } from './PromotionsFilter.styled';
import PromotionsCategories from '@PromotionsPageComponents/PromotionsCategories';
import { IProps } from './PromotionsFilter.types';
import PromotionsSortTypesContainer from '@PromotionsPageComponents/PromotionsSortTypesContainer';
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
      <PromotionsSortTypesContainer />
    </Container>
  );
};

export default PromotionsFilter;
