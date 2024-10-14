import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isTable?: boolean;
  paddingBottomMobile?: number;
  paddingTopMobile?: number;
  paddingBottomDesk?: number;
  paddingTopDesk?: number;
}

export interface IStyledProps {
  isTable: boolean;
  paddingBottomMobile: number;
  paddingTopMobile: number;
  paddingTopDesk: number;
  paddingBottomDesk: number;
}
