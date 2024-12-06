import { PagePaths } from '@/constants';
import { IServiceUnavailableState } from '@/types/serviceUnavailableState.types';
import { Func } from '@/types/types';
import { useLocation, useNavigate } from 'react-router-dom';

const useServiceUnavailablePageNavigate = (): Func => {
  const location = useLocation();
  const navigate = useNavigate();

  const serviceUnavailableState: IServiceUnavailableState = {
    from: location,
    isRedirect: true,
  };

  const redirectToServiceUnavailablePageOptions = {
    state: serviceUnavailableState,
  };

  const redirectToServiceUnavailablePage = () => {
    navigate(
      PagePaths.serviceUnavailable,
      redirectToServiceUnavailablePageOptions
    );
  };

  return redirectToServiceUnavailablePage;
};

export default useServiceUnavailablePageNavigate;
