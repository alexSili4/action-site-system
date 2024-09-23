import styled from '@emotion/styled';
import GradientImg from '@/images/layout/gradient.jpg';
import LeftBoxImg from '@/images/layout/left-box.png';
import RightBoxImg from '@/images/layout/right-box.png';
import LeftConfetti from '@/images/layout/left-bg-confetti.png';
import RightConfetti from '@/images/layout/right-bg-confetti.png';

import { theme } from '@/constants';

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

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
`;
