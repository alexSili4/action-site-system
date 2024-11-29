import { StatisticsCategoriesKeys, StatisticsSortTypesKeys } from '@/constants';
import { NumberOrNull, StringOrNull } from './types';

export interface IUser {
  id: NumberOrNull;
  phone: NumberOrNull;
  name: StringOrNull;
  email: StringOrNull;
}

export type StatisticsCategoriesValues = StatisticsCategoriesKeys[];

export type TranslatedStatisticsCategoriesKeys = {
  [key in StatisticsCategoriesKeys]: string;
};

export type TranslatedStatisticsSortTypesKeys = {
  [key in StatisticsSortTypesKeys]: string;
};

export type StatisticsSortTypesValues = StatisticsSortTypesKeys[];
