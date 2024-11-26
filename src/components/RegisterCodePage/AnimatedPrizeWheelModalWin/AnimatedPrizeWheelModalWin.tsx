import { useModalWin } from '@/hooks';
import { FC } from 'react';
import {
  Backdrop,
  BackdropWrap,
  CertificateWrap,
  ContentWrap,
  LogoPartner,
  LogoPartnerWrap,
  Prize,
  Title,
  NextStepBtn,
  PrizeImg,
  Container,
  FireworksImg,
  AnimatedBackdropContainer,
  AnimatedContentContainer,
  AnimatedPrizeImgContainer,
} from './AnimatedPrizeWheelModalWin.styled';
import { IProps } from './AnimatedPrizeWheelModalWin.types';
import prizeImg from '@/images/code/prize.png';
import fireworksImg from '@/images/code/fireworks.png';
import fanfare from '@/audio/fanfare.mp3';
// components
import ConfettiAnimation from '@GeneralComponents/ConfettiAnimation';

const AnimatedPrizeWheelModalWin: FC<IProps> = ({
  moveToNextStep,
  animationDuration = 0.6,
  targetPrize: { icon, prize },
}) => {
  const { hideModalWin } = useModalWin(moveToNextStep);

  return (
    <>
      <AnimatedBackdropContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: animationDuration } }}
        exit={{ opacity: 0, transition: { duration: animationDuration } }}
      >
        <BackdropWrap>
          <Backdrop onClick={hideModalWin}>
            <Container>
              <AnimatedContentContainer
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: animationDuration,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                exit={{
                  scale: 0,
                  transition: {
                    duration: animationDuration,
                  },
                }}
              >
                <ContentWrap>
                  <FireworksImg src={fireworksImg} />
                  <CertificateWrap>
                    <Title>сертифікат</Title>
                    <Prize>{prize}</Prize>
                    <LogoPartnerWrap>
                      <LogoPartner src={icon} />
                    </LogoPartnerWrap>
                  </CertificateWrap>
                  <NextStepBtn type='button' onClick={moveToNextStep}>
                    Далі
                  </NextStepBtn>
                </ContentWrap>
              </AnimatedContentContainer>
              <AnimatedPrizeImgContainer
                style={{
                  transformOrigin: '50% 0%',
                  translateX: '-50%',
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: animationDuration },
                }}
                exit={{
                  scale: 0,
                  transition: { duration: animationDuration },
                }}
              >
                <PrizeImg src={prizeImg} />
              </AnimatedPrizeImgContainer>
            </Container>
          </Backdrop>
        </BackdropWrap>
      </AnimatedBackdropContainer>
      <ConfettiAnimation />
      <audio src={fanfare} autoPlay hidden />
    </>
  );
};

export default AnimatedPrizeWheelModalWin;
