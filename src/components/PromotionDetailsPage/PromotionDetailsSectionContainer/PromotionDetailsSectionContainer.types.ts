import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isConditionsSection?: boolean;
  marginTopMobile?: number;
  marginTopDesk?: number;
  isPrizesSection?: boolean;
}

export interface IStyledProps {
  isConditionsSection: boolean;
  marginTopMobile: number;
  marginTopDesk: number;
  isPrizesSection: boolean;
}
