import { ReactNode } from 'react';

export interface IProps {
  settings: object;
  children: ReactNode;
  defaultChecked?: boolean;
}
