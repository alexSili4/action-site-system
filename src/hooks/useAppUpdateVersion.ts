import { useEffect } from 'react';

const useAppUpdateVersion = () => {
  useEffect(() => {
    console.log('Build time:', __BUILD_TIME__);
  }, []);
};

export default useAppUpdateVersion;
