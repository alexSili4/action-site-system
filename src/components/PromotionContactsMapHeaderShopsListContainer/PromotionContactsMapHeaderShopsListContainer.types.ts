import {
  ActiveMarkerId,
  InputChangeFunc,
  OnAnchorClickFunc,
  Shops,
} from '@/types/types';

export interface IProps {
  activeMarkerId: ActiveMarkerId;
  markers: Shops;
  isNationalPromotion: boolean;
  onInputChange: InputChangeFunc;
  onLinkClick: OnAnchorClickFunc;
}

export interface IStyledProps {
  isNationalPromotion: boolean;
}
