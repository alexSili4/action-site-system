import styled from '@emotion/styled';
import { IStyledProps } from './PromotionBanner.types';

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  border-radius: 8px;
  background-image: url(${({ secondBannerMob }) => secondBannerMob});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    height: 495px;
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(40)};
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(7)} ${theme.spacing(9)}`};
    background-image: url(${({ secondBannerDt }) => secondBannerDt});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(64)};
    padding: ${({ theme }) =>
      `${theme.spacing(12)} ${theme.spacing(14)} ${theme.spacing(18)}`};
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;
