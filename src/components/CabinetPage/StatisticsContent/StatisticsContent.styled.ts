import styled from '@emotion/styled';
import { IStyledContainerProps } from './StatisticsContent.types';

export const Container = styled.div<IStyledContainerProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
    padding: ${({ theme: { spacing }, isUserDataList }) =>
      isUserDataList ? spacing(5) : `${spacing(18)} 0px ${spacing(29)}`};
  }
`;
