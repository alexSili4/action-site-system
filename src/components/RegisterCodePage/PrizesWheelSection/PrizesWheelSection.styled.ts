import styled from '@emotion/styled';
import { IStyledProps, IStyledSectorProps } from './PrizesWheelSection.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme: { padding } }) => padding.container}px;
  padding-right: ${({ theme: { padding } }) => padding.container}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.desktop + padding.container * 2}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: ${({ theme }) => theme.spacing(6)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: relative;
    justify-content: center;
  }
`;

export const WheelWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 650px;
  }
`;

export const PointerImg = styled.img`
  position: absolute;
  top: 0px;
  left: 50%;
  width: 12%;
  height: auto;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 64px;
    height: 56px;
  }
`;

export const CircleImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const Wheel = styled.div<IStyledProps>`
  position: absolute;
  width: calc(100% - 33px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transform: rotate(${({ totalDegrees }) => totalDegrees}deg);
  transition: transform ${({ spinningMs }) => spinningMs}ms ease-in-out;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 579px;
  }
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
  top: 15%;
  width: 20%;
  transform: rotate(90deg);
`;

export const SpinWheelBtn = styled.button`
  width: 100%;
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

  &:not(:disabled):is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cc3333;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(13)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${({ theme }) => theme.zIndex.spinWheelBtn};
    width: 202px;
    transform: translateX(-50%) translateY(-50%);
  }
`;
