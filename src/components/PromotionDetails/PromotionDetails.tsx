import { FC } from 'react';
import { Container } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import PromotionPageBreadcrumbs from '@/components/PromotionPageBreadcrumbs';
import { PromotionDetailsState } from '@/types/promotion.types';
import { useSetSearchParams, useTargetPromotion } from '@/hooks';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';
import PromotionPrizes from '@/components/PromotionPrizes';
import PromotionFAQs from '@/components/PromotionFAQs';
import PromotionConditions from '@/components/PromotionConditions';
import PromotionWinners from '@/components/PromotionWinners';
import PromotionContacts from '@/components/PromotionContacts';
import PromotionBanner from '@/components/PromotionBanner';
import PromotionDetailsSectionContainer from '@/components/PromotionDetailsSectionContainer';
import { IProps } from './PromotionDetails.types';
import { getPromotionBannerUrls, getPromotionDate } from '@/utils';

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

  const promotionCategoryState = state?.promotionCategory;
  const from = state?.from;

  const targetPromotionCategory =
    promotionCategoryState ??
    promotionCategorySQ ??
    PromotionsCategoriesKeys.active;

  // TODO: fix  promotionTitle
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
        />
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer isConditionsSection>
        <PromotionConditions conditions={conditions} />
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer>
        <PromotionPrizes prizes={prizes} />
        <PromotionFAQs faqs={faqs} />
        <PromotionWinners winners={winners} />
        <PromotionContacts />
      </PromotionDetailsSectionContainer>
    </Container>
  );
};

export default PromotionDetails;
