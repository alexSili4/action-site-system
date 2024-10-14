import { FC } from 'react';
import { Container, ContentWrap } from './PromotionWinners.styled';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { PromotionDetailsPageSections } from '@/constants';
import { IProps } from './PromotionWinners.types';
import { Strings } from '@/types/types';
import PromotionWinnersTableByDateList from '@/components/PromotionWinnersTableByDateList';

const PromotionWinners: FC<IProps> = ({ winners }) => {
  // TODO delete dates
  const dates: Strings = [
    '09.08.24 - 16.08.24',
    '09.08.24 - 16.08.24',
    '25.08.24 - 02.09.24',
    '03.09.24 - 10.09.24',
    '11.09.24 - 18.09.24',
  ];

  return (
    <Container id={PromotionDetailsPageSections.winners}>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <PromotionWinnersTableByDateList dates={dates} winners={winners} />
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
