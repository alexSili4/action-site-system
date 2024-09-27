import { FC } from 'react';
import {
  Container,
  Title,
  StyledLink,
  ImgWrap,
  MobileImage,
  DeskImage,
  Wheel,
  Slots,
  WheelImgWrap,
  Rays,
} from './NotFoundError.styled';
import { PagePaths } from '@/constants';
import Error404ImgMobile from '@/images/error/error-404-mobile.png';
import Error404ImgDesk from '@/images/error/error-404-desk.png';
import WheelImg from '@/images/error/wheel.png';
import Slots404Img from '@/images/error/slots-404.png';
import RaysImg from '@/images/error/rays.png';

const NotFoundError: FC = () => (
  <Container>
    <Title>Сторінка не знайдена</Title>
    <ImgWrap>
      <MobileImage src={Error404ImgMobile} />
      <DeskImage src={Error404ImgDesk} />
      <WheelImgWrap>
        <Rays src={RaysImg} />
        <Slots src={Slots404Img} />
        <Wheel src={WheelImg} />
      </WheelImgWrap>
    </ImgWrap>
    <StyledLink to={PagePaths.root}>На головну</StyledLink>
  </Container>
);

export default NotFoundError;
