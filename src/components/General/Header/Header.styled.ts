import styled from '@emotion/styled';
import {
  IStyledHeaderWrapProps,
  IStyledHeaderBackgroundProps,
} from './Header.types';
import { ClassNames } from '@/constants';
import bgImg from '@/images/new-year/bg-img.webp';

export const StyledHeaderWrap = styled.div<IStyledHeaderWrapProps>`
  position: ${({ isPromotionDetailsPage }) =>
    isPromotionDetailsPage && 'fixed'};
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  transform: translateY(
    ${({ shouldHideHeader }) => shouldHideHeader && '-100%'}
  );
  transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc.header},
    transform ${({ theme }) => theme.transitionDurationAndFunc.header};
`;

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const StyledHeaderBackground = styled.div<IStyledHeaderBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(253, 206, 189),
    rgb(242, 191, 197) 31.4%,
    rgb(199, 141, 236) 61.4%,
    rgb(184, 119, 240) 100%
  );
  opacity: ${({ isColoredBackground }) => (isColoredBackground ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.header};

  body.${ClassNames.newYear} & {
    background-image: url(${bgImg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
