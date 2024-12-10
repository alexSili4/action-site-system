import { ICabinetState } from '@/types/cabinet.types';
import { IUseCabinetStateProps } from '@/types/hooks.types';
import { useLocation } from 'react-router-dom';

const useCabinetState = (
  { isRedirectFromRegCodePage }: IUseCabinetStateProps = {
    isRedirectFromRegCodePage: false,
  }
): ICabinetState => {
  const location = useLocation();
  const cabinetState: ICabinetState = {
    from: location,
    isRedirectFromRegCodePage,
  };

  return cabinetState;
};

export default useCabinetState;
