import styled from '@emotion/styled';
import { IStyledProps } from './PromotionDetailsNavBar.types';

export const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.promotionNavBar};
  left: 50%;
  bottom: 16px;
  width: calc(100% - ${({ theme }) => theme.spacing(4 * 2)});
  border-radius: 16px;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  transform: translate(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li<IStyledProps>`
  flex-grow: 1;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.geologica};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;

    &::after {
      content: '';
      width: 4px;
      height: 4px;
      background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.white : 'transparent'};
      border-radius: 50%;
      transition: background-color
        ${({ theme }) => theme.transitionDurationAndFunc.other};
    }

    &:is(:hover, :focus)::after {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
