import { FC, useRef, useState } from 'react';
import { BtnClickEvent, DivRef } from '@/types/types';
import { makeBlur } from '@/utils';
import { IProps } from './PromotionWinnersTableByDate.types';
import {
  Container,
  OpenContentBtn,
  OpenContentBtnTitle,
  PromotionWinnersTableWrap,
  PromotionWinnersWrap,
  ResultsBtn,
  ResultsBtnTitle,
  ResultsBtnWrap,
} from './PromotionWinnersTableByDate.styled';
import OpenContentBtnLabel from '@PromotionDetailsPageComponents/OpenContentBtnLabel';
import { theme } from '@/constants';
import { IoDocumentOutline } from 'react-icons/io5';
import PromotionWinnersTable from '@PromotionDetailsPageComponents/PromotionWinnersTable';
import PromotionElementWrap from '@PromotionDetailsPageComponents/PromotionElementWrap';

const PromotionWinnersTableByDate: FC<IProps> = ({
  winners: { date_from: dateFrom, date_to: dateTo, winners },
}) => {
  const [showWinners, setShowWinners] = useState<boolean>(false);
  const winnersRef = useRef<DivRef>(null);
  const scrollHeight = winnersRef.current?.scrollHeight ?? 0;
  const isDateTo = dateTo && dateTo !== 'disabled';
  const btnTitle = isDateTo ? `${dateFrom} - ${dateTo}` : dateFrom;

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
        <OpenContentBtnTitle>{btnTitle}</OpenContentBtnTitle>
        <OpenContentBtnLabel showContent={showWinners} />
      </OpenContentBtn>
      <PromotionWinnersWrap
        scrollHeight={scrollHeight}
        showWinners={showWinners}
        ref={winnersRef}
      >
        <PromotionWinnersTableWrap>
          <PromotionElementWrap
            paddingTopMobile={41}
            paddingTopDesk={40}
            paddingBottomDesk={40}
            isTable
          >
            <PromotionWinnersTable winners={winners} />
          </PromotionElementWrap>
        </PromotionWinnersTableWrap>
        <ResultsBtnWrap>
          <PromotionElementWrap
            paddingTopMobile={46}
            paddingBottomMobile={24}
            paddingTopDesk={40}
            paddingBottomDesk={40}
          >
            <ResultsBtn onClick={onResultsBtnClick}>
              <ResultsBtnTitle>Результати розіграшу</ResultsBtnTitle>
              <IoDocumentOutline size={theme.iconSizes.resultsBtn} />
            </ResultsBtn>
          </PromotionElementWrap>
        </ResultsBtnWrap>
      </PromotionWinnersWrap>
    </Container>
  );
};

export default PromotionWinnersTableByDate;
