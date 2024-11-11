import styled from '@emotion/styled';
import { IStyledProps } from './StatisticsSortTypesDropdown.types';

export const Container = styled.div`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.selectStatisticsSortTypeDropdown};
  width: 173px;
  height: 100%;
`;

export const ShowSortTypesBtn = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  background-color: transparent;

  & > svg {
    color: ${({ showSortTypesList }) =>
      showSortTypesList ? '#383e45' : '#7e8494'};
    transform: rotate(
      ${({ showSortTypesList }) => (showSortTypesList ? 180 : 0)}deg
    );
    transition: transform
        ${({ theme }) => theme.transitionDurationAndFunc.other},
      color ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(
      ${({ showSortTypesList }) => (showSortTypesList ? 0 : 180)}deg
    );
  }
`;

export const BtnTitle = styled.span<IStyledProps>`
  color: ${({ showSortTypesList }) =>
    showSortTypesList ? '#383e45' : '#7e8494'};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;
