import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 18.02.2025');
  }, []);
};

export default useAppUpdateVersion;
