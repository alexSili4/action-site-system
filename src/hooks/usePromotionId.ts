import { PagePaths } from '@/constants';
import { useParams } from 'react-router-dom';

const usePromotionId = (): string => {
  const promotionId = useParams()[PagePaths.dynamicParam] ?? '';

  return promotionId;
};

export default usePromotionId;
