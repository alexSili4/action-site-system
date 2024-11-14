import { IUseIsScrollingUp } from '@/types/hooks.types';
import { useEffect, useState } from 'react';

const useIsScrollingUp = (): IUseIsScrollingUp => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const isScrolling = lastScrollY !== 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { isScrollingUp, isScrolling };
};

export default useIsScrollingUp;
