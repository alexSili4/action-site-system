import styled from '@emotion/styled';
import { IStyledProps } from './PromotionWinners.types';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const PromotionWinnersTableWrap = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9371f1;
      border-radius: 100px;
      cursor: pointer;
    }
  }
`;

export const ContentWrap = styled.div`
  border-radius: 12px;
  background-color: #f4f6f9;
  margin-top: ${({ theme }) => theme.spacing(8)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const ElementWrap = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme, isTable }) =>
      isTable ? '0px' : theme.spacing(5)};
  }
`;

export const RegisterCodeLink = styled(Link)``;
