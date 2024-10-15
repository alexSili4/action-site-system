import { FC } from 'react';
import { IProps } from './AnimatedModalWinContainer.types';
import { AnimatePresence } from 'framer-motion';
import AnimatedModalWin from '@GeneralComponents/AnimatedModalWin';

const ModalWin: FC<IProps> = ({ setModalWinState, children, showModalWin }) => {
  return (
    <AnimatePresence>
      {showModalWin && (
        <AnimatedModalWin
          children={children}
          setModalWinState={setModalWinState}
        />
      )}
    </AnimatePresence>
  );
};

export default ModalWin;
