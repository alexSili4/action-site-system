import styled from '@emotion/styled';
import { IStyledProps } from './RegisterCodeBanner.types';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 300px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
    padding: ${({ theme }) => theme.spacing(7)};
  }
`;

export const Banner = styled.div<IStyledProps>`
  padding: ${({ theme: { spacing } }) =>
    `${spacing(6)} ${spacing(5)} ${spacing(55)}`};
  background-image: url(${({ bannerMobUrl }) => bannerMobUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 8px;
    padding: ${({ theme: { spacing } }) => `${spacing(5)} ${spacing(5)}`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(8)} ${spacing(7)}`};
  }
`;

export const BannerTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`;

export const PromotionName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
`;

export const LogoPartner = styled.img`
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;
