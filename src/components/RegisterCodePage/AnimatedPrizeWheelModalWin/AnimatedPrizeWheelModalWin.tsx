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
} from './AnimatedPrizeWheelModalWin.styled';
import { IProps } from './AnimatedPrizeWheelModalWin.types';
import prize from '@/images/code/prize.png';

const AnimatedPrizeWheelModalWin: FC<IProps> = ({
  moveToNextStep,
  targetPrize: { icon },
}) => {
  const { hideModalWin } = useModalWin(moveToNextStep);

  return (
    <BackdropWrap>
      <Backdrop onClick={hideModalWin}>
        <Container>
          <PrizeImg src={prize} />
          <ContentWrap>
            <CertificateWrap>
              <Title>сертифікат</Title>
              <Prize>900₴</Prize>
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
