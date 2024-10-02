import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isConditionsSection?: boolean;
}

export interface IStyledProps {
  isConditionsSection: boolean;
}
