import { FC } from 'react';
import {
  Ball1,
  Ball2,
  Confetti1,
  Confetti2,
  Container,
  Confetti3,
  Box1,
  Box2,
  Snowflake1,
  Snowflake2,
  Snowflake3,
  Snowflake4,
  Bg,
  BgImg,
} from './NewYearAppBackground.styled';
import confetti1 from '@/images/new-year/confetti-1.webp';
import confetti2 from '@/images/new-year/confetti-2.webp';
import confetti3 from '@/images/new-year/confetti-3.webp';
import ball1 from '@/images/new-year/ball-1.webp';
import ball2 from '@/images/new-year/ball-2.webp';
import box1 from '@/images/new-year/box-1.webp';
import box2 from '@/images/new-year/box-2.webp';
import snowflake1 from '@/images/new-year/snowflake-1.webp';
import snowflake2 from '@/images/new-year/snowflake-2.webp';
import snowflake3 from '@/images/new-year/snowflake-3.webp';
import snowflake4 from '@/images/new-year/snowflake-4.webp';
import bgImg from '@/images/new-year/bg-img.webp';

const NewYearAppBackground: FC = () => {
  return (
    <Container>
      <BgImg src={bgImg} alt='' />
      <Bg></Bg>
      <Snowflake1 src={snowflake1} alt='' />
      <Snowflake2 src={snowflake2} alt='' />
      <Snowflake3 src={snowflake3} alt='' />
      <Snowflake4 src={snowflake4} alt='' />
      <Ball1 src={ball1} alt='' />
      <Ball2 src={ball2} alt='' />
      <Confetti1 src={confetti1} alt='' />
      <Confetti2 src={confetti2} alt='' />
      <Confetti3 src={confetti3} alt='' />
      <Box1 src={box1} alt='' />
      <Box2 src={box2} alt='' />
    </Container>
  );
};

export default NewYearAppBackground;
