import styled from '@emotion/styled';
import { IStyledProps, IStyledSectorProps } from './PrizeWheelSection.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const WheelWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 306px;
  height: 306px;

  & > svg {
  }
`;

export const PointerImg = styled.img`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.prizeWheelImg + 1};
  top: 0px;
  left: 50%;
  width: 30px;
  height: 27px;
  transform: translateX(-50%);
`;

export const CircleImg = styled.img`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.prizeWheelImg};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wheel = styled.div<IStyledProps>`
  position: relative;
  width: 271px;
  height: 271px;
  border-radius: 50%;
  transform: rotate(${({ totalDegrees }) => totalDegrees}deg);
  transition: transform ${({ spinningMs }) => spinningMs}ms ease-in-out;
  overflow: hidden;
`;

export const Sector = styled.div<IStyledSectorProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  transform-origin: 50% 50%;

  &:nth-of-type(${({ number }) => number}) {
    transform: rotate(
      ${({ length, number }) => (360 / length) * (number - 1)}deg
    );
  }

  &:nth-of-type(odd) {
    background-image: conic-gradient(
      from ${({ length }) => 360 - 360 / length / 2}deg,
      #6f4ae2 0deg ${({ length }) => 360 / length}deg,
      transparent ${({ length }) => 360 / length}deg 360deg
    );
  }

  &:nth-of-type(even) {
    background-image: conic-gradient(
      from ${({ length }) => 360 - 360 / length / 2}deg,
      #faf5ed 0deg ${({ length }) => 360 / length}deg,
      transparent ${({ length }) => 360 / length}deg 360deg
    );
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 36px;
  transform: rotate(90deg);
`;

export const SpinWheelBtn = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(13)};
  border: none;
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(5)};
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #cc3333;
  background-color: #fd4b3c;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  cursor: pointer;

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cc3333;
  }
`;
