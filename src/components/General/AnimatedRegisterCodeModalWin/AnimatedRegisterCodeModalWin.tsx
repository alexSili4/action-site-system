import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Backdrop,
  Container,
  BackdropWrap,
  CloseBtn,
} from './AnimatedRegisterCodeModalWin.styled';
import { useModalWin } from '@/hooks';
import { CgClose } from 'react-icons/cg';
import { IProps } from './AnimatedRegisterCodeModalWin.types';
import { SectionsIds } from '@/constants';
import { smoothScroll } from '@/utils';

const AnimatedRegisterCodeModalWin: FC<IProps> = ({
  children,
  setModalWinState,
}) => {
  const { hideModalWin } = useModalWin(setModalWinState);

  useEffect(() => {
    smoothScroll({
      id: SectionsIds.registerCodeModalWinBackdrop,
      block: 'center',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <BackdropWrap>
        <Backdrop
          onClick={hideModalWin}
          id={SectionsIds.registerCodeModalWinBackdrop}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
          >
            <Container>
              <CloseBtn onClick={setModalWinState} type='button'>
                <CgClose size={20} />
              </CloseBtn>
              {children}
            </Container>
          </motion.div>
        </Backdrop>
      </BackdropWrap>
    </motion.div>
  );
};

export default AnimatedRegisterCodeModalWin;
