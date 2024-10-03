import { FC } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import {
  Container,
  PromotionWinnersTableWrap,
} from './PromotionWinners.styled';
import PromotionSectionTitle from '../PromotionSectionTitle';

const PromotionWinners: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Переможці' />
      <PromotionWinnersTableWrap>
        <PromotionWinnersTable />
      </PromotionWinnersTableWrap>
    </Container>
  );
};

export default PromotionWinners;
