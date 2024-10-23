export interface ICity {
  id: number;
  name: string;
  region_id: number;
  status: number;
  coordinates: string;
}

export type Cities = ICity[];

export interface IGetLocationInfo {
  cities: Cities;
  cityId: number;
}

export type GetTargetLocation = ICity | undefined;

export interface IGetShowLocationsBtnTitle {
  showLocationsBtnTitle: string;
  isSelectedCity: boolean;
}
