import { PagePaths } from '@/constants';
import { IServiceUnavailableState } from '@/types/serviceUnavailableState.types';
import {
  SetServiceUnavailableStateFunc,
  ISetServiceUnavailableStateFuncProps,
} from '@/types/types';
import { useLocation, useNavigate } from 'react-router-dom';

const useServiceUnavailablePageNavigate =
  (): SetServiceUnavailableStateFunc => {
    const location = useLocation();
    const navigate = useNavigate();

    const redirectToServiceUnavailablePage = ({
      isError,
      errorMessage,
    }: ISetServiceUnavailableStateFuncProps) => {
      const serviceUnavailableState: IServiceUnavailableState = {
        from: location,
        isError,
        errorMessage,
      };
      // TODO return
      navigate(PagePaths.serviceUnavailable, {
        state: serviceUnavailableState,
      });
    };

    return redirectToServiceUnavailablePage;
  };

export default useServiceUnavailablePageNavigate;
