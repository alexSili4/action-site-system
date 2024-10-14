import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isTable?: boolean;
  paddingBottom?: number;
  paddingTop?: number;
}

export interface IStyledProps {
  isTable: boolean;
  paddingBottom: number;
  paddingTop: number;
}
