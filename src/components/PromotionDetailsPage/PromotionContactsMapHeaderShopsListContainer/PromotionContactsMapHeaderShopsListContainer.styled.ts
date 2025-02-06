import styled from '@emotion/styled';
import { IStyledProps } from './PromotionContactsMapHeaderShopsListContainer.types';

export const Container = styled.div<IStyledProps>`
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  max-height: 320px;
  background-color: #f4f6f9;
  box-shadow: -4px 20px 20px 0px rgba(32, 31, 47, 0.1);
  overflow-y: ${({ isNationalPromotion }) =>
    isNationalPromotion ? 'none' : 'scroll'};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f6f6f9;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 10px;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-height: none;
    height: calc(513px - 73.2px);
  }
`;
