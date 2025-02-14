export type ShowType = 'base' | 'big';

export type GiftType = 'wheel' | 'present' | 'general';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IPartner {
  id: number;
  name: string;
  logo: string;
}

export interface IGift {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: null;
  discount: null;
  images: Images;
  banner: string;
  banner_mob: string;
  partner: IPartner;
}

export interface IBigPrize {
  gift_type: GiftType;
  show_type: ShowType;
  gift: IGift;
  sort_order: null;
}

export type BigPrizes = IBigPrize[];
