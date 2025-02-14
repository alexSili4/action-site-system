import { NumberOrNull, StringOrNull } from './types';

export interface IPartner {
  id: number;
  name: string;
  logo: string;
}

export type GiftType = 'wheel' | 'present' | 'general';

export type ShowType = 'base' | 'big';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IGift {
  id: number;
  name: string;
  use_conditions: string;
  get_conditions: string;
  price: NumberOrNull;
  discount: NumberOrNull;
  images: Images;
  banner: StringOrNull;
  banner_mob: StringOrNull;
  partner: IPartner;
}

export interface ISlide {
  gift_type: GiftType;
  show_type: ShowType;
  gift: IGift;
  sort_order: NumberOrNull;
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
