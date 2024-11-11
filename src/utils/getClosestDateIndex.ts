import { WinnersByDates } from '@/types/winner.types';
import { closestTo } from 'date-fns';
import formatDate from './formatDate';
import { DateFormats } from '@/constants';

const getClosestDateIndex = (winners: WinnersByDates) => {
  const allDates = winners.map(({ date }) => date);
  const closestDate = closestTo(new Date(), allDates) ?? new Date();
  const closestDateIndex = winners.findIndex(
    ({ date }) =>
      formatDate({ date, dateFormat: DateFormats.origWinDate }) ===
      formatDate({ date: closestDate, dateFormat: DateFormats.origWinDate })
  );

  return closestDateIndex;
};

export default getClosestDateIndex;
