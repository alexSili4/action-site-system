import { translatedPromotionDetailsPageSections } from '@/constants';

const getTranslatedPromotionDetailsPageSectionName = (
  sortType: string
): string => {
  const entries = Object.entries(translatedPromotionDetailsPageSections);

  const targetEntry = entries.find((entry) => entry[0] === sortType);

  const translatedTitle = targetEntry ? targetEntry[1] : 'Невідома категорія';

  return translatedTitle;
};

export default getTranslatedPromotionDetailsPageSectionName;
