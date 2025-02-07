import { NumberOrNull, StringOrNull } from './types';

export type ShowType = 'base' | 'big';

export type GiftType = 'wheel' | 'present' | 'general';

export interface IImage {
  image: string;
}

export type Images = IImage[] | undefined[];

export interface IGift {
  name: string;
  partner_id: number;
  use_conditions: string;
  get_conditions: string;
  price: NumberOrNull;
  discount: NumberOrNull;
  images: Images;
  banner: StringOrNull;
  banner_mob: StringOrNull;
}

export interface IPartner {
  name: string;
  logo: string;
}

export interface IPrize {
  gift_type: GiftType;
  show_type: ShowType;
  gift: IGift;
  partner: IPartner | null;
}

export type Prizes = IPrize[];
