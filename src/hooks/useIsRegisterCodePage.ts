import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsRegisterCodePage = (): boolean => {
  const { pathname } = useLocation();

  const isRegisterCodePage = pathname === PagePaths.code;

  return isRegisterCodePage;
};

export default useIsRegisterCodePage;
