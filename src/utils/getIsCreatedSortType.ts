import { StatisticsSortTypesKeys } from '@/constants';

const getIsCreatedSortType = (sortType: string): boolean =>
  sortType === StatisticsSortTypesKeys.desc;

export default getIsCreatedSortType;
