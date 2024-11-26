import styled from '@emotion/styled';
import { IStyledProps } from './PromotionConditionsSliderPagination.types';

export const List = styled.ul`
  width: 100%;
  height: 11px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.conditionsSliderPagination};
    bottom: 16px;
    left: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(9)};
  }
`;

export const ListItem = styled.li``;

export const Button = styled.button<IStyledProps>`
  display: block;
  width: 11px;
  height: 11px;
  border: 1px solid;
  border-color: #9e7ad3;
  border-radius: 50%;
  padding: 0;
  background-color: ${({ isActiveBtn }) =>
    isActiveBtn ? '#9e7ad3' : 'transparent'};
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.other};
  pointer-events: all;

  &:is(:hover, :focus) {
    background-color: #9e7ad3;
  }
`;
