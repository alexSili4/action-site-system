import { DateFormats, PagePaths } from '@/constants';
import { IUseUserCertificate } from '@/types/hooks.types';
import { IUserCertificateWithDetails } from '@/types/userCertificateWithDetails.types';
import {
  formatDate,
  getFileUrl,
  getPromotionBannerUrls,
  getPromotionDetailsPath,
  getValidPhone,
} from '@/utils';

const useUserCertificate = (
  certificate: IUserCertificateWithDetails
): IUseUserCertificate => {
  const {
    code: userCode,
    gift,
    action,
    expired_date: expiredDate,
    certificate_pdf: certificatePdf,
  } = certificate;

  const { code } = userCode;
  const { get_conditions: getConditions, partner, name: prizeName } = gift;
  const { name: partnerName, logo: partnerLogo } = partner;
  const {
    name: promotionName,
    hot_line_phone: hotLinePhone,
    hot_line_work_hours: hotLineWorkHours,
    third_banner_dt: thirdBannerDt,
    third_banner_mob: thirdBannerMob,
    id: actionId,
  } = action;

  const validHotLinePhone = getValidPhone(hotLinePhone);
  // TODO fix
  // const codeDetailsPath = getCodeDetailsPath();
  const codeDetailsPath = PagePaths.root;
  const promotionDetailsPath = getPromotionDetailsPath(actionId);
  const partnerLogoUrl = getFileUrl(partnerLogo);
  const certificatePdfUrl = getFileUrl(certificatePdf);
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });

  const expiredFormatDate = formatDate({
    date: expiredDate,
    dateFormat: DateFormats.winnersDate,
  });

  return {
    code,
    bannerMobUrl,
    bannerDtUrl,
    certificatePdfUrl,
    getConditions,
    partnerLogoUrl,
    partnerName,
    prizeName,
    expiredFormatDate,
    hotLinePhone,
    hotLineWorkHours,
    promotionName,
    promotionDetailsPath,
    codeDetailsPath,
    validHotLinePhone,
  };
};

export default useUserCertificate;
