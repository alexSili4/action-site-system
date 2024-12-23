import styled from '@emotion/styled';
import {
  IContainerStyledProps,
  IListItemStyledProps,
  ICompletedStyledProps,
} from './RegisterCodeStepsBar.types';
import { theme } from '@/constants';

export const Container = styled.div<IContainerStyledProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
    gap: ${({ theme }) => theme.spacing()};
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: ${({ isHiddenOnMobile }) => !isHiddenOnMobile && 'none'};
    width: 100%;
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;

export const ProgressListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Step = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    text-align: right;
  }
`;

const progressListGap = theme.spacing(2);

export const ProgressList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${progressListGap};
`;

export const ListItem = styled.li<IListItemStyledProps>`
  width: ${({ stepsCount }) =>
    `calc((100% - ${progressListGap} * ${stepsCount - 1}) / ${stepsCount})`};
`;

export const Progress = styled.div`
  background-color: #e3e7ed;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
`;

export const Completed = styled.div<ICompletedStyledProps>`
  width: ${({ isPrevStep, isCurrentStep }) =>
    isPrevStep ? 100 : isCurrentStep ? 30 : 0}%;
  height: 100%;
  border-radius: 2px;
  background-color: #a282f7;

  li:nth-of-type(${({ currentStep }) => currentStep}) > div > & {
  }
`;
