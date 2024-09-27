import { animations } from '@/constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  width: 332px;
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
    margin-top: ${({ theme }) => theme.spacing(20)};
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
    width: 1055px;
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
  left: 112px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 37px;
    left: 364px;
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

export const Rays = styled.img`
  position: absolute;
  top: -262px;
  left: -532px;
  max-width: 1370px;
  width: 1370px;
  height: 1083px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-top: ${({ theme }) => theme.spacing(25)};
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #cc3333;
  background-color: #fd4b3c;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cc3333;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    order: 3;
    width: 280px;
    height: 50px;
    margin-top: ${({ theme }) => theme.spacing(6)};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
  }
`;
