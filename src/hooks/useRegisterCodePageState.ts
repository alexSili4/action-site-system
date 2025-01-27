import { RegisterCodePageState } from '@/types/code.types';
import { IUseRegisterCodePageState } from '@/types/hooks.types';
import { useLocation } from 'react-router-dom';

const useRegisterCodePageState = (): IUseRegisterCodePageState => {
  const { state }: RegisterCodePageState = useLocation();

  const defaultCodeId = state?.defaultCodeId ?? null;
  const defaultPromotion = state?.defaultPromotion ?? null;

  return { defaultCodeId, defaultPromotion };
};

export default useRegisterCodePageState;
