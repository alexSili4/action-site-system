import { FC } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import {
  Container,
  ContentWrap,
  ElementWrap,
  ResultsBtn,
  ResultsBtnTitle,
} from './PromotionWinners.styled';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { PromotionDetailsPageSections, theme } from '@/constants';
import { IProps } from './PromotionWinners.types';
import { IoDocumentOutline } from 'react-icons/io5';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const PromotionWinners: FC<IProps> = ({ winners }) => {
  const onResultsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    // TODO add action
  };

  return (
    <Container id={PromotionDetailsPageSections.winners}>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <ElementWrap isTable>
          <PromotionWinnersTable winners={winners} />
        </ElementWrap>
        <ElementWrap>
          <ResultsBtn onClick={onResultsBtnClick}>
            <ResultsBtnTitle>Результати розіграшу</ResultsBtnTitle>
            <IoDocumentOutline size={theme.iconSizes.resultsBtn} />
          </ResultsBtn>
        </ElementWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
