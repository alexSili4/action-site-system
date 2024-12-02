import { FC } from 'react';
import { IProps } from './PromotionsControls.types';
import { Container } from './PromotionsControls.styled';
// components
import PromotionsCount from '@PromotionsPageComponents/PromotionsCount';
import PromotionsDatePicker from '@PromotionsPageComponents/PromotionsDatePicker';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';

const PromotionsControls: FC<IProps> = ({
  isActiveCategory,
  isPreviousCategory,
  isFake = false,
}) => {
  const promotionsCount = usePromotionsStore(selectPromotions).length;

  return (
    <Container isFake={isFake}>
      {isActiveCategory && (
        <PromotionsCount promotionsCount={promotionsCount} />
      )}
      {isPreviousCategory && <PromotionsDatePicker />}
    </Container>
  );
};

export default PromotionsControls;
