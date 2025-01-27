import { FC } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  Container,
  Label,
  Link,
  Links,
  LinkWrap,
  LinkTitle,
  IconWrap,
} from './PromotionContactsBanner.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionContactsBanner.types';

const PromotionContactsBanner: FC<IProps> = ({
  bannerDt,
  bannerMob,
  hotLinePhone,
  hotLineEmail,
  validHotLinePhone,
}) => {
  return (
    <Container bannerDt={bannerDt} bannerMob={bannerMob}>
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
