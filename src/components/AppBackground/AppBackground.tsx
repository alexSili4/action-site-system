import { FC } from 'react';
import BottomLeftConfettiImg from '@/images/layout/bottom-left-confetti.png';
import BottomMiddleConfettiImg from '@/images/layout/bottom-middle-confetti.png';
import BottomRightConfettiImg from '@/images/layout/bottom-right-confetti.png';
import TopLeftConfettiImg from '@/images/layout/top-left-confetti.png';
import TopMiddleConfettiImg from '@/images/layout/top-middle-confetti.png';
import TopRightConfettiImg from '@/images/layout/top-right-confetti.png';
import MiddleLeftConfettiImg from '@/images/layout/middle-left-confetti.png';

import {
  Background,
  StyledBottomLeftConfettiImg,
  StyledBottomMiddleConfettiImg,
  StyledBottomRightConfettiImg,
  StyledTopLeftConfettiImg,
  StyledTopMiddleConfetti,
  StyledTopRightConfetti,
  StyledMiddleLeftConfettiImg,
} from './AppBackground.styled';

const AppBackground: FC = () => {
  return (
    <Background>
      <StyledBottomLeftConfettiImg src={BottomLeftConfettiImg} />
      <StyledBottomMiddleConfettiImg src={BottomMiddleConfettiImg} />
      <StyledBottomRightConfettiImg src={BottomRightConfettiImg} />
      <StyledTopLeftConfettiImg src={TopLeftConfettiImg} />
      <StyledTopMiddleConfetti src={TopMiddleConfettiImg} />
      <StyledTopRightConfetti src={TopRightConfettiImg} />
      <StyledMiddleLeftConfettiImg src={MiddleLeftConfettiImg} />
    </Background>
  );
};

export default AppBackground;
