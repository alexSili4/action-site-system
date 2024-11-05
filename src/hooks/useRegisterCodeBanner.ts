import { getFileUrl, getPromotionBannerUrls, getPromotionDate } from '@/utils';
import { useTargetPromotionData } from '@/hooks';
import { IUseRegisterCodeBanner } from '@/types/hooks.types';

const useRegisterCodeBanner = (): IUseRegisterCodeBanner => {
  const { name, logoPartner, thirdBannerDt, thirdBannerMob, dateFrom, dateTo } =
    useTargetPromotionData();
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });
  const promotionDate = getPromotionDate({
    dateFrom,
    dateTo,
  });
  const logoPartnerUrl = getFileUrl(logoPartner);

  return { bannerMobUrl, bannerDtUrl, promotionDate, name, logoPartnerUrl };
};

export default useRegisterCodeBanner;
