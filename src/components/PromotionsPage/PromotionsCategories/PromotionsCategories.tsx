import { FC } from 'react';
import PromotionsCategory from '@PromotionsPageComponents/PromotionsCategory';
import { List, ListItem } from './PromotionsCategories.styled';
import { IProps } from './PromotionsCategories.types';
import { getTranslatedPromotionsCategory } from '@/utils';

const PromotionsCategories: FC<IProps> = ({
  categories,
  changePromotionCategory,
  promotionCategory,
}) => {
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
              onChange={changePromotionCategory}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PromotionsCategories;
