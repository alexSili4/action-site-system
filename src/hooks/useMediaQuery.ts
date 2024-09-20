import { Func } from '@/types/types';
import { useSyncExternalStore } from 'react';

const useMediaQuery = (breakpoint: number) => {
  const query = `(min-width: ${breakpoint}px)`;

  const getSnapshot = () => window.matchMedia(query).matches;

  const subscribe = (onMediaQueryListChange: Func) => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', onMediaQueryListChange);

    return () =>
      mediaQueryList.removeEventListener('change', onMediaQueryListChange);
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useMediaQuery;
