import { animations } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -2.31px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    order: 2;
    width: auto;
    margin-top: ${({ theme }) => theme.spacing(22)};
    font-size: 32px;
    letter-spacing: 1px;
  }
`;

export const ImgWrap = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(18)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    order: 1;
    width: 1024px;
  }
`;

export const MobileImage = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const DeskImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const WheelImgWrap = styled.div`
  position: absolute;
  top: 5px;
  left: 114px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 39px;
    left: 348px;
  }
`;

export const Rays = styled.img`
  position: absolute;
  top: -262px;
  left: -532px;
  max-width: 1370px;
  width: 1370px;
  height: 1083px;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const Wheel = styled.img`
  position: relative;
  width: 136px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 340px;
  }
`;

export const Slots = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: ${animations.wheelRotate} 20000ms linear infinite;
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(25)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.13;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    order: 3;
    margin-top: ${({ theme }) => theme.spacing(6)};
  }
`;
