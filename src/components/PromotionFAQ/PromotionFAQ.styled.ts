import styled from '@emotion/styled';
import { IStyledAnswerWrapProps, IStyledProps } from './PromotionFAQ.types';

export const ListItem = styled.li``;

export const QuestionWrap = styled.div``;

export const QuestionBtn = styled.button<IStyledProps>`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  & > svg {
    flex-shrink: 0;
    color: #a282f7;
    transform: rotate(${({ showAnswer }) => (showAnswer ? 180 : 0)}deg);
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(${({ showAnswer }) => (showAnswer ? 0 : 180)}deg);
  }
`;

export const QuestionBtnTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;

export const AnswerWrap = styled.div<IStyledAnswerWrapProps>`
  max-height: ${({ showAnswer, scrollHeight }) =>
    showAnswer ? `${scrollHeight}px` : '0px'};
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Answer = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;
