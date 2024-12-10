import { RegisterUnusedCodeState } from '@/types/code.types';
import { useLocation } from 'react-router-dom';

const useDefaultCodeId = () => {
  const { state }: RegisterUnusedCodeState = useLocation();
  const defaultCodeId = state?.defaultCodeId ?? null;

  return defaultCodeId;
};

export default useDefaultCodeId;
