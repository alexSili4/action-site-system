import { marksData } from '@/constants';
import { IMark } from '@/types/marks';

export const getMarksData = (marks: number): IMark => {
  const filteredMarksData = marksData.filter(({ number }) => number <= marks);
  const sortedMarksData = [...filteredMarksData].sort(
    ({ number: prevNumber }, { number: NextNumber }) => NextNumber - prevNumber
  );

  return sortedMarksData[0];
};

export default getMarksData;
