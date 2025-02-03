import { FC } from 'react';
import { IProps } from './PromotionsControls.types';
import { Container } from './PromotionsControls.styled';
// components
import PromotionsCount from '@PromotionsPageComponents/PromotionsCount';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';

const PromotionsControls: FC<IProps> = ({
  isActiveCategory,
  isFake = false,
}) => {
  const promotionsCount = usePromotionsStore(selectPromotions).length;

  return (
    <Container isFake={isFake}>
      {isActiveCategory && (
        <PromotionsCount promotionsCount={promotionsCount} />
      )}
    </Container>
  );
};

export default PromotionsControls;
