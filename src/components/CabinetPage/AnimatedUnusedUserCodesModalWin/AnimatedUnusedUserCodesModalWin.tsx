import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Backdrop,
  Container,
  BackdropWrap,
} from './AnimatedUnusedUserCodesModalWin.styled';
import { useModalWin } from '@/hooks';
import { IProps } from './AnimatedUnusedUserCodesModalWin.types';

const AnimatedUnusedUserCodesModalWin: FC<IProps> = ({
  children,
  setModalWinState,
}) => {
  const { hideModalWin } = useModalWin(setModalWinState);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <BackdropWrap>
        <Backdrop onClick={hideModalWin}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
          >
            <Container>{children}</Container>
          </motion.div>
        </Backdrop>
      </BackdropWrap>
    </motion.div>
  );
};

export default AnimatedUnusedUserCodesModalWin;
