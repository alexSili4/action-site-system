import { FC } from 'react';
import { Container } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import PromotionPageBreadcrumbs from '@/components/PromotionPageBreadcrumbs';
import { PromotionDetailsState } from '@/types/promotion.types';
import { useSetSearchParams, useTargetPromotion } from '@/hooks';
import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  SearchParamsKeys,
} from '@/constants';
import PromotionPrizes from '@/components/PromotionPrizes';
import PromotionFAQs from '@/components/PromotionFAQs';
import PromotionConditions from '@/components/PromotionConditions';
import PromotionWinners from '@/components/PromotionWinners';
import PromotionContacts from '@/components/PromotionContacts';
import PromotionBanner from '@/components/PromotionBanner';
import PromotionDetailsSectionContainer from '@/components/PromotionDetailsSectionContainer';
import { IProps } from './PromotionDetails.types';
import { getFileUrl, getPromotionBannerUrls, getPromotionDate } from '@/utils';
import PrizesWheelLogo from '@/components/PrizesWheelLogo';
import PromotionPrizesBannerIcon from '@/components/PromotionPrizesBannerIcon';

const PromotionDetails: FC<IProps> = ({
  faqs,
  prizes,
  conditions,
  winners,
}) => {
  const {
    name = '',
    date_from: dateFrom = null,
    date_to: dateTo = null,
    second_banner_dt: secondBannerDt = '',
    second_banner_mob: secondBannerMob = '',
    logo = '',
    action_type: actionType,
  } = useTargetPromotion() ?? {};
  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();
  const promotionDate = getPromotionDate({
    dateFrom,
    dateTo,
  });
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: secondBannerDt,
    bannerMob: secondBannerMob,
  });
  const logoUrl = getFileUrl(logo ?? '');
  const showWheelLogo = actionType === 1 || actionType === 3;

  const promotionCategoryState = state?.promotionCategory;
  const from = state?.from;

  const targetPromotionCategory =
    promotionCategoryState ??
    promotionCategorySQ ??
    PromotionsCategoriesKeys.active;

  return (
    <Container>
      <PromotionDetailsSectionContainer>
        <PromotionPageBreadcrumbs
          promotionCategory={targetPromotionCategory}
          promotionTitle={name}
        />
        <PromotionBanner
          from={from}
          period={promotionDate}
          name={name}
          secondBannerDt={bannerDtUrl}
          secondBannerMob={bannerMobUrl}
          showWheelLogo={showWheelLogo}
        />
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer
        marginTopMobile={49}
        marginTopDesk={80}
        isConditionsSection
      >
        <PromotionConditions conditions={conditions} />
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer
        marginTopMobile={97}
        marginTopDesk={80}
        isPrizesSection
      >
        <PromotionPrizes
          logo={<PromotionPrizesBannerIcon src={logoUrl} />}
          prizes={prizes}
          title='Призи головного розіграшу'
          description='Унікальний приз від головного партнера'
          showRegCodeLink={false}
          id={PromotionDetailsPageSections.prizes}
        />
        <PromotionPrizes
          logo={<PrizesWheelLogo />}
          prizes={prizes}
          title='Призи «Колеса подарунків»'
          description='Крутіть колесо та вигравайте подарунки'
        />
        <PromotionFAQs faqs={faqs} />
        <PromotionWinners winners={winners} />
        <PromotionContacts />
      </PromotionDetailsSectionContainer>
    </Container>
  );
};

export default PromotionDetails;
