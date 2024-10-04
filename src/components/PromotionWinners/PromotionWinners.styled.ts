import styled from '@emotion/styled';
import { IStyledProps } from './PromotionWinners.types';

export const Container = styled.div``;

export const ContentWrap = styled.div`
  border-radius: 12px;
  background-color: #f4f6f9;
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(29)};
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

export const ElementWrap = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ marginTop }) => marginTop};
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme, isTable }) =>
      isTable ? '0px' : theme.spacing(5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
    flex-grow: ${({ isTable }) => isTable && 1};
  }
`;

export const ControlsWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(12)};
    width: 287px;
  }
`;
