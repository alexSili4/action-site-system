import { FC } from 'react';
import { IProps } from './SmoothFadeInPositionedElement.types';
import { motion, Variants } from 'framer-motion';
import { MotionDiv } from './SmoothFadeInPositionedElement.styled';

const SmoothAppearanceAnimation: FC<IProps> = ({ children, ...otherProps }) => {
  const smoothAppearanceVariant: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
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
      viewport={{ once: true }}
      {...otherProps}
    >
      <motion.div variants={smoothAppearanceVariant}>{children}</motion.div>
    </MotionDiv>
  );
};

export default SmoothAppearanceAnimation;
