import { IUseIsScrollingDown } from '@/types/hooks.types';
import { useEffect, useState } from 'react';

const useIsScrollingDown = (): IUseIsScrollingDown => {
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const isScrolling = lastScrollY !== 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { isScrollingDown, isScrolling };
};

export default useIsScrollingDown;
