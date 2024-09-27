import GradientImg from '@/images/layout/gradient.jpg';

import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${GradientImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-size: cover;
    background-position: center;
  }
`;

export const StyledImg = styled.img``;

export const LeftConfetti = styled.img`
  position: absolute;
  right: -125px;
  top: -98px;
  width: 333px;
  height: 319px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: -150px;
    bottom: 51px;
    width: 423px;
    height: 442px;
  }
`;
