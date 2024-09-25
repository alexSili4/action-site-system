import { FC, useState } from 'react';
import PromotionsFilter from '@/components/PromotionsFilter';
import { PromotionsCategoriesKeys } from '@/constants';

const Promotions: FC = () => {
  const [promotionCategory, setPromotionCategory] = useState<string>(
    () => PromotionsCategoriesKeys.active
  );

  const isActiveCategory =
    promotionCategory === PromotionsCategoriesKeys.active;
  const isPreviousCategory =
    promotionCategory === PromotionsCategoriesKeys.previous;

  const changePromotionCategory = (category: string): void => {
    setPromotionCategory(category);
  };

  return (
    <>
      <PromotionsFilter
        isActiveCategory={isActiveCategory}
        isPreviousCategory={isPreviousCategory}
        changePromotionCategory={changePromotionCategory}
      />
      <p>{promotionCategory}</p>
    </>
  );
};

export default Promotions;
