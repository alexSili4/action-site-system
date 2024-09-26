import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  compactPadding?: boolean;
}

export interface IStyledProps {
  compactPadding: boolean;
}
