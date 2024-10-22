import { translatedStatisticsCategoriesKeys } from '@/constants';

const getTranslatedStatisticsCategory = (category: string): string => {
  const entries = Object.entries(translatedStatisticsCategoriesKeys);

  const targetEntry = entries.find((entry) => entry[0] === category);

  const translatedTitle = targetEntry ? targetEntry[1] : 'Невідомий тип';

  return translatedTitle;
};

export default getTranslatedStatisticsCategory;
