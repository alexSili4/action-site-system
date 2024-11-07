import { StatisticsSortTypesKeys } from '@/constants';
import getIsCreatedSortType from './getIsCreatedSortType';

const getSortType = (sortType: string): StatisticsSortTypesKeys => {
  const isCreatedSortType = getIsCreatedSortType(sortType);

  return isCreatedSortType
    ? StatisticsSortTypesKeys.desc
    : StatisticsSortTypesKeys.asc;
};

export default getSortType;
