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

const PromotionDetails: FC<IProps> = ({ faqs, prizes, conditions }) => {
  const promotion = useTargetPromotion();
  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();
  const promotionDate = getPromotionDate({
    dateFrom: promotion?.date_from ?? null,
    dateTo: promotion?.date_to ?? null,
  });
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: promotion?.second_banner_dt ?? '',
    bannerMob: promotion?.second_banner_mob ?? '',
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
        {promotion && (
          <PromotionPageBreadcrumbs
            promotionCategory={targetPromotionCategory}
            promotionTitle={promotion.name}
          />
        )}
        {promotion && (
          <PromotionBanner
            from={from}
            period={promotionDate}
            name={promotion.name}
            secondBannerDt={bannerDtUrl}
            secondBannerMob={bannerMobUrl}
          />
        )}
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer isConditionsSection>
        <PromotionConditions conditions={conditions} />
      </PromotionDetailsSectionContainer>
      <PromotionDetailsSectionContainer>
        <PromotionPrizes prizes={prizes} />
        <PromotionFAQs faqs={[{}]} />
        <PromotionWinners />
        <PromotionContacts />
      </PromotionDetailsSectionContainer>
    </Container>
  );
};

export default PromotionDetails;
