import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsErrorPage = (): boolean => {
  const { pathname } = useLocation();

  const isServiceUnavailablePage = pathname === PagePaths.serviceUnavailable;
  const pages = Object.values(PagePaths);
  const isNotFoundPage = pages.every((item) => String(item) !== pathname);
  const isErrorPage = isServiceUnavailablePage || isNotFoundPage;

  return isErrorPage;
};

export default useIsErrorPage;
