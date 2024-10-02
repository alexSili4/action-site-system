import { FC } from 'react';
import {
  Container,
  BannerWrap,
  Title,
  InfoWrap,
} from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import PromotionPageBreadcrumbs from '@/components/PromotionPageBreadcrumbs';
import { PromotionDetailsState } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionGoBackLink from '@/components/PromotionGoBackLink';
import PromotionPrizes from '@/components/PromotionPrizes';
import PromotionFAQs from '@/components/PromotionFAQs';
import PromotionConditions from '@/components/PromotionConditions';
import PromotionWinners from '@/components/PromotionWinners';
import PromotionContacts from '@/components/PromotionContacts';

const PromotionDetails: FC = () => {
  // TODO delete promotion
  const promotion: { id: number; date: string } = {
    date: '08.08.24 - 25.09.24',
    id: 1,
  };

  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();

  const promotionCategoryState = state?.promotionCategory;
  const from = state?.from;

  const targetPromotionCategory =
    promotionCategoryState ??
    promotionCategorySQ ??
    PromotionsCategoriesKeys.active;

  // TODO: fix  promotionTitle
  return (
    <Container>
      <PromotionPageBreadcrumbs
        promotionCategory={targetPromotionCategory}
        promotionTitle='Дуже довга назва акції'
      />
      <BannerWrap>
        <PromotionGoBackLink from={from} />
        <InfoWrap>
          <PromotionPeriodLabel period={promotion.date} />
          <Title>дуже довга назва акції</Title>
        </InfoWrap>
      </BannerWrap>
      <PromotionConditions />
      <PromotionPrizes />
      <PromotionFAQs />
      <PromotionWinners />
      <PromotionContacts />
    </Container>
  );
};

export default PromotionDetails;
