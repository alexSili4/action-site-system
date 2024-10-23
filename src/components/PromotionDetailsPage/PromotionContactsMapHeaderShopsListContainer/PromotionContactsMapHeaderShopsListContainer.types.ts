import { Shops } from '@/types/shop.types';
import {
  ActiveMarkerId,
  InputChangeFunc,
  OnAnchorClickFunc,
} from '@/types/types';

export interface IProps {
  activeMarkerId: ActiveMarkerId;
  shops: Shops;
  isNationalPromotion: boolean;
  onInputChange: InputChangeFunc;
  onLinkClick: OnAnchorClickFunc;
}

export interface IStyledProps {
  isNationalPromotion: boolean;
}
