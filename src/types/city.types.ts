export interface ICity {
  id: number;
  name: string;
  region_id: number;
  status: number;
}

export type Cities = ICity[];
