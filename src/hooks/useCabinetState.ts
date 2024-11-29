import { ICabinetState } from '@/types/cabinet.types';
import { useLocation } from 'react-router-dom';

const useCabinetState = (): ICabinetState => {
  const location = useLocation();
  const cabinetState: ICabinetState = { from: location };

  return cabinetState;
};

export default useCabinetState;
