import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';

const useIsDesktop = (): boolean => {
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);

  return isDesktop;
};

export default useIsDesktop;
