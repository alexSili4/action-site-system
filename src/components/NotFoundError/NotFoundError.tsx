import { FC } from 'react';
import {
  Container,
  Title,
  StyledLink,
  ImgWrap,
  MobileImage,
  DeskImage,
} from './NotFoundError.styled';
import { PagePaths } from '@/constants';
import Error404ImgMobile from '@/images/error/error-404-mobile.png';
import Error404ImgDesk from '@/images/error/error-404-desk.png';

const NotFoundError: FC = () => (
  <Container>
    <Title>Сторінка не знайдена</Title>
    <ImgWrap>
      <MobileImage src={Error404ImgMobile} />
      <DeskImage src={Error404ImgDesk} />
    </ImgWrap>
    <StyledLink to={PagePaths.root}>На головну</StyledLink>
  </Container>
);

export default NotFoundError;
