import { generalSettings } from '@/constants';
import { Objects } from '@/types/types';

const getPromotionByCodeError = (error: Objects): string => {
  const messages = error.map((item) => {
    const isCustomError = typeof item === 'object' && 'message' in item;

    return isCustomError ? item.message : '';
  });

  const message = messages.join(generalSettings.regCodeErrSeparator);

  return message;
};

export default getPromotionByCodeError;
