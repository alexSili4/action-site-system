import { FC } from 'react';
import { Container, BannerWrap } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import PromotionPageBreadcrumbs from '@/components/PromotionPageBreadcrumbs';
import { PromotionDetailsState } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';

const PromotionDetails: FC = () => {
  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();

  const promotionCategoryState = state?.promotionCategory;

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
      <BannerWrap></BannerWrap>
    </Container>
  );
};

export default PromotionDetails;
