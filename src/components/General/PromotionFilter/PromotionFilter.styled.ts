import styled from '@emotion/styled';
import { IStyledShowPromotionsBtnProps } from './PromotionFilter.types';

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.selectPromotionDropdown};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: auto;
  }
`;

export const ShowPromotionsBtn = styled.button<IStyledShowPromotionsBtnProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 315px;
  height: 48px;
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
      ${({ showPromotionsList }) => (showPromotionsList ? 180 : 0)}deg
    );
    transition: transform
      ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(
      ${({ showPromotionsList }) => (showPromotionsList ? 0 : 180)}deg
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 676px;
    height: 76px;
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
    border-radius: 24px;
    outline: 16px solid rgba(255, 255, 255, 0.25);
  }
`;

export const ShowPromotionsBtnTitle = styled.span`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const PromotionsListContainer = styled.div`
  position: absolute;
  bottom: -16px;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 330px;
  max-height: 272px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  border-radius: 16px;
  box-shadow: 0px -8px 25px 0px rgba(58, 52, 86, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%) translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: -28px;
    width: 710px;
    max-height: 291px;
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    border-radius: 24px;
  }
`;
