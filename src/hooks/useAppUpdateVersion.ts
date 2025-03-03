import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 03.03.2025');
  }, []);
};

export default useAppUpdateVersion;
