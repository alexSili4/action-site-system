import { StatisticsCategoriesKeys, StatisticsSortTypesKeys } from '@/constants';

export interface IUser {
  id: number | null;
  phone: number | null;
  name: string | null;
  email: string | null;
}

export type StatisticsCategoriesValues = StatisticsCategoriesKeys[];

export type TranslatedStatisticsCategoriesKeys = {
  [key in StatisticsCategoriesKeys]: string;
};

export type TranslatedStatisticsSortTypesKeys = {
  [key in StatisticsSortTypesKeys]: string;
};

export type StatisticsSortTypesValues = StatisticsSortTypesKeys[];