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
  background-color: rgba(182, 151, 243, 0.73);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;
