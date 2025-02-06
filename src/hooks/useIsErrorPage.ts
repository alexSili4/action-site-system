import { PagePaths } from '@/constants';
import { IUseIsErrorPage } from '@/types/hooks.types';
import { useLocation } from 'react-router-dom';

const useIsErrorPage = (): IUseIsErrorPage => {
  const { pathname } = useLocation();

  const isServiceUnavailablePage = pathname === PagePaths.serviceUnavailable;
  const pages = Object.values(PagePaths);
  const isNotFoundPage = pages.every((item) => String(item) !== pathname);
  const isErrorPage = isServiceUnavailablePage || isNotFoundPage;

  return { isServiceUnavailablePage, isNotFoundPage, isErrorPage };
};

export default useIsErrorPage;
