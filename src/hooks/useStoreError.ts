import { StringOrNull } from '@/types/types';
import { useEffect } from 'react';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';

const useStoreError = (error: StringOrNull): void => {
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    if (error) {
      navigate();
    }
  }, [error]);
};

export default useStoreError;
