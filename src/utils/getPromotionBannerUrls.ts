import {
  IGetPromotionBannerUrls,
  IGetPromotionBannerUrlsProps,
} from '@/types/promotion.types';

const getPromotionBannerUrls = ({
  bannerDt,
  bannerMob,
}: IGetPromotionBannerUrlsProps): IGetPromotionBannerUrls => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

  const bannerDtPath = `${baseUrl}/images/${bannerDt}`;
  const bannerMobPath = `${baseUrl}/images/${bannerMob}`;

  const bannerDtUrl = bannerDt ? bannerDtPath : '';
  const bannerMobUrl = bannerMob ? bannerMobPath : '';

  return {
    bannerDtUrl,
    bannerMobUrl,
  };
};

export default getPromotionBannerUrls;
