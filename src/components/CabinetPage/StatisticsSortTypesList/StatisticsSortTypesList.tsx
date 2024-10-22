import { FC } from 'react';
import { IProps } from './StatisticsSortTypesList.types';
import { getTranslatedStatisticsSortType } from '@/utils';
import { Container, List, ListItem } from './StatisticsSortTypesList.styles';
import StatisticsSortType from '@CabinetPageComponents/StatisticsSortType';

const StatisticsSortTypesList: FC<IProps> = ({
  types,
  sortType,
  onSortTypeInputChange,
}) => {
  return (
    <Container>
      <List>
        {types.map((type) => {
          const checked = type === sortType;
          const title = getTranslatedStatisticsSortType(type);

          return (
            <ListItem key={type}>
              <StatisticsSortType
                value={type}
                title={title}
                checked={checked}
                onChange={onSortTypeInputChange}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default StatisticsSortTypesList;
