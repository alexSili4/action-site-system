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
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: #7e8494;
  opacity: ${({ isActiveBtn }) => (isActiveBtn ? 1 : 0.3)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    opacity: 1;
  }
`;
