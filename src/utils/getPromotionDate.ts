import { DateFormats } from '@/constants';
import formatDate from './formatDate';
import { IGetPromotionDateProps } from '@/types/promotion.types';

const getPromotionDate = ({
  dateFrom,
  dateTo,
}: IGetPromotionDateProps): string => {
  const promotionDateFrom = dateFrom && new Date(dateFrom * 1000);
  const promotionDateTo = dateTo && new Date(dateTo * 1000);

  const dateFromValue =
    promotionDateFrom &&
    formatDate({
      date: promotionDateFrom,
      dateFormat: DateFormats.promotionDate,
    });
  const dateToValue =
    promotionDateTo &&
    formatDate({
      date: promotionDateTo,
      dateFormat: DateFormats.promotionDate,
    });

  const date = `${dateFromValue} - ${dateToValue}`;

  return date;
};

export default getPromotionDate;
