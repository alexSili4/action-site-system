import { translatedStatisticsSortTypesKeys } from '@/constants';

const getTranslatedStatisticsSortType = (sortType: string): string => {
  const entries = Object.entries(translatedStatisticsSortTypesKeys);

  const targetEntry = entries.find((entry) => entry[0] === sortType);

  const translatedTitle = targetEntry ? targetEntry[1] : 'Невідомий тип';

  return translatedTitle;
};

export default getTranslatedStatisticsSortType;
