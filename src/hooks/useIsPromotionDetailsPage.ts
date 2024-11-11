import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsPromotionDetailsPage = (): boolean => {
  const { pathname } = useLocation();
  const isPromotionDetailsPage = pathname.startsWith(
    PagePaths.promotionDetailsPageExample
  );

  return isPromotionDetailsPage;
};

export default useIsPromotionDetailsPage;
