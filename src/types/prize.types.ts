export type ShowType = 'base' | 'big';

export interface IImage {
  image: string;
}

export type Images = IImage[];

export interface IGift {
  name: string;
  partner_id: number;
  use_conditions: string;
  get_conditions: string;
  price: number | null;
  discount: number | null;
  images: Images;
}

export interface IPartner {
  name: string;
  logo: string;
}

export interface IPrize {
  show_type: ShowType;
  gift: IGift;
  partner: IPartner;
}

export type Prizes = IPrize[];
