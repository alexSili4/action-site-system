import { translatedPromotionsSortTypesKeys } from '@/constants';

const getTranslatedPromotionsSortType = (sortType: string): string => {
  const entries = Object.entries(translatedPromotionsSortTypesKeys);

  const targetEntry = entries.find((entry) => entry[0] === sortType);

  const translatedTitle = targetEntry ? targetEntry[1] : 'Невідомий тип';

  return translatedTitle;
};

export default getTranslatedPromotionsSortType;
