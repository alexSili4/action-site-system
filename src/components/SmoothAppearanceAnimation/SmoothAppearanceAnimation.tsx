import { FC } from 'react';
import { IProps } from './SmoothAppearanceAnimation.types';
import { motion, Variants } from 'framer-motion';
import { MotionDiv } from './SmoothAppearanceAnimation.styled';

const SmoothAppearanceAnimation: FC<IProps> = ({ children, ...otherProps }) => {
  const smoothAppearanceVariant: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <MotionDiv
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      {...otherProps}
    >
      <motion.div variants={smoothAppearanceVariant}>{children}</motion.div>
    </MotionDiv>
  );
};

export default SmoothAppearanceAnimation;
