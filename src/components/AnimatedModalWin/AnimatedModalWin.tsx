import { FC } from 'react';
import { IProps } from './AnimatedModalWin.types';
import {
  Backdrop,
  Container,
  Section,
  CloseBtn,
} from './AnimatedModalWin.styled';
import { useModalWin } from '@/hooks';
import { CgClose } from 'react-icons/cg';
import { AnimatePresence, motion } from 'framer-motion';

const ModalWin: FC<IProps> = ({ setModalWinState, children, showModalWin }) => {
  const { hideModalWin } = useModalWin(setModalWinState);

  return (
    <AnimatePresence>
      {showModalWin && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <Section>
            <Backdrop onClick={hideModalWin}>
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
          </Section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWin;
