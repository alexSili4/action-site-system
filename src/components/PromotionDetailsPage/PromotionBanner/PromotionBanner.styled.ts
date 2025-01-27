import styled from '@emotion/styled';
import { IStyledProps } from './PromotionBanner.types';

export const Container = styled.div<IStyledProps>`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  border-radius: 8px;
  background-image: url(${({ bannerMob }) => bannerMob});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    height: 495px;
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 385px;
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(7)} ${theme.spacing(9)}`};
    background-image: url(${({ bannerDt }) => bannerDt});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 600px;
    padding: ${({ theme }) =>
      `${theme.spacing(12)} ${theme.spacing(14)} ${theme.spacing(18)}`};
  }
`;
