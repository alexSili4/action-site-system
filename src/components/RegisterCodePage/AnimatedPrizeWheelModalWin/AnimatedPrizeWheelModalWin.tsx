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
} from './AnimatedPrizeWheelModalWin.styled';
import { IProps } from './AnimatedPrizeWheelModalWin.types';
import prizeImg from '@/images/code/prize.png';
import fireworksImg from '@/images/code/fireworks.png';

const AnimatedPrizeWheelModalWin: FC<IProps> = ({
  moveToNextStep,
  targetPrize: { icon, prize },
}) => {
  const { hideModalWin } = useModalWin(moveToNextStep);

  return (
    <BackdropWrap>
      <Backdrop onClick={hideModalWin}>
        <Container>
          <FireworksImg src={fireworksImg} />
          <PrizeImg src={prizeImg} />
          <ContentWrap>
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
        </Container>
      </Backdrop>
    </BackdropWrap>
  );
};

export default AnimatedPrizeWheelModalWin;
