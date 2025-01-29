import { Prizes } from '@/types/prize.types';
import { ReactNode } from 'react';

export interface IProps {
  logo: ReactNode;
  prizes: Prizes;
  description: string;
}

export interface IStyledContainerProps {
  imageUrl: string;
  isLogo: boolean;
}

export interface IStyledImgWrapProps {
  isLogo: boolean;
}
