export interface IPrize {
  id: number;
  name: string;
  partner_id: number;
  use_conditions: string;
  get_conditions: string;
  price: null;
  discount: null;
  images: { image: string }[];
}

export type Prizes = IPrize[];
