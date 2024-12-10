import { FC } from 'react';
import { IProps } from './AnimatedUnusedUserCodesModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
// components
import AnimatedUnusedUserCodesModalWin from '@CabinetPageComponents/AnimatedUnusedUserCodesModalWin';

const AnimatedUnusedUserCodesModalWinContainer: FC<IProps> = ({
  setModalWinState,
  children,
  showModalWin,
}) => {
  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedUnusedUserCodesModalWin setModalWinState={setModalWinState}>
          {children}
        </AnimatedUnusedUserCodesModalWin>
      )}
    </AnimatePresence>
  );
};

export default AnimatedUnusedUserCodesModalWinContainer;
