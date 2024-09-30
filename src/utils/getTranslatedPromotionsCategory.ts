import { translatedPromotionsCategoriesKeys } from '@/constants';

const getTranslatedPromotionsCategory = (category: string): string => {
  const entries = Object.entries(translatedPromotionsCategoriesKeys);

  const targetEntry = entries.find((entry) => entry[0] === category);

  const translatedTitle = targetEntry ? targetEntry[1] : 'Невідомий тип';

  return translatedTitle;
};

export default getTranslatedPromotionsCategory;
