import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 21.02.2025 15:30');
  }, []);
};

export default useAppUpdateVersion;
