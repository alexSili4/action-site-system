import styled from '@emotion/styled';
import { IStyledProps } from './PromotionDetailsSectionContainer.types';

export const Container = styled.div<IStyledProps>`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme, isConditionsSection }) =>
    isConditionsSection ? '0px' : theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme, isConditionsSection }) =>
      isConditionsSection ? '0px' : theme.spacing(8)};
  }
`;
