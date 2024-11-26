import { FC } from 'react';
import { IProps } from './StatisticsCategories.types';
import { List, ListItem } from './StatisticsCategories.styled';
import { getTranslatedStatisticsCategory } from '@/utils';
// components
import StatisticsCategory from '@CabinetPageComponents/StatisticsCategory';

const StatisticsCategories: FC<IProps> = ({
  categories,
  changeStatisticCategory,
  statisticCategory,
}) => {
  return (
    <List>
      {categories.map((category) => {
        const checked = category === statisticCategory;
        const title = getTranslatedStatisticsCategory(category);

        return (
          <ListItem key={category}>
            <StatisticsCategory
              title={title}
              value={category}
              checked={checked}
              onChange={changeStatisticCategory}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default StatisticsCategories;
