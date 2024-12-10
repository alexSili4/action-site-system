import { Func } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  setModalWinState: Func;
  showModalWin: boolean;
  children: ReactNode;
}
