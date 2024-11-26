import { FC } from 'react';
import { PromotionsCategoriesKeys } from '@/constants';
import { usePromotionCategory, useSetSearchParams } from '@/hooks';
import { InputChangeEvent } from '@/types/types';
// components
import PromotionsList from '@PromotionsPageComponents/PromotionsList';
import PromotionsFilter from '@PromotionsPageComponents/PromotionsFilter';

const Promotions: FC = () => {
  const { updateSearchParams } = useSetSearchParams();
  const promotionCategory = usePromotionCategory();

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
