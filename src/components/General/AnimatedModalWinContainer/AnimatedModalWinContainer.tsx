import { FC } from 'react';
import { IProps } from './AnimatedModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
import AnimatedModalWin from '@GeneralComponents/AnimatedModalWin';

const AnimatedModalWinContainer: FC<IProps> = ({
  setModalWinState,
  children,
  showModalWin,
}) => {
  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedModalWin setModalWinState={setModalWinState}>
          {children}
        </AnimatedModalWin>
      )}
    </AnimatePresence>
  );
};

export default AnimatedModalWinContainer;
