import styled from '@emotion/styled';
import { IStyledProps } from './PromotionWinnersTableByDate.types';

export const Container = styled.div``;

export const PromotionWinnersWrap = styled.div<IStyledProps>`
  max-height: ${({ showWinners, scrollHeight }) =>
    showWinners ? scrollHeight : 0}px;
  border-radius: 12px;
  margin-top: ${({ theme, showWinners }) => showWinners && theme.spacing(5)};
  background-color: #f4f6f9;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc},
    margin-top ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: row-reverse;
    gap: ${({ theme }) => theme.spacing(24)};
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const PromotionWinnersTableWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-grow: 1;
  }
`;

export const ResultsBtnWrap = styled.div``;

export const OpenContentBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 848px;
    margin-left: auto;
  }
`;

export const OpenContentBtnTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;

export const ResultsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing()};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(5)};
  border: none;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
  background-color: #9066cc;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 310px;
  }
`;

export const ResultsBtnTitle = styled.span``;
