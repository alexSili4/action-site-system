import { Func } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  to: string;
  state?: object;
  action?: Func;
}
