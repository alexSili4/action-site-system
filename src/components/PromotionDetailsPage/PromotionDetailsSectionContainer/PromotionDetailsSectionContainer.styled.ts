import styled from '@emotion/styled';
import { IStyledProps } from './PromotionDetailsSectionContainer.types';

export const Container = styled.div<IStyledProps>`
  display: ${({ isPrizesSection }) => (isPrizesSection ? 'flex' : 'block')};
  flex-direction: ${({ isPrizesSection }) => isPrizesSection && 'column'};
  gap: ${({ isPrizesSection, theme }) => isPrizesSection && theme.spacing(8)};
  margin-top: ${({ marginTopMobile }) => marginTopMobile}px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme, isConditionsSection }) =>
    isConditionsSection ? '0px' : theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ isPrizesSection, theme }) =>
      isPrizesSection && theme.spacing(12)};
    margin-top: ${({ marginTopDesk }) => marginTopDesk}px;
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme, isConditionsSection }) =>
      isConditionsSection ? '0px' : theme.spacing(8)};
  }
`;
