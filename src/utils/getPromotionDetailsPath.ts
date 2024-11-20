import { PagePaths } from '@/constants';

const getPromotionDetailsPath = (id: number): string =>
  `${PagePaths.promotions}/${id}`;

export default getPromotionDetailsPath;
