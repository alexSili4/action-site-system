import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledProps } from './SmoothFadeInDropdownList.types';

export const MotionDiv = styled(motion.div)<IStyledProps>`
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
`;
