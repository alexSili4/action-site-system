import { Conditions } from '@/types/condition.types';
import { LegacyRef } from 'react';

export interface IStyledProps {
  bgImgUrl: string;
}

export interface IProps {
  conditions: Conditions;
  listRef: LegacyRef<HTMLUListElement>;
}
