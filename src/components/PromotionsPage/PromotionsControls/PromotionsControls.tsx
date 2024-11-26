import { FC } from 'react';
import { IProps } from './PromotionsControls.types';
import { PromotionsCategoriesKeys } from '@/constants';
import { Container } from './PromotionsControls.styled';
// components
import PromotionsCount from '@PromotionsPageComponents/PromotionsCount';
import PromotionsDatePicker from '@PromotionsPageComponents/PromotionsDatePicker';

const PromotionsControls: FC<IProps> = ({
  promotionCategory,
  isFake = false,
}) => {
  const isActiveCategory =
    promotionCategory === PromotionsCategoriesKeys.active;
  const isPreviousCategory =
    promotionCategory === PromotionsCategoriesKeys.previous;

  return (
    <Container isFake={isFake}>
      {isActiveCategory && <PromotionsCount />}
      {isPreviousCategory && <PromotionsDatePicker />}
    </Container>
  );
};

export default PromotionsControls;
