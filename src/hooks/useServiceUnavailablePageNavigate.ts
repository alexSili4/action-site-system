import { PagePaths } from '@/constants';
import { IServiceUnavailableState } from '@/types/serviceUnavailableState.types';
import { SetBooleanFunc } from '@/types/types';
import { useLocation, useNavigate } from 'react-router-dom';

const useServiceUnavailablePageNavigate = (): SetBooleanFunc => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectToServiceUnavailablePage = (isError: boolean) => {
    const serviceUnavailableState: IServiceUnavailableState = {
      from: location,
      isError,
    };
    // TODO return
    navigate(PagePaths.serviceUnavailable, {
      state: serviceUnavailableState,
    });
  };

  return redirectToServiceUnavailablePage;
};

export default useServiceUnavailablePageNavigate;
