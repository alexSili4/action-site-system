import styled from '@emotion/styled';
import { IStyledProps } from './RegisterCodeStepsBar.types';

export const Container = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isHiddenOnMobile }) => !isHiddenOnMobile && 'none'};
  }
`;
