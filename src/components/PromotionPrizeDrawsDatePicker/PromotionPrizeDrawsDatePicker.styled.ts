import styled from '@emotion/styled';
import { IStyledProps } from './PromotionPrizeDrawsDatePicker.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const DatePickerWrap = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.promotionPrizeDrawsDatePicker};
`;

export const DatePickerBtn = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  & > svg {
    color: ${({ showDatesList }) => (showDatesList ? '#383e45' : '#7e8494')};
    transform: rotate(${({ showDatesList }) => (showDatesList ? 180 : 0)}deg);
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(${({ showDatesList }) => (showDatesList ? 0 : 180)}deg);
  }
`;

export const DatePickerBtnTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;
