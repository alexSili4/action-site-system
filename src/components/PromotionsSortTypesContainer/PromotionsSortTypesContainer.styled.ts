import styled from '@emotion/styled';
import { IStyledProps } from './PromotionsSortTypesContainer.types';

export const Container = styled.div`
  position: relative;
  width: 173px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const ShowSortTypesBtn = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};

  & > svg {
    color: ${({ showSortTypesList }) =>
      showSortTypesList ? '#383e45' : '#7e8494'};
    transform: rotate(
      ${({ showSortTypesList }) => (showSortTypesList ? 180 : 0)}deg
    );
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc};
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
  text-align: left;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
