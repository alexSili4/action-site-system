import { StatisticsCategoriesKeys } from '@/constants';

export interface IUser {
  id: number | null;
  phone: number | null;
  name: string | null;
  email: string | null;
}

export type StatisticsCategoriesValues = StatisticsCategoriesKeys[];
