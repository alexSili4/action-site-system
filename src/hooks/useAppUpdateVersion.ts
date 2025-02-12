import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 12.02.2025 17:00');
  }, []);
};

export default useAppUpdateVersion;
