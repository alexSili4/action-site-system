import { useModalWin } from '@/hooks';
import { FC } from 'react';
import {
  Backdrop,
  BackdropWrap,
  CertificateWrap,
  ContentWrap,
  PartnerLogo,
  PartnerLogoWrap,
  Prize,
  Title,
  NextStepBtn,
  PrizeImg,
  Container,
  FireworksImg,
  AnimatedBackdropContainer,
  AnimatedContentContainer,
} from './AnimatedPrizeWheelModalWin.styled';
import { IProps } from './AnimatedPrizeWheelModalWin.types';
import prizeImg from '@/images/code/prize.png';
import fireworksImg from '@/images/code/fireworks.png';

const AnimatedPrizeWheelModalWin: FC<IProps> = ({
  moveToNextStep,
  animationDuration = 0.8,
  targetPrize: { icon, prize },
}) => {
  const { hideModalWin } = useModalWin(moveToNextStep);

  return (
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
                  stiffness: 200,
                  damping: 7,
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
                  <PartnerLogoWrap>
                    <PartnerLogo src={icon} />
                  </PartnerLogoWrap>
                </CertificateWrap>
                <NextStepBtn type='button' onClick={moveToNextStep}>
                  Далі
                </NextStepBtn>
              </ContentWrap>
            </AnimatedContentContainer>
            <PrizeImg src={prizeImg} />
          </Container>
        </Backdrop>
      </BackdropWrap>
    </AnimatedBackdropContainer>
  );
};

export default AnimatedPrizeWheelModalWin;
