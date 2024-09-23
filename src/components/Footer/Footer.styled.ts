import styled from '@emotion/styled';
import { IStyledProps } from './Footer.types';
import { theme } from '@/constants';

export const StyledFooter = styled.footer<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme, isRootPage }) =>
    theme.spacing(isRootPage ? 17 : 8)};

  @media (min-width: ${theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme, isRootPage }) =>
      theme.spacing(isRootPage ? 52 : 8)};
  }
`;

// TODO color in theme
export const Copyright = styled.p<IStyledProps>`
  margin-top: 16px;
  color: ${({ theme, isRootPage }) =>
    isRootPage ? '#3F3D5C' : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
`;
