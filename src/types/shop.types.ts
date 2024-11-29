import { NumberOrNull } from './types';

export interface ICity {
  name: string;
  coordinates: string;
}

export interface IRegion {
  name: string;
}

export interface IShop {
  shop_num: number;
  name: string;
  street: string;
  geo_lat: string;
  geo_long: string;
  work_hours: string;
  city: ICity;
  region: IRegion;
}

export type Shops = IShop[];

export type ActiveShopNum = NumberOrNull;

export type SetActiveShopFunc = (data: number) => void;
