import { DateFormats } from '@/constants';
import { formatDate } from '@/utils';

const getPromotionsDatePickerBtnLabel = (date: Date | null): string =>
  date
    ? formatDate({ date, dateFormat: DateFormats.generalDate })
    : 'Період дії';

export default getPromotionsDatePickerBtnLabel;
