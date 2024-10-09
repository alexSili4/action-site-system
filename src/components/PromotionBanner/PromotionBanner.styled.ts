import styled from '@emotion/styled';
import { IStyledProps } from './PromotionBanner.types';

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 495px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  border-radius: 8px;
  background-image: url(${({ secondBannerMob }) => secondBannerMob});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 600px;
    padding: ${({ theme }) =>
      `${theme.spacing(12)} ${theme.spacing(14)} ${theme.spacing(18)}`};
    background-image: url(${({ secondBannerDt }) => secondBannerDt});
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;
