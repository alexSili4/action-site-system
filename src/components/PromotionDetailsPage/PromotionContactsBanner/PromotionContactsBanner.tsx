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
} from './PromotionContactsBanner.styled';
import { theme } from '@/constants';
import { useTargetPromotionData } from '@/hooks';
import { getFileUrl, getPromotionBannerUrls } from '@/utils';

const PromotionContactsBanner: FC = () => {
  const {
    hotLinePhone,
    hotLineEmail,
    logoPartner,
    secondBannerDt,
    secondBannerMob,
  } = useTargetPromotionData();
  const logoPartnerUrl = getFileUrl(logoPartner);
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: secondBannerDt,
    bannerMob: secondBannerMob,
  });

  return (
    <Container secondBannerDt={bannerDtUrl} secondBannerMob={bannerMobUrl}>
      <TitleWrap>
        <Title>Організатор акції</Title>
        <TitleImg src={logoPartnerUrl} alt='Логотип організатора акції' />
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
