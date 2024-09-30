import { FC } from 'react';
import PromotionsFilter from '@/components/PromotionsFilter';
import { PromotionsCategoriesKeys, SearchParamsKeys } from '@/constants';
import PromotionsList from '@/components/PromotionsList';
import { useSetSearchParams } from '@/hooks';
import { InputChangeEvent } from '@/types/types';

const Promotions: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const promotionCategory =
    searchParams.get(SearchParamsKeys.category) ??
    PromotionsCategoriesKeys.previous;

  const categories = Object.values(PromotionsCategoriesKeys);

  const changePromotionCategory = (e: InputChangeEvent): void => {
    const { name: key, value } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  return (
    <>
      <PromotionsFilter
        promotionCategory={promotionCategory}
        categories={categories}
        changePromotionCategory={changePromotionCategory}
      />
      <PromotionsList promotionCategory={promotionCategory} />
    </>
  );
};

export default Promotions;
