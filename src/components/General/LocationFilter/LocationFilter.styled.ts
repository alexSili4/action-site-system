import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledShowLocationsBtnProps,
  IStyledLocationListProps,
  IStyledShowLocationsBtnTitleProps,
} from './LocationFilter.types';

export const Container = styled.div<IStyledContainerProps>`
  flex-grow: 1;
  position: relative;
  z-index: ${({ theme, showOtherModalWin }) =>
    !showOtherModalWin && theme.zIndex.selectCityDropdown};
  width: 100%;
  order: 4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: auto;
    order: ${({ isRootPage }) => (isRootPage ? 1 : 2)};
  }
`;

export const ShowLocationsBtn = styled.button<IStyledShowLocationsBtnProps>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.selectCityDropdown};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isBigSize }) => (isBigSize ? '315px' : '100%')};
  height: ${({ isBigSize }) => (isBigSize ? 48 : 50)}px;
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
    transition: transform
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(
      ${({ showLocationList }) => (showLocationList ? 0 : 180)}deg
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ isBigSize }) => (isBigSize ? '676px' : '100%')};
    height: ${({ isBigSize }) => (isBigSize ? 76 : 50)}px;
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
    border-radius: ${({ isBigSize }) => (isBigSize ? 24 : 16)}px;
    outline: ${({ isBigSize }) => (isBigSize ? 16 : 8)}px solid
      rgba(255, 255, 255, 0.25);
  }
`;

export const ShowLocationsBtnTitle = styled.span<IStyledShowLocationsBtnTitleProps>`
  color: ${({ isSelectedCity }) => (isSelectedCity ? '#3F3D5C' : '#7e8494')};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const LocationListContainer = styled.div<IStyledLocationListProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.selectCityDropdown};
  bottom: -16px;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  width: ${({ isBigSize }) => (isBigSize ? '330px' : '100%')};
  max-height: 272px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  border-radius: 16px;
  box-shadow: 0px -8px 25px 0px rgba(58, 52, 86, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%) translateX(-50%);
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    bottom: ${({ isBigSize }) => (isBigSize ? -28 : -16)}px;
    width: ${({ isBigSize }) => (isBigSize ? '710px' : '100%')};
    max-height: 291px;
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    padding-top: ${({ theme }) => theme.spacing(8)};
    border-radius: 24px;
  }
`;
