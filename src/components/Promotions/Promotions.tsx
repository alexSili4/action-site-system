import { FC, useState } from 'react';
import PromotionsFilter from '@/components/PromotionsFilter';
import { PromotionsCategoriesKeys } from '@/constants';
import PromotionsList from '@/components/PromotionsList';

const Promotions: FC = () => {
  const [promotionCategory, setPromotionCategory] = useState<string>(
    () => PromotionsCategoriesKeys.active
  );

  const categories = Object.values(PromotionsCategoriesKeys);

  const changePromotionCategory = (category: string): void => {
    setPromotionCategory(category);
  };

  return (
    <>
      <PromotionsFilter
        promotionCategory={promotionCategory}
        categories={categories}
        changePromotionCategory={changePromotionCategory}
      />
      <PromotionsList />
    </>
  );
};

export default Promotions;
