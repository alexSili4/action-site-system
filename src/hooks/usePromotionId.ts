import { PagePaths } from '@/constants';
import { useParams } from 'react-router-dom';

const usePromotionId = (): string | undefined => {
  const promotionId = useParams()[PagePaths.dynamicParam];

  return promotionId;
};

export default usePromotionId;
