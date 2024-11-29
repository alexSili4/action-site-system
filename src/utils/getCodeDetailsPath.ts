import { PagePaths } from '@/constants';
import { NumberOrNull } from '@/types/types';

const getCodeDetailsPath = (id: NumberOrNull): string =>
  `${PagePaths.userCode}/${id}`;

export default getCodeDetailsPath;
