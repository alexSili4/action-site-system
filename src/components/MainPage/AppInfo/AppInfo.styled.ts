import { animations } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './AppInfo.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 36.23px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%);
  animation: ${animations.textGlitch} 500ms linear infinite;
  opacity: ${({ isFake }) => isFake && 0};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 70px;
  }
`;

export const FirstAccentShadow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(251, 222, 254, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 36.23px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%) rotate(1deg);
  animation: ${animations.firstAccentShadowGlitch} 500ms linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 70px;
  }
`;

export const SecondAccentShadow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(163, 105, 228, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 36.23px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%) rotate(-1deg);
  animation: ${animations.secondAccentShadowGlitch} 500ms linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 70px;
  }
`;

export const Title = styled.h1`
  width: 316px;
  color: #3f3d5c;
  font-family: ${({ theme }) => theme.fontFamily.myriadPro};
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
