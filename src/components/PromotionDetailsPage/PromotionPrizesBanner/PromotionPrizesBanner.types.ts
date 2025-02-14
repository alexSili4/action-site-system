import { BigPrizes } from '@/types/bigPrize.types';
import { ReactNode } from 'react';

export interface IProps {
  logo: ReactNode;
  prizes: BigPrizes;
  description: string;
}

export interface IStyledContainerProps {
  imageUrl: string;
  imageMobUrl: string;
  isLogo: boolean;
}

export interface IStyledImgWrapProps {
  isLogo: boolean;
}
