import { theme } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './LocationFilter.types';

export const Container = styled.div<IStyledProps>`
  flex-grow: 1;
  background-color: greenyellow;
  order: 4;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    display: ${({ isHidden, isRootPage }) => isRootPage && isHidden && 'none'};
    order: ${({ isRootPage }) => (isRootPage ? 1 : 2)};
  }
`;
