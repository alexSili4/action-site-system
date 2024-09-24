import { theme } from '@/constants';
import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledShowLocationsBtnProps,
  IStyledLocationListProps,
} from './LocationFilter.types';

export const Container = styled.div<IStyledContainerProps>`
  flex-grow: 1;
  position: relative;
  display: ${({ isHidden, isRootPage }) => isRootPage && isHidden && 'none'};
  width: 100%;
  order: 4;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: auto;
    order: ${({ isRootPage }) => (isRootPage ? 1 : 2)};
  }
`;

export const ShowLocationsBtn = styled.button<IStyledShowLocationsBtnProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isRootPage }) => (isRootPage ? '315px' : '100%')};
  height: ${({ isRootPage }) => (isRootPage ? 48 : 50)}px;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 16px;
  outline: 8px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 25px 0px rgba(202, 169, 254, 0.4);
  background-color: ${({ theme }) => theme.colors.white};

  & > svg {
    color: #7563d0;
    transform: rotate(
      ${({ showLocationList }) => (showLocationList ? 180 : 0)}deg
    );
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(
      ${({ showLocationList }) => (showLocationList ? 0 : 180)}deg
    );
  }

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: ${({ isRootPage }) => (isRootPage ? '676px' : '100%')};
    height: ${({ isRootPage }) => (isRootPage ? 76 : 50)}px;
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
    border-radius: ${({ isRootPage }) => (isRootPage ? 24 : 16)}px;
    outline: ${({ isRootPage }) => (isRootPage ? 16 : 8)}px solid
      rgba(255, 255, 255, 0.25);
  }
`;

export const ShowLocationsBtnTitle = styled.span`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const LocationList = styled.div<IStyledLocationListProps>`
  position: absolute;
  bottom: -16px;
  left: 50%;
  width: ${({ isRootPage }) => (isRootPage ? '330px' : '100%')};
  max-height: 272px;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 16px;
  box-shadow: 0px -8px 25px 0px rgba(58, 52, 86, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%) translateX(-50%);

  @media (min-width: ${theme.breakpoints.desktop}px) {
    bottom: ${({ isRootPage }) => (isRootPage ? -28 : -16)}px;
    width: ${({ isRootPage }) => (isRootPage ? '710px' : '100%')};
    max-height: 291px;
    padding: ${({ theme }) => theme.spacing(8)};
    border-radius: 24px;
  }
`;
