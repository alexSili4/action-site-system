import { Prizes } from '@/types/prize.types';
import { ReactNode } from 'react';

export interface IProps {
  logo: ReactNode;
  prizes: Prizes;
  description: string;
}

export interface IStyledProps {
  imageUrl: string;
}
