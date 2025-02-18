import { FC } from 'react';
import { Container, Content } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import { PromotionDetailsState } from '@/types/promotion.types';
import { useSetSearchParams } from '@/hooks';
import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  SearchParamsKeys,
} from '@/constants';
import { IProps } from './PromotionDetails.types';
import { getFileUrl, getPromotionBannerUrls, getValidPhone } from '@/utils';
// components
import PrizesWheelLogo from '@PromotionDetailsPageComponents/PrizesWheelLogo';
import PromotionDetailsSectionContainer from '@PromotionDetailsPageComponents/PromotionDetailsSectionContainer';
import PromotionPageBreadcrumbs from '@PromotionDetailsPageComponents/PromotionPageBreadcrumbs';
import PromotionBanner from '@PromotionDetailsPageComponents/PromotionBanner';
import PromotionConditions from '@PromotionDetailsPageComponents/PromotionConditions';
import PromotionPrizes from '@PromotionDetailsPageComponents/PromotionPrizes';
import PromotionFAQs from '@PromotionDetailsPageComponents/PromotionFAQs';
import PromotionWinners from '@PromotionDetailsPageComponents/PromotionWinners';
import PromotionContacts from '@PromotionDetailsPageComponents/PromotionContacts';

const PromotionDetails: FC<IProps> = ({
  promotion,
  faqs,
  otherPrizes,
  otherBigPrizes,
  wheelPrizes,
  wheelBigPrizes,
  conditions,
  winners,
  shops,
  isFinishedPromotion,
  isShowRegCodeLink,
}) => {
  const {
    name,
    rules_pdf: rulesPdf,
    coverage_type: coverageType,
    hot_line_email: hotLineEmail,
    hot_line_phone: hotLinePhone = '',
    logo,
    hot_line_work_hours: hotLineWorkHours,
    hot_line_text: hotLineText,
    hot_line_text_2: hotLineOtherText,
    second_banner_dt: secondBannerDt,
    second_banner_mob: secondBBannerMob,
    third_banner_dt: thirdBannerDt,
    third_banner_mob: thirdBannerMob,
    action_type: actionType,
  } = promotion;
  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();
  const { bannerDtUrl: thirdBannerDtUrl, bannerMobUrl: thirdBannerMobUrl } =
    getPromotionBannerUrls({
      bannerDt: thirdBannerDt,
      bannerMob: thirdBannerMob,
    });
  const { bannerDtUrl: secondBannerDtUrl, bannerMobUrl: secondBannerMobUrl } =
    getPromotionBannerUrls({
      bannerDt: secondBannerDt,
      bannerMob: secondBBannerMob,
    });
  const validHotLinePhone = getValidPhone(hotLinePhone ?? '');
  const logoUrl = getFileUrl(logo ?? '');
  const rulesPdfUrl = getFileUrl(rulesPdf ?? '');
  const isNationalPromotion = coverageType === 'national';
  const isPromotionWheelType = actionType === 1 || actionType === 3;

  const shouldShowWinnersSection =
    Array.isArray(winners) && Boolean(winners.length);
  const shouldShowContactsSection = Boolean(shops.length);
  const shouldShowFAQsSection = Boolean(faqs.length);
  const shouldShowWheelPrizesSection = Boolean(
    wheelPrizes.length || wheelBigPrizes.length
  );
  const shouldShowOtherPrizesSection =
    Boolean(otherPrizes.length || otherBigPrizes.length) &&
    isPromotionWheelType;
  const shouldShowConditionsSection = Boolean(conditions.length);

  const promotionCategoryState = state?.promotionCategory;
  const from = state?.from;

  const targetPromotionCategory =
    promotionCategoryState ??
    promotionCategorySQ ??
    PromotionsCategoriesKeys.active;

  return (
    <Container>
      <Content>
        <PromotionDetailsSectionContainer>
          <PromotionPageBreadcrumbs
            promotionCategory={targetPromotionCategory}
            promotionTitle={name}
          />
          <PromotionBanner
            from={from}
            bannerDt={secondBannerDtUrl}
            bannerMob={secondBannerMobUrl}
            isFinishedPromotion={isFinishedPromotion}
          />
        </PromotionDetailsSectionContainer>
        {shouldShowConditionsSection && (
          <PromotionConditions
            conditions={conditions}
            rulesPdf={rulesPdfUrl}
            isShowRegCodeLink={isShowRegCodeLink}
          />
        )}
        {shouldShowOtherPrizesSection && (
          <PromotionPrizes
            prizes={otherPrizes}
            bigPrizes={otherBigPrizes}
            title='Призи головного розіграшу'
            description='Унікальний приз від головного партнера'
            showRegCodeLink={false}
            id={PromotionDetailsPageSections.prizes}
            isShowRegCodeLink={isShowRegCodeLink}
          />
        )}
        {shouldShowWheelPrizesSection && (
          <PromotionPrizes
            logo={<PrizesWheelLogo />}
            prizes={wheelPrizes}
            bigPrizes={wheelBigPrizes}
            title='Призи «Колеса подарунків»'
            description='Крутіть колесо та вигравайте подарунки'
            isShowRegCodeLink={isShowRegCodeLink}
          />
        )}
        {shouldShowFAQsSection && (
          <PromotionFAQs
            faqs={faqs}
            hotLineOtherText={hotLineOtherText}
            hotLinePhone={hotLinePhone}
            hotLineText={hotLineText}
            hotLineWorkHours={hotLineWorkHours}
            validHotLinePhone={validHotLinePhone}
          />
        )}
        {shouldShowWinnersSection && <PromotionWinners winners={winners} />}
        {shouldShowContactsSection && (
          <PromotionContacts
            shops={shops}
            hotLineEmail={hotLineEmail}
            hotLinePhone={hotLinePhone}
            logoUrl={logoUrl}
            bannerDt={thirdBannerDtUrl}
            bannerMob={thirdBannerMobUrl}
            isNationalPromotion={isNationalPromotion}
            validHotLinePhone={validHotLinePhone}
          />
        )}
      </Content>
    </Container>
  );
};

export default PromotionDetails;
