import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IProps } from './SmoothFadeInDropdownList.types';

const SmoothFadeInDropdownList: FC<IProps> = ({ isVisible, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmoothFadeInDropdownList;
