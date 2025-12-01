import { animations, ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: #162e5b;
  overflow: hidden;

  display: none;

  body.${ClassNames.newYear} & {
    display: block;
  }
`;

export const Ball1 = styled.img`
  position: absolute;
  left: -101px;
  top: 57%;
  width: 270px;
  height: 270px;
  animation: ${animations.moveDownUp} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: -175px;
    top: 41%;
    width: 564px;
    height: 564px;
  }
`;

export const Ball2 = styled.img`
  position: absolute;
  right: -144px;
  top: 15%;
  width: 316px;
  height: 316px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    right: -184px;
    top: 26%;
    width: 529px;
    height: 529px;
  }
`;

export const Confetti1 = styled.img`
  position: absolute;
  top: 13%;
  right: 188px;
  width: 205px;
  height: 188px;
  animation: ${animations.moveDownUp} 3s linear infinite;

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
  }
`;

export const Confetti2 = styled.img`
  position: absolute;
  right: -51px;
  top: 65%;
  width: 176px;
  height: 176px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 28%;
    right: auto;
    left: -103px;
    width: 205px;
    height: 188px;
  }
`;

export const Confetti3 = styled.img`
  position: absolute;
  bottom: 9%;
  left: 318px;
  width: 195px;
  height: 185px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
  }
`;

export const Box1 = styled.img`
  position: absolute;
  right: 213px;
  bottom: 6%;
  width: 243px;
  height: 244px;
  animation: ${animations.moveDownUp} 3s linear infinite;

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
  }
`;

export const Box2 = styled.img`
  position: absolute;
  left: -111px;
  top: 9%;
  width: 222px;
  height: 228px;
  animation: ${animations.moveUpDown} 3s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 60px;
    top: 9%;
    width: 271px;
    height: 278px;
  }
`;

export const Snowflake1 = styled.img`
  position: absolute;
  left: -91px;
  bottom: 20%;
  width: 220px;
  height: 235px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 64px;
    bottom: 7px;
    width: 415px;
    height: 460px;
  }
`;

export const Snowflake2 = styled.img`
  position: absolute;
  right: -79px;
  top: 17%;
  width: 220px;
  height: 234px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    right: -107px;
    top: 0;
    width: 457px;
    height: 507px;
  }
`;

export const Snowflake3 = styled.img`
  position: absolute;
  left: -91px;
  bottom: 20%;
  width: 220px;
  height: 234px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: auto;
    right: 150px;
    bottom: -13%;
    width: 424px;
    height: 413px;
  }
`;

export const Snowflake4 = styled.img`
  position: absolute;
  left: -112px;
  top: -9%;
  width: 340px;
  height: 330px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: -127px;
    top: -22%;
    width: 545px;
    height: 554px;
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 186, 255, 0.01);
  backdrop-filter: blur(40px);
`;

export const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
