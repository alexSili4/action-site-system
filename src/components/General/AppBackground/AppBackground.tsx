import { FC } from 'react';
import BottomLeftConfettiImg from '@/images/layout/bottom-left-confetti.png';
import BottomMiddleConfettiImg from '@/images/layout/bottom-middle-confetti.png';
import BottomRightConfettiImg from '@/images/layout/bottom-right-confetti.png';
import TopLeftConfettiImg from '@/images/layout/top-left-confetti.png';
import TopMiddleConfettiImg from '@/images/layout/top-middle-confetti.png';
import TopRightConfettiImg from '@/images/layout/top-right-confetti.png';
import MiddleLeftConfettiImg from '@/images/layout/middle-left-confetti.png';
import SmoothFadeInPositionedElement from '@AnimationBlocks/SmoothFadeInPositionedElement';
import { animations } from '@/constants';
import {
  Background,
  StyledImg,
  RightBox,
  RightConfetti,
  LeftBox,
  LeftConfetti,
} from './AppBackground.styled';
import RightBoxImg from '@/images/layout/right-box.png';
import RightConfettiImg from '@/images/layout/right-bg-confetti.png';
import LeftBoxImg from '@/images/layout/left-box.png';
import LeftConfettiImg from '@/images/layout/left-bg-confetti.png';

const AppBackground: FC = () => {
  return (
    <Background>
      <RightBox src={RightBoxImg} />
      <RightConfetti src={RightConfettiImg} />
      <LeftBox src={LeftBoxImg} />
      <LeftConfetti src={LeftConfettiImg} />
      <SmoothFadeInPositionedElement
        top={'auto'}
        deskTop={'auto'}
        bottom={1}
        deskBottom={1}
        right={'auto'}
        deskRight={'auto'}
        left={210}
        deskLeft={210}
        width={72}
        deskWidth={72}
        height={104}
        deskHeight={104}
        animation={animations.moveDownUp}
        isHiddenOnMobile
      >
        <StyledImg src={BottomLeftConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
        top={'auto'}
        deskTop={'auto'}
        bottom={-25}
        deskBottom={-56}
        right={'auto'}
        deskRight={'auto'}
        left={22}
        deskLeft={546}
        width={99}
        deskWidth={198}
        height={80}
        deskHeight={161}
        animation={animations.moveUpDown}
        isHiddenOnMobile={false}
      >
        <StyledImg src={BottomMiddleConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
        top={'auto'}
        deskTop={'auto'}
        bottom={-48}
        deskBottom={-93}
        right={-27}
        deskRight={32}
        left={'auto'}
        deskLeft={'auto'}
        width={118}
        deskWidth={236}
        height={118}
        deskHeight={236}
        animation={animations.moveDownUp}
        isHiddenOnMobile={false}
      >
        <StyledImg src={BottomRightConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
        top={88}
        deskTop={22}
        bottom={'auto'}
        deskBottom={'auto'}
        right={'auto'}
        deskRight={'auto'}
        left={-54}
        deskLeft={-111}
        width={140}
        deskWidth={281}
        height={150}
        deskHeight={301}
        animation={animations.moveUpDown}
        isHiddenOnMobile={false}
      >
        <StyledImg src={TopLeftConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
        top={302}
        deskTop={302}
        bottom={'auto'}
        deskBottom={'auto'}
        right={'auto'}
        deskRight={'auto'}
        left={130}
        deskLeft={130}
        width={141}
        deskWidth={141}
        height={211}
        deskHeight={211}
        animation={animations.moveDownUp}
        isHiddenOnMobile
      >
        <StyledImg src={TopMiddleConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
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
        animation={animations.moveDownUp}
        isHiddenOnMobile={false}
      >
        <StyledImg src={TopRightConfettiImg} />
      </SmoothFadeInPositionedElement>
      <SmoothFadeInPositionedElement
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
        animation={animations.moveDownUp}
        isHiddenOnMobile
      >
        <StyledImg src={MiddleLeftConfettiImg} />
      </SmoothFadeInPositionedElement>
    </Background>
  );
};

export default AppBackground;
