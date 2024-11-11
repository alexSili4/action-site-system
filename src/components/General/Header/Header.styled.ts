import styled from '@emotion/styled';
import { IStyledHeaderProps } from './Header.types';

export const StyledHeader = styled.header<IStyledHeaderProps>`
  position: ${({ isPromotionDetailsPage }) =>
    isPromotionDetailsPage ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ isPromotionDetailsPage }) =>
    isPromotionDetailsPage && 'rgba(182, 151, 243, 0.73)'};
  transform: translateY(
    ${({ isScrollingDown, isPromotionDetailsPage }) =>
      isPromotionDetailsPage && isScrollingDown ? '-100%' : '0%'}
  );
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.header};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;
