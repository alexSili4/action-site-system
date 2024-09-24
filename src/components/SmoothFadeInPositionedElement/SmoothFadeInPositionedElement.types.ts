import { ReactNode } from 'react';

export interface IProps extends IStyledProps {
  children: ReactNode;
}

export interface IStyledProps {
  top: number | 'auto';
  deskTop: number | 'auto';
  bottom: number | 'auto';
  deskBottom: number | 'auto';
  left: number | 'auto';
  deskLeft: number | 'auto';
  right: number | 'auto';
  deskRight: number | 'auto';
  width: number;
  height: number;
  deskWidth: number;
  deskHeight: number;
  isHiddenOnMobile: boolean;
}
