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
  IconWrap,
  TitleImgWrap,
} from './PromotionContactsBanner.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionContactsBanner.types';

const PromotionContactsBanner: FC<IProps> = ({
  logoUrl,
  bannerDt,
  bannerMob,
  hotLinePhone,
  hotLineEmail,
  validHotLinePhone,
}) => {
  return (
    <Container bannerDt={bannerDt} bannerMob={bannerMob}>
      <TitleWrap>
        <Title>Організатор акції</Title>
        <TitleImgWrap>
          <TitleImg src={logoUrl} alt='Логотип організатора акції' />
        </TitleImgWrap>
      </TitleWrap>
      <Links>
        <LinkWrap>
          <Label>Гаряча лінія</Label>
          <Link href={`tel:${validHotLinePhone}`}>
            <IconWrap>
              <HiOutlinePhone
                size={theme.iconSizes.promotionContactsPhoneLink}
              />
            </IconWrap>
            <LinkTitle>{hotLinePhone}</LinkTitle>
          </Link>
        </LinkWrap>
        <LinkWrap>
          <Label>Пошта</Label>
          <Link href={`mailto:${hotLineEmail}`}>
            <IconWrap>
              <MdOutlineMailOutline
                size={theme.iconSizes.promotionContactsMailLink}
              />
            </IconWrap>
            <LinkTitle>{hotLineEmail}</LinkTitle>
          </Link>
        </LinkWrap>
      </Links>
    </Container>
  );
};

export default PromotionContactsBanner;
