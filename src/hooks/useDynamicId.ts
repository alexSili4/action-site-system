import { PagePaths } from '@/constants';
import { useParams } from 'react-router-dom';

const useDynamicId = (): string => {
  const promotionId = useParams()[PagePaths.dynamicParam] ?? '';

  return promotionId;
};

export default useDynamicId;
