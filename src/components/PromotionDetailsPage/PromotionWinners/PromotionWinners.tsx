import { FC } from 'react';
import { Container, ContentWrap } from './PromotionWinners.styled';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionWinners.types';
import PromotionWinnersTableByDateList from '@PromotionDetailsPageComponents/PromotionWinnersTableByDateList';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';

const PromotionWinners: FC<IProps> = ({ winners }) => {
  const isWinners = winners.some(({ winners }) => winners.length);
  const sectionTitle = isWinners ? 'Переможці' : 'Дати розіграшів';

  return (
    <Container id={PromotionDetailsPageSections.winners}>
      <PromotionSectionTitle title={sectionTitle} />
      <ContentWrap>
        <PromotionWinnersTableByDateList winners={winners} />
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
