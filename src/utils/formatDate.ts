import { generalSettings } from '@/constants';
import { IFormatDateProps } from '@/types/types';
import { format } from 'date-fns';

const formatDate = ({ date, dateFormat }: IFormatDateProps): string => {
  if (date) {
    const formattedDate = format(date, dateFormat);

    return formattedDate;
  } else {
    return generalSettings.defaultDataText;
  }
};

export default formatDate;
