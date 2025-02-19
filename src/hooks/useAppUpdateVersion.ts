import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Last update: 19.02.2025 18:00');
  }, []);
};

export default useAppUpdateVersion;
