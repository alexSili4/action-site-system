import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsPromotionsPage = () => {
  const { pathname } = useLocation();
  const isPromotionsPage = pathname === PagePaths.promotions;

  return isPromotionsPage;
};

export default useIsPromotionsPage;
