import { IUseTargetPromotionData } from '@/types/hooks.types';
import useTargetPromotion from './useTargetPromotion';
import { getFileUrl } from '@/utils';

const useTargetPromotionData = (): IUseTargetPromotionData => {
  const targetPromotion = useTargetPromotion();

  const {
    name = '',
    logo = '',
    date_from: dateFrom = null,
    date_to: dateTo = null,
    main_banner_mob: mainBannerMob = '',
    main_banner_dt: mainBannerDt = '',
    second_banner_dt: secondBannerDt = '',
    second_banner_mob: secondBannerMob = '',
    action_type: actionType,
    rules_pdf: rulesPdf = '',
    hot_line_phone: hotLinePhone,
    hot_line_email: hotLineEmail,
    coverage_type: coverageType,
    hot_line_text: hotLineText,
    hot_line_text_2: hotLineOtherText,
    hot_line_work_hours: hotLineWorkHours = '',
    third_banner_dt: thirdBannerDt = '',
    third_banner_mob: thirdBannerMob = '',
    logo_partner: logoPartner = '',
    legal_text: legalText = '',
  } = targetPromotion ?? {};

  const rulesPdfUrl = getFileUrl(rulesPdf);

  return {
    rulesPdf: rulesPdfUrl,
    hotLinePhone,
    hotLineEmail,
    coverageType,
    dateFrom,
    dateTo,
    mainBannerMob,
    mainBannerDt,
    secondBannerMob,
    secondBannerDt,
    actionType,
    name,
    hotLineText,
    logoPartner,
    logo: logo ?? '',
    hotLineWorkHours,
    hotLineOtherText,
    thirdBannerDt,
    thirdBannerMob,
    legalText,
  };
};

export default useTargetPromotionData;
