import { FC } from 'react';
import { IProps } from './AnimatedRegisterCodeModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
import AnimatedRegisterCodeModalWin from '@GeneralComponents/AnimatedRegisterCodeModalWin';

const AnimatedRegisterCodeModalWinContainer: FC<IProps> = ({
  setModalWinState,
  children,
  showModalWin,
}) => {
  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedRegisterCodeModalWin setModalWinState={setModalWinState}>
          {children}
        </AnimatedRegisterCodeModalWin>
      )}
    </AnimatePresence>
  );
};

export default AnimatedRegisterCodeModalWinContainer;
