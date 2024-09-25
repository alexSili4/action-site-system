import { theme } from '@/constants';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { IStyledProps } from './AppInfo.types';

const textGlitch = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translateX(-50%) translateY(-50%)
  }

  40%, 43% {
    transform: translateX(calc(-50% - 8px)) translateY(calc(-50% + 1px))
  }

  70% {
    transform: translateX(calc(-50% - 5px)) translateY(calc(-50% - 1px))
  }

  90% {
    transform: translateX(calc(-50% - 2px)) translateY(calc(-50% + 1px))
  }
`;

const firstAccentShadowGlitch = keyframes`
  from, 20%, 53%, 80%, to {
   transform: translateX(-50%) translateY(-50%) rotate(1deg)
  }

  40%, 43% {
       transform: translateX(-50%) translateY(-50%) rotate(3deg)

  }

  70% {
      transform: translateX(-50%) translateY(-50%) rotate(2deg)

  }

  90% {
       transform: translateX(-50%) translateY(-50%) rotate(1.5deg)

  }
`;

const secondAccentShadowGlitch = keyframes`
  from, 20%, 53%, 80%, to {
   transform: translateX(-50%) translateY(-50%) rotate(-1deg)
  }

  40%, 43% {
       transform: translateX(-50%) translateY(-50%) rotate(-3deg)

  }

  70% {
      transform: translateX(-50%) translateY(-50%) rotate(-2deg)

  }

  90% {
       transform: translateX(-50%) translateY(-50%) rotate(-1.5deg)

  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};

  @media (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
    width: 690px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 30px;
  }
`;

export const AccentWrap = styled.span`
  position: relative;
`;

export const Accent = styled.span<IStyledProps>`
  position: ${({ isFake }) => !isFake && 'absolute'};
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 36.23px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%);
  animation: ${textGlitch} 500ms linear infinite;
  opacity: ${({ isFake }) => isFake && 0};

  @media (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 70px;
  }
`;

export const FirstAccentShadow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(251, 222, 254, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 36.23px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%) rotate(1deg);
  animation: ${firstAccentShadowGlitch} 500ms linear infinite;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 70px;
  }
`;

export const SecondAccentShadow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(163, 105, 228, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 36.23px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%) rotate(-1deg);
  animation: ${secondAccentShadowGlitch} 500ms linear infinite;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 70px;
  }
`;

export const Title = styled.h1`
  width: 316px;
  color: #3f3d5c;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
  }
`;
