import styled from '@emotion/styled';
import { IStyledNavProps, IStyledLinkProps } from './NavBar.types';
import { Link } from 'react-router-dom';

export const Nav = styled.nav<IStyledNavProps>`
  display: flex;
  align-items: ${({ isRootPage }) => (isRootPage ? 'flex-start' : 'center')};
  justify-content: space-between;
  column-gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 7 : 4)};
  row-gap: ${({ theme }) => theme.spacing(6)};
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(13)};
  }
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 3 : 1)};
  width: ${({ isRootPage, isDesktop }) => !isDesktop && isRootPage && '100%'};
  order: ${({ isRootPage }) => (isRootPage ? 2 : 1)};
  pointer-events: ${({ isRootPage }) => (isRootPage ? 'none' : 'all')};

  & > svg {
    width: ${({ isRootPage }) => (isRootPage ? 90 : 66)}px;
    height: ${({ isRootPage }) => (isRootPage ? 32 : 24)}px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 90px;
      height: 32px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 4 : 2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: ${({ isRootPage }) => (isRootPage ? 'column' : 'row')};
    gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 4 : 2)};
  }
`;

export const LogoLinkTitle = styled.span`
  color: #fd4c3c;
  font-family: ${({ theme }) => theme.fontFamily.myriadPro};
  font-size: 15px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
`;
