import styled from '@emotion/styled';
import { IStyledContainerProps } from './PromotionsControls.types';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  width: 174px;
  opacity: ${({ isFake }) => isFake && 0};
  pointer-events: ${({ isFake }) => isFake && 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;
