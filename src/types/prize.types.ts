export interface IPartner {
  id: number;
  name: string;
  logo: string;
}

export type GiftType = 'wheel' | 'present' | 'general';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IGift {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: number;
  discount: null;
  images: Images;
  banner: null;
  banner_mob: string;
  partner: IPartner;
}

export interface ISlide {
  gift_type: GiftType;
  gift: IGift;
  sort_order: null;
}

export type Slides = ISlide[];

export type Mode = 'group';

export interface IPrize {
  partner: IPartner;
  slides: Slides;
  mode: Mode;
  sort_order: number;
}

export type Prizes = IPrize[];
