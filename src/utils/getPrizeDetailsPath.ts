import { PagePaths } from '@/constants';
import { NumberOrNull } from '@/types/types';

const getPrizeDetailsPath = (id: NumberOrNull): string =>
  `${PagePaths.userPrize}/${id}`;

export default getPrizeDetailsPath;
