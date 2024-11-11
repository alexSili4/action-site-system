import styled from '@emotion/styled';
import { IStyledProps } from './PromotionPrizeImgSliderPagination.types';

export const List = styled.ul`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.promotionSliderPagination};
  bottom: 16px;
  left: 0;
  width: 100%;
  height: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
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

  &:is(:hover, :focus) {
    background-color: #9e7ad3;
  }
`;
