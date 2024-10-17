import styled from '@emotion/styled';
import { IStyledProps, IStyledSectorProps } from './PrizeWheelSection.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wheel = styled.div<IStyledProps>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 8px solid #333;
  position: relative;
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
  top: 30px;
  transform: rotate(90deg);
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;
