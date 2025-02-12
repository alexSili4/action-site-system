import { FC } from 'react';
import { List, ListItem } from './PromotionsCategories.styled';
import { IProps } from './PromotionsCategories.types';
import { getTranslatedPromotionsCategory } from '@/utils';
import { PromotionsCategoriesKeys } from '@/constants';
import { usePreviousPromotions } from '@/hooks';
// components
import PromotionsCategory from '@PromotionsPageComponents/PromotionsCategory';

const PromotionsCategories: FC<IProps> = ({
  categories,
  changePromotionCategory,
  promotionCategory,
}) => {
  const { isPreviousPromotions } = usePreviousPromotions();

  return (
    <List>
      {categories.map((category) => {
        const checked = category === promotionCategory;
        const title = getTranslatedPromotionsCategory(category);
        const isPreviousCategory =
          category === PromotionsCategoriesKeys.previous;
        const isHiddenCategory = isPreviousCategory && isPreviousPromotions;

        return (
          !isHiddenCategory && (
            <ListItem key={category}>
              <PromotionsCategory
                title={title}
                value={category}
                checked={checked}
                onChange={changePromotionCategory}
              />
            </ListItem>
          )
        );
      })}
    </List>
  );
};

export default PromotionsCategories;
