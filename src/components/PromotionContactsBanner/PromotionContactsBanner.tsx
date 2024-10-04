import { FC } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  Container,
  Label,
  Link,
  Links,
  LinkWrap,
  Title,
  TitleImg,
  TitleWrap,
  LinkTitle,
} from './PromotionContactsBanner.styled';

const PromotionContactsBanner: FC = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>Організатор акції</Title>
        <TitleImg src='' alt='Логотип організатор акції' />
      </TitleWrap>
      <Links>
        <LinkWrap>
          <Label>Гаряча лінія</Label>
          <Link href='tel:+0000000000'>
            <HiOutlinePhone />
            <LinkTitle>0000000000</LinkTitle>
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Title>Пошта</Title>
          <Link href='mailto:someemail'>
            <MdOutlineMailOutline />
            <LinkTitle>someemail</LinkTitle>
          </Link>
        </LinkWrap>
      </Links>
    </Container>
  );
};

export default PromotionContactsBanner;
