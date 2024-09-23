import GradientImg from '@/images/layout/gradient.jpg';
import LeftBoxImg from '@/images/layout/left-box.png';
import RightBoxImg from '@/images/layout/right-box.png';
import LeftConfetti from '@/images/layout/left-bg-confetti.png';
import RightConfetti from '@/images/layout/right-bg-confetti.png';

import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${RightBoxImg}), url(${LeftBoxImg}),
    url(${RightConfetti}), url(${LeftConfetti}), url(${GradientImg});
  background-size: 250px 260px, 212px 221px, 283px 311px, 333px 319px, cover;
  background-position: right -114px top 152px, left -97px bottom 92px,
    right -60px bottom 72px, right -125px top -98px, center;
  background-repeat: no-repeat;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    background-size: 500px 519px, 423px 442px, 566px 622px, 665px 637px, cover;
    background-position: right -185px bottom 143px, left -150px bottom 51px,
      right 147px bottom -142px, left -43px top -234px, center;
  }
`;

export const StyledBottomLeftConfettiImg = styled.img`
  position: absolute;
  left: 210px;
  bottom: 1px;
  display: block;
  width: 72px;
  height: 104px;

  @media (max-width: ${theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const StyledBottomMiddleConfettiImg = styled.img`
  position: absolute;
  left: 22px;
  bottom: -25px;
  display: block;
  width: 99px;
  height: 80px;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    left: 546px;
    bottom: -56px;
    width: 198px;
    height: 161px;
  }
`;

export const StyledBottomRightConfettiImg = styled.img`
  position: absolute;
  right: -27px;
  bottom: -48px;
  display: block;
  width: 118px;
  height: 118px;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    right: 32px;
    bottom: -93px;
    width: 236px;
    height: 236px;
  }
`;

export const StyledTopLeftConfettiImg = styled.img`
  position: absolute;
  left: -54px;
  top: 88px;
  display: block;
  width: 140px;
  height: 150px;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    left: -111px;
    top: 22px;
    width: 281px;
    height: 301px;
  }
`;

export const StyledTopMiddleConfetti = styled.img`
  position: absolute;
  left: 130px;
  top: 302px;
  display: block;
  width: 141px;
  height: 211px;

  @media (max-width: ${theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const StyledTopRightConfetti = styled.img`
  position: absolute;
  right: px;
  top: px;
  display: block;
  width: px;
  height: px;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    right: px;
    top: px;
    width: px;
    height: px;
  }
`;

export const StyledMiddleLeftConfettiImg = styled.img`
  display: block;
`;
