import styled from '@emotion/styled';
import { IStyledFooterProps, IStyledProps } from './Footer.types';
import { ClassNames } from '@/constants';

export const StyledFooter = styled.footer<IStyledFooterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme, isRootPage, isPromotionDetailsPage }) =>
    theme.spacing(isRootPage ? 17 : isPromotionDetailsPage ? 0 : 8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: ${({ theme, isRootPage, isPromotionDetailsPage }) =>
      theme.spacing(isRootPage ? 52 : isPromotionDetailsPage ? 0 : 8)};
  }
`;

export const Copyright = styled.p<IStyledProps>`
  margin-top: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme, isRootPage }) =>
    isRootPage ? '#3F3D5C' : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;

  body.${ClassNames.newYear} & {
    color: rgba(255, 255, 255, 0.66);
  }
`;

export const SunLink = styled.a<IStyledProps>`
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme, isRootPage }) =>
    isRootPage ? '#3F3D5C' : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;

  body.${ClassNames.newYear} & {
    color: rgba(255, 255, 255, 0.66);
  }
`;

export const LegalInfoWrap = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(8)};
  background-color: rgba(182, 151, 243, 0.73);
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const LegalInfo = styled.div`
  width: ${({ theme }) => theme.containerWidth.mobile}px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme }) => theme.containerWidth.tablet}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme }) => theme.containerWidth.desktop}px;
  }

  & a {
    color: inherit;
    text-decoration: underline;

    &:visited {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`;
