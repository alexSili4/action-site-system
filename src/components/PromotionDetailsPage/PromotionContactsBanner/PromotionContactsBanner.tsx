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
import { useTargetPromotionData } from '@/hooks';
import { getFileUrl, getPromotionBannerUrls } from '@/utils';

const PromotionContactsBanner: FC = () => {
  const { hotLinePhone, hotLineEmail, logo, secondBannerDt, secondBannerMob } =
    useTargetPromotionData();
  const logoUrl = getFileUrl(logo);
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: secondBannerDt,
    bannerMob: secondBannerMob,
  });

  return (
    <Container secondBannerDt={bannerDtUrl} secondBannerMob={bannerMobUrl}>
      <TitleWrap>
        <Title>Організатор акції</Title>
        <TitleImgWrap>
          <TitleImg src={logoUrl} alt='Логотип організатора акції' />
        </TitleImgWrap>
      </TitleWrap>
      <Links>
        <LinkWrap>
          <Label>Гаряча лінія</Label>
          <Link href={`tel:${hotLinePhone}`}>
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
