import {
  IGetPromotionBannerUrls,
  IGetPromotionBannerUrlsProps,
} from '@/types/promotion.types';

const getPromotionBannerUrls = ({
  mainBannerDt,
  mainBannerMob,
}: IGetPromotionBannerUrlsProps): IGetPromotionBannerUrls => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

  const mainBannerDtPath = `${baseUrl}/images/${mainBannerDt}`;
  const mainBannerMobPath = `${baseUrl}/images/${mainBannerMob}`;

  const mainBannerDtUrl = mainBannerDt ? mainBannerDtPath : '';
  const mainBannerMobUrl = mainBannerMob ? mainBannerMobPath : '';

  return {
    mainBannerDtUrl,
    mainBannerMobUrl,
  };
};

export default getPromotionBannerUrls;
