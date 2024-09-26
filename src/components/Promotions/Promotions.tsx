import { FC, useState } from 'react';
import PromotionsFilter from '@/components/PromotionsFilter';
import { PromotionsCategoriesKeys } from '@/constants';

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
      <p>{promotionCategory}</p>
    </>
  );
};

export default Promotions;
