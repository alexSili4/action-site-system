import { animations, ClassNames } from '@/constants';
import GradientImg from '@/images/layout/gradient-min.jpg';

import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${GradientImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.other};

  body.${ClassNames.newYear} & {
    opacity: 0;
    pointer-events: none;
  }
`;

export const StyledImg = styled.img``;

export const LeftConfetti = styled.img`
  position: absolute;
  right: -125px;
  top: -98px;
  width: 333px;
  height: 319px;
  animation: ${animations.moveDownUp} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -234px;
    right: auto;
    left: -43px;
    width: 665px;
    height: 637px;
  }
`;

export const RightBox = styled.img`
  position: absolute;
  top: 152px;
  right: -114px;
  width: 250px;
  height: 260px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: auto;
    bottom: 143px;
    right: -185px;
    width: 500px;
    height: 519px;
  }
`;

export const RightConfetti = styled.img`
  position: absolute;
  right: -60px;
  bottom: 72px;
  width: 283px;
  height: 311px;
  animation: ${animations.moveDownUp} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    right: 147px;
    bottom: -142px;
    width: 566px;
    height: 622px;
  }
`;

export const LeftBox = styled.img`
  position: absolute;
  left: -97px;
  bottom: 92px;
  width: 212px;
  height: 221px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: -150px;
    bottom: 51px;
    width: 423px;
    height: 442px;
  }
`;
