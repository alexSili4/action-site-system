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
import SmoothAppearanceAnimation from '@/components/SmoothAppearanceAnimation';

const AppBackground: FC = () => {
  return (
    <Background>
      <StyledBottomLeftConfettiImg src={BottomLeftConfettiImg} />
      <StyledBottomMiddleConfettiImg src={BottomMiddleConfettiImg} />
      <StyledBottomRightConfettiImg src={BottomRightConfettiImg} />
      <StyledTopLeftConfettiImg src={TopLeftConfettiImg} />
      <StyledTopMiddleConfetti src={TopMiddleConfettiImg} />
      <SmoothAppearanceAnimation
        top={150}
        deskTop={110}
        bottom={'auto'}
        deskBottom={'auto'}
        right={181}
        deskRight={82}
        left={'auto'}
        deskLeft={'auto'}
        width={149}
        deskWidth={294}
        height={118}
        deskHeight={226}
        isHiddenOnMobile={false}
      >
        <StyledTopRightConfetti src={TopRightConfettiImg} />
      </SmoothAppearanceAnimation>
      <SmoothAppearanceAnimation
        top={'auto'}
        deskTop={'auto'}
        bottom={74}
        deskBottom={74}
        right={'auto'}
        deskRight={'auto'}
        left={246}
        deskLeft={246}
        width={396}
        height={396}
        deskWidth={396}
        deskHeight={396}
        isHiddenOnMobile
      >
        <StyledMiddleLeftConfettiImg src={MiddleLeftConfettiImg} />
      </SmoothAppearanceAnimation>
    </Background>
  );
};

export default AppBackground;
