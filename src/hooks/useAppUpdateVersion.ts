import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 06.02.2025');
  }, []);
};

export default useAppUpdateVersion;
