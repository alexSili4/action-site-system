import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IProps } from './SmoothFadeInDropdownList.types';
import { MotionDiv } from './SmoothFadeInDropdownList.styled';

const SmoothFadeInDropdownList: FC<IProps> = ({
  isVisible,
  children,
  zIndex=10}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
          zIndex={zIndex}
        >
          {children}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default SmoothFadeInDropdownList;
