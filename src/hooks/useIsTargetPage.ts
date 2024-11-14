import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsTargetPage = (pagePath: PagePaths): boolean => {
  const { pathname } = useLocation();
  const isTargetPage = pathname.startsWith(pagePath);

  return isTargetPage;
};

export default useIsTargetPage;
