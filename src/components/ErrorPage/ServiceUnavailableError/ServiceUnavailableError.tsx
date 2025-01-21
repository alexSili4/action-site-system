import { FC } from 'react';
import {
  Container,
  DeskImage,
  ImgWrap,
  MobileImage,
  Text,
  Title,
  Wheel,
  WheelImgWrap,
  Slots,
  Rays,
} from './ServiceUnavailableError.styled';
import Error503ImgMobile from '@/images/error/error-503-mobile.png';
import Error503ImgDesk from '@/images/error/error-503-desk.png';
import WheelImg from '@/images/error/wheel.png';
import Slots503Img from '@/images/error/slots-503.png';
import RaysImg from '@/images/error/rays.png';
import { IProps } from './ServiceUnavailableError.types';

const ServiceUnavailableError: FC<IProps> = ({ errorMessage }) => {
  return (
    <Container>
      <Title>{errorMessage}</Title>
      <ImgWrap>
        <MobileImage src={Error503ImgMobile} />
        <DeskImage src={Error503ImgDesk} />
        <WheelImgWrap>
          <Rays src={RaysImg} />
          <Slots src={Slots503Img} />
          <Wheel src={WheelImg} />
        </WheelImgWrap>
      </ImgWrap>
      <Text>Спробуйте, будь ласка, пізніше</Text>
    </Container>
  );
};

export default ServiceUnavailableError;
