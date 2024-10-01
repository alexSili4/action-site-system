import { FC } from 'react';
import { Container, BannerWrap } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import PromotionPageBreadcrumbs from '@/components/PromotionPageBreadcrumbs';
import { PromotionDetailsState } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionGoBackLink from '@/components/PromotionGoBackLink';

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
        <div>
          <PromotionPeriodLabel period={promotion.date} />
          <p>дуже довга назва акції</p>
        </div>
      </BannerWrap>
    </Container>
  );
};

export default PromotionDetails;
