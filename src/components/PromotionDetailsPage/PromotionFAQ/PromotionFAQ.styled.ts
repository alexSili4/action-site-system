import styled from '@emotion/styled';
import { IStyledProps } from './PromotionFAQ.types';

export const ListItem = styled.li``;

export const QuestionWrap = styled.div``;

export const QuestionBtnWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(23)};
    padding-right: ${({ theme }) => theme.spacing(23)};
  }
`;

export const QuestionBtn = styled.button`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const QuestionBtnTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 22px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;

export const AnswerWrap = styled.div<IStyledProps>`
  max-height: ${({ showAnswer, scrollHeight }) =>
    showAnswer ? `${scrollHeight}px` : '0px'};
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc.other};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    width: 259px;
  }
`;

export const Answer = styled.div`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;
