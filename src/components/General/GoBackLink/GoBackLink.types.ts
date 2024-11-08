import { PageLocation } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  from: PageLocation | undefined;
  children: ReactNode;
}
