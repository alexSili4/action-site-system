import styled from '@emotion/styled';
import { IStyledProps } from './PromotionWinners.types';

export const Container = styled.div``;

export const ContentWrap = styled.div`
  border-radius: 12px;
  background-color: #f4f6f9;
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const ElementWrap = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ marginTop }) => marginTop};
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme, isTable }) =>
      isTable ? '0px' : theme.spacing(5)};
  }
`;

export const ControlsWrap = styled.div``;
