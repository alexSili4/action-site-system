import { FC } from 'react';
import { Container, Content } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import { PromotionDetailsState } from '@/types/promotion.types';
import { useSetSearchParams, useTargetPromotionData } from '@/hooks';
import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  SearchParamsKeys,
} from '@/constants';
import { IProps } from './PromotionDetails.types';
import { getFileUrl, getPromotionBannerUrls, getPromotionDate } from '@/utils';
import PrizesWheelLogo from '@PromotionDetailsPageComponents/PrizesWheelLogo';
import PromotionDetailsSectionContainer from '@PromotionDetailsPageComponents/PromotionDetailsSectionContainer';
import PromotionPageBreadcrumbs from '@PromotionDetailsPageComponents/PromotionPageBreadcrumbs';
import PromotionBanner from '@PromotionDetailsPageComponents/PromotionBanner';
import PromotionConditions from '@PromotionDetailsPageComponents/PromotionConditions';
import PromotionPrizes from '@PromotionDetailsPageComponents/PromotionPrizes';
import PromotionPrizesBannerIcon from '@PromotionDetailsPageComponents/PromotionPrizesBannerIcon';
import PromotionFAQs from '@PromotionDetailsPageComponents/PromotionFAQs';
import PromotionWinners from '@PromotionDetailsPageComponents/PromotionWinners';
import PromotionContacts from '@PromotionDetailsPageComponents/PromotionContacts';

const PromotionDetails: FC<IProps> = ({
  faqs,
  otherPrizes,
  wheelPrizes,
  conditions,
  winners,
  shops,
}) => {
  const {
    dateFrom,
    dateTo,
    secondBannerMob,
    secondBannerDt,
    actionType,
    name,
    logoPartner,
  } = useTargetPromotionData();
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
  const logoPartnerUrl = getFileUrl(logoPartner);
  const showWheelLogo = actionType === 1 || actionType === 3;
  const shouldShowWinnersSection =
    Array.isArray(winners) && Boolean(winners.length);

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
            period={promotionDate}
            name={name}
            secondBannerDt={bannerDtUrl}
            secondBannerMob={bannerMobUrl}
            showWheelLogo={showWheelLogo}
          />
        </PromotionDetailsSectionContainer>
        <PromotionConditions conditions={conditions} />
        <PromotionPrizes
          logo={<PromotionPrizesBannerIcon src={logoPartnerUrl} />}
          prizes={otherPrizes}
          title='Призи головного розіграшу'
          description='Унікальний приз від головного партнера'
          showRegCodeLink={false}
          id={PromotionDetailsPageSections.prizes}
        />
        <PromotionPrizes
          logo={<PrizesWheelLogo />}
          prizes={wheelPrizes}
          title='Призи «Колеса подарунків»'
          description='Крутіть колесо та вигравайте подарунки'
        />
        <PromotionFAQs faqs={faqs} />
        {shouldShowWinnersSection && <PromotionWinners winners={winners} />}
        <PromotionContacts shops={shops} />
      </Content>
    </Container>
  );
};

export default PromotionDetails;
