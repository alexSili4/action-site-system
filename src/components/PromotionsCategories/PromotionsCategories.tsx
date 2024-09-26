import { FC } from 'react';
import PromotionsCategory from '@/components/PromotionsCategory';
import { List, ListItem } from './PromotionsCategories.styled';
import { IProps } from './PromotionsCategories.types';
import { InputChangeEvent } from '@/types/types';
import { getTranslatedPromotionsCategory } from '@/utils';

const PromotionsCategories: FC<IProps> = ({
  categories,
  changePromotionCategory,
  promotionCategory,
}) => {
  const onPromotionsCategoriesCheckboxChange = (e: InputChangeEvent) => {
    changePromotionCategory(e.currentTarget.value);
  };

  return (
    <List>
      {categories.map((category) => {
        const checked = category === promotionCategory;
        const title = getTranslatedPromotionsCategory(category);

        return (
          <ListItem key={category}>
            <PromotionsCategory
              title={title}
              value={category}
              checked={checked}
              onChange={onPromotionsCategoriesCheckboxChange}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionsCategories;
