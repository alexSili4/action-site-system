import { NumberOrNull, StringOrNull } from './types';

export interface ICity {
  name: string;
  coordinates: StringOrNull;
}

export interface IRegion {
  name: string;
}

export interface IShop {
  shop_num: number;
  name: string;
  street: string;
  geo_lat: StringOrNull;
  geo_long: StringOrNull;
  work_hours: StringOrNull;
  city: ICity;
  region: IRegion;
}

export type Shops = IShop[];

export type ActiveShopNum = NumberOrNull;
