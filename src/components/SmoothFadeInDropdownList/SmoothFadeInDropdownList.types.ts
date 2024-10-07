import { ReactNode } from 'react';

export interface IProps {
  isVisible: boolean;
  children: ReactNode;
  zIndex?: number;
}

export interface IStyledProps {
  zIndex: number;
}
