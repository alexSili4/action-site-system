import { PromotionDetailsPageSections } from '@/constants';
import { BigPrizes } from '@/types/bigPrize.types';
import { Prizes } from '@/types/prize.types';
import { ReactNode } from 'react';

export interface IProps {
  prizes: Prizes;
  bigPrizes: BigPrizes;
  title: string;
  description: string;
  isShowRegCodeLink: boolean;
  logo?: ReactNode;
  showRegCodeLink?: boolean;
  id?: PromotionDetailsPageSections;
}
