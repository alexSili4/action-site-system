import { PromotionsCategoriesKeys } from '@/constants';
import { FC } from 'react';
import PromotionsCategoriesCheckbox from '@/components/PromotionsCategoriesCheckbox';
import { List, ListItem } from './PromotionsCategories.styled';
import { IProps } from './PromotionsCategories.types';
import { InputChangeEvent } from '@/types/types';

const PromotionsCategories: FC<IProps> = ({
  isActiveCategory,
  isPreviousCategory,
  changePromotionCategory,
}) => {
  const onPromotionsCategoriesCheckboxChange = (e: InputChangeEvent) => {
    changePromotionCategory(e.currentTarget.value);
  };

  return (
    <List>
      <ListItem>
        <PromotionsCategoriesCheckbox
          title='Активні акції'
          value={PromotionsCategoriesKeys.active}
          checked={isActiveCategory}
          onChange={onPromotionsCategoriesCheckboxChange}
        />
      </ListItem>
      <ListItem>
        <PromotionsCategoriesCheckbox
          title='Попередні акції'
          value={PromotionsCategoriesKeys.previous}
          checked={isPreviousCategory}
          onChange={onPromotionsCategoriesCheckboxChange}
        />
      </ListItem>
    </List>
  );
};

export default PromotionsCategories;
