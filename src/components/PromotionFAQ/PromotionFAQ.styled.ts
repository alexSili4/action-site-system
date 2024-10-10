import styled from '@emotion/styled';
import { IStyledProps } from './PromotionFAQ.types';

export const ListItem = styled.li``;

export const QuestionWrap = styled.div``;

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

  &:is(:hover, :focus) > span:last-of-type {
    box-shadow: 1px 1px 0px 0px #7a4ebd,
      inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
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

export const IconWrap = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 2px 2px 0px 0px #7a4ebd,
    inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1);
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const AnswerWrap = styled.div<IStyledProps>`
  max-height: ${({ showAnswer, scrollHeight }) =>
    showAnswer ? `${scrollHeight}px` : '0px'};
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Answer = styled.div`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;
