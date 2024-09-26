import {
  PromotionsCategoriesKeys,
  translatedPromotionsCategoriesKeys,
} from '@/constants';

const getTranslatedPromotionsCategory = (
  category: PromotionsCategoriesKeys
): string => translatedPromotionsCategoriesKeys[category];

export default getTranslatedPromotionsCategory;
