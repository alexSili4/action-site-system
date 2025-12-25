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
    opacity: 0;
  }
`;

export const StyledNewyearHeaderBackground = styled.div<IStyledHeaderBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.header};

  body.${ClassNames.newYear} & {
    opacity: ${({ isColoredBackground }) => (isColoredBackground ? 1 : 0)};
  }
`;

export const NewYearToggleBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing(4)};
  transform: translateY(-50%);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  body.${ClassNames.newYear} & {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    right: ${({ theme }) => theme.spacing(2)};
    width: 32px;
    height: 32px;
    border-width: 2px;
  }
`;
