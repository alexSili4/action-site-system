import styled from '@emotion/styled';
import {
  IStyledWheelProps,
  IStyledSectorProps,
  IStyledImage,
  IStyledDelimiter,
} from './PrizesWheelSection.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme: { padding } }) => padding.container}px;
  padding-right: ${({ theme: { padding } }) => padding.container}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.tablet + padding.container * 2}px;
    margin-left: auto;
    margin-right: auto;
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: ${({ theme }) => theme.spacing(6)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 64px;
    height: 56px;
  }
`;

export const CircleImg = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const Wheel = styled.div<IStyledWheelProps>`
  position: absolute;
  width: calc(100% - 33px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  transform: rotate(${({ totalDegrees }) => totalDegrees}deg);
  transition: transform ${({ spinningMs }) => spinningMs}ms ease-in-out;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 579px;
  }
`;

export const Sector = styled.div<IStyledSectorProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  transform-origin: 50% 50%;
  background-image: conic-gradient(
    from ${({ gradientStart }) => gradientStart}deg,
    ${({ isLockPrize, theme: { colors } }) =>
        isLockPrize ? colors.lightGrey : colors.white}
      0deg ${({ size }) => size}deg,
    transparent ${({ size }) => size}deg 360deg
  );
  transform: rotate(${({ rotate }) => rotate}deg);

  &:nth-of-type(even) {
    background-image: conic-gradient(
      from ${({ gradientStart }) => gradientStart}deg,
      ${({ isLockPrize, isOddPartnersNumber, theme: { colors } }) =>
          isLockPrize
            ? colors.lightGrey
            : !isOddPartnersNumber
            ? '#f3f1fe'
            : colors.white}
        0deg ${({ size }) => size}deg,
      transparent ${({ size }) => size}deg 360deg
    );
  }

  & > svg {
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    color: ${({ isLockPrize }) => isLockPrize && '#C0C0C0'};
  }
`;

export const Image = styled.img<IStyledImage>`
  position: absolute;
  top: 10%;
  width: 20%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: ${({ isLockPrize }) => isLockPrize && 'grayscale(100%)'};
  transform: rotate(90deg);
  opacity: ${({ isLockPrize }) => isLockPrize && 0.5};
`;

export const Delimiter = styled.div<IStyledDelimiter>`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: ${({ isOddPartnersNumber }) => (isOddPartnersNumber ? 4 : 2)}px;
  height: 100%;
  background-color: ${({ theme, isOddPartnersNumber }) =>
    isOddPartnersNumber ? '#a6a6a6' : theme.colors.lightGrey};
  transform-origin: bottom left;
  transform: translateX(-100%) rotate(${({ rotate }) => rotate}deg);
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
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};
  cursor: pointer;

  &:not(:disabled):is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #cc3333;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(13)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${({ theme }) => theme.zIndex.spinWheelBtn};
    width: 202px;
    transform: translateX(-50%) translateY(-50%);
  }
`;
