import { ActiveShopNum, Shops } from '@/types/shop.types';
import { InputChangeFunc, OnAnchorClickFunc } from '@/types/types';

export interface IProps {
  activeShopNum: ActiveShopNum;
  shops: Shops;
  isNationalPromotion: boolean;
  onInputChange: InputChangeFunc;
  onLinkClick: OnAnchorClickFunc;
}

export interface IStyledProps {
  isNationalPromotion: boolean;
}
