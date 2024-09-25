import { IUseModalWin } from '@/types/hooks.types';
import { DivClickEvent, Func } from '@/types/types';
import { useEffect } from 'react';

const useModalWin = (setModalWinState: Func): IUseModalWin => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e: DivClickEvent) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return { modalRoot, hideModalWin };
};

export default useModalWin;
