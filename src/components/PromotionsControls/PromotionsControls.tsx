import { FC } from 'react';
import { IProps } from './PromotionsControls.types';
import { PromotionsCategoriesKeys } from '@/constants';
import PromotionsCount from '@/components/PromotionsCount';
import PromotionsDatePicker from '@/components/PromotionsDatePicker';
import { Container } from './PromotionsControls.styled';

const PromotionsControls: FC<IProps> = ({ promotionCategory }) => {
  const isActiveCategory =
    promotionCategory === PromotionsCategoriesKeys.active;
  const isPreviousCategory =
    promotionCategory === PromotionsCategoriesKeys.previous;

  return (
    <Container>
      {isActiveCategory && <PromotionsCount />}
      {isPreviousCategory && <PromotionsDatePicker />}
    </Container>
  );
};

export default PromotionsControls;
