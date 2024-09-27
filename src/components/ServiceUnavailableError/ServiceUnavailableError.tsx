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
} from './ServiceUnavailableError.styled';
import Error503ImgMobile from '@/images/error/error-503-mobile.png';
import Error503ImgDesk from '@/images/error/error-503-desk.png';
import WheelImg from '@/images/error/wheel.png';
import SlotsImg from '@/images/error/slots.png';

const ServiceUnavailableError: FC = () => {
  return (
    <Container>
      <Title>Сервіс тимчасово недоступний</Title>
      <ImgWrap>
        <MobileImage src={Error503ImgMobile} />
        <DeskImage src={Error503ImgDesk} />
        <WheelImgWrap>
          <Slots src={SlotsImg} />
          <Wheel src={WheelImg} />
        </WheelImgWrap>
      </ImgWrap>
      <Text>Спробуйте, будь ласка, пізніше</Text>
    </Container>
  );
};

export default ServiceUnavailableError;
