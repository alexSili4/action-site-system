import { FC, useRef, useState } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionWinnersTableByDate.types';
import {
  Container,
  OpenContentBtn,
  OpenContentBtnTitle,
  PromotionWinnersWrap,
  ResultsBtn,
  ResultsBtnTitle,
} from './PromotionWinnersTableByDate.styled';
import OpenContentBtnLabel from '@/components/OpenContentBtnLabel';
import { theme } from '@/constants';
import { IoDocumentOutline } from 'react-icons/io5';
import PromotionElementWrap from '@/components/PromotionElementWrap';

const PromotionWinnersTableByDate: FC<IProps> = ({ date, winners }) => {
  const [showWinners, setShowWinners] = useState<boolean>(false);
  const winnersRef = useRef<HTMLDivElement | null>(null);
  const scrollHeight = winnersRef.current?.scrollHeight ?? 0;

  const toggleSetShowWinners = () => {
    setShowWinners((prevState) => !prevState);
  };

  const onDateBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleSetShowWinners();
  };

  const onResultsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    // TODO add action
  };

  return (
    <Container>
      <OpenContentBtn type='button' onClick={onDateBtnClick}>
        <OpenContentBtnTitle>{date}</OpenContentBtnTitle>
        <OpenContentBtnLabel />
      </OpenContentBtn>
      <PromotionWinnersWrap
        scrollHeight={scrollHeight}
        showWinners={showWinners}
        ref={winnersRef}
      >
        <PromotionElementWrap paddingTop={41} isTable>
          <PromotionWinnersTable winners={winners} />
        </PromotionElementWrap>
        <PromotionElementWrap paddingTop={46} paddingBottom={24}>
          <ResultsBtn onClick={onResultsBtnClick}>
            <ResultsBtnTitle>Результати розіграшу</ResultsBtnTitle>
            <IoDocumentOutline size={theme.iconSizes.resultsBtn} />
          </ResultsBtn>
        </PromotionElementWrap>
      </PromotionWinnersWrap>
    </Container>
  );
};

export default PromotionWinnersTableByDate;
