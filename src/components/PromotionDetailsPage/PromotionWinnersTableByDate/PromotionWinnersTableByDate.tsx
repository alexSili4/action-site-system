import { FC, useEffect, useRef, useState } from 'react';
import { BtnClickEvent, DivRef } from '@/types/types';
import { formatDate, makeBlur } from '@/utils';
import { IProps } from './PromotionWinnersTableByDate.types';
import {
  Container,
  OpenContentBtn,
  OpenContentBtnTitle,
  PromotionWinnersTableWrap,
  PromotionWinnersWrap,
  ResultsLink,
  ResultsBtnTitle,
  ResultsBtnWrap,
} from './PromotionWinnersTableByDate.styled';
import { DateFormats, theme } from '@/constants';
import { IoDocumentOutline } from 'react-icons/io5';
// components
import OpenContentBtnLabel from '@PromotionDetailsPageComponents/OpenContentBtnLabel';
import PromotionWinnersTable from '@PromotionDetailsPageComponents/PromotionWinnersTable';
import PromotionElementWrap from '@PromotionDetailsPageComponents/PromotionElementWrap';

const PromotionWinnersTableByDate: FC<IProps> = ({
  winners: { date, winners, pdf_file: pdfFile },
  isOpenSection,
}) => {
  const [showWinners, setShowWinners] = useState<boolean>(() => isOpenSection);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const winnersRef = useRef<DivRef>(null);
  const isEmptyWinnersList = !winners.length;
  const btnTitle = formatDate({ date, dateFormat: DateFormats.winnersDate });
  const targetPdfFileUrl = winners.length ? pdfFile : '';

  useEffect(() => {
    if (winnersRef.current) {
      setScrollHeight(winnersRef.current?.scrollHeight);
    }
  }, []);

  const toggleSetShowWinners = () => {
    setShowWinners((prevState) => !prevState);
  };

  const onDateBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleSetShowWinners();
  };

  return (
    <Container>
      <OpenContentBtn
        type='button'
        onClick={onDateBtnClick}
        disabled={isEmptyWinnersList}
      >
        <OpenContentBtnTitle disabled={isEmptyWinnersList}>
          {btnTitle}
        </OpenContentBtnTitle>
        <OpenContentBtnLabel
          showContent={showWinners}
          disabled={isEmptyWinnersList}
        />
      </OpenContentBtn>
      <PromotionWinnersWrap
        scrollHeight={scrollHeight}
        showWinners={showWinners}
        ref={winnersRef}
      >
        <PromotionWinnersTableWrap>
          <PromotionElementWrap
            paddingTopMobile={41}
            paddingBottomMobile={0}
            paddingTopTablet={41}
            paddingBottomTablet={0}
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
            paddingTopTablet={46}
            paddingBottomTablet={24}
            paddingTopDesk={40}
            paddingBottomDesk={40}
          >
            <ResultsLink
              href={targetPdfFileUrl}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <ResultsBtnTitle>Результати розіграшу</ResultsBtnTitle>
              <IoDocumentOutline size={theme.iconSizes.resultsBtn} />
            </ResultsLink>
          </PromotionElementWrap>
        </ResultsBtnWrap>
      </PromotionWinnersWrap>
    </Container>
  );
};

export default PromotionWinnersTableByDate;
