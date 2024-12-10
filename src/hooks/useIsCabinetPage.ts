import { PagePaths } from '@/constants';
import { useLocation } from 'react-router-dom';

const useIsCabinetPage = (): boolean => {
  const { pathname } = useLocation();

  const isCabinetPage = pathname === PagePaths.cabinet;

  return isCabinetPage;
};

export default useIsCabinetPage;
