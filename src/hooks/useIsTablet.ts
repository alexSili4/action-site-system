import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';

const useIsTablet = (): boolean => {
  const isDesktop = useMediaQuery(theme.breakpoints.tablet);

  return isDesktop;
};

export default useIsTablet;
