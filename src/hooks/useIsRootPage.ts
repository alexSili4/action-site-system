import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsRootPage = (): boolean => {
  const { pathname } = useLocation();

  const isRootPage = pathname === PagePaths.root;

  return isRootPage;
};

export default useIsRootPage;
