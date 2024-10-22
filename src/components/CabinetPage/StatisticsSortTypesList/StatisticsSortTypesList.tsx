import { FC } from 'react';
import { IProps } from './StatisticsSortTypesList.types';

const StatisticsSortTypesList: FC<IProps> = ({
  types,
  sortType,
  onSortTypeInputChange,
}) => {
  console.log(sortType);
  console.log(types);
  console.log(onSortTypeInputChange);

  return <div>StatisticsSortTypesList</div>;
};

export default StatisticsSortTypesList;
