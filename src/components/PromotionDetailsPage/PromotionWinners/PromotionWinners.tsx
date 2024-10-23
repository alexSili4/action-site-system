import { FC } from 'react';
import { Container, ContentWrap } from './PromotionWinners.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionWinners.types';
import PromotionWinnersTableByDateList from '@PromotionDetailsPageComponents/PromotionWinnersTableByDateList';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';

const PromotionWinners: FC<IProps> = ({ winners }) => {
  return (
    <Container id={PromotionDetailsPageSections.winners}>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <PromotionWinnersTableByDateList winners={winners} />
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
