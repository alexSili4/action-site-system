import styled from '@emotion/styled';
import { IStyledProps } from './StatisticsSortTypesDropdown.types';

export const Container = styled.div`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const Content = styled.div``;

export const ShowSortTypesBtn = styled.button<IStyledProps>``;

export const BtnTitle = styled.span<IStyledProps>``;
