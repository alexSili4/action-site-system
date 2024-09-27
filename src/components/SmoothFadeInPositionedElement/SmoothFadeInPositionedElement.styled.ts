import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledProps } from './SmoothFadeInPositionedElement.types';

export const MotionDiv = styled(motion.div)<IStyledProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  display: block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ deskTop }) => deskTop}px;
    bottom: ${({ deskBottom }) => deskBottom}px;
    left: ${({ deskLeft }) => deskLeft}px;
    right: ${({ deskRight }) => deskRight}px;
    width: ${({ deskWidth }) => deskWidth}px;
    height: ${({ deskHeight }) => deskHeight}px;
  }
`;
