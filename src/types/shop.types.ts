import { NumberOrNull, StringOrNull } from './types';

export interface ICity {
  id: number;
  region_id: number;
  name: string;
  coordinates: StringOrNull;
  status: 1;
}

export interface IRegion {
  id: number;
  name: string;
  status: 1;
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
  promo_shop_date_end: string;
  promo_shop_date_start: string;
}

export type Shops = IShop[];

export type ActiveShopNum = NumberOrNull;
