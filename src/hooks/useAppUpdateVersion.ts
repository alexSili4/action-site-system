import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 25.02.2025');
  }, []);
};

export default useAppUpdateVersion;
